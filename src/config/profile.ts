/**
 * Dados pessoais/profissionais centralizados do portfólio.
 *
 * Edite os campos marcados com TODO antes de publicar o site.
 */
export const profile = {
  name: "Gabriel Coimbra",
  role: "Desenvolvedor Backend & Fullstack",
  shortRole: "Backend / Fullstack",
  location: "Brasil", // TODO: preencher cidade/estado reais
  email: "gabrielfelipe.coimbra@gmail.com",

  // TODO: substituir pelo número real em formato internacional (somente dígitos, com DDI + DDD).
  // Exemplo: "5511999999999" para +55 11 99999-9999
  whatsappNumber: "5598970130666",

  // TODO: substituir pelas URLs reais dos perfis.
  linkedinUrl: "https://www.linkedin.com/in/gcoimbraa/",
  githubUrl: "https://github.com/Coimbra777",

  summary:
    "Desenvolvedor com foco em backend e soluções digitais orientadas a resultado. Atuo criando APIs, integrações entre sistemas e automações que ajudam empresas a reduzir trabalho operacional e escalar processos com tecnologia.",

  logoLabel: "gabriel.dev",
  siteVersion: "v1.0.0",
} as const;

/** Monta a URL do WhatsApp com uma mensagem pré-preenchida. */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Mensagens padrão usadas nos CTAs de WhatsApp espalhados pela página. */
export const whatsappMessages = {
  budget: `Olá! Vim pelo seu portfólio e gostaria de solicitar um orçamento para um projeto.`,
  general: `Olá! Vim pelo seu portfólio e gostaria de conversar sobre um projeto.`,
  project: (projectName: string) =>
    `Olá! Vi o case "${projectName}" no seu portfólio e gostaria de conversar sobre algo parecido.`,
};

/** Monta a URL que abre o Gmail (compose) com destinatário/assunto pré-preenchidos. */
export function buildGmailComposeUrl(subject?: string, body?: string): string {
  const params = new URLSearchParams({ view: "cm", fs: "1", to: profile.email });
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export const gmailComposeUrl = buildGmailComposeUrl("Contato pelo portfólio");
