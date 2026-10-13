import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/portfolio/Section";
import { differentials } from "@/data/differentials";

export function DifferentialsSection() {
  return (
    <Section
      id="diferenciais"
      number="10"
      label="Diferenciais"
      title="Diferenciais"
      subtitle="Por que trabalhar comigo."
      className="bg-surface"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {differentials.map((d, i) => (
          <Reveal key={d.title} direction="up" delay={i * 60} className="h-full">
            <div className="soft-card h-full p-7">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent text-ink">
                <d.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">
                {d.title}
                <span className="text-accent">.</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
