"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ProductCard } from "@/components/ui/product-card";
import { productos } from "@/lib/products";

/**
 * Escena 6 — "El Curador del Mes".
 * Referencia §14.7 del BRIEF.
 * Pieza editorial: retrato + cita + tres productos curados.
 */
export function CuradorMes() {
  // Tres curados de Alfredo este mes
  const seleccion = productos
    .filter((p) => p.curador === "Alfredo")
    .slice(0, 3);

  return (
    <section
      className="relative bg-[color:var(--color-laton-8)] py-24 text-[color:var(--color-verde-2)] lg:py-40"
      aria-labelledby="curador-title"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <p className="eyebrow mb-8 text-[color:var(--color-verde-6)]">
          Curador del mes · Noviembre
        </p>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          {/* Retrato a tinta */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-md border border-[color:#d8c58a] bg-[color:var(--color-laton-7)]">
              <svg
                viewBox="0 0 300 400"
                className="h-full w-full text-[color:var(--color-verde-2)]"
                aria-hidden
              >
                <defs>
                  <pattern id="hatch1" width="3" height="3" patternUnits="userSpaceOnUse">
                    <path
                      d="M0,3 L3,0"
                      stroke="currentColor"
                      strokeWidth="0.3"
                      opacity="0.6"
                    />
                  </pattern>
                </defs>
                {/* Silueta del retrato */}
                <ellipse cx="150" cy="160" rx="65" ry="80" fill="url(#hatch1)" />
                <ellipse cx="150" cy="160" rx="65" ry="80" fill="none" stroke="currentColor" strokeWidth="0.6" />
                {/* Hombros */}
                <path
                  d="M70 350 Q70 270 110 250 L150 230 L190 250 Q230 270 230 350"
                  fill="url(#hatch1)"
                  stroke="currentColor"
                  strokeWidth="0.6"
                />
                {/* Sombrero/gorra */}
                <path
                  d="M85 110 Q90 70 150 65 Q210 70 215 110 L210 115 L90 115 Z"
                  fill="currentColor"
                  opacity="0.85"
                />
                <line x1="80" y1="118" x2="220" y2="118" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>

            <div className="mt-6 grid gap-1 font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--color-verde-6)]">
              <span>Alfredo de la Sota</span>
              <span className="text-[color:var(--color-verde-7)]">
                Armero · Asturias · 3ª generación
              </span>
            </div>
          </motion.div>

          {/* Cita y tres productos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <h2
              id="curador-title"
              className="font-display text-[clamp(1.75rem,3.4vw,2.75rem)] leading-tight tracking-tight text-[color:var(--color-verde-2)]"
            >
              «El arma no se elige rápido. Se calza, se cría, y un día se hereda. Por eso curar es la forma más honesta de vender.»
            </h2>

            <p className="mt-8 max-w-xl text-base text-[color:var(--color-verde-5)]">
              Alfredo restaura Sako 75 a mano desde los 22 años. Cada mes elige tres piezas que pondría en manos de su sobrino antes de su jubilación. Estas son las de noviembre.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {seleccion.map((producto) => (
                <div key={producto.slug} className="curador-card-inverted">
                  <ProductCard producto={producto} />
                </div>
              ))}
            </div>

            <Link
              href="/quien-es-quien"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-laton-3)] underline decoration-[color:var(--color-laton-4)] decoration-1 underline-offset-4 transition-colors hover:text-[color:var(--color-laton-2)]"
            >
              Conoce a los otros curadores
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Estilos locales para invertir las cards (escena editorial sobre pergamino) */}
      <style>{`
        .curador-card-inverted [class*="bg-\\[color\\:var\\(--bg-raised\\)\\]"] {
          background: #f6ebc9 !important;
        }
      `}</style>
    </section>
  );
}
