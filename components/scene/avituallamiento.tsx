"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const tiers = [
  {
    nombre: "Montés",
    precio: "39 €",
    cadencia: "/mes",
    descripcion:
      "Consumibles del campo: perdigones, hilos, cebos artesanos, una mosca atada a mano, un alimento de despensa.",
    items: ["Caja kraft", "3-5 piezas", "Sin compromiso"],
  },
  {
    nombre: "Maestre",
    precio: "89 €",
    cadencia: "/mes",
    descripcion:
      "Montés + un producto premium curado (cuchillo pequeño, frasco aceite armas, lentes microfibra) + revista impresa cada 2 meses.",
    items: ["Caja madera", "5-7 piezas", "Revista impresa", "Acceso anticipado"],
    destacado: true,
  },
  {
    nombre: "Inédito",
    precio: "179 €",
    cadencia: "/mes",
    descripcion:
      "Maestre + un producto inédito creado con artesano (numerado, edición de 50).",
    items: ["Edición numerada", "7-9 piezas", "Pieza artesana exclusiva"],
  },
];

/**
 * Escena 10 — Suscripción "El Avituallamiento".
 * Referencia §14.11 y §29 del BRIEF.
 */
export function Avituallamiento() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const cajaY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const cajaRotateX = useTransform(scrollYProgress, [0.3, 0.7], [0, -25]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[color:var(--color-verde-2)] py-24 lg:py-40"
      aria-labelledby="aviv-title"
    >
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:px-10">
        <div>
          <p className="eyebrow mb-4">Suscripción · Mensual</p>
          <h2
            id="aviv-title"
            className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight text-[color:var(--fg)]"
          >
            El Avituallamiento.
            <br />
            <span className="text-[color:var(--color-laton-6)]">
              Una caja al mes.
            </span>
          </h2>
          <p className="mt-6 max-w-md text-base text-[color:var(--fg-muted)]">
            Cinco productos curados al mes. Consumibles de campo + un detalle de descubrimiento. Pausa cuando quieras (hasta 3 meses). Cancela sin penalización ni formularios trampa.
          </p>

          <div className="mt-12 space-y-3">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.nombre}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.08,
                }}
                className={`relative rounded-md border p-5 transition-colors ${
                  tier.destacado
                    ? "border-[color:var(--accent)] bg-[color:var(--bg-raised)]"
                    : "border-[color:var(--border-fine)] bg-[color:var(--bg-raised)]/40 hover:border-[color:var(--border)]"
                }`}
              >
                {tier.destacado && (
                  <span className="absolute -top-2 right-4 rounded-sm bg-[color:var(--accent)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[color:var(--color-verde-1)]">
                    Más elegido
                  </span>
                )}
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl text-[color:var(--fg)]">
                    {tier.nombre}
                  </h3>
                  <p className="font-mono text-sm tabular-nums text-[color:var(--fg)]">
                    <span className="text-lg">{tier.precio}</span>
                    <span className="text-[color:var(--fg-dim)]">
                      {tier.cadencia}
                    </span>
                  </p>
                </div>
                <p className="mt-2 text-sm text-[color:var(--fg-muted)]">
                  {tier.descripcion}
                </p>
                <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-[color:var(--fg-dim)]">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-center gap-1">
                      <span aria-hidden>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <Link
            href="/club/avituallamiento"
            className="mt-10 inline-flex w-fit items-center gap-3 rounded-md bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-[color:var(--color-verde-1)] transition-colors hover:bg-[color:var(--accent-hover)]"
          >
            Apúntame desde 39 €/mes
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Caja 3D representada como ilustración perspectiva */}
        <motion.div
          style={{ y: cajaY }}
          className="relative flex items-center justify-center"
        >
          <motion.div
            style={{ rotateX: cajaRotateX, perspective: 1200, transformStyle: "preserve-3d" }}
            className="relative aspect-square w-full max-w-md"
          >
            <CajaAvituallamiento />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function CajaAvituallamiento() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="madera-frontal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-laton-4)" />
          <stop offset="100%" stopColor="var(--color-laton-3)" />
        </linearGradient>
        <linearGradient id="madera-superior" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-laton-6)" />
          <stop offset="100%" stopColor="var(--color-laton-4)" />
        </linearGradient>
        <linearGradient id="madera-lateral" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-laton-3)" />
          <stop offset="100%" stopColor="var(--color-laton-2)" />
        </linearGradient>
      </defs>

      {/* Cara superior (perspectiva) */}
      <polygon
        points="80,140 320,140 360,100 120,100"
        fill="url(#madera-superior)"
        stroke="var(--color-laton-2)"
        strokeWidth="1.2"
      />
      {/* Lateral derecho */}
      <polygon
        points="320,140 360,100 360,260 320,300"
        fill="url(#madera-lateral)"
        stroke="var(--color-laton-1)"
        strokeWidth="1.2"
      />
      {/* Frente */}
      <rect
        x="80"
        y="140"
        width="240"
        height="160"
        fill="url(#madera-frontal)"
        stroke="var(--color-laton-1)"
        strokeWidth="1.2"
      />
      {/* Vetas decorativas */}
      {[160, 180, 200, 220, 240, 260, 280].map((y) => (
        <line
          key={y}
          x1="84"
          y1={y}
          x2="316"
          y2={y}
          stroke="var(--color-laton-1)"
          strokeWidth="0.4"
          opacity="0.35"
        />
      ))}

      {/* Logo grabado */}
      <text
        x="200"
        y="225"
        textAnchor="middle"
        fontFamily="var(--font-sectra)"
        fontSize="28"
        fill="var(--color-laton-7)"
        letterSpacing="2"
      >
        MONTARAZ
      </text>
      <text
        x="200"
        y="252"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="9"
        fill="var(--color-laton-7)"
        letterSpacing="3"
        opacity="0.7"
      >
        AVITUALLAMIENTO · 2026
      </text>

      {/* Cordel yute */}
      <line
        x1="200"
        y1="100"
        x2="200"
        y2="300"
        stroke="var(--color-laton-2)"
        strokeWidth="2.5"
        opacity="0.8"
      />
      <line
        x1="200"
        y1="100"
        x2="200"
        y2="300"
        stroke="var(--color-laton-7)"
        strokeWidth="0.6"
        strokeDasharray="2 1"
      />
      {/* Nudo */}
      <circle cx="200" cy="120" r="6" fill="var(--color-laton-3)" />
      <circle cx="200" cy="120" r="6" fill="none" stroke="var(--color-laton-1)" strokeWidth="0.8" />
    </svg>
  );
}
