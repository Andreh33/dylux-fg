import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tu morral",
  description: "Lo que llevas al puesto. Persistente entre sesiones.",
};

export default function MorralPage() {
  return (
    <div className="min-h-[80vh] pt-32 pb-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <p className="eyebrow mb-4">Tu morral</p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-tight text-[color:var(--fg)]">
          Tu morral está vacío.
        </h1>
        <p className="mt-6 max-w-md text-lg text-[color:var(--fg-muted)]">
          El monte sigue ahí. Pasa por la tienda y ve eligiendo lo que llevas al puesto.
        </p>
        <Link
          href="/tienda"
          className="mt-10 inline-flex items-center gap-3 rounded-md bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-[color:var(--color-verde-1)] transition-colors hover:bg-[color:var(--accent-hover)]"
        >
          Ir a la tienda
          <span aria-hidden>→</span>
        </Link>

        {/* Ilustración: morral a tinta */}
        <svg
          aria-hidden
          className="mt-20 h-64 w-auto text-[color:var(--color-verde-7)] opacity-50"
          viewBox="0 0 240 280"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        >
          <path d="M60 80 L60 60 Q60 30 90 25 L150 25 Q180 30 180 60 L180 80" />
          <path d="M40 100 L200 100 L196 250 L44 250 Z" />
          <path d="M40 100 L40 95 L200 95 L200 100" />
          <path d="M80 100 L80 90 Q80 80 100 80 L140 80 Q160 80 160 90 L160 100" />
          <line x1="80" y1="150" x2="160" y2="150" strokeDasharray="3 3" />
          <line x1="80" y1="170" x2="160" y2="170" strokeDasharray="3 3" />
        </svg>
      </div>
    </div>
  );
}
