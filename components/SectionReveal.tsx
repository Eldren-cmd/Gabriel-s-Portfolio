"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type SectionRevealProps = {
  id?: string;
  className?: string;
  delay?: number;
  children: ReactNode;
};

export default function SectionReveal({
  id,
  className,
  delay = 0,
  children,
}: SectionRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-90px 0px -80px 0px",
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 34 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.section>
  );
}
