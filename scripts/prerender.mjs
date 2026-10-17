// Gera a versão estática do site a partir do build de produção.
//
// Sobe o servidor do Nitro (.output/server/index.mjs) numa porta temporária,
// renderiza cada rota em ROUTES e grava o HTML em .output/public. O resultado
// (.output/public) roda em qualquer hospedagem estática gratuita, sem Node.
//
// Cada página recebe uma Content-Security-Policy em <meta>, com o hash SHA-256
// de cada script inline gerado neste build — assim nenhum script injetado
// (XSS) roda, sem precisar liberar 'unsafe-inline' para scripts.
//
// Uso: npm run build:static
import { spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const ROUTES = ["/"];
const PORT = 4321;
const OUT_DIR = ".output/public";

function buildCsp(html) {
  const inlineScripts = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)];
  const hashes = inlineScripts.map(
    ([, body]) => `'sha256-${createHash("sha256").update(body).digest("base64")}'`,
  );
  return [
    "default-src 'self'",
    `script-src 'self' ${hashes.join(" ")}`,
    // React/TanStack usam atributos style="" (animações, layout); risco baixo.
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data:",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'none'",
    "upgrade-insecure-requests",
  ].join("; ");
}

function injectCsp(html) {
  const meta = `<meta http-equiv="Content-Security-Policy" content="${buildCsp(html)}">`;
  // Logo após o <meta charset>, antes de qualquer script ou stylesheet.
  return html.replace(/(<meta charSet="utf-8"\/?>)/i, `$1${meta}`);
}

async function waitForServer(url, attempts = 50) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // servidor ainda subindo
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error(`Servidor não respondeu em ${url}`);
}

const server = spawn(process.execPath, [".output/server/index.mjs"], {
  env: { ...process.env, PORT: String(PORT), NITRO_PORT: String(PORT) },
  stdio: "inherit",
});

try {
  await waitForServer(`http://localhost:${PORT}/`);
  for (const route of ROUTES) {
    const res = await fetch(`http://localhost:${PORT}${route}`);
    if (!res.ok) throw new Error(`Falha ao renderizar ${route}: ${res.status}`);
    const html = injectCsp(await res.text());
    if (!html.includes("Content-Security-Policy")) {
      throw new Error(`Não foi possível injetar a CSP em ${route}`);
    }
    const file = join(OUT_DIR, route === "/" ? "index.html" : `${route}/index.html`);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html);
    console.log(`[prerender] ${route} -> ${file}`);
  }
} finally {
  server.kill();
}
