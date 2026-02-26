"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["Full Stack Developer", "UI Builder", "Problem Solver"];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && typedRole !== activeRole) {
      timeout = setTimeout(() => {
        setTypedRole(activeRole.slice(0, typedRole.length + 1));
      }, 95);
    } else if (isDeleting && typedRole) {
      timeout = setTimeout(() => {
        setTypedRole(activeRole.slice(0, typedRole.length - 1));
      }, 55);
    } else if (!isDeleting && typedRole === activeRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1300);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
      }, 250);
    }

    return () => clearTimeout(timeout);
  }, [isDeleting, roleIndex, typedRole]);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28 sm:px-10 lg:px-16"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(233,69,96,0.32)_0%,_transparent_68%)] blur-2xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(15,52,96,0.55)_0%,_transparent_70%)] blur-2xl" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">
            Open to Work
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          </p>

          <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight sm:text-7xl xl:text-8xl">
            Hi, I&apos;m Gabriel.
          </h1>

          <p className="text-xl text-[var(--text-muted)] sm:text-2xl">
            <span className="text-[var(--accent)]">{typedRole}</span>
            <span className="type-cursor">|</span>
          </p>

          <p className="max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            I build practical web products with clean UX and dependable code.
            From business tools to full websites, I turn ideas into working
            outcomes.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              className="rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(233,69,96,0.4)]"
              href="#projects"
            >
              View My Work
            </a>
            <a
              className="rounded-full border border-white/25 px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              href="#contact"
            >
              Hire Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="card-surface relative flex min-h-72 items-end rounded-3xl p-8"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Focus Areas
            </p>
            <ul className="space-y-3">
              <li className="text-lg font-semibold">Frontend Engineering</li>
              <li className="text-lg font-semibold">Backend APIs</li>
              <li className="text-lg font-semibold">Product-Focused UI</li>
            </ul>
          </div>
          <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/70 to-transparent" />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
      >
        Scroll
        <span className="text-lg leading-none">↓</span>
      </motion.a>
    </section>
  );
}
