import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/portfolio/Section";
import { differentials } from "@/data/differentials";

export function DifferentialsSection() {
  return (
    <Section
      id="diferenciais"
      eyebrow="Diferenciais"
      title={
        <>
          Por que trabalhar <span className="gradient-text">comigo</span>
        </>
      }
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {differentials.map((d, i) => (
          <Reveal key={d.title} direction="up" delay={i * 70}>
            <div className="glass-card rounded-2xl p-6 group hover-lift hover:border-primary/60 h-full">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-surface-elevated border border-border mb-4 icon-pop">
                <d.icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="font-semibold mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
