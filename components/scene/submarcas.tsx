"use client";

import Link from "next/link";
import { motion } from "motion/react";

const casas = [
  {
    nombre: "Monte",
    href: "/tienda/caza",
    eyebrow: "Caza · rececho · ojeo",
    descripcion:
      "Cuando el alba huele a tomillo y a aceite de armas. Munición, rifles, escopetas, ópticas, ropa de monte y todo lo que se lleva al puesto.",
    paleta: "from-[color:var(--color-verde-4)] to-[color:var(--color-verde-2)]",
    acento: "text-[color:var(--color-laton-6)]",
  },
  {
    nombre: "Aguas",
    href: "/tienda/pesca",
    eyebrow: "Pesca · mosca · embarcación",
    descripcion:
      "Cuando la línea se templa antes que el corazón. Cañas, carretes, hilos, señuelos, moscas atadas a mano y vadeadores para todo tipo de agua.",
    paleta: "from-[color:var(--color-agua-3)] to-[color:var(--color-agua-1)]",
    acento: "text-[color:var(--color-agua-6)]",
  },
  {
    nombre: "Sendas",
    href: "/tienda/montaña",
    eyebrow: "Montaña · vivac · cuchillo",
    descripcion:
      "Para quien deja huella pero recoge latas. Ropa técnica, calzado, camping, iluminación y cuchillería para todas las alturas.",
    paleta: "from-[color:var(--color-senda-2)] to-[color:var(--color-senda-1)]",
    acento: "text-[color:var(--color-senda-5)]",
  },
  {
    nombre: "Cocina",
    href: "/tienda/cocina",
    eyebrow: "Despiece · conservas · curados",
    descripcion:
      "Lo que del monte vuelve a la mesa con honra. Cuchillería, conservas artesanas, curados ibéricos y herramientas de despiece.",
    paleta: "from-[#3a1a18] to-[color:var(--color-verde-2)]",
    acento: "text-[color:var(--color-laton-7)]",
  },
];

export function Submarcas() {
  return (
    <section
      className="topo-bg relative bg-[color:var(--bg)] py-24 lg:py-40"
      aria-labelledby="submarcas-title"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Cuatro casas, un techo</p>
          <h2
            id="submarcas-title"
            className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight text-[color:var(--fg)]"
          >
            Elegimos por familia, no por algoritmo.
          </h2>
          <p className="mt-6 text-lg text-[color:var(--fg-muted)] md:max-w-lg">
            Cuatro mundos dentro de Montaraz. Cada uno con su curador. Cada uno
            con su criterio. Cada uno con su olor.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {casas.map((casa, i) => (
            <CasaCard key={casa.nombre} {...casa} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

type CasaCardProps = (typeof casas)[number] & { index: number };

function CasaCard({
  nombre,
  href,
  eyebrow,
  descripcion,
  paleta,
  acento,
  index,
}: CasaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, rotate: index % 2 === 0 ? -2 : 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
      className="group relative"
    >
      <Link
        href={href}
        className={`relative block aspect-[4/5] overflow-hidden rounded-lg border border-[color:var(--border-fine)] bg-gradient-to-br ${paleta} p-8 transition-transform duration-500 ease-[var(--ease-monte-out)] hover:scale-[1.015] hover:border-[color:var(--accent)] lg:p-10`}
      >
        {/* Sello de cera decorativo en esquina */}
        <div
          className="wax-seal absolute right-6 top-6 grid h-10 w-10 place-items-center text-[9px] font-mono uppercase tracking-wider"
          aria-hidden
        >
          M
        </div>

        {/* Trama topográfica decorativa de fondo */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
          viewBox="0 0 400 500"
          preserveAspectRatio="none"
          aria-hidden
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <path
              key={i}
              d={`M0,${50 + i * 35} Q100,${30 + i * 38} 200,${
                60 + i * 33
              } T400,${50 + i * 35}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className={acento}
            />
          ))}
        </svg>

        <div className="relative flex h-full flex-col justify-between">
          <div>
            <p
              className={`eyebrow ${acento}`}
              style={{ color: "currentColor" }}
            >
              {eyebrow}
            </p>
            <h3 className="font-display mt-3 text-5xl tracking-tight text-[color:var(--color-laton-8)] lg:text-7xl">
              {nombre}
            </h3>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-relaxed text-[color:var(--color-laton-7)] lg:text-base">
              {descripcion}
            </p>
            <p
              className={`mt-6 inline-flex items-center gap-2 text-sm font-medium ${acento} transition-transform group-hover:translate-x-1`}
            >
              Entrar a {nombre}
              <span aria-hidden>→</span>
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
