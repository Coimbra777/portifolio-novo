import { nav } from "@/data/nav";
import { profile } from "@/config/profile";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";

export function Logo() {
  return (
    <span aria-hidden className="relative inline-flex h-5 w-8">
      <span className="absolute left-0 top-0 size-5 rounded-full bg-foreground" />
      <span className="absolute left-3 top-0 size-5 rounded-full bg-accent" />
    </span>
  );
}

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur border-b border-foreground/70">
      <div className="section-container flex items-center justify-between h-16">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-lg font-bold whitespace-nowrap"
        >
          <Logo />
          {profile.name}
        </a>
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-muted-foreground hover:text-foreground transition-colors underline-offset-8 decoration-2 decoration-accent hover:underline"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contato"
            className="btn-pill btn-yellow hidden sm:inline-flex px-5 py-2 text-sm"
          >
            Orçamento
          </a>
        </div>
      </div>
    </header>
  );
}
