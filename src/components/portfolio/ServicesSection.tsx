import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/portfolio/Section";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <Section
      id="servicos"
      eyebrow="Serviços"
      title={
        <>
          O que eu <span className="gradient-text">entrego</span>
        </>
      }
      subtitle="Do diagnóstico à entrega: soluções técnicas sob medida para empresas e clientes que querem resultado."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <Reveal key={s.title} direction="up" delay={i * 80}>
            <div className="glass-card rounded-2xl p-6 group hover-lift shimmer-border hover:border-primary/60 h-full">
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4 icon-pop"
                style={{ background: "var(--gradient-primary)" }}
              >
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </span>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
