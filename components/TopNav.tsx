const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function TopNav() {
  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4 sm:px-8">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/15 bg-[#1A1A2E]/80 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur md:px-6">
        <a className="font-heading text-lg font-bold tracking-tight" href="#home">
          Gabriel<span className="text-[var(--accent)]">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                className="text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--text-primary)]"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          className="rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(233,69,96,0.35)]"
          href="#contact"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
