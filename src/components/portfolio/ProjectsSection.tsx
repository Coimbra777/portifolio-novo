import { ExternalLink, Github, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/portfolio/Section";
import { projects } from "@/data/projects";
import { buildWhatsAppUrl, whatsappMessages } from "@/config/profile";

export function ProjectsSection() {
  return (
    <Section
      id="projetos"
      number="07"
      label="Projetos & Cases"
      title="Projetos"
      ghost
      subtitle="Trabalhos que resolvem problemas reais — uma amostra dos tipos de sistema, integração e arquitetura que já desenvolvi."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.name} direction="up" delay={(i % 2) * 80} className="h-full">
            <article className="soft-card relative flex h-full flex-col overflow-hidden p-7 md:p-8">
              <span
                aria-hidden
                className="outline-number absolute -right-2 -top-3 text-[7rem] opacity-[0.12]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative pr-20">
                <p className="text-xs font-medium italic text-muted-foreground">{p.category}</p>
                <h3 className="mt-1 font-display text-3xl font-bold leading-tight">
                  {p.name}
                  <span className="text-accent">.</span>
                </h3>
                {p.status && (
                  <span className="mt-3 inline-flex rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink">
                    {p.status}
                  </span>
                )}
              </div>

              <dl className="mt-6 grid gap-4 text-sm">
                <div>
                  <dt className="underline-accent font-display text-base font-bold">Problema</dt>
                  <dd className="mt-1.5 text-foreground/85">{p.problem}</dd>
                </div>
                <div>
                  <dt className="underline-accent font-display text-base font-bold">Solução</dt>
                  <dd className="mt-1.5 text-foreground/85">{p.solution}</dd>
                </div>
              </dl>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

              <ul className="mt-4 space-y-1.5">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <span className="mt-2 h-1 w-3 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.techs.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pill btn-ghost px-4 py-2 text-xs"
                >
                  <Github className="h-3.5 w-3.5" /> Repositório
                </a>
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-pill btn-yellow px-4 py-2 text-xs"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Demo
                  </a>
                )}
                <a
                  href={buildWhatsAppUrl(whatsappMessages.project(p.name))}
                  target="_blank"
                  rel="noreferrer"
                  className="group ml-auto inline-flex items-center gap-2 text-xs font-semibold"
                >
                  Projeto parecido?
                  <span className="circle-btn size-8">
                    <MessageCircle className="h-3.5 w-3.5" />
                  </span>
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
