"use client";

import Link from "next/link";
import { motion } from "motion/react";

/**
 * Escena 8 — "Calendario lunar y mareas".
 * Referencia §14.9 del BRIEF.
 * Rueda lunar animada + mini-tabla mareas + recomendación contextual.
 */
export function LunaMareas() {
  // Fase lunar simulada (en producción: cálculo astronómico real)
  const fase = 0.96; // 0=nueva, 0.5=llena, 1=nueva
  const iluminacion = Math.round((1 - Math.abs(0.5 - fase) * 2) * 100);

  const mareas = [
    { hora: "04:14", tipo: "Pleamar", alto: "+3.2 m" },
    { hora: "10:48", tipo: "Bajamar", alto: "+0.4 m" },
    { hora: "17:02", tipo: "Pleamar", alto: "+3.6 m" },
    { hora: "23:36", tipo: "Bajamar", alto: "+0.3 m" },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[color:var(--color-verde-1)] py-24 lg:py-32"
      aria-labelledby="luna-title"
    >
      {/* Constelaciones decorativas */}
      <Estrellas />

      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <p className="eyebrow mb-4">Calendario lunar · Mareas</p>
        <h2
          id="luna-title"
          className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight text-[color:var(--fg)]"
        >
          La luna y la marea
          <br />
          <span className="text-[color:var(--color-laton-6)]">deciden tu jornada.</span>
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr_1fr] lg:gap-16">
          {/* Luna */}
          <div className="text-center lg:text-left">
            <p className="eyebrow mb-6">Esta noche · Hora local</p>
            <div className="relative mx-auto h-48 w-48 lg:mx-0">
              <Luna fase={fase} />
            </div>
            <p className="font-display mt-6 text-3xl text-[color:var(--fg)]">
              Luna llena al {iluminacion}%
            </p>
            <p className="mt-2 max-w-xs text-sm text-[color:var(--fg-muted)]">
              Buena para pesca de salida nocturna. Aguardo de jabalí no recomendado.
            </p>
          </div>

          {/* Mareas */}
          <div>
            <p className="eyebrow mb-6">
              Mareas · Puerto de Llanes <span className="text-[color:var(--fg-dim)]">(auto)</span>
            </p>
            <div className="relative h-40 w-full overflow-hidden rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-4">
              <svg viewBox="0 0 320 120" className="h-full w-full" aria-hidden>
                <defs>
                  <linearGradient id="wave" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-laton-6)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="var(--color-laton-6)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Curva sinusoidal de marea */}
                <path
                  d="M0 60 Q40 20 80 60 T160 60 T240 60 T320 60"
                  fill="none"
                  stroke="var(--color-laton-6)"
                  strokeWidth="1.5"
                />
                <path
                  d="M0 60 Q40 20 80 60 T160 60 T240 60 T320 60 L320 120 L0 120 Z"
                  fill="url(#wave)"
                />
                {/* Marcadores horarios */}
                {[0, 80, 160, 240, 320].map((x, i) => (
                  <line
                    key={i}
                    x1={x}
                    y1="100"
                    x2={x}
                    y2="115"
                    stroke="var(--fg-dim)"
                    strokeWidth="0.5"
                  />
                ))}
              </svg>
            </div>

            <table className="mt-4 w-full font-mono text-xs tabular-nums">
              <tbody>
                {mareas.map((m) => (
                  <tr
                    key={m.hora}
                    className="border-b border-[color:var(--border-fine)]"
                  >
                    <td className="py-2 text-[color:var(--fg-muted)]">{m.hora}</td>
                    <td className="py-2 text-[color:var(--fg)]">{m.tipo}</td>
                    <td className="py-2 text-right text-[color:var(--fg-muted)]">
                      {m.alto}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Recomendación + CTA */}
          <div className="flex flex-col justify-center">
            <p className="eyebrow mb-6">Para esta noche</p>
            <h3 className="font-display text-2xl leading-tight text-[color:var(--fg)]">
              Lubina de costa al amanecer. Señuelo de superficie WTD entre las 5:30 y las 7:00.
            </h3>
            <p className="mt-4 text-sm text-[color:var(--fg-muted)]">
              Marea entrando, viento norte 12 km/h, mar rizada, presión 1018 hPa estable. Buen pronóstico para lubina y sargo.
            </p>
            <Link
              href="/calendario"
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-md border border-[color:var(--border)] px-5 py-2.5 text-sm text-[color:var(--fg)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              Abrir calendario completo
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Luna({ fase }: { fase: number }) {
  // Generar máscara de fase lunar con clip-path elíptico
  const offset = (fase - 0.5) * 2; // -1 a 1
  return (
    <motion.svg
      initial={{ rotate: -8, opacity: 0 }}
      whileInView={{ rotate: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      viewBox="0 0 200 200"
      className="h-full w-full"
    >
      <defs>
        <radialGradient id="luna-grad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#f5e9c6" />
          <stop offset="60%" stopColor="#d6c89c" />
          <stop offset="100%" stopColor="#a39072" />
        </radialGradient>
        <radialGradient id="luna-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(11, 15, 8, 0.05)" />
          <stop offset="100%" stopColor="rgba(11, 15, 8, 0.9)" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="85" fill="url(#luna-grad)" />
      {/* Sombra de fase */}
      <ellipse
        cx={100 + offset * 50}
        cy="100"
        rx={85 * Math.abs(1 - Math.abs(offset)) + 30}
        ry="85"
        fill="url(#luna-shadow)"
        opacity={Math.abs(offset) * 0.95}
      />
      {/* Cráteres muy sutiles */}
      <circle cx="85" cy="70" r="6" fill="rgba(58, 42, 20, 0.18)" />
      <circle cx="120" cy="110" r="4" fill="rgba(58, 42, 20, 0.14)" />
      <circle cx="75" cy="120" r="3" fill="rgba(58, 42, 20, 0.12)" />
      <circle cx="130" cy="80" r="2.5" fill="rgba(58, 42, 20, 0.16)" />
      {/* Halo */}
      <circle
        cx="100"
        cy="100"
        r="92"
        fill="none"
        stroke="var(--color-laton-7)"
        strokeOpacity="0.18"
        strokeWidth="0.5"
      />
    </motion.svg>
  );
}

function Estrellas() {
  // Estrellas decorativas estáticas (no Random en render para SSR)
  const stars = [
    [12, 18], [88, 12], [22, 84], [76, 88], [44, 32], [62, 26],
    [8, 54], [92, 46], [34, 70], [58, 78], [16, 38], [80, 64],
  ] as const;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {stars.map(([x, y], i) => (
        <span
          key={i}
          className="absolute h-px w-px rounded-full bg-[color:var(--color-laton-7)] opacity-30"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            boxShadow: `0 0 ${4 + (i % 3) * 2}px var(--color-laton-7)`,
          }}
        />
      ))}
    </div>
  );
}
