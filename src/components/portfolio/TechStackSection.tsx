import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/portfolio/Section";
import { techStack } from "@/data/techStack";

export function TechStackSection() {
  return (
    <Section
      id="tech"
      number="05"
      label="Tecnologias"
      title="Stack"
      subtitle="Ferramentas escolhidas pela robustez, ecossistema e adequação ao problema — não por moda."
      className="bg-surface"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techStack.map((t, i) => (
          <Reveal key={t.category} direction="up" delay={i * 60} className="h-full">
            <div className="soft-card h-full p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-accent text-ink">
                  <t.icon className="h-5 w-5" />
                </span>
                <h3 className="underline-accent font-display text-xl font-bold">{t.category}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {t.items.map((it) => (
                  <span key={it} className="chip">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
