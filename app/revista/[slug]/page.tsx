import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { piezas, findPieza } from "@/lib/magazine";

export async function generateStaticParams() {
  return piezas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = findPieza(slug);
  if (!p) return { title: "Pieza" };
  return { title: p.titulo, description: p.extracto };
}

export default async function PiezaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = findPieza(slug);
  if (!p) notFound();

  return (
    <article className="pt-32 pb-32">
      <div className="mx-auto max-w-[720px] px-6 lg:px-10">
        <nav className="mb-12 text-xs font-mono text-[color:var(--fg-dim)]">
          <Link href="/revista" className="hover:text-[color:var(--accent)]">← Cuaderno Montaraz</Link>
        </nav>

        {/* Hero */}
        <header className="mb-16">
          <p className="eyebrow mb-3">{p.categoria}</p>
          <h1 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-tight text-[color:var(--fg)]">
            {p.titulo}
          </h1>
          {p.subtitulo && (
            <p className="font-display mt-4 text-xl italic text-[color:var(--color-laton-6)] lg:text-2xl">
              {p.subtitulo}
            </p>
          )}
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--fg-dim)]">
            {p.autor} · {p.minutos} min · {p.fecha}
          </p>
        </header>

        {/* Imagen hero (placeholder) */}
        <div className="relative -mx-6 mb-16 aspect-[4/3] overflow-hidden lg:-mx-0 lg:rounded-md">
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg,
                  var(--color-verde-2) 0%,
                  var(--color-verde-4) 50%,
                  color-mix(in oklab, var(--color-laton-3) 60%, var(--color-verde-3)) 100%)
              `,
            }}
          />
          <svg viewBox="0 0 1200 800" className="absolute inset-0 h-full w-full text-[color:var(--color-laton-6)] opacity-30" preserveAspectRatio="none">
            {Array.from({ length: 16 }).map((_, i) => (
              <path
                key={i}
                d={`M0,${50 + i * 50} Q300,${20 + i * 55} 600,${70 + i * 48} T1200,${50 + i * 50}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>

        {/* Cuerpo con drop cap */}
        <div className="space-y-6 text-lg leading-relaxed text-[color:var(--fg)]">
          {p.cuerpo.map((parrafo, i) => (
            <p key={i} className={i === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:font-medium first-letter:leading-[0.9] first-letter:text-[color:var(--color-laton-6)]" : ""}>
              {parrafo}
            </p>
          ))}
        </div>

        {/* Cita */}
        {p.cita && (
          <blockquote className="my-16 border-l-2 border-[color:var(--accent)] pl-6">
            <p className="font-display text-2xl italic leading-snug text-[color:var(--fg)] lg:text-3xl">
              «{p.cita.texto}»
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--fg-dim)]">
              — {p.cita.autor}
            </p>
          </blockquote>
        )}

        {/* Audio si disponible */}
        {p.audioDisponible && (
          <aside className="my-16 rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-5">
            <p className="eyebrow mb-2">Versión audio</p>
            <p className="text-sm text-[color:var(--fg-muted)]">
              Esta pieza también está narrada en audio por nuestro locutor profesional. Disponible en el reproductor del player Mux (sprint 2).
            </p>
          </aside>
        )}

        {/* Cierre */}
        <footer className="mt-16 border-t border-[color:var(--border-fine)] pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--fg-dim)]">
            Texto · {p.autor}
            {p.hora && ` · Hora · ${p.hora}`}
            {p.region && ` · Región · ${p.region}`}
          </p>
          <p className="mt-6 font-display text-2xl text-[color:var(--color-laton-6)]">
            Buen viento.
          </p>
        </footer>
      </div>
    </article>
  );
}
