import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/portfolio/Section";
import { education } from "@/data/education";

export function EducationSection() {
  return (
    <Section id="educacao" number="06" label="Formação" title="Formação">
      <div className="space-y-6">
        {education.map((e) => (
          <Reveal key={e.degree} direction="up">
            <article className="soft-card grid gap-8 p-7 md:grid-cols-[1fr_1.1fr] md:p-10">
              <div className="flex items-start gap-5">
                <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-ink">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs italic text-muted-foreground">{e.period}</p>
                  <h3 className="mt-1 font-display text-2xl font-bold leading-tight">
                    {e.degree}
                    <span className="text-accent">.</span>
                  </h3>
                  <p className="mt-1 font-semibold">{e.institution}</p>
                  {e.note && (
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.note}</p>
                  )}
                </div>
              </div>
              {e.subjects && (
                <div>
                  <h4 className="underline-accent font-display text-lg font-bold">
                    Disciplinas relevantes
                  </h4>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {e.subjects.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
