"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useMorral } from "@/lib/store";
import { formatPrice } from "@/lib/utils";

export function MorralDrawer() {
  const abierto = useMorral((s) => s.abierto);
  const items = useMorral((s) => s.items);
  const cerrar = useMorral((s) => s.cerrar);
  const setCantidad = useMorral((s) => s.setCantidad);
  const quitar = useMorral((s) => s.quitar);

  const subtotal = items.reduce((sum, it) => sum + it.precio * it.cantidad, 0);
  const envio = subtotal >= 80 ? 0 : 6.9;
  const total = subtotal + envio;

  return (
    <AnimatePresence>
      {abierto && (
        <>
          {/* Overlay */}
          <motion.div
            key="ovl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={cerrar}
            className="fixed inset-0 z-[80] bg-[color:var(--color-verde-1)]/70 backdrop-blur-sm"
            aria-hidden
          />

          {/* Panel */}
          <motion.aside
            key="pnl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 z-[90] flex h-full w-full max-w-md flex-col border-l border-[color:var(--border)] bg-[color:var(--bg-raised)] text-[color:var(--fg)]"
            role="dialog"
            aria-modal="true"
            aria-label="Tu morral"
          >
            {/* Header */}
            <header className="flex items-center justify-between border-b border-[color:var(--border-fine)] px-6 py-4">
              <div>
                <p className="eyebrow">Tu morral</p>
                <p className="font-display text-2xl">
                  {items.length === 0
                    ? "Vacío"
                    : `${items.length} ${items.length === 1 ? "pieza" : "piezas"}`}
                </p>
              </div>
              <button
                type="button"
                onClick={cerrar}
                aria-label="Cerrar morral"
                className="grid h-9 w-9 place-items-center rounded-md border border-[color:var(--border-fine)] text-[color:var(--fg-muted)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 6 L18 18 M18 6 L6 18" />
                </svg>
              </button>
            </header>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="grid h-full place-items-center text-center">
                  <div>
                    <p className="font-display text-2xl text-[color:var(--fg)]">
                      Tu morral está vacío.
                    </p>
                    <p className="mt-3 max-w-xs text-sm text-[color:var(--fg-muted)]">
                      El monte sigue ahí. Pasa por la tienda y elige lo que llevas al puesto.
                    </p>
                    <Link
                      href="/tienda"
                      onClick={cerrar}
                      className="mt-6 inline-flex items-center gap-2 rounded-md bg-[color:var(--accent)] px-5 py-2.5 text-sm font-medium text-[color:var(--color-verde-1)]"
                    >
                      Ir a la tienda →
                    </Link>
                  </div>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((it) => (
                    <motion.li
                      key={it.slug}
                      layout
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 60 }}
                      transition={{ duration: 0.3 }}
                      className="flex gap-3 border-b border-[color:var(--border-fine)] pb-4"
                    >
                      <Link
                        href={`/producto/${it.slug}`}
                        onClick={cerrar}
                        className="block aspect-square w-20 flex-shrink-0 rounded-sm bg-[color:var(--bg)]"
                      />
                      <div className="flex-1">
                        <Link
                          href={`/producto/${it.slug}`}
                          onClick={cerrar}
                          className="block"
                        >
                          <p className="font-display text-base leading-tight text-[color:var(--fg)]">
                            {it.nombre}
                          </p>
                        </Link>
                        {it.curador && (
                          <p className="text-xs text-[color:var(--fg-dim)]">
                            Curador: {it.curador}
                          </p>
                        )}
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center gap-1 rounded-md border border-[color:var(--border-fine)]">
                            <button
                              type="button"
                              onClick={() => setCantidad(it.slug, it.cantidad - 1)}
                              className="px-2 py-1 text-sm text-[color:var(--fg-muted)] hover:text-[color:var(--accent)]"
                              aria-label="Restar uno"
                            >
                              −
                            </button>
                            <span className="min-w-[1.5rem] text-center font-mono text-sm tabular-nums">
                              {it.cantidad}
                            </span>
                            <button
                              type="button"
                              onClick={() => setCantidad(it.slug, it.cantidad + 1)}
                              className="px-2 py-1 text-sm text-[color:var(--fg-muted)] hover:text-[color:var(--accent)]"
                              aria-label="Sumar uno"
                            >
                              +
                            </button>
                          </div>
                          <p className="font-mono text-sm tabular-nums text-[color:var(--fg)]">
                            {formatPrice(it.precio * it.cantidad)}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => quitar(it.slug)}
                        aria-label={`Quitar ${it.nombre}`}
                        className="self-start text-[color:var(--fg-dim)] hover:text-[color:var(--danger)]"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M6 6 L18 18 M18 6 L6 18" />
                        </svg>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer con totales y CTA */}
            {items.length > 0 && (
              <footer className="border-t border-[color:var(--border-fine)] px-6 py-5">
                <dl className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-[color:var(--fg-muted)]">
                    <dt>Subtotal</dt>
                    <dd className="font-mono tabular-nums">
                      {formatPrice(subtotal)}
                    </dd>
                  </div>
                  <div className="flex justify-between text-[color:var(--fg-muted)]">
                    <dt>Envío {subtotal >= 80 && "(gratis)"}</dt>
                    <dd className="font-mono tabular-nums">
                      {envio === 0 ? "Gratis" : formatPrice(envio)}
                    </dd>
                  </div>
                  <div className="flex justify-between border-t border-[color:var(--border-fine)] pt-2 text-base text-[color:var(--fg)]">
                    <dt>Total</dt>
                    <dd className="font-mono tabular-nums">{formatPrice(total)}</dd>
                  </div>
                </dl>
                <Link
                  href="/caja"
                  onClick={cerrar}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-[color:var(--color-verde-1)] transition-colors hover:bg-[color:var(--accent-hover)]"
                >
                  Pasar por Caja →
                </Link>
                <p className="mt-3 text-center text-xs text-[color:var(--fg-dim)]">
                  Devolución en 365 días · 48 h península
                </p>
              </footer>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
