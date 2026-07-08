import { ArrowRight, Terminal } from "lucide-react";
import { nav } from "@/data/nav";
import { profile } from "@/config/profile";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="section-container flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 font-mono font-bold text-lg">
          <span
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Terminal className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="gradient-text">{profile.logoLabel}</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="btn-primary group hidden sm:inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold"
        >
          Orçamento{" "}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </header>
  );
}
