"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const lineas = [
  "No vendemos artículos: vendemos provisión.",
  "No surtimos pedidos: surtimos jornadas.",
  "No hablamos de «usuarios»: hablamos de gente que se levanta antes que el sol.",
  "Sabemos que un disparo es un acto serio.",
  "Sabemos que una picada limpia es un milagro.",
  "Sabemos que hay perros que dieron su vida por nosotros.",
  "Sabemos que el monte cura lo que la ciudad rompe.",
  "Si te lo enviamos, es porque a uno de nosotros le funcionó en serio.",
];

/**
 * Escena 4 — Manifiesto.
 * Referencia §14.5 del BRIEF.
 * Sticky pin con reveal de líneas según scroll + silueta de venado a tinta.
 */
export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const venadoPath = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "var(--color-verde-3)",
      "var(--color-verde-2)",
      "var(--color-verde-1)",
    ]
  );

  return (
    <motion.section
      ref={ref}
      style={reduced ? undefined : { backgroundColor: bgColor }}
      className="relative h-[260vh] bg-[color:var(--color-verde-2)]"
      aria-labelledby="manifesto-title"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Venado a tinta detrás */}
        <svg
          className="pointer-events-none absolute right-[-5%] top-1/2 -translate-y-1/2 h-[70%] w-auto text-[color:var(--color-verde-7)] opacity-30 md:right-0 lg:opacity-40"
          viewBox="0 0 320 380"
          fill="none"
          aria-hidden
        >
          <motion.path
            d="M160 30 L150 35 L140 30 L130 38 L120 32 L110 42 L105 50 L110 60 L100 65 L95 75 L98 85 L90 90 L92 102 L88 115 L96 125 L92 140 L100 155 L95 175 L102 190 L100 210 L108 225 L104 248 L112 270 L108 295 L120 315 L130 325 L150 332 L172 330 L195 325 L210 315 L218 295 L214 270 L222 248 L218 225 L226 210 L222 190 L230 175 L224 155 L232 140 L228 125 L236 115 L232 102 L234 90 L226 85 L230 75 L224 65 L216 60 L220 50 L214 42 L204 32 L194 38 L184 30 L172 35 Z M170 20 L168 28 L172 28 L170 20 Z M155 22 L152 30 L156 30 L155 22 Z M180 20 L178 30 L182 30 L180 20 Z M148 18 L145 26 L149 26 L148 18 Z M188 18 L185 26 L189 26 L188 18 Z"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="square"
            strokeLinejoin="round"
            style={
              reduced
                ? { pathLength: 1 }
                : { pathLength: venadoPath, opacity: 1 }
            }
          />
        </svg>

        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="eyebrow mb-8">Manifiesto · 2026</p>
          <h2 id="manifesto-title" className="sr-only">
            Manifiesto Montaraz
          </h2>
          <ul className="space-y-7">
            {lineas.map((linea, i) => (
              <ManifestoLine key={i} index={i} text={linea} />
            ))}
          </ul>
          <p className="font-display mt-12 text-2xl text-[color:var(--color-laton-6)] md:text-3xl">
            Provisión para lo indómito.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

function ManifestoLine({ index, text }: { index: number; text: string }) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.55"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.18, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-8, 0]);

  return (
    <motion.li
      ref={ref}
      style={{ opacity, x }}
      className="font-display text-2xl leading-snug text-[color:var(--fg)] md:text-3xl"
    >
      <span
        aria-hidden
        className="mr-3 inline-block font-mono text-xs align-top text-[color:var(--fg-dim)]"
        style={{ width: "1.5rem" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      {text}
    </motion.li>
  );
}
