"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["Full Stack Developer", "UI Builder", "Problem Solver"];

export default function HeroSection() {
  const { scrollY } = useScroll();
  const meshYOffset = useTransform(scrollY, [0, 600], [0, 120]);
  const orbYOffset = useTransform(scrollY, [0, 600], [0, -80]);

  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && typedRole !== activeRole) {
      timeout = setTimeout(() => {
        setTypedRole(activeRole.slice(0, typedRole.length + 1));
      }, 90);
    } else if (isDeleting && typedRole.length > 0) {
      timeout = setTimeout(() => {
        setTypedRole(activeRole.slice(0, typedRole.length - 1));
      }, 52);
    } else if (!isDeleting && typedRole === activeRole) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1350);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
      }, 260);
    }

    return () => clearTimeout(timeout);
  }, [isDeleting, roleIndex, typedRole]);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-10 lg:px-16"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          style={{ y: meshYOffset }}
          className="absolute inset-0 opacity-90"
        >
          <div className="absolute left-[-16%] top-[-12%] h-[27rem] w-[27rem] rounded-full bg-[radial-gradient(circle,_rgba(123,47,190,0.4)_0%,_transparent_68%)] blur-3xl dark:bg-[radial-gradient(circle,_rgba(123,47,190,0.56)_0%,_transparent_70%)]" />
          <div className="absolute right-[-8%] top-[8%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,_rgba(201,168,76,0.24)_0%,_transparent_72%)] blur-3xl" />
          <motion.div
            className="absolute bottom-[8%] left-[24%] h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(106,13,173,0.24)_0%,_transparent_72%)] blur-3xl"
            animate={{ x: [0, 26, -14, 0], y: [0, -14, 10, 0] }}
            transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
        <motion.div
          style={{ y: orbYOffset }}
          className="absolute right-[-8rem] top-[22%] h-[24rem] w-[24rem] rounded-full border border-primary/25"
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-secondary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Full Stack Developer
            <span className="h-2 w-2 rounded-full bg-primary" />
          </p>

          <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight text-text sm:text-7xl xl:text-8xl">
            Hi, I&apos;m Gabriel.
          </h1>

          <p className="text-xl text-muted sm:text-2xl">
            <span className="text-primary">{typedRole}</span>
            <span className="typing-cursor">|</span>
          </p>

          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            I build dependable web products that feel premium and solve real
            business problems. My focus is practical software, clean interfaces,
            and outcomes clients can trust.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              className="gold-glow-hover rounded-full border border-primary bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A0A2E] dark:text-[#1A1040]"
              href="#projects"
            >
              View My Work
            </a>
            <a
              className="gold-glow-hover rounded-full border border-secondary px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-secondary hover:border-primary hover:text-primary"
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
          className="surface-card gold-glow-hover relative flex min-h-72 items-end rounded-3xl p-8"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.14em] text-muted">
              Focus Areas
            </p>
            <ul className="space-y-3">
              <li className="text-lg font-semibold text-text">Frontend UI</li>
              <li className="text-lg font-semibold text-text">Backend APIs</li>
              <li className="text-lg font-semibold text-text">
                Product Problem-Solving
              </li>
            </ul>
          </div>
          <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-xs uppercase tracking-[0.14em] text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
      >
        Scroll
        <span className="text-lg leading-none text-primary">↓</span>
      </motion.a>
    </section>
  );
}
