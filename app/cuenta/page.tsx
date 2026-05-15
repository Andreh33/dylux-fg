import type { Metadata } from "next";
import Link from "next/link";
import { saludoPorHora } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Mi cuenta",
  description: "Tu diario, tus pedidos, tus licencias, tu Club Maestre.",
};

const secciones = [
  { href: "/cuenta/pedidos", titulo: "Pedidos", desc: "Estado, seguimiento, devoluciones." },
  { href: "/cuenta/cuaderno", titulo: "Cuaderno", desc: "Listas de deseos (puedes tener varias)." },
  { href: "/diario", titulo: "Diario de campo", desc: "Capturas, jornadas, anotaciones." },
  { href: "/trofeos", titulo: "Trofeos digitales", desc: "Tu pared, con respeto." },
  { href: "/club/avituallamiento", titulo: "Avituallamiento", desc: "Próxima caja y opciones." },
  { href: "/cuenta/direcciones", titulo: "Direcciones", desc: "Casa, caseta del coto..." },
  { href: "/cuenta/licencias", titulo: "Licencias", desc: "Subida cifrada at-rest." },
  { href: "/cuenta/configuracion", titulo: "Configuración", desc: "Privacidad, idioma, moneda." },
];

export default function CuentaPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <p className="eyebrow mb-3">{saludoPorHora()}</p>
        <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1] tracking-tight text-[color:var(--fg)]">
          Tu cuenta.
        </h1>

        {/* Estado club */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-md border border-[color:var(--color-maestre-3)] bg-[color:var(--bg-raised)] p-5">
            <p className="eyebrow mb-1 text-[color:var(--color-maestre-4)]">Nivel · Aprendiz</p>
            <p className="font-display text-2xl text-[color:var(--fg)]">
              312 / 500 €
            </p>
            <p className="mt-2 text-xs text-[color:var(--fg-muted)]">
              Te faltan 188 € de gasto neto o equivalente en actividad para llegar a Cazador/Pescador.
            </p>
          </div>
          <div className="rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-5">
            <p className="eyebrow mb-1">Próxima caja</p>
            <p className="font-display text-2xl text-[color:var(--fg)]">12 ene</p>
            <p className="mt-2 text-xs text-[color:var(--fg-muted)]">
              Avituallamiento Montés · Cierra el día 5. Puedes cambiar 1 producto.
            </p>
          </div>
          <div className="rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-5">
            <p className="eyebrow mb-1">Próxima jornada</p>
            <p className="font-display text-2xl text-[color:var(--fg)]">
              Sin reserva
            </p>
            <p className="mt-2 text-xs text-[color:var(--fg-muted)]">
              <Link href="/expediciones" className="text-[color:var(--accent)] hover:underline">
                Apúntate a una expedición →
              </Link>
            </p>
          </div>
        </div>

        {/* Sub-secciones */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {secciones.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)]/40 p-5 transition-colors hover:border-[color:var(--accent)]"
            >
              <p className="font-display text-xl text-[color:var(--fg)]">{s.titulo}</p>
              <p className="mt-2 text-sm text-[color:var(--fg-muted)]">{s.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 border-t border-[color:var(--border-fine)] pt-6">
          <button
            type="button"
            className="text-sm text-[color:var(--fg-muted)] underline-offset-4 hover:text-[color:var(--danger)] hover:underline"
          >
            Cerrar sesión · Buen viento
          </button>
        </div>
      </div>
    </div>
  );
}
