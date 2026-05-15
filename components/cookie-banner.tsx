"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useCookies } from "@/lib/store";

export function CookieBanner() {
  const decidido = useCookies((s) => s.c.decidido);
  const aceptarTodas = useCookies((s) => s.aceptarTodas);
  const rechazar = useCookies((s) => s.rechazarOpcionales);
  const set = useCookies((s) => s.set);

  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatePresence>
      {!decidido && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 z-[70] mx-auto max-w-2xl rounded-md border border-[color:var(--border)] bg-[color:var(--bg-raised)] shadow-2xl"
          role="dialog"
          aria-label="Consentimiento de cookies"
        >
          <div className="p-6">
            <p className="eyebrow mb-2">Cookies · sin trampas</p>
            <p className="text-sm leading-relaxed text-[color:var(--fg)]">
              Usamos cookies necesarias para que la web funcione (carrito, login, idioma). Las analíticas y de marketing las decides tú. Default: <strong className="text-[color:var(--accent)]">desactivadas</strong>.
            </p>

            {expanded && (
              <div className="mt-4 grid gap-3">
                <CategoriaToggle
                  label="Necesarias"
                  disabled
                  value
                  desc="Carrito, login, idioma. No se pueden desactivar."
                />
                <CategoriaToggle
                  label="Analíticas"
                  desc="PostHog agregado, sin replay. Solo si lo activas."
                  onChange={(v) => set({ analiticas: v })}
                />
                <CategoriaToggle
                  label="Marketing"
                  desc="Personalización de recomendaciones. Solo si lo activas."
                  onChange={(v) => set({ marketing: v })}
                />
              </div>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={aceptarTodas}
                className="rounded-md bg-[color:var(--accent)] px-5 py-2 text-sm font-medium text-[color:var(--color-verde-1)] transition-colors hover:bg-[color:var(--accent-hover)]"
              >
                Aceptar todas
              </button>
              <button
                type="button"
                onClick={rechazar}
                className="rounded-md border border-[color:var(--border)] px-5 py-2 text-sm text-[color:var(--fg)] transition-colors hover:border-[color:var(--accent)]"
              >
                Solo necesarias
              </button>
              <button
                type="button"
                onClick={() => setExpanded((e) => !e)}
                className="ml-auto text-xs text-[color:var(--fg-muted)] underline-offset-4 hover:underline"
              >
                {expanded ? "Ocultar detalle" : "Configurar"}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CategoriaToggle({
  label,
  desc,
  value: initial,
  disabled,
  onChange,
}: {
  label: string;
  desc: string;
  value?: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  const [v, setV] = useState(initial ?? false);
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-sm border border-[color:var(--border-fine)] p-3 text-sm">
      <input
        type="checkbox"
        checked={v}
        disabled={disabled}
        onChange={(e) => {
          setV(e.target.checked);
          onChange?.(e.target.checked);
        }}
        className="mt-0.5 h-4 w-4 accent-[color:var(--accent)]"
      />
      <span>
        <span className="block font-medium text-[color:var(--fg)]">
          {label} {disabled && <span className="font-mono text-xs text-[color:var(--fg-dim)]">obligatorias</span>}
        </span>
        <span className="block text-xs text-[color:var(--fg-dim)]">{desc}</span>
      </span>
    </label>
  );
}
