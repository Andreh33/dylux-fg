"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Producto } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

type Props = {
  producto: Producto;
  className?: string;
};

export function ProductCard({ producto, className = "" }: Props) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative ${className}`}
    >
      <Link
        href={`/producto/${producto.slug}`}
        className="block focus-visible:outline-none"
      >
        {/* Visual */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)]">
          {/* Plumilla placeholder: trama topo + silueta */}
          <PlumillaPlaceholder seed={producto.slug} familia={producto.familia} />

          {/* Sellos */}
          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            {producto.selloHandTested && (
              <span className="rounded-sm bg-[color:var(--color-vermellon)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[color:var(--color-laton-8)]">
                Hand-tested
              </span>
            )}
            {producto.estado === "limitada" && (
              <span className="rounded-sm bg-[color:var(--color-maestre-3)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[color:var(--color-verde-1)]">
                Edición limitada
              </span>
            )}
            {producto.stock <= 3 && producto.stock > 0 && (
              <span className="rounded-sm border border-[color:var(--color-mostaza)] bg-[color:var(--bg)]/70 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[color:var(--color-mostaza)] backdrop-blur-sm">
                Quedan {producto.stock}
              </span>
            )}
          </div>

          <div className="absolute right-3 top-3 text-right">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--fg-dim)]">
              Curador
            </span>
            <p className="text-sm font-medium text-[color:var(--fg-muted)]">
              {producto.curador}
            </p>
          </div>
        </div>

        {/* Texto */}
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow mb-1.5">{producto.marca}</p>
            <h3 className="font-display text-xl leading-tight text-[color:var(--fg)] transition-colors group-hover:text-[color:var(--accent)]">
              {producto.nombre}
            </h3>
          </div>
          <p className="font-mono text-sm tabular-nums whitespace-nowrap text-[color:var(--fg)]">
            {formatPrice(producto.precio)}
          </p>
        </div>

        <p className="mt-2 line-clamp-2 text-sm text-[color:var(--fg-dim)]">
          {producto.resumen}
        </p>
      </Link>
    </motion.article>
  );
}

/**
 * Placeholder visual a tinta: trama topográfica + silueta según familia.
 * En producción se reemplaza con AVIF reales.
 */
function PlumillaPlaceholder({
  seed,
  familia,
}: {
  seed: string;
  familia: string;
}) {
  // Hash determinista trivial para variar el patrón
  const hash = seed.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const offset = (hash % 60) - 30;

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at ${50 + offset}% 60%,
              color-mix(in oklab, var(--color-laton-5) 14%, transparent),
              transparent 60%),
            linear-gradient(180deg,
              color-mix(in oklab, var(--color-verde-4) 92%, var(--color-laton-3)) 0%,
              var(--color-verde-3) 100%)
          `,
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full text-[color:var(--color-verde-7)] opacity-40"
        viewBox="0 0 400 500"
        preserveAspectRatio="none"
        aria-hidden
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <path
            key={i}
            d={`M0,${60 + i * 42} Q120,${30 + i * 45 + offset} 240,${
              70 + i * 40 - offset / 2
            } T400,${50 + i * 42}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        ))}
      </svg>

      {/* Silueta esquemática según familia */}
      <div
        className="absolute inset-x-0 bottom-0 flex h-2/3 items-center justify-center text-[color:var(--color-laton-7)]"
        aria-hidden
      >
        <SiluetaPorFamilia familia={familia} />
      </div>
    </div>
  );
}

function SiluetaPorFamilia({ familia }: { familia: string }) {
  // Estética: trazo 1.5 px coherente con la iconografía.
  const stroke = "currentColor";
  const sw = 1.25;
  if (familia === "rifles") {
    return (
      <svg width="80%" viewBox="0 0 240 60" fill="none">
        <path
          d="M10 40 L60 38 L70 32 L120 30 L130 24 L200 22 L220 24 L228 28 L228 36 L220 40 L130 42 L120 36 L70 40 L60 44 Z"
          stroke={stroke}
          strokeWidth={sw}
        />
        <circle cx="60" cy="38" r="3" stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  }
  if (familia === "escopetas") {
    return (
      <svg width="80%" viewBox="0 0 240 60" fill="none">
        <path
          d="M10 30 L70 28 L80 22 L220 20 L228 22 L228 28 L220 30 L80 32 L70 38 L10 36 Z"
          stroke={stroke}
          strokeWidth={sw}
        />
      </svg>
    );
  }
  if (familia === "municion") {
    return (
      <svg width="60%" viewBox="0 0 240 90" fill="none">
        {[0, 50, 100, 150, 200].map((x) => (
          <g key={x}>
            <rect x={x} y="20" width="30" height="60" stroke={stroke} strokeWidth={sw} rx="2" />
            <polygon
              points={`${x + 4},20 ${x + 15},5 ${x + 26},20`}
              stroke={stroke}
              strokeWidth={sw}
              fill="none"
            />
          </g>
        ))}
      </svg>
    );
  }
  if (familia === "canas-mosca" || familia === "moscas") {
    return (
      <svg width="70%" viewBox="0 0 240 90" fill="none">
        <path d="M20 80 Q100 40 220 12" stroke={stroke} strokeWidth={sw} />
        <circle cx="220" cy="12" r="3" stroke={stroke} strokeWidth={sw} />
        <path d="M210 22 Q205 30 200 28" stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  }
  if (familia === "opticas") {
    return (
      <svg width="65%" viewBox="0 0 240 60" fill="none">
        <rect x="20" y="20" width="200" height="20" stroke={stroke} strokeWidth={sw} rx="2" />
        <rect x="10" y="14" width="20" height="32" stroke={stroke} strokeWidth={sw} />
        <rect x="210" y="14" width="20" height="32" stroke={stroke} strokeWidth={sw} />
        <line x1="120" y1="12" x2="120" y2="6" stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  }
  if (familia === "cocina" || familia === "cuchilleria") {
    return (
      <svg width="60%" viewBox="0 0 240 60" fill="none">
        <path
          d="M30 30 L200 28 L220 24 L220 36 L200 32 L30 34 Z"
          stroke={stroke}
          strokeWidth={sw}
        />
        <rect x="20" y="26" width="14" height="12" stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  }
  if (familia === "ropa") {
    return (
      <svg width="55%" viewBox="0 0 240 120" fill="none">
        <path
          d="M60 30 L100 10 L140 10 L180 30 L210 50 L190 65 L170 55 L170 110 L70 110 L70 55 L50 65 L30 50 Z"
          stroke={stroke}
          strokeWidth={sw}
        />
      </svg>
    );
  }
  return (
    <svg width="40%" viewBox="0 0 100 100" fill="none">
      <rect x="20" y="20" width="60" height="60" stroke={stroke} strokeWidth={sw} />
    </svg>
  );
}
