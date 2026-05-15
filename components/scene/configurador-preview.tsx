"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const piezas = [
  { id: "canon", label: "Cañón fluteado · 510 mm", y: 0 },
  { id: "accion", label: "Acción de cerrojo · finlandesa", y: 0 },
  { id: "culata", label: "Culata · nogal grado A", y: 0 },
  { id: "gatillo", label: "Gatillo · 1.3 kg ajustable", y: 0 },
  { id: "cargador", label: "Cargador · 5+1", y: 0 },
  { id: "optica", label: "Óptica · Swarovski Z5", y: 0 },
];

/**
 * Escena 7 — Configurador preview en home.
 * Referencia §14.8 del BRIEF.
 * Rifle SVG que se ensambla con scroll. Etiquetas surgen señalando piezas.
 * (3D R3F real en /configurador/rifle).
 */
export function ConfiguradorPreview() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Ensamblaje en 6 pasos durante el scroll
  const offsets = piezas.map((_, i) =>
    useTransform(scrollYProgress, [0.1 + i * 0.08, 0.18 + i * 0.08], [-200, 0])
  );
  const opacities = piezas.map((_, i) =>
    useTransform(scrollYProgress, [0.1 + i * 0.08, 0.2 + i * 0.08], [0, 1])
  );

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[color:var(--color-verde-2)] py-24 lg:py-40"
      aria-labelledby="config-title"
    >
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-10">
        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-4">Configurador · vista previa</p>
          <h2
            id="config-title"
            className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight text-[color:var(--fg)]"
          >
            Tu rifle, pieza a pieza.
          </h2>
          <p className="mt-6 max-w-md text-base text-[color:var(--fg-muted)]">
            Once pasos · 30 piezas combinables · vista 3D en directo · validación de compatibilidades. Compártelo con un link único y pídelo cuando estés listo. Sin compromiso.
          </p>

          <ul className="mt-8 space-y-2 text-sm text-[color:var(--fg-muted)]">
            {[
              "Acción · cañón · culata · cargador",
              "Disparador · acabado · óptica",
              "Monturas · correa · funda · caja",
            ].map((linea, i) => (
              <li key={i} className="flex items-start gap-2">
                <span aria-hidden className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-[color:var(--accent)]" />
                {linea}
              </li>
            ))}
          </ul>

          <Link
            href="/configurador/rifle"
            className="mt-10 inline-flex w-fit items-center gap-3 rounded-md bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-[color:var(--color-verde-1)] transition-colors hover:bg-[color:var(--accent-hover)]"
          >
            Abrir configurador completo
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Rifle SVG ensamblándose */}
        <div className="relative aspect-[3/2]">
          <svg
            viewBox="0 0 600 400"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <defs>
              <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-verde-7)" stopOpacity="0.7" />
                <stop offset="50%" stopColor="var(--color-verde-9)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="var(--color-verde-5)" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="nogal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-laton-4)" />
                <stop offset="100%" stopColor="var(--color-laton-2)" />
              </linearGradient>
            </defs>

            {/* Culata */}
            <motion.g style={{ x: offsets[2], opacity: opacities[2] }}>
              <path
                d="M40 220 L80 195 L150 200 L150 250 L80 255 L40 230 Z"
                fill="url(#nogal)"
                stroke="var(--color-laton-1)"
                strokeWidth="0.8"
              />
              {/* Vetas */}
              <path d="M60 210 Q100 207 140 212" stroke="var(--color-laton-1)" strokeWidth="0.4" fill="none" opacity="0.5" />
              <path d="M60 230 Q100 232 140 235" stroke="var(--color-laton-1)" strokeWidth="0.4" fill="none" opacity="0.5" />
              <path d="M60 245 Q100 247 140 248" stroke="var(--color-laton-1)" strokeWidth="0.4" fill="none" opacity="0.5" />
            </motion.g>

            {/* Acción + Recámara */}
            <motion.g style={{ x: offsets[1], opacity: opacities[1] }}>
              <rect
                x="150"
                y="205"
                width="100"
                height="40"
                fill="url(#metal)"
                stroke="var(--color-verde-1)"
                strokeWidth="0.8"
              />
              <circle cx="200" cy="225" r="8" fill="var(--color-verde-3)" stroke="var(--color-verde-1)" />
              <circle cx="200" cy="225" r="3" fill="var(--color-verde-7)" />
            </motion.g>

            {/* Cargador */}
            <motion.g style={{ x: offsets[4], opacity: opacities[4] }}>
              <path
                d="M170 245 L230 245 L228 285 L172 285 Z"
                fill="url(#metal)"
                stroke="var(--color-verde-1)"
                strokeWidth="0.8"
              />
              <line x1="180" y1="265" x2="220" y2="265" stroke="var(--color-verde-1)" strokeWidth="0.4" />
            </motion.g>

            {/* Cañón */}
            <motion.g style={{ x: offsets[0], opacity: opacities[0] }}>
              <rect
                x="250"
                y="215"
                width="280"
                height="20"
                fill="url(#metal)"
                stroke="var(--color-verde-1)"
                strokeWidth="0.8"
              />
              {/* Flutes */}
              {[218, 222, 226, 230].map((y) => (
                <line
                  key={y}
                  x1="250"
                  y1={y}
                  x2="530"
                  y2={y}
                  stroke="var(--color-verde-1)"
                  strokeWidth="0.3"
                  opacity="0.4"
                />
              ))}
              {/* Boca */}
              <rect x="525" y="218" width="10" height="14" fill="var(--color-verde-1)" />
            </motion.g>

            {/* Gatillo */}
            <motion.g style={{ y: offsets[3], opacity: opacities[3] }}>
              <path
                d="M195 245 Q193 260 198 268 Q200 265 200 250 Z"
                fill="var(--color-verde-2)"
                stroke="var(--color-verde-1)"
                strokeWidth="0.6"
              />
              {/* Guardamonte */}
              <path
                d="M185 245 Q183 265 200 275 Q217 265 215 245"
                fill="none"
                stroke="var(--color-verde-6)"
                strokeWidth="1.5"
              />
            </motion.g>

            {/* Óptica */}
            <motion.g style={{ y: offsets[5], opacity: opacities[5] }}>
              <rect
                x="280"
                y="170"
                width="200"
                height="22"
                fill="url(#metal)"
                stroke="var(--color-verde-1)"
                strokeWidth="0.8"
                rx="2"
              />
              <rect x="270" y="160" width="20" height="42" fill="var(--color-verde-4)" stroke="var(--color-verde-1)" />
              <rect x="470" y="160" width="20" height="42" fill="var(--color-verde-4)" stroke="var(--color-verde-1)" />
              <line x1="370" y1="155" x2="370" y2="148" stroke="var(--color-verde-1)" strokeWidth="0.6" />
              {/* Monturas */}
              <rect x="296" y="200" width="14" height="8" fill="var(--color-verde-5)" />
              <rect x="450" y="200" width="14" height="8" fill="var(--color-verde-5)" />
            </motion.g>
          </svg>

          {/* Etiquetas señalando partes */}
          {piezas.map((p, i) => (
            <motion.div
              key={p.id}
              style={{ opacity: opacities[i] }}
              className="absolute font-mono text-[10px] uppercase tracking-wider text-[color:var(--fg-dim)]"
              data-cursor="hover"
            >
              {i === 0 && (
                <div className="absolute" style={{ left: "70%", top: "55%" }}>
                  <span className="inline-block rounded-sm border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)]/80 px-2 py-1 backdrop-blur-sm">
                    Cañón fluteado 510 mm
                  </span>
                </div>
              )}
              {i === 5 && (
                <div className="absolute" style={{ left: "55%", top: "30%" }}>
                  <span className="inline-block rounded-sm border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)]/80 px-2 py-1 backdrop-blur-sm">
                    Swarovski Z5 3.5-18×44
                  </span>
                </div>
              )}
              {i === 2 && (
                <div className="absolute" style={{ left: "8%", top: "63%" }}>
                  <span className="inline-block rounded-sm border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)]/80 px-2 py-1 backdrop-blur-sm">
                    Culata nogal grado A
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
