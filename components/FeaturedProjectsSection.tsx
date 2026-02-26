"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";

const featuredProjects = [
  {
    title: "naija-bus",
    tech: ["TypeScript", "JavaScript", "HTML", "CSS"],
    description:
      "A Nigerian bus and transport web application. Built with TypeScript to handle complex app state and real-world transport data for a practical local problem.",
    github: "https://github.com/Eldren-cmd/naija-bus",
  },
  {
    title: "freelance-calculator",
    tech: ["JavaScript", "HTML", "CSS", "Shell"],
    description:
      "A practical tool that helps freelancers calculate rates and project costs. Built to solve a real business problem with a clear user workflow.",
    github: "https://github.com/Eldren-cmd/freelance-calculator",
  },
  {
    title: "school-website",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A complete multi-page school website. Demonstrates ability to deliver full client-style websites with structured content and polished UI.",
    github: "https://github.com/Eldren-cmd/school-website",
  },
];

export default function FeaturedProjectsSection() {
  return (
    <SectionReveal id="projects" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-7xl space-y-12">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
            Featured Projects
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl">
            Built projects that solve real user and business needs.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`card-surface rounded-3xl p-7 ${
                index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-[1.3fr_0.7fr]" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <div className="space-y-5">
                <h3 className="font-heading text-3xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="max-w-2xl leading-relaxed text-[var(--text-muted)]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/20 bg-[#1A1A2E]/75 px-3 py-1 text-xs font-medium uppercase tracking-[0.09em]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-end lg:mt-0 lg:justify-end">
                <a
                  className="inline-flex rounded-full border border-[var(--accent)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
