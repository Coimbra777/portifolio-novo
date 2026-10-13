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
    role: "Engenheiro de Software",
    company: "Getrak",
    period: "Jul 2026 – Atual",
    location: "Remoto, Brasil",
    highlights: [
      "Plataforma SaaS B2B multi-tenant de rastreamento veicular e gestão de frotas, em ecossistema distribuído.",
      "Microsserviços com Node.js e TypeScript seguindo Clean Architecture, incluindo integrações serviço-a-serviço.",
      "Micro frontends em React com Webpack Module Federation e evolução do Design System próprio (Storybook, i18n).",
      "Controle de acesso (RBAC) de ponta a ponta: microsserviço, SDK interno, contexto do usuário, rotas e menus.",
      "Modernização gradual de legado PHP e Java, testes automatizados, code review e CI/CD.",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "React",
      "React Native",
      "Module Federation",
      "TypeORM",
      "MySQL",
      "Jest",
      "React Testing Library",
      "Storybook",
      "GitHub Actions",
      "SonarCloud",
    ],
  },
  {
    role: "Engenheiro de Software",
    company: "Psicomanager",
    period: "Out 2025 – Jul 2026",
    location: "Remoto, Brasil",
    highlights: [
      "APIs REST e serviços gRPC para uma plataforma SaaS, com Node.js, NestJS, PHP e Laravel.",
      "Desacoplamento de integrações externas com RabbitMQ: idempotência, retries com backoff, DLQ e ACK explícito.",
      "Microsserviços com DDD, Clean Architecture e SOLID; jobs e processamento assíncrono.",
      "Troubleshooting e resolução de incidentes em produção, code review e testes automatizados.",
    ],
    stack: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "PHP",
      "Laravel",
      "gRPC",
      "RabbitMQ",
      "Redis",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Docker",
      "AWS",
      "Jest",
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
    stack: [
      "Node.js",
      "Laravel",
      "Vue.js",
      "React",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS",
    ],
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
