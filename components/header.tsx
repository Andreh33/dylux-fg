"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

const menu = [
  { label: "Tienda", href: "/tienda" },
  { label: "Revista", href: "/revista" },
  { label: "Atlas", href: "/atlas" },
  { label: "Aula", href: "/aula" },
  { label: "Club", href: "/club" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [tarde, setTarde] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 96);
  });

  function toggleTarde() {
    const html = document.documentElement;
    const isTarde = html.getAttribute("data-theme") === "tarde";
    if (isTarde) {
      html.removeAttribute("data-theme");
      setTarde(false);
    } else {
      html.setAttribute("data-theme", "tarde");
      setTarde(true);
    }
  }

  // Detección automática 22:00–06:00 (opt-in vía cookie en producción).
  useEffect(() => {
    const html = document.documentElement;
    if (html.hasAttribute("data-theme")) return;
    const h = new Date().getHours();
    if (h >= 22 || h < 6) {
      // No la aplicamos automáticamente sin consentimiento, sólo
      // mostramos el icono "encendido" como hint.
      setTarde(false);
    }
  }, []);

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
          className="font-display text-2xl tracking-tight text-[color:var(--fg)]"
          aria-label="Montaraz — ir a inicio"
        >
          MONTARAZ
        </Link>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-8 md:flex"
        >
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

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleTarde}
            aria-label="Modo Tarde de Campo (visión nocturna)"
            aria-pressed={tarde}
            className={cn(
              "grid h-9 w-9 place-items-center rounded-md border border-[color:var(--border-fine)] text-[color:var(--fg-muted)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]",
              tarde && "border-[color:var(--accent)] text-[color:var(--accent)]"
            )}
          >
            <LinternaIcon />
          </button>

          <Link
            href="/buscar"
            aria-label="Buscar"
            className="grid h-9 w-9 place-items-center rounded-md border border-[color:var(--border-fine)] text-[color:var(--fg-muted)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            <SearchIcon />
          </Link>

          <Link
            href="/cuenta"
            aria-label="Mi cuenta"
            className="grid h-9 w-9 place-items-center rounded-md border border-[color:var(--border-fine)] text-[color:var(--fg-muted)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            <UserIcon />
          </Link>

          <Link
            href="/morral"
            aria-label="Tu morral"
            className="flex items-center gap-2 rounded-md border border-[color:var(--border-fine)] px-3 py-1.5 text-sm text-[color:var(--fg-muted)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            <MorralIcon />
            <span className="hidden md:inline">Morral</span>
            <span className="font-mono text-xs text-[color:var(--fg-dim)]">0</span>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

/* =========================================================================
   Iconos custom — trazo 1.5 px, terminales en punta.
   ========================================================================= */

function LinternaIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
    >
      <path d="M3 7l8 3 8-3v3l-8 3-8-3V7z" />
      <path d="M11 13v8" />
      <path d="M11 21h-3M11 21h3" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
    >
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15 15 5 5" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
    </svg>
  );
}

function MorralIcon() {
  return (
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
  );
}
