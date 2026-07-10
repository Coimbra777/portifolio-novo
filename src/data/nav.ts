export interface NavItem {
  href: string;
  label: string;
}

export const nav: NavItem[] = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  // { href: "#educacao", label: "Educação" }, // seção desativada temporariamente
  { href: "#servicos", label: "Serviços" },
  { href: "#tech", label: "Tecnologias" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];
