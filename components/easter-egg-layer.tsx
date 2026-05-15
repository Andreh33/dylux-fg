"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useEggs, useTema } from "@/lib/store";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

/**
 * Sistema global de easter eggs.
 * Implementados aquí:
 * - Konami code (pegaso a tinta cae)
 * - "silencio" tipeado (modo sigilo, sin animaciones)
 * - "ii" tipeado (modo tinta, paleta editorial)
 * - 5 clics en logo (no incluido aquí; en header)
 * - Cursor mosca tras 30s inactivo (no incluido aquí; ver cursor.tsx)
 * - Saludo por hora si llega a las 03:33 (cárabo)
 */
export function EasterEggLayer() {
  const desbloquear = useEggs((s) => s.desbloquear);
  const ultimoMensaje = useEggs((s) => s.ultimoMensaje);
  const setMensaje = useEggs((s) => s.setMensaje);
  const setTema = useTema((s) => s.set);

  const [showKonami, setShowKonami] = useState(false);

  useEffect(() => {
    let konami: string[] = [];
    let buffer = "";

    function onKey(e: KeyboardEvent) {
      // Konami
      konami.push(e.key);
      if (konami.length > KONAMI.length) konami = konami.slice(-KONAMI.length);
      if (konami.join(",") === KONAMI.join(",")) {
        setShowKonami(true);
        desbloquear("konami", "Konami code activado. Pegaso a tinta.");
        setTimeout(() => setShowKonami(false), 4500);
        konami = [];
      }

      // Palabras tipo "silencio", "ii", "tinta"
      if (/^[a-z]$/.test(e.key)) {
        buffer = (buffer + e.key).slice(-12);

        if (buffer.endsWith("silencio")) {
          document.documentElement.classList.toggle("modo-sigilo");
          desbloquear("modo-sigilo", "Modo sigilo activado. Sin animaciones.");
          setMensaje(
            document.documentElement.classList.contains("modo-sigilo")
              ? "Modo sigilo activado."
              : "Modo sigilo desactivado."
          );
        }
        if (buffer.endsWith("ii")) {
          document.documentElement.classList.toggle("modo-tinta");
          desbloquear("modo-tinta", "Modo tinta. Paleta editorial.");
          setMensaje("Modo tinta activado.");
        }
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [desbloquear, setMensaje, setTema]);

  // Cárabo a las 03:33
  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date();
      if (d.getHours() === 3 && d.getMinutes() === 33) {
        desbloquear("carabo-noche", "Cárabo. 03:33.");
        setMensaje("Cárabo en lo alto. Buen pájaro.");
      }
    }, 60_000);
    return () => clearInterval(interval);
  }, [desbloquear, setMensaje]);

  return (
    <>
      {/* Toast del último mensaje easter egg */}
      <AnimatePresence>
        {ultimoMensaje && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 left-1/2 z-[200] -translate-x-1/2 rounded-md border border-[color:var(--border)] bg-[color:var(--bg-raised)] px-5 py-3 text-sm text-[color:var(--fg)] shadow-2xl"
            onAnimationComplete={() => {
              setTimeout(() => setMensaje(null), 3000);
            }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--fg-dim)]">
              Easter egg
            </p>
            <p>{ultimoMensaje}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Konami: pegaso a tinta cayendo */}
      <AnimatePresence>
        {showKonami && (
          <motion.div
            initial={{ y: -200, opacity: 0, rotate: -10 }}
            animate={{ y: "60vh", opacity: 1, rotate: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: [0.7, 0, 0.84, 0] }}
            className="pointer-events-none fixed left-1/2 top-0 z-[150] -translate-x-1/2"
            aria-hidden
          >
            <Pegaso />
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        html.modo-sigilo *,
        html.modo-sigilo *::before,
        html.modo-sigilo *::after {
          animation-duration: 0ms !important;
          transition-duration: 0ms !important;
        }
        html.modo-tinta {
          filter: grayscale(0.85) contrast(1.08);
        }
      `}</style>
    </>
  );
}

function Pegaso() {
  return (
    <svg
      viewBox="0 0 240 240"
      className="h-48 w-48 text-[color:var(--color-laton-7)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      {/* Cuerpo */}
      <path d="M90 130 Q100 110 130 105 L170 102 Q190 105 195 120 L195 140 Q190 150 175 152 L150 152 Q130 152 115 145 L100 142 Q92 138 90 130 Z" />
      {/* Cabeza */}
      <path d="M195 120 Q210 115 215 122 Q218 130 212 134 Q205 136 198 134" />
      {/* Cuerno (pegaso) */}
      <path d="M210 115 L215 100 L213 115" />
      {/* Alas */}
      <path d="M120 110 Q100 60 70 50 Q90 90 110 120" />
      <path d="M120 110 Q105 75 80 70 Q95 95 115 115" />
      {/* Patas */}
      <line x1="110" y1="150" x2="105" y2="180" />
      <line x1="130" y1="152" x2="128" y2="182" />
      <line x1="160" y1="152" x2="158" y2="182" />
      <line x1="180" y1="150" x2="178" y2="180" />
      {/* Cola */}
      <path d="M90 130 Q70 130 60 150 Q70 145 80 145" />
      {/* Ojo */}
      <circle cx="206" cy="125" r="1.2" fill="currentColor" />
    </svg>
  );
}
