import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="py-20 md:py-28 scroll-mt-20">
      <div className="section-container">
        <Reveal direction="up" className="max-w-2xl mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            // {eyebrow}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
