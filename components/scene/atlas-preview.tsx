"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

type Marcador = {
  id: string;
  nombre: string;
  tipo: "rio" | "coto" | "sierra" | "estuario";
  x: number; // 0–100
  y: number; // 0–100
  detalle: string;
};

const marcadores: Marcador[] = [
  { id: "sella", nombre: "Río Sella", tipo: "rio", x: 35, y: 26, detalle: "Truchas autóctonas · mosca seca" },
  { id: "picos", nombre: "Picos de Europa", tipo: "sierra", x: 38, y: 30, detalle: "Rebeco · rececho técnico" },
  { id: "duero", nombre: "Cuenca del Duero", tipo: "rio", x: 35, y: 50, detalle: "Trucha · barbo · ciprínidos" },
  { id: "cabaneros", nombre: "Cabañeros", tipo: "coto", x: 38, y: 64, detalle: "Montería extremeña · ciervo" },
  { id: "sierra-morena", nombre: "Sierra Morena", tipo: "sierra", x: 38, y: 76, detalle: "Lince · jabalí · ciervo" },
  { id: "donana", nombre: "Doñana", tipo: "estuario", x: 32, y: 84, detalle: "Anátidas · pesca de marisma" },
  { id: "pirineo", nombre: "Pirineo Aragonés", tipo: "sierra", x: 55, y: 22, detalle: "Sarrio · trucha de altura" },
  { id: "ebro", nombre: "Delta del Ebro", tipo: "estuario", x: 64, y: 50, detalle: "Lubina · anátidas" },
  { id: "estrecho", nombre: "Estrecho de Gibraltar", tipo: "rio", x: 40, y: 92, detalle: "Atún · bonito · lubina" },
  { id: "gredos", nombre: "Sierra de Gredos", tipo: "sierra", x: 38, y: 56, detalle: "Cabra montés · trucha alta" },
  { id: "monfrague", nombre: "Monfragüe", tipo: "coto", x: 36, y: 62, detalle: "Avifauna · ciervo · jabalí" },
  { id: "cantabrico", nombre: "Mar Cantábrico", tipo: "rio", x: 45, y: 14, detalle: "Bonito · lubina · sargo" },
  { id: "tajo", nombre: "Río Tajo", tipo: "rio", x: 32, y: 58, detalle: "Black-bass · trucha" },
  { id: "noguera", nombre: "Noguera Pallaresa", tipo: "rio", x: 58, y: 28, detalle: "Pirineo · truchas · mosca" },
];

/**
 * Escena 5 — "Atlas Vivo" (mapa interactivo embebido).
 * Referencia §14.6 del BRIEF.
 * Mapa de Iberia esquemático con marcadores hover-card.
 */
