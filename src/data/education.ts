export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  note?: string;
  /** Disciplinas relevantes, exibidas como tags. */
  subjects?: string[];
}

export const education: EducationItem[] = [
  {
    degree: "Bacharelado em Sistemas de Informação",
    institution: "Faculdade Hélio Rocha",
    period: "Ago 2021 – Jun 2025",
    note: "Concluído · média geral 9,3 · 3.000 horas, incluindo 300 horas de estágio supervisionado.",
    subjects: [
      "Estrutura de Dados",
      "Banco de Dados I e II",
      "Sistemas Distribuídos",
      "Engenharia de Software I e II",
      "Redes de Computadores",
      "Sistemas Operacionais",
      "Segurança e Auditoria de Sistemas",
      "Análise e Projeto de Sistemas",
    ],
  },
];
