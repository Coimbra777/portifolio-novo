export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  note?: string;
}

export const education: EducationItem[] = [
  {
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "Estácio",
    period: "Conclusão prevista para 2026",
  },
];
