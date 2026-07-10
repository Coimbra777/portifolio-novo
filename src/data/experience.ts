export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  highlights: string[];
  stack: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Desenvolvedor Backend",
    company: "Psicomanager",
    period: "Out 2025 – Atual",
    location: "Remoto, Brasil",
    highlights: [
      "Desenvolvimento e manutenção de APIs REST para módulos críticos da plataforma SaaS.",
      "Implementação de integrações entre serviços internos e soluções externas.",
      "Soluções assíncronas com RabbitMQ para processamento em background.",
      "Evolução da arquitetura da aplicação, com foco em modularização e escalabilidade.",
      "Investigação e resolução de problemas em ambiente de produção.",
    ],
    stack: [
      "Node.js",
      "NestJS",
      "PHP",
      "Laravel",
      "Phalcon",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "Docker",
      "AWS",
    ],
  },
  {
    role: "Desenvolvedor Fullstack",
    company: "D3T Inovação Tecnológica",
    period: "Jan 2024 – Out 2025",
    location: "Remoto, Brasil",
    highlights: [
      "Atuação em múltiplos projetos web: backend, frontend e integrações entre sistemas.",
      "APIs REST e funcionalidades backend com Node.js e Laravel.",
      "Interfaces modernas e responsivas com Vue.js e React.",
      "Estratégias de cache com Redis para reduzir carga em consultas recorrentes.",
      "Deploy, manutenção e suporte de aplicações em ambientes AWS.",
    ],
    stack: ["Node.js", "Laravel", "Vue.js", "React", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Docker", "AWS"],
  },
  {
    role: "Desenvolvedor PHP",
    company: "Leadtax",
    period: "Jan 2023 – Jan 2024",
    location: "Remoto, Brasil",
    highlights: [
      "Automação de processos fiscais, integração de dados e melhoria de fluxos operacionais.",
      "Rotinas para processamento e manipulação de documentos em PDF, XML e Excel.",
      "Soluções de coleta e extração de informações via Web Scraping com XPath.",
    ],
    stack: ["PHP", "Laravel", "PostgreSQL", "Docker", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    role: "Analista de Suporte / Desenvolvedor Web",
    company: "Prefeitura Municipal",
    period: "Jan 2022 – Dez 2023",
    location: "Presencial, Cajari – MA",
    highlights: [
      "Manutenção corretiva e evolutiva de aplicações web internas.",
      "Melhorias em funcionalidades existentes para atender novas demandas dos usuários.",
      "Suporte técnico a usuários e apoio na continuidade operacional dos sistemas.",
    ],
    stack: ["PHP", "JavaScript", "HTML", "CSS", "SQL"],
  },
];
