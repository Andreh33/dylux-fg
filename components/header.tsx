"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";
import { MorralButton } from "@/components/morral-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useEggs } from "@/lib/store";

const menu = [
  { label: "Tienda", href: "/tienda" },
  { label: "Revista", href: "/revista" },
  { label: "Atlas", href: "/atlas" },
  { label: "Aula", href: "/aula" },
  { label: "Club", href: "/club" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [logoClicks, setLogoClicks] = useState<number[]>([]);
  const { scrollY } = useScroll();
  const desbloquear = useEggs((s) => s.desbloquear);
  const setMensaje = useEggs((s) => s.setMensaje);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 96);
  });

  function onLogoClick() {
    const now = Date.now();
    const recent = [...logoClicks, now].filter((t) => now - t < 4000);
    setLogoClicks(recent);
    if (recent.length >= 5) {
      desbloquear("logo-crt", "Créditos del equipo Montaraz · Alfredo, Inés, Tomé, Bea + la rehala.");
      setMensaje("Alfredo de la Sota · Inés Marqués · Tomé Lanza · Bea Fernández · y la rehala. Gracias.");
      setLogoClicks([]);
    }
  }

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300",
        scrolled
          ? "border-b border-[color:var(--border-fine)] bg-[color:var(--bg)]/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          onClick={onLogoClick}
          className="font-display text-2xl tracking-tight text-[color:var(--fg)] transition-colors hover:text-[color:var(--accent)]"
          aria-label="Montaraz — ir a inicio"
        >
          MONTARAZ
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[color:var(--fg-muted)] transition-colors hover:text-[color:var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => {
              const evt = new KeyboardEvent("keydown", { key: "k", metaKey: true });
              window.dispatchEvent(evt);
            }}
            aria-label="Buscar (cmd+K)"
            className="hidden items-center gap-2 rounded-md border border-[color:var(--border-fine)] px-3 py-1.5 text-xs text-[color:var(--fg-muted)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] md:flex"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m15 15 5 5" />
            </svg>
            <span>Buscar</span>
            <kbd className="rounded-sm border border-[color:var(--border-fine)] px-1.5 font-mono text-[10px] text-[color:var(--fg-dim)]">
              ⌘K
            </kbd>
          </button>

          <Link
            href="/cuenta"
            aria-label="Mi cuenta"
            className="grid h-9 w-9 place-items-center rounded-md border border-[color:var(--border-fine)] text-[color:var(--fg-muted)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
            </svg>
          </Link>

          <MorralButton />
        </div>
      </div>
    </motion.header>
  );
}
