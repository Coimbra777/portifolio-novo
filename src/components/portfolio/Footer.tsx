import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, gmailComposeUrl, profile, whatsappMessages } from "@/config/profile";
import { nav } from "@/data/nav";

const socialLinks = [
  { href: profile.githubUrl, icon: Github, label: "GitHub" },
  { href: profile.linkedinUrl, icon: Linkedin, label: "LinkedIn" },
  { href: buildWhatsAppUrl(whatsappMessages.general), icon: MessageCircle, label: "WhatsApp" },
  { href: gmailComposeUrl, icon: Mail, label: "E-mail" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/90 py-14">
      <div className="section-container grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-center gap-2.5 font-display text-xl font-bold text-white">
            <span aria-hidden className="relative inline-flex h-5 w-8">
              <span className="absolute left-0 top-0 size-5 rounded-full bg-white" />
              <span className="absolute left-3 top-0 size-5 rounded-full bg-accent" />
            </span>
            {profile.name}
            <span className="-ml-2 text-accent">.</span>
          </div>
          <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-sm">
            {profile.role} · Desenvolvido com foco em performance, usabilidade e resultado.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/45 mb-4">
            Navegação
          </h3>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm text-white/75 hover:text-accent transition-colors"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/45 mb-4">
            Redes
          </h3>
          <div className="flex items-center gap-3">
            {socialLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                aria-label={l.label}
                className="inline-flex size-10 items-center justify-center rounded-full border-[1.5px] border-white/40 hover:border-accent hover:bg-accent hover:text-ink transition-colors"
              >
                <l.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
