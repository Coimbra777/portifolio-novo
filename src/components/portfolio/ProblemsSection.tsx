import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/portfolio/Section";
import { painPoints } from "@/data/painPoints";

export function ProblemsSection() {
  return (
    <Section
      id="ajudar"
      eyebrow="Como posso ajudar"
      title={
        <>
          Problemas que eu <span className="gradient-text">transformo em solução</span>
        </>
      }
    >
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {painPoints.map((q, i) => (
          <Reveal key={q} direction="up" delay={i * 60}>
            <div className="glass-card rounded-xl p-5 flex items-start gap-3 hover-lift h-full">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
              <p className="text-sm md:text-base text-foreground/90">{q}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal direction="scale">
        <div className="glass-card rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10 opacity-40"
            style={{ background: "var(--gradient-hero)" }}
          />
          <p className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto leading-snug">
            Eu posso ajudar a transformar esses problemas em soluções digitais{" "}
            <span className="gradient-text-animated">simples, eficientes e escaláveis</span>.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
