export interface Project {
  name: string;
  problem: string;
  solution: string;
  description: string;
  techs: string[];
  /** TODO: preencher com a URL real do repositório (deixe "" se o código for privado). */
  githubUrl: string;
  /** TODO: preencher com a URL real de demonstração (deixe "" se não houver demo pública). */
  demoUrl: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    name: "Sistema de gestão com auditoria assíncrona",
    problem:
      "Empresa precisava rastrear todas as ações críticas do sistema, mas o registro de auditoria manual gerava inconsistência e não escalava.",
    solution:
      "Camada de auditoria assíncrona que captura e persiste eventos de domínio sem impactar o tempo de resposta da API principal.",
    description:
      "Backend modular em NestJS com autenticação, CRUDs completos e um pipeline de auditoria: cada ação relevante é publicada como evento no RabbitMQ e consumida por um worker que grava o histórico no MongoDB, mantendo o SQL Server como banco transacional principal.",
    techs: ["NestJS", "TypeORM", "SQL Server", "RabbitMQ", "MongoDB", "Docker"],
    githubUrl: "",
    demoUrl: "",
    highlights: [
      "Auditoria desacoplada da API principal via mensageria (RabbitMQ)",
      "Persistência híbrida: SQL Server para dados transacionais e MongoDB para histórico de eventos",
      "Ambiente containerizado com Docker para desenvolvimento e deploy",
    ],
  },
  {
    name: "Analisador de risco de fornecedores",
    problem:
      "Análise de documentos de fornecedores era feita manualmente, tornando o processo lento e sujeito a erros de classificação.",
    solution:
      "Sistema que recebe upload de PDFs, extrai o texto automaticamente e aplica regras de negócio para classificar o risco de cada fornecedor.",
    description:
      "Aplicação fullstack com cadastro de empresas, upload de documentos em PDF, extração de texto e um motor de classificação de risco baseado em regras configuráveis, com painel para consulta e acompanhamento pelo time responsável.",
    techs: ["NestJS", "Vue.js", "MySQL", "Docker", "JWT"],
    githubUrl: "",
    demoUrl: "",
    highlights: [
      "Extração automática de texto de documentos PDF enviados pelo usuário",
      "Motor de classificação de risco por regras de negócio",
      "Autenticação e controle de acesso com JWT",
    ],
  },
  {
    name: "API de chamados e usuários",
    problem:
      "Múltiplos clientes precisavam de uma API de chamados confiável, testável e com documentação clara para integração.",
    solution:
      "API REST organizada em camadas, com cobertura de testes automatizados e contratos de endpoint bem definidos.",
    description:
      "API para abertura, acompanhamento e gestão de chamados/tickets, construída com Express e TypeScript, usando Prisma como ORM e suíte de testes automatizados (Jest + Supertest) cobrindo os principais fluxos e regras de validação.",
    techs: ["Node.js", "Express", "TypeScript", "Prisma", "Jest", "Supertest", "Docker"],
    githubUrl: "",
    demoUrl: "",
    highlights: [
      "Testes automatizados de integração com Jest e Supertest",
      "Modelagem de dados e migrations com Prisma",
      "Deploy containerizado com Docker",
    ],
  },
  {
    name: "Gateway com Nginx e microsserviços",
    problem:
      "Múltiplas aplicações precisavam compartilhar um único ponto de entrada seguro, sem expor cada serviço individualmente.",
    solution:
      "Proxy reverso com Nginx orquestrando o tráfego entre aplicações Laravel e NestJS, isoladas em redes internas do Docker.",
    description:
      "Ambiente com Nginx como proxy reverso na frente de aplicações Laravel e NestJS, orquestrado via Docker Compose, com redes internas isoladas e Redis para cache compartilhado entre os serviços.",
    techs: ["Nginx", "Docker", "Laravel", "NestJS", "MySQL", "Redis"],
    githubUrl: "",
    demoUrl: "",
    highlights: [
      "Proxy reverso único para múltiplas aplicações",
      "Isolamento de rede entre serviços via Docker Compose",
      "Cache compartilhado com Redis",
    ],
  },
];
