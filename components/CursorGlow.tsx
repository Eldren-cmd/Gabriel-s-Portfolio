"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const x = useMotionValue(-320);
  const y = useMotionValue(-320);

  const smoothX = useSpring(x, { damping: 32, stiffness: 220, mass: 0.7 });
  const smoothY = useSpring(y, { damping: 32, stiffness: 220, mass: 0.7 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX - 160);
      y.set(event.clientY - 160);
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(233,69,96,0.28)_0%,_rgba(233,69,96,0.12)_34%,_transparent_72%)] blur-2xl lg:block"
      style={{ translateX: smoothX, translateY: smoothY }}
    />
  );
}
