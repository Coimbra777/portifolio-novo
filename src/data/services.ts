import {
  Code2,
  Layers,
  Network,
  Settings2,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const services: Service[] = [
  {
    icon: Code2,
    title: "Desenvolvimento de APIs REST",
    desc: "Criação de APIs seguras, organizadas e escaláveis para sistemas web, aplicativos e integrações.",
  },
  {
    icon: Layers,
    title: "Sistemas web sob medida",
    desc: "Construção de sistemas para gestão, operação, controle interno e automação de processos.",
  },
  {
    icon: Network,
    title: "Integrações entre sistemas",
    desc: "ERPs, CRMs, gateways de pagamento, webhooks, plataformas externas e serviços de terceiros.",
  },
  {
    icon: Workflow,
    title: "Automação de processos",
    desc: "Transformação de tarefas manuais e repetitivas em fluxos automatizados, reduzindo erros.",
  },
  {
    icon: ShieldCheck,
    title: "Consultoria técnica backend",
    desc: "Análise de arquitetura, performance, banco de dados, filas, Docker, APIs e boas práticas.",
  },
  {
    icon: Settings2,
    title: "Manutenção e evolução",
    desc: "Correção de bugs, melhorias de performance, refatorações e modernização de sistemas.",
  },
];
