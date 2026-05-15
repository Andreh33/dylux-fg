import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Club Maestre",
  description:
    "Programa Maestre: Aprendiz, Cazador/Pescador, Maestre. Gasto neto + actividad genuina. Sin gamificación tóxica.",
};

const tiers = [
  {
    nombre: "Aprendiz",
    umbral: "0 – 500 €",
    beneficios: [
      "Bienvenida con muestrario de mosca",
      "Acceso a magazine completo",
      "Newsletter mensual",
    ],
  },
  {
    nombre: "Cazador / Pescador",
    umbral: "500 – 2 500 €",
    beneficios: [
      "5 % de descuento perpetuo",
      "Envío express gratis",
      "Acceso anticipado 24 h a series limitadas",
      "Invitación a una jornada anual",
    ],
  },
  {
    nombre: "Maestre",
    umbral: "más de 2 500 €",
    beneficios: [
      "10 % de descuento perpetuo",
      "Concierge dedicado (Slack privado)",
      "Grabados y pedidos personalizados sin coste",
      "Acceso al cuaderno secreto (Atlas Maestre)",
      "Una expedición gratis al año",
      "Cuchillo personalizado de cumpleaños",
    ],
    destacado: true,
  },
];

export default function ClubPage() {
  return (
    <div className="pb-32">
      {/* Hero editorial */}
      <section className="border-b border-[color:var(--border-fine)] pt-32 pb-24 lg:pt-44 lg:pb-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <p className="eyebrow mb-6">Club Maestre · Programa de fidelización</p>
          <h1 className="font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] tracking-tight text-[color:var(--fg)]">
            Sin trucos.
            <br />
            <span className="text-[color:var(--color-maestre-4)]">Sin puntos. Sin prisa.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[color:var(--fg-muted)]">
            El Club Maestre no se gana coleccionando estrellas. Se gana gastando lo que de verdad gastes, asistiendo a las jornadas que de verdad asistas, dejando reseñas que de verdad ayuden. Cada 1 de enero se recalcula con tres meses de cortesía si caes de nivel.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.nombre}
                className={`relative rounded-md border p-8 ${
                  tier.destacado
                    ? "border-[color:var(--color-maestre-3)] bg-[color:var(--bg-raised)]"
                    : "border-[color:var(--border-fine)] bg-[color:var(--bg-raised)]/40"
                }`}
              >
                {tier.destacado && (
                  <div
                    aria-hidden
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-sm bg-[color:var(--color-maestre-3)] px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-[color:var(--color-verde-1)]"
                  >
                    Nivel Maestre
                  </div>
                )}
                <p className="eyebrow mb-2">{tier.umbral} anuales</p>
                <h2 className="font-display text-3xl text-[color:var(--fg)]">
                  {tier.nombre}
                </h2>
                <ul className="mt-6 space-y-3 text-sm">
                  {tier.beneficios.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-[color:var(--fg-muted)]"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-[color:var(--accent)]"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-8 lg:grid-cols-[2fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow mb-2">Multiplicadores honestos</p>
              <h3 className="font-display text-2xl text-[color:var(--fg)]">
                No solo cuenta gastar.
              </h3>
              <p className="mt-2 text-sm text-[color:var(--fg-muted)]">
                Sumamos también +50 € por curso completado, +30 € por jornada asistida, +20 € por reseña verificada útil, +10 € por trofeo publicado con foto y +50 € por contribución magazine publicada.
              </p>
            </div>
            <Link
              href="/club/avituallamiento"
              className="inline-flex w-fit items-center gap-3 rounded-md bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-[color:var(--color-verde-1)] transition-colors hover:bg-[color:var(--accent-hover)]"
            >
              Apúntate al Avituallamiento
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
