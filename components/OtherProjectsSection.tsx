"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";

const otherProjects = [
  "quiz-app",
  "expense-tracker",
  "weather-app",
  "Students-validation-form",
  "Task-list-webpage",
  "e-commerce-landing-page",
  "construction-website",
  "code-quotes-generator",
];

export default function OtherProjectsSection() {
  return (
    <SectionReveal className="px-6 pb-24 pt-4 sm:px-10 lg:px-16" delay={0.1}>
      <div className="mx-auto w-full max-w-7xl space-y-8">
        <h3 className="font-heading text-3xl font-bold sm:text-4xl">
          Other Projects
        </h3>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <motion.a
              key={project}
              href={`https://github.com/Eldren-cmd/${project}`}
              target="_blank"
              rel="noreferrer"
              className="card-surface rounded-2xl p-5 transition"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <p className="font-heading text-xl font-semibold tracking-tight">
                {project}
              </p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Compact project build with practical UI and JavaScript workflows.
              </p>
            </motion.a>
          ))}
        </div>

        <a
          href="https://github.com/Eldren-cmd"
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full border border-white/25 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          View All Projects
        </a>
      </div>
    </SectionReveal>
  );
}
