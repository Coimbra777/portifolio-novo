import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/portfolio/Section";
import { processSteps } from "@/data/processSteps";

export function ProcessSection() {
  return (
    <Section
      id="processo"
      eyebrow="Processo"
      title={
        <>
          Como eu <span className="gradient-text">trabalho</span>
        </>
      }
      subtitle="Um fluxo direto, previsível e transparente — do primeiro papo até a entrega evolutiva."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        {processSteps.map((p, i) => (
          <Reveal key={p.n} direction="up" delay={i * 100}>
            <div className="glass-card rounded-2xl p-6 relative hover-lift h-full">
              <div className="font-mono text-3xl font-bold gradient-text mb-3">{p.n}</div>
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
