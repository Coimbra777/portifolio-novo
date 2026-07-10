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
      <div className="relative max-w-2xl mx-auto">
        <span className="timeline-line left-5 top-2 bottom-2" />
        <div className="space-y-8">
          {processSteps.map((p, i) => (
            <Reveal key={p.n} direction="up" delay={i * 100}>
              <div className="relative flex items-start gap-5">
                <span className="timeline-dot relative z-10 h-10 w-10 shrink-0 font-mono text-sm font-bold">
                  {p.n}
                </span>
                <div className="glass-card rounded-2xl p-6 hover-lift flex-1">
                  <h3 className="font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
