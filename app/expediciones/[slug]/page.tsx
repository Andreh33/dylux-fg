import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { expediciones, findExpedicion } from "@/lib/expeditions";
import { formatPrice } from "@/lib/utils";

export async function generateStaticParams() {
  return expediciones.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const e = findExpedicion(slug);
  if (!e) return { title: "Expedición" };
  return { title: e.titulo, description: e.resumen };
}

export default async function ExpedicionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const e = findExpedicion(slug);
  if (!e) notFound();

  return (
    <article className="pt-32 pb-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <nav className="mb-8 text-xs font-mono text-[color:var(--fg-dim)]">
          <Link href="/expediciones" className="hover:text-[color:var(--accent)]">← Expediciones</Link>
        </nav>

        <header className="mb-12">
          <p className="eyebrow mb-3">{e.region} · {e.modalidad}</p>
          <h1 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-tight text-[color:var(--fg)]">
            {e.titulo}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[color:var(--fg-muted)]">
            {e.resumen}
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <section>
              <p className="eyebrow mb-4">Guía</p>
              <div className="rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-5">
                <p className="font-display text-xl text-[color:var(--fg)]">{e.guia}</p>
                <p className="mt-1 text-sm text-[color:var(--fg-muted)]">{e.guiaBio}</p>
                <p className="mt-3 font-mono text-xs text-[color:var(--fg-dim)]">
                  Idiomas: {e.idiomasGuia.join(" · ")}
                </p>
              </div>
            </section>

            <section className="mt-10 grid gap-6 md:grid-cols-2">
              <div>
                <p className="eyebrow mb-3">Incluye</p>
                <ul className="space-y-1.5 text-sm text-[color:var(--fg-muted)]">
                  {e.incluye.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span aria-hidden className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[color:var(--color-musgo)]" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow mb-3">No incluye</p>
                <ul className="space-y-1.5 text-sm text-[color:var(--fg-muted)]">
                  {e.noIncluye.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span aria-hidden className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[color:var(--color-vermellon)]" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mt-10">
              <p className="eyebrow mb-3">Nivel exigido</p>
              <p className="text-base text-[color:var(--fg)]">{e.nivelExigido}</p>
            </section>

            <section className="mt-10">
              <p className="eyebrow mb-3">Material necesario</p>
              <ul className="space-y-1.5 text-sm text-[color:var(--fg-muted)]">
                {e.materialNecesario.map((m) => (
                  <li key={m} className="flex items-start gap-2">
                    <span aria-hidden className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[color:var(--accent)]" />
                    {m}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10 rounded-md border-l-2 border-[color:var(--color-mostaza)] bg-[color:var(--bg-raised)] p-5">
              <p className="eyebrow mb-2">Política de cancelación</p>
              <p className="text-sm text-[color:var(--fg-muted)]">{e.cancelacion}</p>
            </section>
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-md border border-[color:var(--border)] bg-[color:var(--bg-raised)] p-6">
              <p className="font-mono text-3xl tabular-nums text-[color:var(--fg)]">
                {formatPrice(e.precio)}
              </p>
              <p className="text-xs text-[color:var(--fg-muted)]">por persona</p>

              <dl className="mt-6 space-y-2 border-y border-[color:var(--border-fine)] py-4 text-sm">
                <Row label="Duración" value={`${e.duracionDias} día${e.duracionDias > 1 ? "s" : ""}`} />
                <Row label="Dificultad" value={e.dificultad} />
                <Row label="Plazas" value={`${e.plazas - e.plazasOcupadas} de ${e.plazas}`} />
              </dl>

              <div className="mt-4 space-y-2">
                <p className="eyebrow">Próximas fechas</p>
                {e.proximasFechas.map((f) => (
                  <label key={f} className="flex cursor-pointer items-center gap-2 rounded-sm border border-[color:var(--border-fine)] px-3 py-2 text-sm hover:border-[color:var(--accent)]">
                    <input type="radio" name="fecha" className="h-4 w-4 accent-[color:var(--accent)]" />
                    {f}
                  </label>
                ))}
              </div>

              <button
                type="button"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[color:var(--accent)] px-5 py-3 text-sm font-medium text-[color:var(--color-verde-1)]"
              >
                Reservar jornada
              </button>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <dt className="text-[color:var(--fg-muted)]">{label}</dt>
      <dd className="text-[color:var(--fg)]">{value}</dd>
    </div>
  );
}
