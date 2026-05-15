"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/**
 * Escena 1 — "Amanecer en el puesto".
 * Referencia §14.2 del BRIEF.
 * Parallax de 3 capas: niebla 0.7x, paisaje 0.4x, texto 1.0x.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yFondo = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yNiebla = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const yTexto = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacityFade = useTransform(scrollYProgress, [0.4, 0.85], [1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[680px] overflow-hidden bg-[color:var(--color-verde-2)]"
      aria-label="Bienvenida"
    >
      {/* Capa de fondo: gradiente que evoca el amanecer (verde→latón) */}
      <motion.div
        style={{ y: yFondo }}
        className="absolute inset-0"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 70%,
                color-mix(in oklab, var(--color-laton-5) 22%, transparent),
                transparent 70%),
              linear-gradient(180deg,
                var(--color-verde-1) 0%,
                var(--color-verde-3) 40%,
                var(--color-verde-5) 75%,
                color-mix(in oklab, var(--color-laton-3) 60%, var(--color-verde-3)) 100%)
            `,
          }}
        />
        {/* Siluetas de monte estilo plumilla */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0 220 L120 200 L240 230 L360 180 L480 210 L600 170 L720 200 L840 160 L960 190 L1080 175 L1200 195 L1320 165 L1440 195 L1440 320 L0 320 Z"
            fill="var(--color-verde-2)"
            opacity="0.65"
          />
          <path
            d="M0 260 L160 245 L320 270 L480 240 L640 260 L800 230 L960 255 L1120 235 L1280 260 L1440 245 L1440 320 L0 320 Z"
            fill="var(--color-verde-1)"
            opacity="0.9"
          />
        </svg>
      </motion.div>

      {/* Capa de niebla */}
      <motion.div
        style={{ y: yNiebla }}
        className="fog-layer"
        aria-hidden
      />

      {/* Contenido */}
      <motion.div
        style={{ y: yTexto, opacity: opacityFade }}
        className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-32 lg:px-10 lg:pb-40"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="eyebrow mb-6"
        >
          EST. 2026 · IBERIA SALVAJE · BIENVENIDO AL MONTE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          className="font-display max-w-4xl text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] tracking-tight text-[color:var(--fg)]"
        >
          Provisión para
          <br />
          <span className="text-[color:var(--color-laton-6)]">lo indómito.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
          className="mt-6 max-w-xl text-lg text-[color:var(--fg-muted)] md:text-xl"
        >
          Caza, pesca, montaña y todo lo que no se compra dos veces. Curado por
          armeros, biólogos y guías con cara y nombre.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/tienda"
            className="group inline-flex items-center gap-3 rounded-md bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-[color:var(--color-verde-1)] transition-colors hover:bg-[color:var(--accent-hover)]"
          >
            Empezar por el morral
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/manifiesto"
            className="inline-flex items-center gap-3 rounded-md border border-[color:var(--border)] px-6 py-3 text-sm text-[color:var(--fg)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            Conoce la casa
          </Link>
        </motion.div>
      </motion.div>

      {/* Indicador scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <div className="flex flex-col items-center gap-2">
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-[color:var(--fg-muted)] to-[color:var(--fg-muted)]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--fg-dim)]">
            Sigue
          </span>
        </div>
      </motion.div>
    </section>
  );
}

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
