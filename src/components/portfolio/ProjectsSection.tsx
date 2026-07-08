import {
  Bot,
  ExternalLink,
  FileSearch,
  Github,
  Globe,
  LayoutDashboard,
  MessageCircle,
  Sparkles,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/portfolio/Section";
import { projects, type Project } from "@/data/projects";
import { buildWhatsAppUrl, whatsappMessages } from "@/config/profile";

const categoryIcons: { match: string; icon: LucideIcon }[] = [
  { match: "análise documental", icon: FileSearch },
  { match: "painel administrativo", icon: LayoutDashboard },
  { match: "cobranças compartilhadas", icon: Wallet },
  { match: "finanças", icon: Wallet },
  { match: "automação", icon: Bot },
  { match: "landing page", icon: Globe },
];

function getProjectIcon(project: Project): LucideIcon {
  const category = project.category.toLowerCase();
  const found = categoryIcons.find((c) => category.includes(c.match));
  return found?.icon ?? Sparkles;
}

export function ProjectsSection() {
  return (
    <Section
      id="projetos"
      eyebrow="Projetos & Cases"
      title={
        <>
          Trabalhos que resolvem <span className="gradient-text">problemas reais</span>
        </>
      }
      subtitle="Uma amostra dos tipos de sistema, integração e arquitetura que já desenvolvi."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => {
          const Icon = getProjectIcon(p);
          return (
            <Reveal key={p.name} direction={i % 2 === 0 ? "right" : "left"} delay={(i % 2) * 80}>
              <article className="glass-card rounded-2xl p-7 flex flex-col group hover-lift shimmer-border hover:border-primary/60 h-full">
                <div className="flex items-start gap-3 mb-1">
                  <span
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg icon-pop"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-semibold">{p.name}</h3>
                      {p.status && (
                        <span className="shrink-0 font-mono text-[10px] uppercase tracking-wide rounded-full border border-primary/40 text-primary px-2 py-0.5">
                          {p.status}
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground mt-0.5">
                      {p.category}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3 mb-3">
                  <span className="text-primary font-semibold">Problema: </span>
                  {p.problem}
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  <span className="text-primary font-semibold">Solução: </span>
                  {p.solution}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {p.description}
                </p>
                <ul className="space-y-1.5 mb-4">
                  {p.highlights.map((h) => (
                    <li key={h} className="text-xs text-foreground/80 flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.techs.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] rounded-md border border-border bg-surface px-2 py-0.5 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium"
                  >
                    <Github className="h-3 w-3" /> Ver repositório
                  </a>
                  <a
                    href={buildWhatsAppUrl(whatsappMessages.project(p.name))}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline group/btn inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium"
                  >
                    <MessageCircle className="h-3 w-3" /> Conversar sobre projeto parecido
                  </a>
                  {p.demoUrl && (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium"
                    >
                      <ExternalLink className="h-3 w-3" /> Ver demo
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
