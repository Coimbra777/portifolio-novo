import { ArrowRight, ChevronRight } from "lucide-react";
import { profile, yearsOfExperience } from "@/config/profile";
import { SectionDecor } from "@/components/portfolio/Section";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32 border-b border-border">
      <SectionDecor number="01" />

      <div className="section-container relative grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-6 items-end">
        <div className="min-w-0 pb-6 lg:pb-24 animate-fade-up">
          <h1 className="isolate text-[3.4rem] sm:text-[5.5rem] lg:text-[6.2rem] uppercase leading-[0.88]">
            <span className="sr-only">
              {profile.name} — {profile.role}
            </span>
            <span aria-hidden className="block">
              <span className="quote-mark mr-1 align-top text-[0.45em]">”</span>
              <span className="relative inline-block">
                <span className="absolute -z-10 left-[22%] -right-5 top-[14%] bottom-[6%] rounded-full bg-accent" />
                Gabriel
              </span>
            </span>
            <span aria-hidden className="relative block sm:pl-[33%]">
              <span className="mt-3 mb-2 block w-fit -rotate-3 sm:absolute sm:mt-0 sm:left-0 sm:top-1/2 sm:mb-0 sm:-translate-y-1/2 rounded-full bg-accent px-3 py-1 font-sans text-[0.7rem] sm:text-sm font-semibold italic normal-case tracking-normal text-ink whitespace-nowrap">
                Engenheiro de Software
              </span>
              Coimbra<span className="text-accent">.</span>
            </span>
          </h1>

          <p className="mt-10 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Engenheiro de Software com foco em{" "}
            <strong className="text-foreground font-semibold">backend</strong>: APIs,
            microsserviços, integrações e mensageria com Node.js, TypeScript e PHP — sistemas
            escaláveis, integrados e seguros.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contato" className="btn-pill btn-yellow group px-7 py-3.5">
              Solicitar orçamento <ArrowRight className="h-4 w-4 arrow-slide" />
            </a>
            <a href="#projetos" className="btn-pill btn-ghost px-7 py-3.5">
              Ver projetos
            </a>
          </div>

          <a
            href="#sobre"
            className="group mt-12 inline-flex items-center gap-3 text-sm font-semibold"
          >
            <span className="circle-btn size-10">
              <ChevronRight className="h-4 w-4" />
            </span>
            Conheça meu trabalho
          </a>
        </div>

        {/* Foto recortada sobre bloco amarelo, com círculo em contorno */}
        <div className="relative mx-auto w-full max-w-115 lg:max-w-none animate-fade-up [animation-delay:120ms]">
          <div className="relative aspect-5/6">
            <span className="absolute left-0 top-[4%] aspect-square w-[78%] rounded-full border-2 border-foreground/80" />
            <span className="absolute bottom-0 right-0 h-[58%] w-[74%] rounded-tl-[3rem] rounded-tr-[1.25rem] bg-accent" />
            <img
              src="/gabriel.webp"
              alt={`Foto de ${profile.name}`}
              width={629}
              height={812}
              fetchPriority="high"
              className="absolute bottom-0 left-[14%] h-[96%] w-auto max-w-none object-contain grayscale contrast-110"
            />
            <p className="absolute right-0 top-[6%] max-w-[30%] text-right text-xs italic font-medium leading-snug">
              {profile.currentRole} na {profile.currentCompany}
              <br />
              {yearsOfExperience}+ anos de experiência
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
