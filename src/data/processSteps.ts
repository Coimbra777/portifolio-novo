export interface ProcessStep {
  n: string;
  title: string;
  desc: string;
}

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Entendimento do problema, contexto do negócio e objetivos do projeto.",
  },
  {
    n: "02",
    title: "Planejamento",
    desc: "Definição da solução, tecnologias, escopo, prazos e prioridades.",
  },
  {
    n: "03",
    title: "Desenvolvimento",
    desc: "Implementação com boas práticas, organização de código e comunicação contínua.",
  },
  {
    n: "04",
    title: "Validação",
    desc: "Testes, ajustes, revisão com o cliente e garantia de funcionamento.",
  },
  {
    n: "05",
    title: "Entrega & evolução",
    desc: "Deploy, documentação, suporte inicial e melhorias futuras.",
  },
];
