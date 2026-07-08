import {
  Code2,
  MessageCircle,
  Rocket,
  Server,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface Differential {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const differentials: Differential[] = [
  {
    icon: Rocket,
    title: "Visão de negócio",
    desc: "Olho o problema antes do código — entrego solução, não só implementação.",
  },
  {
    icon: Workflow,
    title: "Automação & integração",
    desc: "Experiência prática conectando sistemas e eliminando trabalho manual.",
  },
  {
    icon: Server,
    title: "Backend sólido",
    desc: "Foco em APIs, arquitetura, filas, performance e escalabilidade.",
  },
  {
    icon: MessageCircle,
    title: "Comunicação clara",
    desc: "Alinhamento contínuo, entregas previsíveis e sem surpresas.",
  },
  {
    icon: Code2,
    title: "Código sustentável",
    desc: "Organização, testes e boas práticas para o projeto durar.",
  },
  {
    icon: ShieldCheck,
    title: "Performance & segurança",
    desc: "Preocupação real com carga, latência e proteção de dados.",
  },
];
