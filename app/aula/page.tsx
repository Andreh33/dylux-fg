import type { Metadata } from "next";
import Link from "next/link";
import { cursos } from "@/lib/courses";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Aula Montaraz",
  description:
    "Cursos cortos, intensivos, con expertos. Online, presencial e híbrido.",
};

export default function AulaPage() {
  return (
    <div className="pb-32">
      <section className="border-b border-[color:var(--border-fine)] pt-32 pb-16 lg:pt-44">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <p className="eyebrow mb-6">Aula Montaraz · {cursos.length} cursos</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-[color:var(--fg)]">
            Aprender es
            <br />
            <span className="text-[color:var(--color-laton-6)]">salir mejor al monte.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[color:var(--fg-muted)]">
            Cursos cortos, intensivos, con profesores que han pasado la vida en el campo. Online cuando puede, presencial cuando hace falta. Certificado al final si lo completas.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {cursos.map((c) => (
              <Link
                key={c.slug}
                href={`/aula/${c.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)]">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `
                        radial-gradient(circle at 30% 70%,
                          color-mix(in oklab, var(--color-laton-5) 14%, transparent),
                          transparent 60%),
                        linear-gradient(180deg, var(--color-verde-4), var(--color-verde-2))
                      `,
                    }}
                  />
                  <span className="absolute left-3 top-3 rounded-sm border border-[color:var(--border-fine)] bg-[color:var(--bg)]/60 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[color:var(--fg-muted)] backdrop-blur-sm">
                    {c.modalidad}
                  </span>
                  <span className="absolute right-3 top-3 font-mono text-[10px] text-[color:var(--fg-dim)]">
                    {c.plazas - c.plazasOcupadas} plazas
                  </span>
                </div>
                <h2 className="font-display mt-4 text-xl leading-tight text-[color:var(--fg)] transition-colors group-hover:text-[color:var(--accent)]">
                  {c.titulo}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm text-[color:var(--fg-muted)]">
                  {c.resumen}
                </p>
                <div className="mt-3 flex items-center justify-between font-mono text-xs">
                  <span className="text-[color:var(--fg-dim)]">
                    {c.profesor} · {c.duracion}
                  </span>
                  <span className="tabular-nums text-[color:var(--fg)]">
                    {formatPrice(c.precio)}
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
