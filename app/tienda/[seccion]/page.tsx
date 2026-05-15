import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { submarcas, productos } from "@/lib/products";
import { ProductCard } from "@/components/ui/product-card";

type Params = { seccion: string };

const seccionToSubmarca: Record<string, keyof typeof submarcas> = {
  caza: "monte",
  pesca: "aguas",
  "montaña": "sendas",
  montana: "sendas",
  cocina: "cocina",
  cuchilleria: "cuchilleria",
};

export async function generateStaticParams() {
  return Object.values(submarcas).map((sm) => ({ seccion: sm.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { seccion } = await params;
  const submarca = seccionToSubmarca[seccion];
  if (!submarca) return { title: "Tienda" };
  const sm = submarcas[submarca];
  return {
    title: `${sm.nombre} · Tienda`,
    description: sm.descripcion,
  };
}

export default async function SeccionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { seccion } = await params;
  const submarca = seccionToSubmarca[seccion];
  if (!submarca) notFound();

  const sm = submarcas[submarca];
  const items = productos.filter((p) => p.submarca === submarca);

  return (
    <div className="pt-24 pb-32">
      {/* Cabecera de sección */}
      <section className="relative overflow-hidden border-b border-[color:var(--border-fine)] py-20 lg:py-32">
        {/* Trama topográfica decorativa */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full text-[color:var(--color-verde-7)] opacity-30"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <path
              key={i}
              d={`M0,${30 + i * 32} Q360,${10 + i * 36} 720,${
                50 + i * 30
              } T1440,${30 + i * 32}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          ))}
        </svg>

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <nav aria-label="Migas de pan" className="mb-6 text-xs font-mono text-[color:var(--fg-dim)]">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="hover:text-[color:var(--accent)]">Inicio</a></li>
              <li aria-hidden>/</li>
              <li><a href="/tienda" className="hover:text-[color:var(--accent)]">Tienda</a></li>
              <li aria-hidden>/</li>
              <li className="text-[color:var(--fg-muted)]">{sm.nombre}</li>
            </ol>
          </nav>

          <p className="eyebrow mb-4">{sm.eyebrow}</p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight text-[color:var(--fg)]">
            {sm.nombre}.
          </h1>
          <p className="font-display mt-6 max-w-3xl text-2xl text-[color:var(--color-laton-6)] lg:text-3xl">
            «{sm.lema}»
          </p>
          <p className="mt-6 max-w-xl text-base text-[color:var(--fg-muted)]">
            {sm.descripcion}
          </p>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--fg-dim)]">
            {items.length} piezas en cuadra
          </p>
        </div>
      </section>

      {/* Productos */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          {items.length === 0 ? (
            <p className="text-center text-[color:var(--fg-muted)]">
              Aún no hay rastro aquí. Vuelve la próxima semana.
            </p>
          ) : (
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((p) => (
                <ProductCard key={p.slug} producto={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
