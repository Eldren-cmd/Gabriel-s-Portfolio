"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const links = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2m-3.1-6.9 1.4-1.4M4.7 19.3l1.4-1.4m0-11.8L4.7 4.7m14.6 14.6 1.4 1.4" />
    </svg>
  );
}

export default function TopNav() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const onScroll = () => {
      let nextActive = "about";

      for (const link of links) {
        const section = document.getElementById(link.id);
        if (!section) {
          continue;
        }

        const bounds = section.getBoundingClientRect();
        if (bounds.top <= 180 && bounds.bottom > 180) {
          nextActive = link.id;
        }
      }

      setActiveSection(nextActive);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:top-4 sm:px-8">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-line bg-[var(--glass)] px-4 py-3 shadow-lg backdrop-blur-lg md:px-6">
        <a
          className="font-heading text-lg font-bold tracking-[0.08em] text-primary"
          href="#home"
        >
          GA
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition ${
                  activeSection === link.id
                    ? "text-primary"
                    : "text-muted hover:text-text"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
            className="rounded-full border border-line p-2 text-muted transition hover:border-primary hover:text-primary"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="rounded-full border border-line p-2 text-muted transition hover:border-primary hover:text-primary md:hidden"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open navigation menu</span>
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isOpen ? (
                <path d="m6 6 12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mx-auto mt-2 w-full max-w-6xl rounded-2xl border border-line bg-[var(--glass)] p-4 shadow-lg backdrop-blur-lg md:hidden">
          <ul className="grid gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${
                    activeSection === link.id
                      ? "bg-primary/15 text-primary"
                      : "text-muted hover:bg-secondary/15 hover:text-text"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
