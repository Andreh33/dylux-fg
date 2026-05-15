"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { productos } from "@/lib/products";
import { ProductCard } from "@/components/ui/product-card";

/**
 * Escena 3 — "Lo nuevo del bosque" (Featured / Drop semanal).
 * Referencia §14.4 del BRIEF.
 * Scroll horizontal con snap en desktop.
 */
export function FeaturedDrop() {
  return (
    <section
      className="relative bg-[color:var(--bg)] py-24 lg:py-32"
      aria-labelledby="drop-title"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow mb-3">Drop semanal · Jueves</p>
            <h2
              id="drop-title"
              className="font-display text-[clamp(1.875rem,4vw,3rem)] leading-[1] tracking-tight text-[color:var(--fg)]"
            >
              Lo nuevo del bosque.
            </h2>
            <p className="mt-4 text-base text-[color:var(--fg-muted)]">
              Ocho piezas elegidas a mano cada semana por nuestros curadores.
              Los socios <span className="text-[color:var(--accent)]">Maestres</span> tienen acceso 24 h antes.
            </p>
          </div>
          <Link
            href="/tienda"
            className="group inline-flex items-center gap-2 text-sm text-[color:var(--fg-muted)] transition-colors hover:text-[color:var(--accent)]"
          >
            Ver catálogo completo
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Carrousel horizontal con snap */}
      <div className="overflow-x-auto pb-4 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none]">
        <div className="mx-auto flex max-w-none gap-6 px-6 lg:px-10 snap-x snap-mandatory">
          {productos.map((producto, i) => (
            <motion.div
              key={producto.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.05,
              }}
              className="w-[280px] flex-shrink-0 snap-start md:w-[340px]"
            >
              <ProductCard producto={producto} />
            </motion.div>
          ))}
          {/* Spacer al final para que el último item llegue al margen */}
          <div aria-hidden className="w-px flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}
