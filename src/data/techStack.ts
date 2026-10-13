import {
  Database,
  LayoutTemplate,
  Network,
  Server,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface TechCategory {
  category: string;
  icon: LucideIcon;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    category: "Backend & APIs",
    icon: Server,
    items: ["Node.js", "TypeScript", "NestJS", "PHP", "Laravel", "Java", "REST", "gRPC"],
  },
  {
    category: "Arquitetura",
    icon: Network,
    items: [
      "Microsserviços",
      "Sistemas distribuídos",
      "Clean Architecture",
      "DDD",
      "SOLID",
      "SaaS multi-tenant",
    ],
  },
  {
    category: "Dados & Cache",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Redis", "TypeORM"],
  },
  {
    category: "Mensageria & Cloud",
    icon: Zap,
    items: ["RabbitMQ", "BullMQ", "AWS SQS", "AWS (EC2, ECS, S3, RDS, SNS)", "Docker"],
  },
  {
    category: "Frontend",
    icon: LayoutTemplate,
    items: [
      "React",
      "React Native",
      "Micro Frontends",
      "Module Federation",
      "Design System",
      "Storybook",
    ],
  },
  {
    category: "Qualidade & Segurança",
    icon: ShieldCheck,
    items: [
      "Jest",
      "Supertest",
      "React Testing Library",
      "GitHub Actions",
      "SonarCloud",
      "JWT",
      "OAuth2",
      "RBAC",
    ],
  },
];
