export interface Project {
  name: string;
  category: string;
  problem: string;
  solution: string;
  description: string;
  techs: string[];
  githubUrl: string;
  /** Deixe "" se não houver demo pública — o botão de demo some automaticamente. */
  demoUrl: string;
  highlights: string[];
  status?: "Concluído" | "Em evolução" | "Estudo técnico" | "MVP";
  type?: "Projeto real" | "Estudo técnico" | "Projeto autoral" | "Landing page";
}

export const projects: Project[] = [
  {
    name: "Analisador de Risco",
    category: "Sistema fullstack / análise documental",
    problem:
      "Empresas precisam avaliar documentos de fornecedores de forma mais organizada, reduzindo análise manual e centralizando informações relevantes.",
    solution:
      "Aplicação com fluxo de cadastro, upload de documentos, processamento e apresentação do resultado da análise de risco.",
    description:
      "Sistema fullstack para análise de risco de fornecedores a partir de documentos PDF. O projeto possui backend, frontend, upload de arquivos, extração de informações e classificação de risco.",
    techs: ["TypeScript", "Vue", "NestJS", "Docker"],
    githubUrl: "https://github.com/Coimbra777/Analisador-de-Risco",
    demoUrl: "",
    highlights: [
      "Upload e processamento de documentos",
      "Separação entre backend e frontend",
      "Fluxo voltado para análise de risco",
      "Boa base para evoluir com IA, regras de negócio e integrações",
    ],
    status: "MVP",
    type: "Projeto autoral",
  },
  {
    name: "LaBella",
    category: "Sistema fullstack / vitrine com painel administrativo",
    problem:
      "Negócios precisam de uma presença digital profissional com painel administrativo para gerenciar informações sem depender diretamente de alterações no código.",
    solution:
      "Frontend em React consumindo uma API Laravel, com painel administrativo em Filament, banco MySQL, Redis e ambiente Docker.",
    description:
      "Monorepo com vitrine em React e API Laravel com Filament, voltado para apresentação e gestão de conteúdo/produtos.",
    techs: ["React", "Vite", "TanStack", "Laravel", "Filament", "MySQL", "Redis", "Docker"],
    githubUrl: "https://github.com/Coimbra777/Labella_Site",
    demoUrl: "",
    highlights: [
      "Monorepo com frontend e backend",
      "API REST com Laravel",
      "Painel administrativo com Filament",
      "Ambiente com Docker",
      "Separação clara entre vitrine e gestão",
    ],
    status: "MVP",
    type: "Projeto real",
  },
  {
    name: "Conta Certa",
    category: "Sistema financeiro / cobranças compartilhadas",
    problem:
      "Dividir cobranças em grupo pode gerar confusão, falta de rastreabilidade e dificuldade para acompanhar pagamentos.",
    solution:
      "Aplicação para organizar cobranças compartilhadas, facilitar o controle dos participantes e estruturar o fluxo de cobrança via Pix.",
    description:
      "Sistema para organizar cobranças compartilhadas via Pix, com backend Laravel e frontend separado.",
    techs: ["Laravel", "PHP", "TypeScript", "MySQL", "Docker"],
    githubUrl: "https://github.com/Coimbra777/conta-certa",
    demoUrl: "",
    highlights: [
      "Fluxo de cobranças compartilhadas via Pix",
      "Estrutura backend e frontend",
      "Ambiente Docker",
      "Documentação auxiliar",
      "Testes e build documentados no README",
    ],
    status: "MVP",
    type: "Projeto autoral",
  },
  {
    name: "DinDin",
    category: "Finanças pessoais",
    problem:
      "Usuários precisam controlar categorias, transações e informações financeiras de forma organizada.",
    solution:
      "Sistema web para gerenciamento financeiro com ambiente Docker, migrations, seeders e estrutura de testes.",
    description:
      "Aplicação de finanças pessoais desenvolvida com Laravel, Docker e estrutura preparada para testes e seed de dados de demonstração.",
    techs: ["Laravel", "PHP", "Docker", "PHPUnit", "Vite", "MySQL"],
    githubUrl: "https://github.com/Coimbra777/DinDin",
    demoUrl: "",
    highlights: [
      "Aplicação de finanças pessoais",
      "Ambiente Docker",
      "Migrations e seeders",
      "Testes com PHPUnit",
      "Estrutura Laravel organizada",
    ],
    status: "MVP",
    type: "Projeto autoral",
  },
  {
    name: "ChatBot com NodeJS",
    category: "Automação / chatbot",
    problem:
      "Atendimentos repetitivos podem ser automatizados para reduzir trabalho manual e melhorar a primeira resposta ao usuário.",
    solution:
      "Script em Node.js com lógica de chatbot, servindo como base para automações de atendimento e integrações futuras.",
    description:
      "Projeto em JavaScript/Node.js para simular ou implementar interações automatizadas via chatbot.",
    techs: ["Node.js", "JavaScript"],
    githubUrl: "https://github.com/Coimbra777/ChatBot-com-NodeJS",
    demoUrl: "",
    highlights: [
      "Lógica de chatbot",
      "Automação de atendimento",
      "Projeto simples e direto",
      "Boa base para evolução com APIs, WhatsApp, filas ou IA",
    ],
    status: "Estudo técnico",
    type: "Estudo técnico",
  },
  {
    name: "X3Solutions Website",
    category: "Landing page / site institucional",
    problem:
      "Pequenas empresas e projetos precisam de uma página institucional clara para apresentar serviços, posicionamento e canais de contato.",
    solution: "Website estático com estrutura visual para comunicação comercial e presença online.",
    description:
      "Site institucional desenvolvido com HTML, CSS, SCSS e JavaScript, focado em presença digital e apresentação comercial.",
    techs: ["HTML", "CSS", "SCSS", "JavaScript"],
    githubUrl: "https://github.com/Coimbra777/X3Solutions-website",
    demoUrl: "",
    highlights: [
      "Site institucional",
      "Layout voltado para apresentação comercial",
      "Estrutura simples e objetiva",
      "Boa base para landing pages de serviços",
    ],
    status: "Concluído",
    type: "Landing page",
  },
];
