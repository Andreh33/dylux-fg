"use client";

import { useComparador } from "@/lib/store";
import { productos } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

export default function CompararPage() {
  const slugs = useComparador((s) => s.slugs);
  const quitar = useComparador((s) => s.quitar);
  const items = productos.filter((p) => slugs.includes(p.slug));

  if (items.length === 0) {
    return (
      <div className="grid min-h-[60vh] place-items-center px-6 pt-32 pb-32">
        <div className="text-center">
          <p className="eyebrow mb-4">Comparador</p>
          <h1 className="font-display text-4xl text-[color:var(--fg)]">
            Aún no hay nada que comparar.
          </h1>
          <p className="mt-4 max-w-md text-[color:var(--fg-muted)]">
            Marca «Añadir a comparar» en hasta 4 productos para verlos lado a lado.
          </p>
          <Link
            href="/tienda"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[color:var(--accent)] px-5 py-2.5 text-sm font-medium text-[color:var(--color-verde-1)]"
          >
            Ir a la tienda →
          </Link>
        </div>
      </div>
    );
  }

  // Recolectar todas las labels únicas de fichas
  const labels = Array.from(
    new Set(items.flatMap((p) => p.ficha.map((f) => f.label)))
  );

  return (
    <div className="pt-32 pb-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <p className="eyebrow mb-3">Comparador · {items.length} piezas</p>
        <h1 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight text-[color:var(--fg)]">
          Lado a lado.
        </h1>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr>
                <td className="w-40"></td>
                {items.map((p) => (
                  <th key={p.slug} scope="col" className="p-4 align-top text-left">
                    <div className="aspect-[4/5] w-full rounded-sm bg-[color:var(--bg-raised)]" />
                    <p className="eyebrow mt-3">{p.marca}</p>
                    <p className="font-display text-lg leading-tight text-[color:var(--fg)]">
                      <Link href={`/producto/${p.slug}`} className="hover:text-[color:var(--accent)]">
                        {p.nombre}
                      </Link>
                    </p>
                    <p className="font-mono mt-1 text-sm tabular-nums text-[color:var(--fg)]">
                      {formatPrice(p.precio)}
                    </p>
                    <button
                      type="button"
                      onClick={() => quitar(p.slug)}
                      className="mt-2 text-xs text-[color:var(--fg-dim)] hover:text-[color:var(--danger)]"
                    >
                      Quitar
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[color:var(--border-fine)]">
                <th scope="row" className="eyebrow py-3 text-left">Curador</th>
                {items.map((p) => (
                  <td key={p.slug} className="py-3 text-sm">{p.curador}</td>
                ))}
              </tr>
              <tr className="border-t border-[color:var(--border-fine)]">
                <th scope="row" className="eyebrow py-3 text-left">Submarca</th>
                {items.map((p) => (
                  <td key={p.slug} className="py-3 text-sm capitalize">{p.submarca}</td>
                ))}
              </tr>
              <tr className="border-t border-[color:var(--border-fine)]">
                <th scope="row" className="eyebrow py-3 text-left">Stock</th>
                {items.map((p) => (
                  <td key={p.slug} className="py-3 text-sm">
                    {p.stock > 0 ? `${p.stock} en cuadra` : "Agotado"}
                  </td>
                ))}
              </tr>
              {labels.map((label) => (
                <tr key={label} className="border-t border-[color:var(--border-fine)]">
                  <th scope="row" className="eyebrow py-3 text-left">{label}</th>
                  {items.map((p) => {
                    const valor = p.ficha.find((f) => f.label === label)?.value ?? "—";
                    return (
                      <td key={p.slug} className="py-3 font-mono text-sm tabular-nums text-[color:var(--fg)]">
                        {valor}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
