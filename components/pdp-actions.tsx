"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useMorral, useCuaderno, useComparador } from "@/lib/store";
import type { Producto } from "@/lib/products";

export function PdpActions({ producto }: { producto: Producto }) {
  const añadir = useMorral((s) => s.añadir);
  const toggleCuaderno = useCuaderno((s) => s.toggle);
  const enCuaderno = useCuaderno((s) => s.contiene(producto.slug));
  const toggleCompara = useComparador((s) => s.toggle);
  const enCompara = useComparador((s) => s.slugs.includes(producto.slug));

  const [agregado, setAgregado] = useState(false);

  function onAgregar() {
    añadir({
      slug: producto.slug,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      curador: producto.curador,
    });
    setAgregado(true);
    setTimeout(() => setAgregado(false), 1500);
  }

  return (
    <div className="mt-10 space-y-3">
      <button
        type="button"
        onClick={onAgregar}
        disabled={producto.stock === 0}
        className="relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-md bg-[color:var(--accent)] px-6 py-4 text-sm font-medium text-[color:var(--color-verde-1)] transition-colors hover:bg-[color:var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-50"
      >
        <AnimatePresence mode="wait">
          {agregado ? (
            <motion.span
              key="ok"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12l5 5 9-12" />
              </svg>
              Hecho. Camino del puesto.
            </motion.span>
          ) : (
            <motion.span
              key="add"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {producto.stock === 0 ? "Agotado — avísame" : "Añadir al morral"}
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => toggleCuaderno(producto.slug)}
          aria-pressed={enCuaderno}
          className={`rounded-md border px-4 py-3 text-sm transition-colors ${
            enCuaderno
              ? "border-[color:var(--accent)] bg-[color:var(--accent)]/10 text-[color:var(--accent)]"
              : "border-[color:var(--border)] text-[color:var(--fg)] hover:border-[color:var(--accent)]"
          }`}
        >
          {enCuaderno ? "✓ En el cuaderno" : "Guardar en cuaderno"}
        </button>
        <button
          type="button"
          onClick={() => toggleCompara(producto.slug)}
          aria-pressed={enCompara}
          className={`rounded-md border px-4 py-3 text-sm transition-colors ${
            enCompara
              ? "border-[color:var(--accent)] bg-[color:var(--accent)]/10 text-[color:var(--accent)]"
              : "border-[color:var(--border)] text-[color:var(--fg)] hover:border-[color:var(--accent)]"
          }`}
        >
          {enCompara ? "✓ Comparando" : "Añadir a comparar"}
        </button>
      </div>
    </div>
  );
}
