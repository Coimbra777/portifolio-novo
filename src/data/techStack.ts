import { Boxes, Database, FileCode2, Network, Server, Zap, type LucideIcon } from "lucide-react";

export interface TechCategory {
  category: string;
  icon: LucideIcon;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "NestJS", "TypeScript", "PHP", "Laravel", "Express"],
  },
  {
    category: "Frontend",
    icon: FileCode2,
    items: ["JavaScript", "TypeScript", "Vue.js"],
  },
  {
    category: "Banco de Dados",
    icon: Database,
    items: ["MySQL", "SQL Server", "MongoDB", "PostgreSQL"],
  },
  {
    category: "DevOps & Infra",
    icon: Boxes,
    items: ["Docker", "Nginx", "Git / GitHub", "CI/CD"],
  },
  {
    category: "Mensageria & Cache",
    icon: Zap,
    items: ["RabbitMQ", "Redis", "Filas assíncronas"],
  },
  {
    category: "APIs & Integrações",
    icon: Network,
    items: ["REST", "Webhooks", "OAuth / JWT", "RPA"],
  },
];
