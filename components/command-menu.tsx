"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, useMemo } from "react";
import { productos } from "@/lib/products";
import { cursos } from "@/lib/courses";
import { expediciones } from "@/lib/expeditions";
import { piezas } from "@/lib/magazine";
import { regiones } from "@/lib/regions";

type ResultItem = {
  type: "Producto" | "Curso" | "Expedición" | "Magazine" | "Atlas" | "Página";
  label: string;
  detail?: string;
  href: string;
};

/**
 * Command menu global. Cmd+K / Ctrl+K.
 * Busca en productos, cursos, expediciones, magazine, atlas, páginas.
 */
export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const todos: ResultItem[] = useMemo(
    () => [
      ...productos.map((p) => ({
        type: "Producto" as const,
        label: p.nombre,
        detail: `${p.marca} · ${p.familia}`,
        href: `/producto/${p.slug}`,
      })),
      ...cursos.map((c) => ({
        type: "Curso" as const,
        label: c.titulo,
        detail: `${c.modalidad} · ${c.profesor}`,
        href: `/aula/${c.slug}`,
      })),
      ...expediciones.map((e) => ({
        type: "Expedición" as const,
        label: e.titulo,
        detail: `${e.region} · ${e.dificultad}`,
        href: `/expediciones/${e.slug}`,
      })),
      ...piezas.map((p) => ({
        type: "Magazine" as const,
        label: p.titulo,
        detail: `${p.autor} · ${p.minutos} min`,
        href: `/revista/${p.slug}`,
      })),
      ...regiones.map((r) => ({
        type: "Atlas" as const,
        label: r.nombre,
        detail: r.comunidad,
        href: `/atlas/${r.slug}`,
      })),
      { type: "Página", label: "Tienda", href: "/tienda" },
      { type: "Página", label: "Manifiesto", href: "/manifiesto" },
      { type: "Página", label: "Atlas", href: "/atlas" },
      { type: "Página", label: "Revista", href: "/revista" },
      { type: "Página", label: "Aula", href: "/aula" },
      { type: "Página", label: "Expediciones", href: "/expediciones" },
      { type: "Página", label: "Club Maestre", href: "/club" },
      { type: "Página", label: "El Avituallamiento", href: "/club/avituallamiento" },
      { type: "Página", label: "Calendario lunar y mareas", href: "/calendario" },
      { type: "Página", label: "Origen", href: "/origen" },
      { type: "Página", label: "Curadores", href: "/quien-es-quien" },
      { type: "Página", label: "Contacto", href: "/contacto" },
      { type: "Página", label: "FAQ", href: "/faq" },
      { type: "Página", label: "Mi cuenta", href: "/cuenta" },
      { type: "Página", label: "Tu morral", href: "/morral" },
    ],
    []
  );

  const result = useMemo(() => {
    if (!q.trim()) return todos.slice(0, 8);
    const lower = q.toLowerCase();
    return todos
      .filter(
        (it) =>
          it.label.toLowerCase().includes(lower) ||
          (it.detail?.toLowerCase().includes(lower) ?? false) ||
          it.type.toLowerCase().includes(lower)
      )
      .slice(0, 12);
  }, [q, todos]);

  // Easter eggs específicos de búsqueda
  const easterMessage = useMemo(() => {
    const lower = q.toLowerCase().trim();
    if (lower === "lobo") return "El lobo no se caza. Lee /etica.";
    if (lower === "oso") return "Tampoco. Pero te puedo enseñar dónde duerme.";
    if (lower === "trampa") return "No vendemos trampas ilegales. Las legales son éticas: pregúntanos.";
    if (lower === "pez gato") return "No vendemos eso, no atendemos siluros invasores.";
    if (lower === "ametralladora") return "Aquí no. Aquí se viene a respetar el monte.";
    return null;
  }, [q]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[95] bg-[color:var(--color-verde-1)]/80 backdrop-blur-sm"
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-1/2 top-[12vh] z-[100] w-full max-w-xl -translate-x-1/2 px-4"
            role="dialog"
            aria-modal="true"
            aria-label="Buscador global"
          >
            <div className="overflow-hidden rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-raised)] shadow-2xl">
              <div className="flex items-center gap-3 border-b border-[color:var(--border-fine)] px-4 py-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[color:var(--fg-muted)]">
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <path d="m15 15 5 5" />
                </svg>
                <input
                  autoFocus
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Busca productos, cursos, ríos, magazine..."
                  className="flex-1 bg-transparent text-base text-[color:var(--fg)] placeholder:text-[color:var(--fg-dim)] outline-none"
                />
                <kbd className="rounded-sm border border-[color:var(--border-fine)] px-1.5 py-0.5 font-mono text-[10px] text-[color:var(--fg-dim)]">
                  esc
                </kbd>
              </div>

              {easterMessage && (
                <div className="border-b border-[color:var(--border-fine)] bg-[color:var(--bg)] px-4 py-3">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-laton-5)]">
                    Respuesta
                  </p>
                  <p className="text-sm text-[color:var(--fg)]">{easterMessage}</p>
                </div>
              )}

              <ul className="max-h-[55vh] overflow-y-auto p-2">
                {result.length === 0 ? (
                  <li className="p-6 text-center text-sm text-[color:var(--fg-muted)]">
                    Aquí no hay rastro. Cambia algún filtro.
                  </li>
                ) : (
                  result.map((it, i) => (
                    <li key={`${it.href}-${i}`}>
                      <Link
                        href={it.href}
                        onClick={() => {
                          setOpen(false);
                          setQ("");
                        }}
                        className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-[color:var(--bg)]"
                      >
                        <span className="rounded-sm border border-[color:var(--border-fine)] px-1.5 py-0.5 font-mono text-[10px] uppercase text-[color:var(--fg-dim)]">
                          {it.type}
                        </span>
                        <span className="flex-1 text-[color:var(--fg)]">
                          {it.label}
                        </span>
                        {it.detail && (
                          <span className="text-xs text-[color:var(--fg-dim)]">
                            {it.detail}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))
                )}
              </ul>

              <footer className="flex items-center justify-between border-t border-[color:var(--border-fine)] px-4 py-2 font-mono text-[10px] text-[color:var(--fg-dim)]">
                <span>
                  <kbd className="rounded-sm border border-[color:var(--border-fine)] px-1.5 py-0.5">↵</kbd>{" "}
                  abrir
                </span>
                <span>
                  Atajos:{" "}
                  <kbd className="rounded-sm border border-[color:var(--border-fine)] px-1.5 py-0.5">⌘K</kbd>{" "}
                  <kbd className="ml-1 rounded-sm border border-[color:var(--border-fine)] px-1.5 py-0.5">/</kbd>
                </span>
              </footer>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
