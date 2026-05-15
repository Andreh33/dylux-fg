import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cursos, findCurso } from "@/lib/courses";
import { formatPrice } from "@/lib/utils";

export async function generateStaticParams() {
  return cursos.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const curso = findCurso(slug);
  if (!curso) return { title: "Curso" };
  return { title: curso.titulo, description: curso.resumen };
}

export default async function CursoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const curso = findCurso(slug);
  if (!curso) notFound();

  return (
    <article className="pt-32 pb-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <nav className="mb-8 text-xs font-mono text-[color:var(--fg-dim)]">
          <Link href="/aula" className="hover:text-[color:var(--accent)]">← Aula</Link>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-3">{curso.modalidad} · {curso.duracion}</p>
            <h1 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-tight text-[color:var(--fg)]">
              {curso.titulo}
            </h1>
            <p className="mt-6 text-lg text-[color:var(--fg-muted)]">{curso.resumen}</p>

            <section className="mt-12">
              <p className="eyebrow mb-4">Profesor</p>
              <div className="flex items-start gap-4">
                <div className="aspect-square w-20 rounded-full bg-[color:var(--bg-raised)]" />
                <div>
                  <p className="font-display text-2xl text-[color:var(--fg)]">
                    {curso.profesor}
                  </p>
                  <p className="text-sm text-[color:var(--fg-muted)]">
                    {curso.profesorBio}
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-12">
              <p className="eyebrow mb-4">Temario</p>
              <ol className="space-y-3">
                {curso.temario.map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span aria-hidden className="mt-0.5 font-mono text-xs text-[color:var(--fg-dim)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[color:var(--fg)]">{t}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-12">
              <p className="eyebrow mb-4">Material necesario</p>
              <ul className="space-y-1.5 text-sm text-[color:var(--fg-muted)]">
                {curso.material.map((m) => (
                  <li key={m} className="flex items-start gap-2">
                    <span aria-hidden className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[color:var(--accent)]" />
                    {m}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar de reserva */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-md border border-[color:var(--border)] bg-[color:var(--bg-raised)] p-6">
              <p className="font-mono text-3xl tabular-nums text-[color:var(--fg)]">
                {formatPrice(curso.precio)}
              </p>
              {curso.ubicacion && (
                <p className="mt-1 text-xs text-[color:var(--fg-muted)]">
                  Lugar · {curso.ubicacion}
                </p>
              )}

              <dl className="mt-6 space-y-2 border-y border-[color:var(--border-fine)] py-4 text-sm">
                <Row label="Próxima fecha" value={curso.proximaFecha} />
                <Row label="Plazas" value={`${curso.plazas - curso.plazasOcupadas} de ${curso.plazas}`} />
                <Row label="Sesiones" value={`${curso.sesiones} sesiones`} />
                <Row label="Certificado" value={curso.certificado ? "Sí" : "No"} />
              </dl>

              <button
                type="button"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[color:var(--accent)] px-5 py-3 text-sm font-medium text-[color:var(--color-verde-1)]"
              >
                Apúntame · {formatPrice(curso.precio)}
              </button>
              <p className="mt-3 text-center text-xs text-[color:var(--fg-dim)]">
                Si no puedes asistir, te lo cambiamos sin coste.
              </p>
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
