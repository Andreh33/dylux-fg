import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Date de alta",
  description: "Crea tu cuenta Montaraz y empieza a recibir el Cuaderno de Bitácora.",
};

export default function RegistroPage() {
  return (
    <div className="grid min-h-[80vh] place-items-center px-6 pt-32 pb-16">
      <div className="w-full max-w-md">
        <p className="eyebrow mb-4">Date de alta</p>
        <h1 className="font-display text-4xl leading-tight text-[color:var(--fg)]">
          Cruza la puerta.
        </h1>
        <p className="mt-3 text-[color:var(--fg-muted)]">
          Sin contraseña que recordar. Te enviamos un enlace mágico al correo y dentro.
        </p>

        <form className="mt-8 space-y-4">
          <label className="block">
            <span className="eyebrow mb-1.5 block">Email</span>
            <input
              type="email"
              autoComplete="email"
              placeholder="tu@email.com"
              className="w-full rounded-md border border-[color:var(--border)] bg-[color:var(--bg)] px-3 py-3 text-sm text-[color:var(--fg)] focus-visible:border-[color:var(--accent)]"
            />
          </label>
          <label className="block">
            <span className="eyebrow mb-1.5 block">Nombre</span>
            <input
              type="text"
              autoComplete="name"
              className="w-full rounded-md border border-[color:var(--border)] bg-[color:var(--bg)] px-3 py-3 text-sm text-[color:var(--fg)] focus-visible:border-[color:var(--accent)]"
            />
          </label>

          <fieldset>
            <legend className="eyebrow mb-2">¿Qué te interesa?</legend>
            <div className="grid grid-cols-2 gap-2">
              {["Caza", "Pesca", "Montaña", "Cocina"].map((opt) => (
                <label
                  key={opt}
                  className="flex cursor-pointer items-center gap-2 rounded-md border border-[color:var(--border-fine)] px-3 py-2 text-sm"
                >
                  <input type="checkbox" className="h-4 w-4 accent-[color:var(--accent)]" />
                  {opt}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="flex items-start gap-2 text-sm text-[color:var(--fg-muted)]">
            <input type="checkbox" className="mt-0.5 h-4 w-4 accent-[color:var(--accent)]" />
            <span>
              Quiero el Cuaderno de Bitácora (newsletter mensual sobrio).
            </span>
          </label>

          <label className="flex items-start gap-2 text-sm text-[color:var(--fg-muted)]">
            <input
              type="checkbox"
              required
              className="mt-0.5 h-4 w-4 accent-[color:var(--accent)]"
            />
            <span>
              Acepto los <Link href="/terminos" className="text-[color:var(--accent)] underline-offset-4 hover:underline">términos</Link> y la <Link href="/privacidad" className="text-[color:var(--accent)] underline-offset-4 hover:underline">privacidad</Link>.
            </span>
          </label>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-[color:var(--color-verde-1)] transition-colors hover:bg-[color:var(--accent-hover)]"
          >
            Date de alta
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-[color:var(--fg-muted)]">
          ¿Ya tienes cuenta?{" "}
          <Link href="/entrar" className="text-[color:var(--accent)] underline-offset-4 hover:underline">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
