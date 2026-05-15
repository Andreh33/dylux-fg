import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { regiones, findRegion } from "@/lib/regions";

export async function generateStaticParams() {
  return regiones.map((r) => ({ region: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string }>;
}): Promise<Metadata> {
  const { region } = await params;
  const r = findRegion(region);
  if (!r) return { title: "Región" };
  return { title: r.nombre, description: r.resumen };
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;
  const r = findRegion(region);
  if (!r) notFound();

  return (
    <article className="pt-32 pb-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <nav className="mb-8 text-xs font-mono text-[color:var(--fg-dim)]">
          <Link href="/atlas" className="hover:text-[color:var(--accent)]">← Atlas</Link>
        </nav>

        <header className="border-b border-[color:var(--border-fine)] pb-12">
          <p className="eyebrow mb-3">{r.comunidad}</p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight text-[color:var(--fg)]">
            {r.nombre}.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-[color:var(--fg-muted)]">
            {r.resumen}
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--fg-dim)]">
            Curador · {r.curador}
          </p>
        </header>

        <div className="grid gap-12 pt-12 lg:grid-cols-2 lg:gap-16">
          <section>
            <p className="eyebrow mb-4">Especies de caza</p>
            <ul className="space-y-1.5 text-sm">
              {r.especies.caza.map((e) => (
                <li key={e} className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[color:var(--color-mostaza)]" />
                  <span className="text-[color:var(--fg)]">{e}</span>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <p className="eyebrow mb-4">Especies de pesca</p>
            <ul className="space-y-1.5 text-sm">
              {r.especies.pesca.map((e) => (
                <li key={e} className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[color:var(--color-agua-5)]" />
                  <span className="text-[color:var(--fg)]">{e}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-16">
          <p className="eyebrow mb-3">Modalidades</p>
          <ul className="flex flex-wrap gap-2 text-sm">
            {r.modalidades.map((m) => (
              <li
                key={m}
                className="rounded-sm border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] px-3 py-1 text-[color:var(--fg-muted)]"
              >
                {m}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 rounded-md border-l-2 border-[color:var(--accent)] bg-[color:var(--bg-raised)] p-5">
          <p className="eyebrow mb-2">Mejor época</p>
          <p className="text-base text-[color:var(--fg)]">{r.mejorEpoca}</p>
        </section>

        {r.vedas && (
          <section className="mt-6 rounded-md border-l-2 border-[color:var(--color-vermellon)] bg-[color:var(--bg-raised)] p-5">
            <p className="eyebrow mb-2">Vedas</p>
            <p className="text-sm text-[color:var(--fg-muted)]">{r.vedas}</p>
          </section>
        )}

        {r.cotos.length > 0 && (
          <section className="mt-16">
            <p className="eyebrow mb-4">Cotos y reservas</p>
            <div className="grid gap-4 md:grid-cols-2">
              {r.cotos.map((c) => (
                <div
                  key={c.nombre}
                  className="rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-5"
                >
                  <p className="font-display text-xl text-[color:var(--fg)]">
                    {c.nombre}
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--fg-muted)]">
                    {c.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {r.rios.length > 0 && (
          <section className="mt-16">
            <p className="eyebrow mb-4">Ríos</p>
            <div className="grid gap-4 md:grid-cols-2">
              {r.rios.map((rio) => (
                <div
                  key={rio.nombre}
                  className="rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-5"
                >
                  <p className="font-display text-xl text-[color:var(--fg)]">
                    {rio.nombre}
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--fg-muted)]">
                    {rio.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
