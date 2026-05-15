import Link from "next/link";
import type { Metadata } from "next";
import { submarcas, productos } from "@/lib/products";
import { ProductCard } from "@/components/ui/product-card";

export const metadata: Metadata = {
  title: "Tienda",
  description:
    "Catálogo curado: caza, pesca, montaña, cocina y cuchillería. Productos elegidos por curadores con cara y firma.",
};

export default function TiendaPage() {
  return (
    <div className="pt-24 pb-32">
      <section className="border-b border-[color:var(--border-fine)] py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <p className="eyebrow mb-4">Cuatro casas, un techo</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-tight text-[color:var(--fg)]">
            Tienda Montaraz.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[color:var(--fg-muted)]">
            Cada pieza la elige una persona con cara y nombre. Si dudas, pregunta a su curador.
          </p>
        </div>
      </section>

      {/* Submarcas */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-6 px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-10">
          {Object.entries(submarcas).map(([key, sm]) => (
            <Link
              key={key}
              href={`/tienda/${sm.slug}`}
              className="group block rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-8 transition-all hover:border-[color:var(--accent)]"
            >
              <p className="eyebrow mb-2">{sm.eyebrow}</p>
              <h2 className="font-display text-4xl text-[color:var(--fg)] transition-colors group-hover:text-[color:var(--accent)]">
                {sm.nombre}
              </h2>
              <p className="mt-3 text-sm text-[color:var(--fg-muted)]">
                {sm.descripcion}
              </p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm text-[color:var(--accent)]">
                Entrar
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Todo el catálogo plano */}
      <section className="border-t border-[color:var(--border-fine)] pt-16 lg:pt-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="eyebrow mb-3">Todo el catálogo</p>
              <h2 className="font-display text-3xl text-[color:var(--fg)] lg:text-5xl">
                {productos.length} piezas curadas
              </h2>
            </div>
          </div>

          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productos.map((p) => (
              <ProductCard key={p.slug} producto={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
