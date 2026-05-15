"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTema, type Tema } from "@/lib/store";

const opciones: { value: Tema; label: string; desc: string }[] = [
  { value: "auto", label: "Auto", desc: "Sigue tu SO" },
  { value: "dark", label: "Monte", desc: "Verde campaña (oscuro)" },
  { value: "light", label: "Pergamino", desc: "Cuaderno antiguo (claro)" },
  { value: "tarde", label: "Tarde de Campo", desc: "Linterna roja nocturna" },
];

export function ThemeToggle() {
  const tema = useTema((s) => s.tema);
  const set = useTema((s) => s.set);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Cambiar tema"
        aria-expanded={open}
        className="grid h-9 w-9 place-items-center rounded-md border border-[color:var(--border-fine)] text-[color:var(--fg-muted)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
      >
        <LinternaIcon active={tema === "tarde"} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-11 z-50 w-56 overflow-hidden rounded-md border border-[color:var(--border)] bg-[color:var(--bg-raised)] shadow-2xl"
            role="menu"
          >
            <p className="border-b border-[color:var(--border-fine)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--fg-dim)]">
              Tema
            </p>
            {opciones.map((opt) => {
              const active = tema === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  role="menuitemradio"
                  aria-checked={active}
                  onClick={() => {
                    set(opt.value);
                    setOpen(false);
                  }}
                  className={`flex w-full items-start gap-3 px-4 py-3 text-left text-sm transition-colors ${
                    active
                      ? "bg-[color:var(--bg)] text-[color:var(--accent)]"
                      : "text-[color:var(--fg)] hover:bg-[color:var(--bg)]"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`mt-1 h-2 w-2 rounded-full ${
                      active ? "bg-[color:var(--accent)]" : "bg-[color:var(--border)]"
                    }`}
                  />
                  <span className="flex-1">
                    <span className="block font-medium">{opt.label}</span>
                    <span className="block text-xs text-[color:var(--fg-dim)]">
                      {opt.desc}
                    </span>
                  </span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LinternaIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      style={active ? { color: "var(--accent)" } : undefined}
    >
      <path d="M3 7l8 3 8-3v3l-8 3-8-3V7z" />
      <path d="M11 13v8" />
      <path d="M11 21h-3M11 21h3" />
    </svg>
  );
}
