"use client";

import Link from "next/link";
import { useCuaderno } from "@/lib/store";
import { productos } from "@/lib/products";
import { ProductCard } from "@/components/ui/product-card";

export default function CuadernoPage() {
  const slugs = useCuaderno((s) => s.slugs);
  const guardados = productos.filter((p) => slugs.includes(p.slug));

  return (
    <div className="pt-32 pb-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <p className="eyebrow mb-3">Tu cuaderno</p>
        <h1 className="font-display text-[clamp(2rem,4vw,3rem)] leading-tight text-[color:var(--fg)]">
          Lo que has guardado.
        </h1>

        {guardados.length === 0 ? (
          <div className="mt-12 rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-12 text-center">
            <p className="font-display text-2xl text-[color:var(--fg)]">
              Tu cuaderno está vacío.
            </p>
            <p className="mt-3 text-[color:var(--fg-muted)]">
              Empieza por hojear la tienda y guarda lo que te interese.
            </p>
            <Link
              href="/tienda"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[color:var(--accent)] px-5 py-2.5 text-sm font-medium text-[color:var(--color-verde-1)]"
            >
              Pasar por la tienda →
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {guardados.map((p) => (
              <ProductCard key={p.slug} producto={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
