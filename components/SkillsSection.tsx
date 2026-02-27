import SectionReveal from "@/components/SectionReveal";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Shell"],
  },
];

export default function SkillsSection() {
  return (
    <SectionReveal id="skills" className="section-shell">
      <div className="mx-auto w-full max-w-7xl space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Skills
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-text sm:text-5xl">
            Frontend, backend, and tools I use every day.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="surface-card rounded-2xl p-6">
              <h3 className="font-heading text-2xl font-semibold text-text">
                {group.title}
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="gold-glow-hover inline-flex items-center gap-2 rounded-full border border-secondary/45 bg-secondary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.09em] text-text"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
