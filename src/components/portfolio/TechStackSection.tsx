import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/portfolio/Section";
import { techStack } from "@/data/techStack";

export function TechStackSection() {
  return (
    <Section
      id="tech"
      eyebrow="Stack"
      title={
        <>
          Tecnologias que <span className="gradient-text">domino</span>
        </>
      }
      subtitle="Ferramentas escolhidas pela robustez, ecossistema e adequação ao problema — não por moda."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {techStack.map((t, i) => (
          <Reveal key={t.category} direction="up" delay={i * 70}>
            <div className="glass-card rounded-2xl overflow-hidden group hover-lift h-full">
              <div
                className="h-1.5 w-full"
                style={{
                  background: i % 2 === 0 ? "var(--gradient-primary)" : "var(--accent)",
                }}
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface-elevated border border-border icon-pop">
                    <t.icon className="h-5 w-5 text-primary" />
                  </span>
                  <h3 className="font-semibold">{t.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.items.map((it) => (
                    <span
                      key={it}
                      className="font-mono text-xs rounded-full border border-border bg-surface px-2.5 py-1 text-muted-foreground hover:text-primary hover:border-primary/60 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
