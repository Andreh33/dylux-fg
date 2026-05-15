import type { Metadata } from "next";
import Link from "next/link";
import { expediciones } from "@/lib/expeditions";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Expediciones",
  description:
    "Jornadas con guía verificado. Berrea, mosca, monterías, lubina nocturna, rebeco en altura. Cupos limitados.",
};

const colorDificultad = {
  Bajo: "text-[color:var(--color-musgo)]",
  Medio: "text-[color:var(--color-mostaza)]",
  Alto: "text-[color:var(--color-terracota)]",
  Extremo: "text-[color:var(--color-vermellon)]",
};

export default function ExpedicionesPage() {
  return (
    <div className="pb-32">
      <section className="border-b border-[color:var(--border-fine)] pt-32 pb-16 lg:pt-44">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <p className="eyebrow mb-6">Expediciones · {expediciones.length} jornadas abiertas</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-[color:var(--fg)]">
            Jornadas con guía
            <br />
            <span className="text-[color:var(--color-laton-6)]">de verdad.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[color:var(--fg-muted)]">
            Cada expedición la organizamos con un guía profesional con más de diez años de campo. Cupos limitados, seguro básico incluido, política de cancelación clara, sin sorpresas.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {expediciones.map((e) => (
              <Link key={e.slug} href={`/expediciones/${e.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-[color:var(--border-fine)]">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `
                        linear-gradient(135deg,
                          var(--color-verde-2) 0%,
                          var(--color-verde-4) 50%,
                          var(--color-agua-3) 100%)
                      `,
                    }}
                  />
                  <span className="absolute left-3 top-3 rounded-sm border border-[color:var(--border-fine)] bg-[color:var(--bg)]/60 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[color:var(--fg-muted)] backdrop-blur-sm">
                    {e.region}
                  </span>
                  <span className={`absolute right-3 top-3 font-mono text-[10px] uppercase tracking-wider ${colorDificultad[e.dificultad]}`}>
                    {e.dificultad}
                  </span>
                </div>
                <h2 className="font-display mt-4 text-xl leading-tight text-[color:var(--fg)] transition-colors group-hover:text-[color:var(--accent)]">
                  {e.titulo}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm text-[color:var(--fg-muted)]">
                  {e.resumen}
                </p>
                <div className="mt-3 flex items-center justify-between font-mono text-xs">
                  <span className="text-[color:var(--fg-dim)]">
                    {e.duracionDias} día{e.duracionDias > 1 ? "s" : ""} · {e.plazas - e.plazasOcupadas} plazas
                  </span>
                  <span className="tabular-nums text-[color:var(--fg)]">
                    desde {formatPrice(e.precio)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
