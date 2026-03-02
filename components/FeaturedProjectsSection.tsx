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
          {featuredProjects.map((project, index) => {
            const isFeaturedCard = index === 0;

            return (
              <motion.article
                key={project.title}
                className={`surface-card gold-glow-hover relative overflow-hidden rounded-3xl ${
                  isFeaturedCard
                    ? "border-2 border-primary/80 shadow-[0_0_0_1px_rgba(201,168,76,0.5),0_0_32px_rgba(201,168,76,0.22)] lg:col-span-3 lg:scale-[1.01]"
                    : "border lg:col-span-1"
                }`}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.26 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
              >
                {isFeaturedCard && project.badge && (
                  <span className="absolute right-4 top-4 z-20 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1A0A2E] dark:text-[#1A1040] sm:right-5 sm:top-5">
                    {project.badge}
                  </span>
                )}

                <Image
                  src={screenshotFrom(project.live)}
                  alt={`${project.title} project screenshot`}
                  className={`w-full border-b border-line object-cover ${
                    isFeaturedCard ? "h-56 sm:h-72" : "h-52 sm:h-64"
                  }`}
                  width={1280}
                  height={720}
                />

                <div className={`space-y-5 p-6 ${isFeaturedCard ? "sm:p-7" : ""}`}>
                  {isFeaturedCard && project.highlightLabel && (
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                      {project.highlightLabel}
                    </p>
                  )}

                  <h3 className="font-heading text-3xl font-semibold text-text">
                    {project.title}
                  </h3>
                  <p className="leading-relaxed text-muted">
                    {project.description}
                  </p>

                  {project.keyFeatures?.length ? (
                    <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-primary">
                      {project.keyFeatures.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-secondary/45 bg-secondary/10 px-3 py-1 text-xs font-semibold tracking-[0.09em] text-text"
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
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
