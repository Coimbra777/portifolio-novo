import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  children: ReactNode;
}

export function Section({ id, eyebrow, title, subtitle, align = "center", children }: SectionProps) {
  const isCentered = align === "center";

  return (
    <section id={id} className="py-20 md:py-28 scroll-mt-20">
      <div className="section-container">
        <Reveal
          direction="up"
          className={
            isCentered ? "max-w-2xl mx-auto mb-14 text-center" : "max-w-2xl mb-12"
          }
        >
          <span className="inline-flex items-center rounded-full border border-border bg-soft px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary mb-4">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p
              className={
                isCentered
                  ? "mt-4 text-lg text-muted-foreground leading-relaxed mx-auto"
                  : "mt-4 text-lg text-muted-foreground leading-relaxed"
              }
            >
              {subtitle}
            </p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
