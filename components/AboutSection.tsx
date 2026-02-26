import SectionReveal from "@/components/SectionReveal";

export default function AboutSection() {
  return (
    <SectionReveal id="about" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
            About Me
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl">
            Self-taught developer building with intent.
          </h2>
        </div>

        <div className="card-surface space-y-6 rounded-3xl p-8">
          <p className="leading-relaxed text-[var(--text-muted)]">
            I&apos;m a self-taught full stack developer based in Nigeria. I
            started with HTML and CSS, then kept leveling up through JavaScript,
            TypeScript, React, and backend tooling by building real projects.
          </p>
          <p className="leading-relaxed text-[var(--text-muted)]">
            I may be early in my career, but I work with discipline and
            momentum. I care about practical outcomes: fast interfaces, clean
            code, and products that solve real problems for users and clients.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.11em] text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(233,69,96,0.35)]"
            >
              Download CV
            </a>
            <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-primary)]">
              Open to Work - Freelance &amp; Full-time
            </span>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
