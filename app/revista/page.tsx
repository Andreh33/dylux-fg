import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cuaderno Montaraz",
  description:
    "Periodismo lento de campo: reportajes, ensayos, recetarios, atlas mensuales y audio narrado.",
};

const piezas = [
  {
    slug: "becada-melancolia",
    titulo: "La becada y la melancolía",
    autor: "Tomé Lanza",
    categoria: "Ensayo",
    minutos: 12,
    fecha: "12 nov 2026",
    extracto:
      "Hay aves que se cazan con la mano firme y otras que se cazan con la espalda doblada y los ojos llorosos. La becada pertenece a las segundas.",
  },
  {
    slug: "silencio-puesto-valverde",
    titulo: "24 h en un puesto con José Antonio Valverde",
    autor: "Inés Marqués",
    categoria: "Reportaje",
    minutos: 18,
    fecha: "5 nov 2026",
    extracto:
      "El padre del lince ibérico nos dejó muchas cosas: una reserva, un instituto, un puñado de libros. También una manera de mirar.",
  },
  {
    slug: "templar-cana-sage",
    titulo: "Cómo se templa una caña de mosca",
    autor: "Inés Marqués",
    categoria: "Reportaje",
    minutos: 14,
    fecha: "28 oct 2026",
    extracto:
      "Visita a la fábrica Sage de Bainbridge Island. Cuatro toneladas de paciencia, una caña de cinco onzas.",
  },
  {
    slug: "rios-que-no-existen",
    titulo: "Los ríos que ya no existen",
    autor: "Inés Marqués",
    categoria: "Atlas",
    minutos: 22,
    fecha: "21 oct 2026",
    extracto:
      "Atlas histórico hidrográfico de Iberia: 130 ríos desaparecidos en el último siglo. Lo cuentan mapas viejos, fotografías y testimonios.",
  },
  {
    slug: "iberia-salada",
    titulo: "Iberia salada · 12 calas al amanecer",
    autor: "Bea Fernández",
    categoria: "Fotorreportaje",
    minutos: 28,
    fecha: "14 oct 2026",
    extracto:
      "Doce puntos de la costa española donde merece la pena madrugar. Desde Cudillero hasta el Estrecho.",
  },
  {
    slug: "cuchillo-boj",
    titulo: "El cuchillo de boj y otras herencias",
    autor: "Tomé Lanza",
    categoria: "Retrato artesano",
    minutos: 16,
    fecha: "7 oct 2026",
    extracto:
      "Visita al taller Pallarès Solsona, donde Manuel forja desde 1917. Una hoja, un mango, una historia familiar.",
  },
];

export default function RevistaPage() {
  return (
    <div className="pb-32">
      <section className="border-b border-[color:var(--border-fine)] pt-32 pb-16 lg:pt-44">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <p className="eyebrow mb-6">Cuaderno Montaraz · Revista</p>
          <h1 className="font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] tracking-tight text-[color:var(--fg)]">
            Periodismo lento
            <br />
            <span className="text-[color:var(--color-laton-6)]">de campo.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[color:var(--fg-muted)]">
            Pieza larga, foto cuidada, audio narrado por voz reconocible. Más Granta que GQ. Edición impresa anual numerada en tirada de 500 ejemplares.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <article className="grid gap-8 rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-8 lg:grid-cols-[2fr_1fr] lg:gap-16 lg:p-12">
            <div>
              <p className="eyebrow mb-3 text-[color:var(--color-laton-6)]">
                Destacado · {piezas[0]!.categoria}
              </p>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight text-[color:var(--fg)]">
                {piezas[0]!.titulo}
              </h2>
              <p className="mt-4 text-lg text-[color:var(--fg-muted)]">
                {piezas[0]!.extracto}
              </p>
              <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--fg-dim)]">
                {piezas[0]!.autor} · {piezas[0]!.minutos} min · {piezas[0]!.fecha}
              </p>
              <Link
                href={`/revista/${piezas[0]!.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent)] hover:text-[color:var(--accent-hover)]"
              >
                Leer la pieza completa
                <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="relative aspect-[3/4] rounded-sm bg-gradient-to-br from-[color:var(--color-verde-4)] to-[color:var(--color-verde-2)]">
              <svg
                viewBox="0 0 300 400"
                className="h-full w-full text-[color:var(--color-laton-6)] opacity-40"
                aria-hidden
              >
                {Array.from({ length: 14 }).map((_, i) => (
                  <path
                    key={i}
                    d={`M0,${30 + i * 28} Q150,${10 + i * 30} 300,${40 + i * 27}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.4"
                  />
                ))}
              </svg>
            </div>
          </article>
        </div>
      </section>

      {/* Listado */}
      <section className="py-8">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {piezas.slice(1).map((pieza) => (
              <Link
                key={pieza.slug}
                href={`/revista/${pieza.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-verde-3)] to-[color:var(--color-verde-2)]" />
                  <span className="absolute left-3 top-3 rounded-sm border border-[color:var(--color-laton-7)]/40 bg-[color:var(--bg)]/60 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[color:var(--color-laton-7)] backdrop-blur-sm">
                    {pieza.categoria}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-xl leading-tight text-[color:var(--fg)] transition-colors group-hover:text-[color:var(--accent)]">
                  {pieza.titulo}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-[color:var(--fg-muted)]">
                  {pieza.extracto}
                </p>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--fg-dim)]">
                  {pieza.autor} · {pieza.minutos} min
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
