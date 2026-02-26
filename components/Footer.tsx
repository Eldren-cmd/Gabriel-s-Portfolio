const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#151526]/80 px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--text-muted)]">
          © 2025 Gabriel Adegboyega
        </p>

        <div className="flex flex-wrap gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--text-muted)] transition hover:text-[var(--text-primary)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Eldren-cmd"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
