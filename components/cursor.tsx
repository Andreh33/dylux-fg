"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Cursor custom — referencia §33.11 del BRIEF.
 * Punto 6 px + halo 32 px con lag 80 ms. Cuando entra en zona
 * interactiva, el halo crece a 56 px.
 *
 * Desactivado en touch (no pointer) y en `prefers-reduced-motion`.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 480, damping: 36, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 480, damping: 36, mass: 0.5 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const pointerFine = window.matchMedia("(pointer: fine)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!pointerFine || prefersReduced) return;
    setEnabled(true);

    function onMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        'a, button, [role="button"], [data-cursor="hover"], input, select, textarea'
      );
      setHovering(Boolean(interactive));
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Halo */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9998] mix-blend-difference"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full border border-[color:var(--color-laton-7)]"
          animate={{
            width: hovering ? 56 : 32,
            height: hovering ? 56 : 32,
            opacity: hovering ? 0.8 : 0.4,
          }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
      {/* Punto */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-1.5 w-1.5 rounded-full bg-[color:var(--color-laton-7)] mix-blend-difference"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
