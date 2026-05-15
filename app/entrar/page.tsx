import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Entrar",
  description: "Magic link, passkey, Google o Apple. Como prefieras.",
};

export default function EntrarPage() {
  return (
    <div className="grid min-h-[80vh] place-items-center px-6 pt-32 pb-16">
      <div className="w-full max-w-md">
        <p className="eyebrow mb-4">Entrar a la casa</p>
        <h1 className="font-display text-4xl leading-tight text-[color:var(--fg)]">
          Bienvenido de vuelta.
        </h1>
        <p className="mt-3 text-[color:var(--fg-muted)]">
          Te enviamos un enlace mágico al correo. Sin contraseña, sin recordar, sin perder tiempo.
        </p>

        <form className="mt-8 space-y-4">
          <label className="block">
            <span className="eyebrow mb-1.5 block">Email</span>
            <input
              type="email"
              autoComplete="email"
              placeholder="tu@email.com"
              className="w-full rounded-md border border-[color:var(--border)] bg-[color:var(--bg)] px-3 py-3 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--fg-dim)] focus-visible:border-[color:var(--accent)]"
            />
          </label>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-[color:var(--color-verde-1)] transition-colors hover:bg-[color:var(--accent-hover)]"
          >
            Enviarme un enlace mágico
          </button>
        </form>

        <div className="relative my-8">
          <hr className="border-[color:var(--border-fine)]" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[color:var(--bg)] px-3 text-xs uppercase tracking-[0.16em] text-[color:var(--fg-dim)]">
            o
          </span>
        </div>

        <div className="space-y-3">
          <OAuthBtn provider="Passkey (Touch ID / Face ID)" />
          <OAuthBtn provider="Continuar con Google" />
          <OAuthBtn provider="Continuar con Apple" />
        </div>

        <p className="mt-8 text-center text-sm text-[color:var(--fg-muted)]">
          ¿Primera vez?{" "}
          <Link
            href="/registro"
            className="text-[color:var(--accent)] underline-offset-4 hover:underline"
          >
            Date de alta
          </Link>
        </p>
      </div>
    </div>
  );
}

function OAuthBtn({ provider }: { provider: string }) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-center gap-3 rounded-md border border-[color:var(--border)] px-6 py-3 text-sm text-[color:var(--fg)] transition-colors hover:border-[color:var(--accent)]"
    >
      {provider}
    </button>
  );
}
