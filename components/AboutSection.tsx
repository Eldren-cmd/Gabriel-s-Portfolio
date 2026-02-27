import SectionReveal from "@/components/SectionReveal";

export default function AboutSection() {
  return (
    <SectionReveal id="about" className="section-shell">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            About
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-text sm:text-5xl">
            I build real products, not demo code.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted">
            I am Gabriel Adenrele, a Full Stack Developer trained at
            ITSkillsCenter and based in Nigeria. I enjoy turning ideas into
            practical products that solve real user and business problems.
          </p>
        </div>

        <article className="surface-card rounded-3xl p-7 sm:p-8">
          <div className="space-y-5">
            <p className="leading-relaxed text-muted">
              I care about shipping software that is reliable, readable, and
              fast. From landing pages to full web applications, I focus on
              clean execution and experiences users can trust.
            </p>
            <p className="leading-relaxed text-muted">
              I am actively looking for full-time opportunities and freelance
              projects where I can contribute as a dependable engineer and keep
              growing with strong teams.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/cv.pdf"
              download="Gabriel_Adegboyega_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-glow-hover rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-[#1A0A2E] dark:text-[#1A1040]"
            >
              Download CV
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-text">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary" />
              Open to Work - Freelance &amp; Full-time
            </span>
          </div>
        </article>
      </div>
    </SectionReveal>
  );
}
