import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-[80vh] place-items-center px-6 pt-32 pb-16">
      <div className="mx-auto max-w-xl text-center">
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="font-display text-[clamp(2.75rem,7vw,5rem)] leading-[1] tracking-tight text-[color:var(--fg)]">
          Aquí no hay rastro.
        </h1>
        <p className="mt-6 text-lg text-[color:var(--fg-muted)]">
          Esta página no existe o se ha mudado de coto. Pero hay un perro que sigue olfateando.
        </p>

        {/* Podenco a tinta */}
        <svg
          aria-hidden
          className="mx-auto my-12 h-40 w-auto text-[color:var(--color-laton-6)]"
          viewBox="0 0 240 160"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          {/* Cuerpo */}
          <path d="M40 100 Q60 80 100 85 L160 90 Q190 92 200 100 Q210 110 200 120 L180 125 L170 130 Q160 132 150 130 L130 130 Q120 130 115 135 L100 138 Q80 138 70 130 L50 125 Q40 120 40 100 Z" />
          {/* Cabeza */}
          <path d="M200 100 Q215 90 222 95 Q228 100 224 110 Q220 115 212 113 Q205 112 200 110" />
          {/* Oreja */}
          <path d="M214 92 Q215 80 220 78 Q224 80 222 92" />
          {/* Ojo */}
          <circle cx="217" cy="103" r="1.2" fill="currentColor" />
          {/* Hocico (olfateando hacia abajo) */}
          <path d="M222 110 Q225 113 224 116" />
          {/* Patas */}
          <line x1="60" y1="125" x2="55" y2="150" />
          <line x1="80" y1="130" x2="78" y2="150" />
          <line x1="150" y1="130" x2="148" y2="150" />
          <line x1="175" y1="125" x2="173" y2="150" />
          {/* Cola */}
          <path d="M40 100 Q25 90 18 100 Q14 108 22 110" />
          {/* Rastro de huellas (puntos en suelo) */}
          <g opacity="0.6">
            <circle cx="180" cy="155" r="1.5" fill="currentColor" />
            <circle cx="170" cy="158" r="1.5" fill="currentColor" />
            <circle cx="195" cy="156" r="1.5" fill="currentColor" />
            <circle cx="205" cy="158" r="1.5" fill="currentColor" />
          </g>
        </svg>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-md bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-[color:var(--color-verde-1)] transition-colors hover:bg-[color:var(--accent-hover)]"
          >
            Volver a casa
          </Link>
          <Link
            href="/tienda"
            className="inline-flex items-center gap-3 rounded-md border border-[color:var(--border)] px-6 py-3 text-sm text-[color:var(--fg)] transition-colors hover:border-[color:var(--accent)]"
          >
            Pasar por la tienda
          </Link>
        </div>
      </div>
    </div>
  );
}
