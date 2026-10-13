# Portfólio — Gabriel Coimbra

Landing page pessoal de Gabriel Coimbra, desenvolvedor Backend/Fullstack com foco em APIs, integrações, automações, Docker, mensageria e sistemas sob medida para empresas.

## Stack utilizada

- **[TanStack Start](https://tanstack.com/start)** (SSR/roteamento/server functions) + **React 19** + **TypeScript**
- **Vite** como build tool
- **Tailwind CSS v4** para estilização
- **shadcn/ui** (Radix UI) como base de componentes de UI
- **lucide-react** para ícones
- **Nitro** (preset `node-server`) como servidor/build de produção — roda como um processo Node.js comum, compatível com o Railway

## Como instalar

Pré-requisito: Node.js 20+ (o `package.json` pede `>=22.12.0` para o TanStack Start, mas o projeto builda normalmente em Node 20; alguns avisos `EBADENGINE` podem aparecer e são inofensivos).

```bash
npm install
```

> O projeto também possui `bun.lock`. Se preferir usar [Bun](https://bun.sh), rode `bun install` no lugar de `npm install`.

## Como rodar em desenvolvimento

```bash
npm run dev
```

A aplicação sobe em modo dev com hot reload (Vite).

## Como gerar build de produção

```bash
npm run build
```

Para rodar o build de produção localmente (mesmo comando usado em produção/Railway):

```bash
npm run start
```

Para pré-visualizar com o servidor de preview do Vite:

```bash
npm run preview
```

Outros scripts úteis:

```bash
npm run lint     # ESLint
npm run format   # Prettier (escreve as correções)
```

## Estrutura de pastas

```
src/
├── config/
│   └── profile.ts          # Dados pessoais/profissionais centralizados (nome, contatos, etc.)
├── data/
│   ├── services.ts          # Serviços oferecidos
│   ├── techStack.ts         # Stack de tecnologias exibida na seção "Tecnologias"
│   ├── projects.ts          # Cases/projetos exibidos na seção "Projetos"
│   ├── processSteps.ts      # Etapas do processo de trabalho
│   ├── differentials.ts     # Diferenciais competitivos
│   ├── painPoints.ts        # Perguntas da seção "Como posso ajudar"
│   └── nav.ts                # Itens do menu de navegação
├── components/
│   ├── Reveal.tsx            # Animação de entrada ao rolar a página
│   ├── ui/                   # Componentes de UI (shadcn/ui)
│   └── portfolio/            # Componentes de seção da landing page
│       ├── Header.tsx
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ServicesSection.tsx
│       ├── TechStackSection.tsx
│       ├── ProjectsSection.tsx
│       ├── ProblemsSection.tsx
│       ├── ProcessSection.tsx
│       ├── DifferentialsSection.tsx
│       ├── ContactSection.tsx # CTA "Enviar e-mail" abre o Gmail (compose) em nova aba
│       ├── Footer.tsx         # Ícone de e-mail também abre o Gmail (compose)
│       └── Section.tsx       # Wrapper genérico de seção (título/eyebrow/subtítulo)
├── routes/
│   ├── __root.tsx             # Layout raiz, `<html>`, meta tags/SEO
│   └── index.tsx              # Página inicial (compõe os componentes de `portfolio/`)
└── styles.css                 # Estilos globais e tokens (cores, gradientes, animações)
```

## Principais seções da landing page

1. **Header** — navegação fixa + CTA de orçamento.
2. **Hero** — chamada principal, pilares de atuação (Backend/Fullstack/DevOps) e card de código ilustrativo.
3. **Sobre** — apresentação profissional resumida.
4. **Serviços** — o que é oferecido (APIs, sistemas sob medida, integrações, automação, consultoria, manutenção).
5. **Tecnologias** — stack técnica organizada por categoria.
6. **Projetos & Cases** — repositórios reais do GitHub, com categoria, problema, solução, descrição, destaques técnicos, tecnologias e status.
7. **Como posso ajudar** — perguntas que endereçam dores comuns de negócio.
8. **Processo** — etapas do fluxo de trabalho (diagnóstico → entrega).
9. **Diferenciais** — motivos para contratar.
10. **Contato** — CTA de WhatsApp (com mensagem pré-preenchida), CTA de "Enviar e-mail" que abre o Gmail (compose) já com o destinatário preenchido, além de LinkedIn e GitHub.
11. **Footer** — marca, links sociais e informações de rodapé.

## Como personalizar

### Dados pessoais e contato

Edite **`src/config/profile.ts`**:

| Campo | Descrição |
| --- | --- |
| `name` | Nome completo exibido no site |
| `role` / `shortRole` | Cargo/título profissional |
| `location` | Cidade/estado |
| `email` | E-mail de contato |
| `whatsappNumber` | Número do WhatsApp, formato internacional só com dígitos (ex.: `5511999999999`) |
| `linkedinUrl` | URL do perfil no LinkedIn |
| `githubUrl` | URL do perfil no GitHub |
| `careerStartYear` | Ano de início na área — calcula os "anos de experiência" exibidos no hero e no Sobre |
| `currentRole` / `currentCompany` | Cargo e empresa atuais, citados no hero e no Sobre |
| `summary` | Resumo profissional curto |

A foto do hero fica em `public/gabriel.webp` (recorte com fundo transparente).

As mensagens pré-preenchidas dos botões de WhatsApp ficam em `whatsappMessages` no mesmo arquivo.

### Projetos/cases

A seção "Projetos & Cases" exibe estes repositórios reais (nessa ordem, do mais forte tecnicamente ao mais simples):

1. [Analisador de Risco](https://github.com/Coimbra777/Analisador-de-Risco) — TypeScript, Vue, NestJS, Docker
2. [LaBella](https://github.com/Coimbra777/Labella_Site) — React, Laravel, Filament, MySQL, Redis, Docker
3. [Conta Certa](https://github.com/Coimbra777/conta-certa) — Laravel, PHP, TypeScript, MySQL, Docker
4. [DinDin](https://github.com/Coimbra777/DinDin) — Laravel, PHP, Docker, PHPUnit, Vite
5. [ChatBot com NodeJS](https://github.com/Coimbra777/ChatBot-com-NodeJS) — Node.js, JavaScript
6. [X3Solutions Website](https://github.com/Coimbra777/X3Solutions-website) — HTML, CSS, SCSS, JavaScript

Edite **`src/data/projects.ts`** para adicionar, remover ou reordenar projetos. Cada projeto segue a interface:

```ts
interface Project {
  name: string;
  category: string;       // ex.: "Sistema fullstack / análise documental" — vira badge no card
  problem: string;        // dor/contexto do cliente
  solution: string;       // resumo da solução entregue
  description: string;    // descrição técnica mais completa
  techs: string[];
  githubUrl: string;      // link do repositório
  demoUrl: string;        // deixe "" se não houver demo pública
  highlights: string[];   // pontos técnicos de destaque (sem métricas inventadas)
  status?: "Concluído" | "Em evolução" | "Estudo técnico" | "MVP"; // badge opcional no card
  type?: "Projeto real" | "Estudo técnico" | "Projeto autoral" | "Landing page";
}
```

- **GitHub/demo**: `githubUrl` sempre gera o botão "Ver repositório". `demoUrl` só gera o botão "Ver demo" se for preenchido — deixe `""` para omiti-lo.
- **Destaque/ordem**: os cards são renderizados na mesma ordem do array `projects` — coloque os projetos mais relevantes no início do array para que apareçam primeiro na seção.
- **Ícone do card**: escolhido automaticamente a partir de palavras-chave em `category` (função `getProjectIcon` em `ProjectsSection.tsx`); ajuste esse mapeamento se adicionar uma categoria muito diferente das existentes.
- Não adicione métricas não comprováveis (números de usuários, "% de melhoria", "em produção", "cliente real") — use `highlights` para pontos técnicos concretos.

### Demais seções

- Serviços: `src/data/services.ts`
- Stack de tecnologias: `src/data/techStack.ts`
- Etapas do processo: `src/data/processSteps.ts`
- Diferenciais: `src/data/differentials.ts`
- Perguntas de dor ("Como posso ajudar"): `src/data/painPoints.ts`
- Itens do menu: `src/data/nav.ts`

### SEO

Título, descrição e Open Graph ficam em `src/routes/__root.tsx`, dentro do `head()` da rota raiz.

### Contato por e-mail

O CTA "Enviar e-mail" (seção de contato e rodapé) abre o Gmail (compose) em uma nova aba, com o destinatário (`profile.email`) e um assunto padrão já preenchidos — o visitante escreve e envia pela própria conta dele, sem passar por nenhum servidor deste projeto. A URL é montada por `buildGmailComposeUrl`/`gmailComposeUrl` em `src/config/profile.ts`.

## Deploy no Railway

O projeto builda com Vite + Nitro (preset `node-server`, configurado em `vite.config.ts`), então o resultado do build (`.output/server/index.mjs`) roda como um processo Node.js comum — compatível com o runtime do Railway.

Comandos usados no deploy (já configurados em `railway.json`):

```bash
npm run build   # gera .output/
npm run start   # node .output/server/index.mjs
```

O servidor escuta na porta definida pela variável `PORT`, que o Railway injeta automaticamente (o preset `node-server` do Nitro já lê `process.env.PORT`) — nenhuma configuração extra é necessária para a porta.

O projeto não depende de nenhuma variável de ambiente/secret para funcionar (o contato por e-mail usa um link direto para o Gmail, sem servidor de e-mail próprio), então nenhuma variável precisa ser cadastrada no Railway.

### Checklist de deploy

- [ ] `npm run build` roda sem erros localmente
- [ ] `npm run start` sobe o servidor localmente a partir do build (`.output/server/index.mjs`)
- [ ] `profile.ts` revisado com dados reais (WhatsApp, LinkedIn, GitHub, e-mail, localização)
- [ ] `src/data/projects.ts` revisado — `demoUrl` preenchido para os projetos que tiverem demo pública
