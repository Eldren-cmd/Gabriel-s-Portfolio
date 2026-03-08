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

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => {
            const layout = project.layout ?? (index === 0 ? "hero" : "standard");
            const isHeroCard = layout === "hero";
            const isFeaturedCard =
              layout === "hero" || layout === "featured";
            const isPurpleAccent = project.accent === "purple";

            const articleClassName = [
              "surface-card gold-glow-hover relative overflow-hidden rounded-3xl",
              isHeroCard
                ? "border-2 border-primary/80 shadow-[0_0_0_1px_rgba(201,168,76,0.5),0_0_32px_rgba(201,168,76,0.22)] lg:col-span-2 xl:col-span-3 xl:scale-[1.01]"
                : isFeaturedCard
                  ? "border-2 border-primary/75 shadow-[0_0_0_1px_rgba(201,168,76,0.38),0_0_28px_rgba(106,13,173,0.16)] lg:col-span-2 xl:col-span-2"
                  : "border lg:col-span-1",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <motion.article
                key={project.title}
                className={articleClassName}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.26 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
              >
                {isPurpleAccent && (
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(106,13,173,0.28),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(201,168,76,0.14),transparent_42%),linear-gradient(180deg,rgba(42,18,78,0.18),rgba(42,18,78,0.04))]" />
                )}

                {project.badge && (
                  <span className="absolute right-4 top-4 z-20 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1A0A2E] dark:text-[#1A1040] sm:right-5 sm:top-5">
                    {project.badge}
                  </span>
                )}

                <Image
                  src={screenshotFrom(project.live)}
                  alt={`${project.title} project screenshot`}
                  className={`relative z-10 w-full border-b border-line object-cover ${
                    isHeroCard
                      ? "h-56 sm:h-72"
                      : isFeaturedCard
                        ? "h-56 sm:h-64"
                        : "h-52 sm:h-64"
                  }`}
                  width={1280}
                  height={720}
                />

                <div
                  className={`relative z-10 space-y-5 p-6 ${
                    isFeaturedCard ? "sm:p-7" : ""
                  }`}
                >
                  {project.highlightLabel && (
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                      {project.highlightLabel}
                    </p>
                  )}

                  <div className="space-y-2">
                    <h3
                      className={`font-heading font-semibold text-text ${
                        isFeaturedCard ? "text-3xl sm:text-4xl" : "text-3xl"
                      }`}
                    >
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-secondary">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

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
                      {project.liveLabel ?? "Live Demo"}
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
