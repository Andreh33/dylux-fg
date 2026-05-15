import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Mis pedidos" };

const pedidos = [
  {
    id: "M-2026-1014",
    fecha: "14 nov 2026",
    estado: "Camino del puesto",
    total: 2515,
    items: ["Sako 90 Hunter · .308 Win", "Hornady ELD-X 178 gr × 2"],
  },
  {
    id: "M-2026-0987",
    fecha: "2 nov 2026",
    estado: "Entregado",
    total: 89,
    items: ["Pallarès Solsona Carnicero"],
  },
  {
    id: "M-2026-0954",
    fecha: "18 oct 2026",
    estado: "Entregado",
    total: 549,
    items: ["Härkila Ingels GTX Jacket · talla L"],
  },
];

export default function PedidosPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <p className="eyebrow mb-3">Tus pedidos</p>
        <h1 className="font-display text-[clamp(2rem,4vw,3rem)] leading-tight text-[color:var(--fg)]">
          Lo que llevas pidiendo.
        </h1>

        <table className="mt-12 w-full text-sm">
          <thead>
            <tr className="border-b border-[color:var(--border-fine)] text-left">
              <th className="eyebrow py-3">Pedido</th>
              <th className="eyebrow py-3">Fecha</th>
              <th className="eyebrow py-3">Estado</th>
              <th className="eyebrow py-3 text-right">Total</th>
              <th className="eyebrow py-3"></th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((p) => (
              <tr key={p.id} className="border-b border-[color:var(--border-fine)]">
                <td className="py-4 align-top font-mono">{p.id}</td>
                <td className="py-4 align-top text-[color:var(--fg-muted)]">{p.fecha}</td>
                <td className="py-4 align-top">
                  <span
                    className={`rounded-sm px-2 py-1 text-xs font-mono uppercase ${
                      p.estado === "Camino del puesto"
                        ? "bg-[color:var(--color-mostaza)]/20 text-[color:var(--color-mostaza)]"
                        : "bg-[color:var(--color-musgo)]/20 text-[color:var(--color-musgo)]"
                    }`}
                  >
                    {p.estado}
                  </span>
                  <p className="mt-2 text-xs text-[color:var(--fg-dim)]">
                    {p.items.join(" · ")}
                  </p>
                </td>
                <td className="py-4 align-top text-right font-mono tabular-nums">
                  {p.total.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}
                </td>
                <td className="py-4 align-top text-right">
                  <Link
                    href={`/cuenta/pedidos/${p.id}`}
                    className="text-sm text-[color:var(--accent)] hover:underline"
                  >
                    Ver →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
