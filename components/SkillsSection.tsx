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
    <SectionReveal id="skills" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-7xl space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
            Skills
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl">
            Technologies I use to ship products.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="card-surface rounded-2xl p-6">
              <h3 className="font-heading text-2xl font-semibold">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-[var(--text-primary)]"
                  >
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
