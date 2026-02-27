const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden fill="currentColor">
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4a3.2 3.2 0 0 0-1.3-1.8c-1.1-.7 0-.7 0-.7a2.5 2.5 0 0 1 1.8 1.2 2.6 2.6 0 0 0 3.6 1 2.6 2.6 0 0 1 .8-1.7c-2.7-.3-5.5-1.3-5.5-6a4.6 4.6 0 0 1 1.2-3.1 4.3 4.3 0 0 1 .1-3s1-.3 3.2 1.2a11.1 11.1 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2a4.3 4.3 0 0 1 .1 3 4.5 4.5 0 0 1 1.2 3.1c0 4.7-2.8 5.7-5.5 6a2.9 2.9 0 0 1 .8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden fill="currentColor">
      <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1a3.8 3.8 0 0 1 3.4-1.9c3.6 0 4.3 2.4 4.3 5.4v6.4ZM5.2 7.4a2.1 2.1 0 1 1 0-4.3 2.1 2.1 0 0 1 0 4.3Zm1.8 13.1H3.4V9H7v11.5Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface px-5 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm text-muted">
            &copy; 2025 Gabriel Adegboyega. All rights reserved.
          </p>
          <p className="text-xs uppercase tracking-[0.1em] text-muted">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.1em] text-muted transition hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Eldren-cmd"
            target="_blank"
            rel="noreferrer"
            className="gold-glow-hover rounded-full border border-secondary p-2 text-secondary hover:border-primary hover:text-primary"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/adenrele-gabriel-9332b9183/"
            target="_blank"
            rel="noreferrer"
            className="gold-glow-hover rounded-full border border-secondary p-2 text-secondary hover:border-primary hover:text-primary"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
