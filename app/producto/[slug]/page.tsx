import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { findProduct, productos } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

type Params = { slug: string };

export async function generateStaticParams() {
  return productos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const producto = findProduct(slug);
  if (!producto) return { title: "Producto" };
  return {
    title: producto.nombre,
    description: producto.resumen,
    openGraph: {
      title: producto.nombre,
      description: producto.resumen,
    },
  };
}

export default async function ProductoPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const producto = findProduct(slug);
  if (!producto) notFound();

  // Relacionados: misma submarca, distinto slug, máx 3
  const relacionados = productos
    .filter((p) => p.submarca === producto.submarca && p.slug !== producto.slug)
    .slice(0, 3);

  return (
    <article className="pt-24 pb-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <nav aria-label="Migas de pan" className="mb-8 text-xs font-mono text-[color:var(--fg-dim)]">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-[color:var(--accent)]">Inicio</Link></li>
            <li aria-hidden>/</li>
            <li><Link href="/tienda" className="hover:text-[color:var(--accent)]">Tienda</Link></li>
            <li aria-hidden>/</li>
            <li className="text-[color:var(--fg-muted)]">{producto.nombre}</li>
          </ol>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* Galería */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)]">
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    radial-gradient(circle at 50% 60%,
                      color-mix(in oklab, var(--color-laton-5) 18%, transparent),
                      transparent 60%),
                    linear-gradient(180deg,
                      var(--color-verde-4) 0%,
                      var(--color-verde-3) 100%)
                  `,
                }}
              />

              {/* Sellos */}
              <div className="absolute left-6 top-6 flex flex-col gap-2">
                {producto.selloHandTested && (
                  <span className="rounded-sm bg-[color:var(--color-vermellon)] px-3 py-1 text-xs font-mono uppercase tracking-wider text-[color:var(--color-laton-8)]">
                    Hand-tested
                  </span>
                )}
                {producto.estado === "limitada" && (
                  <span className="rounded-sm bg-[color:var(--color-maestre-3)] px-3 py-1 text-xs font-mono uppercase tracking-wider text-[color:var(--color-verde-1)]">
                    Edición limitada
                  </span>
                )}
              </div>

              <div className="absolute bottom-6 right-6 text-right font-mono text-[10px] uppercase tracking-wider text-[color:var(--fg-dim)]">
                <p>Foto 1 de 6 · vista placeholder</p>
                <p className="mt-1">Visor 3D · AR disponibles en sprint 2</p>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-3 grid grid-cols-6 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className="aspect-square rounded-sm border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] transition-colors hover:border-[color:var(--accent)]"
                  aria-label={`Foto ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Datos / CTA */}
          <div>
            <p className="eyebrow mb-3">{producto.marca}</p>
            <h1 className="font-display text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight text-[color:var(--fg)]">
              {producto.nombre}
            </h1>

            <div className="mt-6 flex items-baseline gap-4">
              <p className="font-mono text-3xl tabular-nums text-[color:var(--fg)]">
                {formatPrice(producto.precio)}
              </p>
              <p className="text-sm text-[color:var(--fg-dim)]">IVA incl.</p>
            </div>

            <p className="mt-6 text-base leading-relaxed text-[color:var(--fg-muted)]">
              {producto.resumen}
            </p>

            {/* Stock */}
            <div className="mt-8 flex items-center gap-3">
              <StockIndicator stock={producto.stock} />
              <p className="text-sm text-[color:var(--fg-muted)]">
                {producto.stock > 5
                  ? "En cuadra"
                  : producto.stock > 0
                    ? `Quedan ${producto.stock} en cuadra`
                    : "Agotado · avísame cuando vuelva"}
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-10 space-y-3">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[color:var(--accent)] px-6 py-4 text-sm font-medium text-[color:var(--color-verde-1)] transition-colors hover:bg-[color:var(--accent-hover)]"
              >
                Añadir al morral
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="rounded-md border border-[color:var(--border)] px-4 py-3 text-sm text-[color:var(--fg)] transition-colors hover:border-[color:var(--accent)]"
                >
                  Apartar 24 h
                </button>
                <button
                  type="button"
                  className="rounded-md border border-[color:var(--border)] px-4 py-3 text-sm text-[color:var(--fg)] transition-colors hover:border-[color:var(--accent)]"
                >
                  Guardar en cuaderno
                </button>
              </div>
            </div>

            {/* "Por qué lo elegimos" */}
            <section className="mt-12 rounded-md border-l-2 border-[color:var(--accent)] bg-[color:var(--bg-raised)] p-6">
              <p className="eyebrow mb-3">Por qué lo elegimos</p>
              <p className="text-base italic leading-relaxed text-[color:var(--fg)]">
                «{producto.porQueLoElegimos}»
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--fg-dim)]">
                — {producto.curador}, curador
              </p>
            </section>

            {/* Ficha técnica */}
            <section className="mt-12">
              <p className="eyebrow mb-4">Ficha técnica</p>
              <dl className="divide-y divide-[color:var(--border-fine)]">
                {producto.ficha.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[1fr_2fr] gap-4 py-3 text-sm"
                  >
                    <dt className="text-[color:var(--fg-muted)]">{row.label}</dt>
                    <dd className="font-mono tabular-nums text-[color:var(--fg)]">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Garantía */}
            <section className="mt-12 grid grid-cols-3 gap-4 border-t border-[color:var(--border-fine)] pt-8 text-xs">
              <div>
                <p className="font-mono text-[color:var(--fg-dim)] uppercase tracking-[0.16em]">
                  Envío
                </p>
                <p className="mt-1 text-[color:var(--fg)]">48 h península</p>
              </div>
              <div>
                <p className="font-mono text-[color:var(--fg-dim)] uppercase tracking-[0.16em]">
                  Devolución
                </p>
                <p className="mt-1 text-[color:var(--fg)]">365 días</p>
              </div>
              <div>
                <p className="font-mono text-[color:var(--fg-dim)] uppercase tracking-[0.16em]">
                  Garantía
                </p>
                <p className="mt-1 text-[color:var(--fg)]">Montaraz · de por vida</p>
              </div>
            </section>
          </div>
        </div>

        {/* Relacionados */}
        {relacionados.length > 0 && (
          <section className="mt-32 border-t border-[color:var(--border-fine)] pt-16">
            <p className="eyebrow mb-3">Va con esto</p>
            <h2 className="font-display text-3xl text-[color:var(--fg)]">
              Otras piezas curadas por {producto.curador}
            </h2>
            <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {relacionados.map((p) => (
                <RelatedCard key={p.slug} producto={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

function StockIndicator({ stock }: { stock: number }) {
  const visibles = Math.min(stock, 8);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: visibles }).map((_, i) => (
        <span
          key={i}
          aria-hidden
          className="h-2 w-2 rounded-full bg-[color:var(--accent)]"
          style={{ opacity: 1 - i * 0.08 }}
        />
      ))}
      {stock > 8 && (
        <span aria-hidden className="ml-1 font-mono text-xs text-[color:var(--fg-dim)]">
          ···
        </span>
      )}
    </div>
  );
}

function RelatedCard({ producto }: { producto: typeof productos[number] }) {
  return (
    <Link
      href={`/producto/${producto.slug}`}
      className="group block rounded-md border border-[color:var(--border-fine)] p-4 transition-colors hover:border-[color:var(--accent)]"
    >
      <div className="aspect-[4/5] rounded-sm bg-[color:var(--bg-raised)]" />
      <h3 className="mt-3 font-display text-lg text-[color:var(--fg)] transition-colors group-hover:text-[color:var(--accent)]">
        {producto.nombre}
      </h3>
      <p className="font-mono text-sm tabular-nums text-[color:var(--fg-muted)]">
        {formatPrice(producto.precio)}
      </p>
    </Link>
  );
}
