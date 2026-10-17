/**
 * Dados pessoais/profissionais centralizados do portfólio.
 */
export const profile = {
  name: "Gabriel Coimbra",
  role: "Engenheiro de Software · Backend",
  shortRole: "Backend",
  location: "Maranhão, Brasil",
  email: "gabrielfelipe.coimbra@gmail.com",

  // Formato internacional, somente dígitos (DDI + DDD + número).
  whatsappNumber: "5598970130666",

  linkedinUrl: "https://www.linkedin.com/in/gcoimbraa/",
  githubUrl: "https://github.com/Coimbra777",

  /** Ano do primeiro emprego na área — usado para calcular os anos de experiência. */
  careerStartYear: 2022,
  currentRole: "Engenheiro de Software",
  currentCompany: "Getrak",

  summary:
    "Engenheiro de Software com foco em backend e experiência full stack: APIs, microsserviços, integrações, mensageria e modernização de sistemas com Node.js, TypeScript e PHP.",

  /** Domínio público do site — usado em URL canônica e Open Graph. */
  siteUrl: "https://gcoimbra.dev.br",

  logoLabel: "gabriel.dev",
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

/** Anos de experiência profissional, contados a partir de `careerStartYear`. */
export const yearsOfExperience = new Date().getFullYear() - profile.careerStartYear;
