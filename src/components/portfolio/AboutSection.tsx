import {
  Boxes,
  Cpu,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/portfolio/Section";
import {
  buildWhatsAppUrl,
  gmailComposeUrl,
  profile,
  whatsappMessages,
  yearsOfExperience,
} from "@/config/profile";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";

const aboutHighlights: { icon: LucideIcon; label: string }[] = [
  { icon: Cpu, label: "Backend, APIs REST e gRPC" },
  { icon: Network, label: "Microsserviços & sistemas distribuídos" },
  { icon: Workflow, label: "Mensageria & processamento assíncrono" },
  { icon: Database, label: "Modernização de sistemas legados" },
  { icon: Boxes, label: "AWS, Docker & CI/CD" },
];

const coreStack = [
  "Node.js",
  "TypeScript",
  "NestJS",
  "PHP",
  "Laravel",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "RabbitMQ",
  "Docker",
  "AWS",
  "React",
];

const stats = [
  { value: `${yearsOfExperience}+`, label: "anos de experiência" },
  { value: String(experience.length), label: "experiências profissionais" },
  { value: String(projects.length), label: "projetos no GitHub" },
];

const quickContacts = [
  { icon: Mail, value: profile.email, href: gmailComposeUrl },
  { icon: MessageCircle, value: "WhatsApp", href: buildWhatsAppUrl(whatsappMessages.general) },
  { icon: Linkedin, value: "/in/gcoimbraa", href: profile.linkedinUrl },
  { icon: Github, value: "@Coimbra777", href: profile.githubUrl },
];

export function AboutSection() {
  return (
    <Section id="sobre" number="02" label="Sobre" title="Olá">
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-start">
        <Reveal direction="up" className="min-w-0">
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              Sou <strong className="text-foreground font-semibold">{profile.name}</strong>,
              Engenheiro de Software com foco em backend e experiência full stack. Hoje atuo na{" "}
              <strong className="text-foreground font-semibold">{profile.currentCompany}</strong>,
              uma plataforma SaaS B2B multi-tenant de rastreamento veicular e gestão de frotas, com
              microsserviços em Node.js e TypeScript, micro frontends em React e modernização de
              sistemas legados.
            </p>
            <p>
              Antes, na Psicomanager, desenvolvi APIs REST e serviços gRPC com NestJS e Laravel e
              desacoplei integrações externas usando RabbitMQ — com idempotência, retries e Dead
              Letter Queue. Comecei em {profile.careerStartYear} e passei também pela D3T Inovação
              Tecnológica (fullstack), pela Leadtax (automação de processos fiscais) e por uma
              prefeitura no Maranhão.
            </p>
            <p>
              Meu diferencial é{" "}
              <strong className="text-foreground font-semibold">olhar além do código</strong>:
              entendo o problema, analiso o fluxo do negócio e proponho soluções técnicas
              sustentáveis, performáticas e fáceis de manter.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-5xl font-bold leading-none">
                    {s.value}
                    <span className="text-accent">.</span>
                  </span>
                  <span className="mt-2 block text-xs font-medium text-muted-foreground">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal direction="up" delay={100} className="min-w-0 space-y-10">
          <div>
            <h3 className="underline-accent font-display text-xl font-bold">Especialidades</h3>
            <ul className="mt-5 space-y-3">
              {aboutHighlights.map((i) => (
                <li key={i.label} className="flex items-center gap-3 text-sm font-medium">
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent text-ink">
                    <i.icon className="h-4 w-4" />
                  </span>
                  {i.label}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="underline-accent font-display text-xl font-bold">Stack principal</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {coreStack.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="underline-accent font-display text-xl font-bold">
              Vamos trabalhar juntos
            </h3>
            <ul className="mt-5 space-y-3">
              {quickContacts.map((c) => (
                <li key={c.value}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="circle-btn size-8">
                      <c.icon className="h-3.5 w-3.5" />
                    </span>
                    {c.value}
                  </a>
                </li>
              ))}
              <li className="inline-flex items-center gap-3 text-sm font-medium text-muted-foreground">
                <span className="inline-flex size-8 items-center justify-center rounded-full border-[1.5px] border-foreground text-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                </span>
                {profile.location} · atendimento remoto
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
