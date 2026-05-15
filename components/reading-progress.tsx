"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Reading progress bar (1 px arriba). Solo se ve si hay scroll.
 */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 36,
    mass: 0.5,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: "left" }}
      className="reading-progress"
    />
  );
}
