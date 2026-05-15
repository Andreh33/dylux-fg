"use client";

import { motion } from "motion/react";
import { useMorral } from "@/lib/store";
import { useEffect, useState } from "react";

export function MorralButton() {
  const items = useMorral((s) => s.items);
  const toggle = useMorral((s) => s.toggle);

  const totalItems = items.reduce((sum, it) => sum + it.cantidad, 0);
  const [pulse, setPulse] = useState(false);
  const [prevCount, setPrevCount] = useState(totalItems);

  useEffect(() => {
    if (totalItems > prevCount) {
      setPulse(true);
      const t = setTimeout(() => setPulse(false), 600);
      setPrevCount(totalItems);
      return () => clearTimeout(t);
    }
    setPrevCount(totalItems);
    return undefined;
  }, [totalItems, prevCount]);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Tu morral · ${totalItems} ${totalItems === 1 ? "pieza" : "piezas"}`}
      className="flex items-center gap-2 rounded-md border border-[color:var(--border-fine)] px-3 py-1.5 text-sm text-[color:var(--fg-muted)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      >
        <path d="M5 8h14l-1 12H6L5 8z" />
        <path d="M9 8V5a3 3 0 0 1 6 0v3" />
      </svg>
      <span className="hidden md:inline">Morral</span>
      <motion.span
        key={totalItems}
        animate={pulse ? { scale: [1, 1.4, 1] } : {}}
        transition={{ duration: 0.5, ease: [0.45, 0, 0.55, 1] }}
        className="font-mono text-xs tabular-nums text-[color:var(--fg-dim)]"
      >
        {totalItems}
      </motion.span>
    </button>
  );
}
