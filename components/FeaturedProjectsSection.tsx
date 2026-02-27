"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import { featuredProjects, screenshotFrom } from "@/components/projectData";

export default function FeaturedProjectsSection() {
  return (
    <SectionReveal id="projects" className="section-shell">
      <div className="mx-auto w-full max-w-7xl space-y-12">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Featured Projects
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-text sm:text-5xl">
            My top portfolio work.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`surface-card gold-glow-hover overflow-hidden rounded-3xl border ${
                index === 0 ? "lg:col-span-3" : "lg:col-span-1"
              }`}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.26 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <Image
                src={screenshotFrom(project.live)}
                alt={`${project.title} project screenshot`}
                className="h-52 w-full border-b border-line object-cover sm:h-64"
                width={1280}
                height={720}
              />

              <div className="space-y-5 p-6">
                <h3 className="font-heading text-3xl font-semibold text-text">
                  {project.title}
                </h3>
                <p className="leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-secondary/45 bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.09em] text-text"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="gold-glow-hover rounded-full border border-primary bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.11em] text-[#1A0A2E] dark:text-[#1A1040]"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="gold-glow-hover rounded-full border border-secondary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.11em] text-secondary hover:border-primary hover:text-primary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
