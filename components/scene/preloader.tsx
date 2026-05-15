"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const frases = [
  "Esperando viento del norte...",
  "Templando el acero...",
  "Listo.",
];

/**
 * Pre-loader cinemático (1.6–2.4 s).
 * Solo 1ª visita por sesión. Skip si reduced-motion.
 */
export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fraseIdx, setFraseIdx] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setVisible(false);
      return;
    }
    if (typeof window !== "undefined") {
      const seen = sessionStorage.getItem("montaraz:preloader");
      if (seen) {
        setVisible(false);
        return;
      }
      sessionStorage.setItem("montaraz:preloader", "1");
    }

    const t1 = setTimeout(() => setFraseIdx(1), 700);
    const t2 = setTimeout(() => setFraseIdx(2), 1400);
    const t3 = setTimeout(() => setVisible(false), 2100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[color:var(--color-verde-1)]"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] },
          }}
        >
          <div className="flex flex-col items-center gap-8">
            <Brujula />
            <motion.p
              key={fraseIdx}
              className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--color-laton-7)]"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {frases[fraseIdx]}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Brujula() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
      className="text-[color:var(--color-laton-6)]"
    >
      {/* Anillo exterior */}
      <circle cx="40" cy="40" r="38" />
      <circle cx="40" cy="40" r="32" strokeOpacity="0.4" />

      {/* Cardinales */}
      <text
        x="40"
        y="10"
        textAnchor="middle"
        fontSize="8"
        fontFamily="monospace"
        fill="currentColor"
        stroke="none"
      >
        N
      </text>
      <text
        x="72"
        y="43"
        textAnchor="middle"
        fontSize="8"
        fontFamily="monospace"
        fill="currentColor"
        stroke="none"
      >
        E
      </text>
      <text
        x="40"
        y="74"
        textAnchor="middle"
        fontSize="8"
        fontFamily="monospace"
        fill="currentColor"
        stroke="none"
      >
        S
      </text>
      <text
        x="8"
        y="43"
        textAnchor="middle"
        fontSize="8"
        fontFamily="monospace"
        fill="currentColor"
        stroke="none"
      >
        O
      </text>

      {/* Marcas finas */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 40 + Math.cos(angle) * 28;
        const y1 = 40 + Math.sin(angle) * 28;
        const x2 = 40 + Math.cos(angle) * 30;
        const y2 = 40 + Math.sin(angle) * 30;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}

      {/* Aguja oscilante */}
      <motion.g
        initial={{ rotate: -12 }}
        animate={{ rotate: 0 }}
        transition={{
          duration: 1.6,
          ease: [0.45, 0, 0.55, 1],
          times: [0, 1],
        }}
        style={{ transformOrigin: "40px 40px" }}
      >
        <polygon
          points="40,12 36,40 40,42 44,40"
          fill="currentColor"
          stroke="none"
        />
        <polygon
          points="40,68 36,40 40,38 44,40"
          fill="currentColor"
          fillOpacity="0.4"
          stroke="none"
        />
      </motion.g>

      <circle cx="40" cy="40" r="2" fill="currentColor" stroke="none" />
    </motion.svg>
  );
}
