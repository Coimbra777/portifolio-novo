import { ArrowRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionBar, SectionDecor } from "@/components/portfolio/Section";
import { buildWhatsAppUrl, gmailComposeUrl, profile, whatsappMessages } from "@/config/profile";

const contactList = [
  { icon: Mail, label: "E-mail", value: profile.email, href: gmailComposeUrl },
  { icon: Linkedin, label: "LinkedIn", value: "/in/gcoimbraa", href: profile.linkedinUrl },
  { icon: Github, label: "GitHub", value: "@Coimbra777", href: profile.githubUrl },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Fale agora",
    href: buildWhatsAppUrl(whatsappMessages.general),
  },
];

export function ContactSection() {
  return (
    <section id="contato" className="relative overflow-hidden py-20 md:py-28 scroll-mt-16">
      <SectionDecor number="11" />
      <div className="section-container relative">
        <SectionBar label="Contato" />
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-accent text-ink p-8 md:p-14 grid lg:grid-cols-[1.4fr_1fr] gap-12">
            <span
              aria-hidden
              className="absolute -right-10 -top-16 size-64 rounded-full border-2 border-ink/25"
            />
            <div className="relative">
              <h2 className="text-5xl md:text-7xl uppercase leading-[0.92]">
                <span className="mr-2 align-top text-[0.7em] text-card">”</span>
                Vamos trabalhar juntos<span className="text-card">.</span>
              </h2>
              <p className="mt-6 text-lg text-ink/80 max-w-xl leading-relaxed">
                Vamos transformar sua ideia ou processo em uma solução digital? Entre em contato
                para conversar sobre seu projeto e encontrar a melhor solução técnica para o seu
                negócio.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={buildWhatsAppUrl(whatsappMessages.budget)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pill group bg-ink text-white px-7 py-3.5"
                >
                  Solicitar orçamento <ArrowRight className="h-4 w-4 arrow-slide" />
                </a>
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pill border-2 border-ink px-7 py-3.5 hover:bg-ink hover:text-white"
                >
                  <Mail className="h-4 w-4" /> Enviar e-mail
                </a>
              </div>
            </div>

            <ul className="relative space-y-4 self-center">
              {contactList.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4"
                  >
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-ink transition-colors group-hover:bg-ink group-hover:text-accent">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-ink/60">
                        {c.label}
                      </span>
                      <span className="block truncate font-semibold">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
