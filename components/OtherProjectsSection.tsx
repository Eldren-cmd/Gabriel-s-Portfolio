"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import { otherProjects, screenshotFrom } from "@/components/projectData";

export default function OtherProjectsSection() {
  return (
    <SectionReveal className="section-shell pt-8">
      <div className="mx-auto w-full max-w-7xl space-y-8">
        <h3 className="font-heading text-3xl font-bold text-text sm:text-4xl">
          Other Projects
        </h3>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {otherProjects.map((project, index) => {
            const screenshotTarget = project.live ?? project.github;

            return (
              <motion.article
                key={project.title}
                className="surface-card gold-glow-hover overflow-hidden rounded-2xl border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                whileHover={{ y: -6 }}
              >
                <Image
                  src={screenshotFrom(screenshotTarget)}
                  alt={`${project.title} screenshot`}
                  className="h-44 w-full border-b border-line object-cover"
                  width={1280}
                  height={720}
                />

                <div className="space-y-4 p-5">
                  <h4 className="font-heading text-xl font-semibold text-text">
                    {project.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-secondary/40 bg-secondary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-text"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="gold-glow-hover rounded-full border border-primary bg-primary px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.09em] text-[#1A0A2E] dark:text-[#1A1040]"
                      >
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="gold-glow-hover rounded-full border border-secondary px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.09em] text-secondary hover:border-primary hover:text-primary"
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