export function AtlasPreview() {
  const ref = useRef<HTMLElement>(null);
  const [activo, setActivo] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotacion = useTransform(scrollYProgress, [0, 1], [-2, 2]);
  const escala = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 1.02]);

  const marcadorActivo = marcadores.find((m) => m.id === activo);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[color:var(--color-verde-1)] py-24 lg:py-32"
      aria-labelledby="atlas-title"
    >
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-10">
        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-4">Atlas Montaraz</p>
          <h2
            id="atlas-title"
            className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight text-[color:var(--fg)]"
          >
            Mapa vivo
            <br />
            <span className="text-[color:var(--color-laton-6)]">de Iberia salvaje.</span>
          </h2>
          <p className="mt-6 text-base text-[color:var(--fg-muted)] md:max-w-md">
            Catorce regiones, doscientos marcadores, cuatrocientas especies. Cotos, ríos truchales, estuarios y cumbres con su mejor época, modalidades y permisos. <span className="text-[color:var(--fg)]">Los Maestres acceden al cuaderno secreto.</span>
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-mono">
            <Leyenda color="var(--color-laton-6)" label="Río" tipo="rio" />
            <Leyenda color="var(--color-musgo)" label="Coto" tipo="coto" />
            <Leyenda color="var(--color-mostaza)" label="Sierra" tipo="sierra" />
            <Leyenda color="var(--color-agua-6)" label="Estuario" tipo="estuario" />
          </div>
          <Link
            href="/atlas"
            className="mt-10 inline-flex w-fit items-center gap-3 rounded-md bg-[color:var(--accent)] px-5 py-2.5 text-sm font-medium text-[color:var(--color-verde-1)] transition-colors hover:bg-[color:var(--accent-hover)]"
          >
            Abrir Atlas completo
            <span aria-hidden>→</span>
          </Link>
        </div>

        <motion.div
          style={{ rotate: rotacion, scale: escala }}
          className="relative aspect-[3/4] w-full max-w-xl justify-self-center"
        >
          {/* Mapa esquemático de Iberia */}
          <svg viewBox="0 0 400 540" className="h-full w-full" aria-label="Mapa esquemático de Iberia">
            {/* Fondo papel envejecido */}
            <defs>
              <radialGradient id="paper" cx="50%" cy="40%" r="80%">
                <stop offset="0%" stopColor="var(--color-verde-3)" />
                <stop offset="100%" stopColor="var(--color-verde-1)" />
              </radialGradient>
              <pattern id="topo" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M0 20 Q20 10 40 20"
                  fill="none"
                  stroke="var(--color-verde-6)"
                  strokeWidth="0.3"
                  opacity="0.4"
                />
              </pattern>
            </defs>
            <rect width="400" height="540" fill="url(#paper)" />
            <rect width="400" height="540" fill="url(#topo)" />

            {/* Silueta de la península (esquemática, no geográfica) */}
            <path
              d="M80 90 Q120 70 180 75 Q230 78 280 92 Q310 100 330 115 Q345 130 348 160 Q352 200 340 240 Q325 290 300 340 Q280 380 260 420 Q240 460 200 478 Q160 482 130 470 Q100 458 80 430 Q60 400 55 360 Q52 320 60 280 Q68 240 72 200 Q72 160 78 130 Q78 110 80 90 Z"
              fill="var(--color-verde-2)"
              stroke="var(--color-laton-5)"
              strokeWidth="1.2"
              strokeOpacity="0.8"
            />

            {/* Líneas de costa */}
            <path
              d="M80 90 Q120 70 180 75 Q230 78 280 92"
              fill="none"
              stroke="var(--color-laton-6)"
              strokeWidth="0.6"
              strokeDasharray="2 3"
              opacity="0.7"
            />

            {/* Islas Baleares (puntos) */}
            <g fill="var(--color-verde-4)" stroke="var(--color-laton-5)" strokeWidth="0.5" opacity="0.6">
              <ellipse cx="378" cy="225" rx="10" ry="6" />
              <ellipse cx="368" cy="245" rx="5" ry="3" />
            </g>

            {/* Marcadores */}
            {marcadores.map((m) => {
              const cx = (m.x / 100) * 400;
              const cy = (m.y / 100) * 540;
              const isActive = m.id === activo;
              return (
                <motion.g
                  key={m.id}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2 + Math.random() * 0.4,
                  }}
                >
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isActive ? 8 : 4}
                    fill={colorByTipo(m.tipo)}
                    stroke="var(--color-laton-8)"
                    strokeWidth="1"
                    style={{
                      transition: "r 0.2s ease-out, opacity 0.2s",
                      opacity: activo === null || isActive ? 1 : 0.45,
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => setActivo(m.id)}
                    onMouseLeave={() => setActivo(null)}
                    onFocus={() => setActivo(m.id)}
                    onBlur={() => setActivo(null)}
                    tabIndex={0}
                    role="button"
                    aria-label={m.nombre}
                  />
                  {isActive && (
                    <circle
                      cx={cx}
                      cy={cy}
                      r={14}
                      fill="none"
                      stroke={colorByTipo(m.tipo)}
                      strokeWidth="0.8"
                      opacity="0.5"
                    />
                  )}
                </motion.g>
              );
            })}
          </svg>

          {/* Hover-card */}
          {marcadorActivo && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 top-4 -translate-x-1/2 rounded-md border border-[color:var(--border)] bg-[color:var(--bg-raised)] px-4 py-2 shadow-xl"
            >
              <p className="font-display text-base text-[color:var(--fg)]">
                {marcadorActivo.nombre}
              </p>
              <p className="text-xs text-[color:var(--fg-muted)]">
                {marcadorActivo.detalle}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function colorByTipo(tipo: Marcador["tipo"]) {
  switch (tipo) {
    case "rio":
      return "var(--color-laton-6)";
    case "coto":
      return "var(--color-musgo)";
    case "sierra":
      return "var(--color-mostaza)";
    case "estuario":
      return "var(--color-agua-6)";
  }
}

function Leyenda({
  color,
  label,
}: {
  color: string;
  label: string;
  tipo: Marcador["tipo"];
}) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[color:var(--fg-muted)]">
      <span
        aria-hidden
        className="inline-block h-2 w-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      {label}
    </span>
  );
}
