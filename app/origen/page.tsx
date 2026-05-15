import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Origen",
  description: "Tres oficios, tres curadores, una casa: Alfredo, Inés, Tomé.",
};

const fundadores = [
  {
    nombre: "Alfredo de la Sota",
    rol: "Armero",
    region: "Asturias",
    historia:
      "Tercera generación. Su abuelo abrió la armería en Cangas en 1924. Su padre la mantuvo durante el franquismo y la Transición. Alfredo aprendió a desmontar un Sako 75 antes que a leer. Hoy restaura armas históricas, escribe en revistas técnicas y nos sigue eligiendo cada rifle que vendemos.",
    cita: "El arma no se elige rápido. Se calza, se cría, y un día se hereda.",
  },
  {
    nombre: "Inés Marqués",
    rol: "Bióloga marina · Pescadora de mosca",
    region: "Asturias · Pirineo",
    historia:
      "Doctora en biología por la Universidad de Oviedo. Especializada en truchas autóctonas. Pesca a mosca desde los 12 años. Militante por las cuencas hidrográficas españolas. Cura todo lo que tenga que ver con aguas, dirige el magazine y guía media docena de jornadas anuales.",
    cita: "Una caña es un instrumento de música. No vale la más cara: vale la que se entiende con tu muñeca.",
  },
  {
    nombre: "Tomé Lanza",
    rol: "Guía de monterías · Criador de podencos",
    region: "Extremadura",
    historia:
      "Veintidós años en el campo extremeño. Lleva la rehala Lucero (12 podencos). Organiza monterías en Cabañeros y Monfragüe. Defiende la caza con respeto, las vedas a rajatabla y los métodos selectivos. Escribe ensayos largos para el Cuaderno.",
    cita: "Cazar es ecología. La que se hace bien. Lo demás es furtivismo.",
  },
];

export default function OrigenPage() {
  return (
    <div className="pb-32">
      <section className="border-b border-[color:var(--border-fine)] pt-32 pb-16 lg:pt-44">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <p className="eyebrow mb-6">Origen · 2026</p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight text-[color:var(--fg)]">
            Tres oficios.
            <br />
            <span className="text-[color:var(--color-laton-6)]">Una casa.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[color:var(--fg-muted)]">
            Montaraz nació cuando un armero asturiano, una mosquera pirenaica y un guía extremeño se cansaron de las tiendas online sin alma. Empezamos curando 40 productos. Hoy son más de 200. La filosofía sigue intacta: cada pieza la elige una persona con cara y nombre.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="space-y-32">
            {fundadores.map((f, i) => (
              <article
                key={f.nombre}
                className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  {/* Retrato a tinta */}
                  <div className="aspect-[3/4] overflow-hidden rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)]">
                    <svg viewBox="0 0 300 400" className="h-full w-full text-[color:var(--color-laton-7)]" aria-hidden>
                      <defs>
                        <pattern id={`hatch-${i}`} width="3" height="3" patternUnits="userSpaceOnUse">
                          <path d="M0,3 L3,0" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
                        </pattern>
                      </defs>
                      <ellipse cx="150" cy="160" rx="65" ry="80" fill={`url(#hatch-${i})`} />
                      <ellipse cx="150" cy="160" rx="65" ry="80" fill="none" stroke="currentColor" strokeWidth="0.6" />
                      <path
                        d="M70 360 Q70 270 110 250 L150 230 L190 250 Q230 270 230 360"
                        fill={`url(#hatch-${i})`}
                        stroke="currentColor"
                        strokeWidth="0.6"
                      />
                    </svg>
                  </div>
                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--fg-dim)]">
                    {f.nombre} · {f.region}
                  </p>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="eyebrow mb-3">{f.rol}</p>
                  <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] leading-tight tracking-tight text-[color:var(--fg)]">
                    {f.nombre}
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-[color:var(--fg-muted)]">
                    {f.historia}
                  </p>
                  <blockquote className="mt-8 border-l-2 border-[color:var(--accent)] pl-5">
                    <p className="font-display text-xl italic leading-snug text-[color:var(--fg)]">
                      «{f.cita}»
                    </p>
                  </blockquote>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-24 text-center">
            <Link
              href="/quien-es-quien"
              className="inline-flex items-center gap-2 text-sm text-[color:var(--accent)] hover:underline"
            >
              Y otros curadores que se han unido →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
