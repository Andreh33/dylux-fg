import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quién es quién",
  description: "Los curadores Montaraz, con foto y firma.",
};

const curadores = [
  { nombre: "Alfredo de la Sota", rol: "Armero · Caza", region: "Asturias", desde: 2026 },
  { nombre: "Inés Marqués", rol: "Bióloga · Pesca", region: "Asturias · Pirineo", desde: 2026 },
  { nombre: "Tomé Lanza", rol: "Guía · Monterías", region: "Extremadura", desde: 2026 },
  { nombre: "Bea Fernández", rol: "Pesca de costa", region: "Galicia", desde: 2026 },
  { nombre: "Manuel A.", rol: "Atador de moscas", region: "Asturias · Sella", desde: 2026 },
  { nombre: "Joaquín Vela", rol: "Cetrero", region: "Toledo", desde: 2026 },
  { nombre: "Pilar Castro", rol: "Cocina de despiece", region: "Cáceres", desde: 2026 },
];

export default function QuienEsQuienPage() {
  return (
    <div className="pb-32">
      <section className="border-b border-[color:var(--border-fine)] pt-32 pb-16 lg:pt-44">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <p className="eyebrow mb-6">Curadores · {curadores.length}</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-[color:var(--fg)]">
            Quién está
            <br />
            <span className="text-[color:var(--color-laton-6)]">detrás de cada pieza.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[color:var(--fg-muted)]">
            Cada producto que vendemos lo eligió alguien con nombre. Cada artículo del Cuaderno lo escribió alguien con cara. Los nuestros tienen +10 años de campo cada uno, y son los que responden cuando preguntas.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {curadores.map((c) => (
              <article key={c.nombre}>
                <div className="aspect-[3/4] overflow-hidden rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)]">
                  <svg viewBox="0 0 300 400" className="h-full w-full text-[color:var(--color-laton-7)]" aria-hidden>
                    <ellipse cx="150" cy="160" rx="60" ry="75" fill="currentColor" opacity="0.15" />
                    <ellipse cx="150" cy="160" rx="60" ry="75" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <path
                      d="M75 380 Q75 280 115 260 L150 240 L185 260 Q225 280 225 380"
                      fill="currentColor"
                      fillOpacity="0.18"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>
                <h2 className="font-display mt-4 text-xl text-[color:var(--fg)]">
                  {c.nombre}
                </h2>
                <p className="text-xs text-[color:var(--fg-muted)]">{c.rol}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[color:var(--fg-dim)]">
                  {c.region} · desde {c.desde}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-8 text-center">
            <p className="font-display text-2xl text-[color:var(--fg)]">
              ¿Eres especialista y quieres curar con nosotros?
            </p>
            <p className="mt-3 text-[color:var(--fg-muted)]">
              Buscamos curadores con +10 años de campo, voz propia y compromiso ético.
            </p>
            <Link
              href="/contacto"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[color:var(--accent)] px-5 py-2.5 text-sm font-medium text-[color:var(--color-verde-1)]"
            >
              Escríbenos →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
