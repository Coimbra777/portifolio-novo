import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/config/profile";

interface SectionProps {
  id: string;
  /** Número da seção ("02"), exibido gigante e vazado no fundo. */
  number: string;
  /** Rótulo da barra "Sobre ———— (>)" no topo da seção. */
  label: string;
  /** Título curto; recebe aspas e ponto final amarelos automaticamente. */
  title: string;
  subtitle?: string;
  /** Mostra a cópia vazada do título por trás (efeito "TABLE OF CONTENT"). */
  ghost?: boolean;
  className?: string;
  children: ReactNode;
}

export function SectionTitle({ title, ghost = false }: { title: string; ghost?: boolean }) {
  return (
    <div className="relative">
      {ghost && (
        <span
          aria-hidden
          className="ghost-text absolute -left-3 -top-3 hidden md:block font-display font-bold uppercase text-7xl leading-none whitespace-nowrap"
        >
          {title}.
        </span>
      )}
      <h2 className="relative text-5xl md:text-7xl uppercase leading-none">
        <span className="quote-mark mr-2 align-top text-[0.7em]">”</span>
        {title}
        <span className="text-accent">.</span>
      </h2>
    </div>
  );
}

/** Barra "Rótulo ———— (>)" usada no topo das seções. */
export function SectionBar({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="text-sm font-semibold">{label}</span>
      <span className="h-px flex-1 bg-foreground/70" />
      <span aria-hidden className="circle-btn size-8">
        <ChevronRight className="h-4 w-4" />
      </span>
    </div>
  );
}

/** Número gigante vazado + texto vertical lateral, comuns a todas as seções. */
export function SectionDecor({ number }: { number: string }) {
  return (
    <>
      <span
        aria-hidden
        className="outline-number absolute -left-4 -bottom-6 text-[10rem] md:text-[16rem]"
      >
        {number}
      </span>
      <span aria-hidden className="vertical-label absolute right-3 top-28 hidden lg:block">
        {profile.name} © {new Date().getFullYear()}
      </span>
    </>
  );
}

export function Section({
  id,
  number,
  label,
  title,
  subtitle,
  ghost = false,
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-20 md:py-28 scroll-mt-16 ${className}`}
    >
      <SectionDecor number={number} />
      <div className="section-container relative">
        <SectionBar label={label} />
        <Reveal direction="up" className="mb-14 max-w-3xl">
          <SectionTitle title={title} ghost={ghost} />
          {subtitle && (
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
