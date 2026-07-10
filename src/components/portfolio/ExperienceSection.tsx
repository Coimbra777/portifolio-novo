import { Briefcase, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/portfolio/Section";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <Section
      id="experiencia"
      eyebrow="Trajetória"
      title={
        <>
          Experiência <span className="gradient-text">profissional</span>
        </>
      }
      subtitle="Uma trajetória construída entre backend, integrações e sistemas web para diferentes contextos e escalas."
    >
      <div className="relative max-w-3xl mx-auto">
        <span className="timeline-line left-5 top-2 bottom-2" />
        <div className="space-y-8">
          {experience.map((e, i) => (
            <Reveal key={`${e.company}-${e.period}`} direction="up" delay={i * 100}>
              <div className="relative flex items-start gap-5">
                <span className="timeline-dot relative z-10 h-10 w-10 shrink-0">
                  <Briefcase className="h-4 w-4" />
                </span>
                <div className="relative glass-card rounded-2xl p-6 hover-lift flex-1">
                  <span className="dot-accent -top-3 -right-3 hidden sm:block" />
                  <div className="flex flex-wrap items-start justify-between gap-3 pr-8">
                    <div>
                      <h3 className="text-lg font-semibold">{e.role}</h3>
                      <p className="text-sm font-medium text-primary mt-0.5">
                        {e.companyUrl ? (
                          <a href={e.companyUrl} target="_blank" rel="noreferrer" className="hover:underline">
                            {e.company}
                          </a>
                        ) : (
                          e.company
                        )}
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-soft px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-primary">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {e.location}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {e.highlights.map((h) => (
                      <li key={h} className="text-sm text-foreground/80 flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border">
                    {e.stack.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] rounded-full border border-border bg-surface px-2.5 py-0.5 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
