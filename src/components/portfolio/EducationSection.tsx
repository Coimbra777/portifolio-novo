import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/portfolio/Section";
import { education } from "@/data/education";

export function EducationSection() {
  return (
    <Section id="educacao" eyebrow="Formação" title="Educação">
      <div className="max-w-2xl mx-auto space-y-4">
        {education.map((e) => (
          <Reveal key={e.degree} direction="up">
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4 hover-lift">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-soft text-primary">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold">{e.degree}</h3>
                <p className="text-sm text-primary font-medium mt-0.5">{e.institution}</p>
                <p className="text-xs text-muted-foreground mt-1">{e.period}</p>
                {e.note && <p className="text-sm text-muted-foreground mt-2">{e.note}</p>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
