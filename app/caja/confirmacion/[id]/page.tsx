import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pedido confirmado",
  description: "Tu morral va camino del puesto.",
};

export default async function ConfirmacionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="grid min-h-[80vh] place-items-center px-6 pt-32 pb-32">
      <div className="mx-auto max-w-2xl text-center">
        {/* Sello tinta */}
        <div className="mx-auto mb-8 inline-block rotate-[-6deg] rounded-md border-2 border-[color:var(--color-vermellon)] px-6 py-3">
          <p className="font-display text-2xl uppercase tracking-[0.16em] text-[color:var(--color-vermellon)]">
            Enviado
          </p>
        </div>

        <p className="eyebrow mb-4">Pedido #{id}</p>
        <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-tight text-[color:var(--fg)]">
          Hecho.
          <br />
          <span className="text-[color:var(--color-laton-6)]">Camino del puesto.</span>
        </h1>
        <p className="mt-6 text-lg text-[color:var(--fg-muted)]">
          Lo tuyo está embalado en kraft, con cordel de yute y un saludo a mano. Te avisaremos por email cuando salga del almacén, y por SMS el día de la entrega.
        </p>

        <div className="mt-12 grid gap-4 text-left sm:grid-cols-3">
          <div className="rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-4">
            <p className="eyebrow mb-1">Envío estimado</p>
            <p className="text-sm text-[color:var(--fg)]">
              48 h península
              <br />
              <span className="text-xs text-[color:var(--fg-dim)]">SEUR · seguimiento por email</span>
            </p>
          </div>
          <div className="rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-4">
            <p className="eyebrow mb-1">Factura</p>
            <p className="text-sm text-[color:var(--fg)]">
              En PDF
              <br />
              <span className="text-xs text-[color:var(--fg-dim)]">En tu cuenta y por email</span>
            </p>
          </div>
          <div className="rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-4">
            <p className="eyebrow mb-1">Devolución</p>
            <p className="text-sm text-[color:var(--fg)]">
              365 días
              <br />
              <span className="text-xs text-[color:var(--fg-dim)]">Self-RMA en cuenta</span>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/cuenta/pedidos"
            className="rounded-md bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-[color:var(--color-verde-1)]"
          >
            Ver mis pedidos
          </Link>
          <Link
            href="/aula"
            className="rounded-md border border-[color:var(--border)] px-6 py-3 text-sm text-[color:var(--fg)] hover:border-[color:var(--accent)]"
          >
            Apúntame a un curso
          </Link>
        </div>

        <p className="mt-12 font-display text-2xl text-[color:var(--color-laton-6)]">
          Buen viento.
        </p>
      </div>
    </div>
  );
}
