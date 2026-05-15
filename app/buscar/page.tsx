import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buscar",
  description: "Busca productos, cursos, expediciones, magazine, atlas. Cmd+K en cualquier página.",
};

export default function BuscarPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <p className="eyebrow mb-4">Buscador global</p>
        <h1 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-tight text-[color:var(--fg)]">
          Pulsa{" "}
          <kbd className="font-mono text-3xl text-[color:var(--accent)]">⌘K</kbd>
          <br />
          en cualquier página.
        </h1>
        <p className="mt-8 text-lg text-[color:var(--fg-muted)]">
          O simplemente <kbd className="rounded-sm border border-[color:var(--border-fine)] px-2 py-0.5 font-mono text-sm">/</kbd> si tu teclado no tiene cmd.
        </p>

        <div className="mt-12 space-y-3">
          <p className="eyebrow">Atajos útiles</p>
          <ul className="space-y-1.5 text-sm text-[color:var(--fg-muted)]">
            <li><kbd className="rounded-sm border border-[color:var(--border-fine)] px-1.5 py-0.5 font-mono text-xs">⌘K</kbd> o <kbd className="rounded-sm border border-[color:var(--border-fine)] px-1.5 py-0.5 font-mono text-xs">/</kbd> · abrir buscador</li>
            <li><kbd className="rounded-sm border border-[color:var(--border-fine)] px-1.5 py-0.5 font-mono text-xs">esc</kbd> · cerrar buscador o modales</li>
            <li><kbd className="rounded-sm border border-[color:var(--border-fine)] px-1.5 py-0.5 font-mono text-xs">↵</kbd> · abrir resultado</li>
          </ul>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <Link href="/tienda" className="rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-5 hover:border-[color:var(--accent)]">
            <p className="font-display text-xl text-[color:var(--fg)]">Tienda completa</p>
            <p className="mt-2 text-sm text-[color:var(--fg-muted)]">Todos los productos curados.</p>
          </Link>
          <Link href="/revista" className="rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-5 hover:border-[color:var(--accent)]">
            <p className="font-display text-xl text-[color:var(--fg)]">Revista</p>
            <p className="mt-2 text-sm text-[color:var(--fg-muted)]">Pieza larga, audio, ensayo.</p>
          </Link>
          <Link href="/atlas" className="rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-5 hover:border-[color:var(--accent)]">
            <p className="font-display text-xl text-[color:var(--fg)]">Atlas</p>
            <p className="mt-2 text-sm text-[color:var(--fg-muted)]">Iberia salvaje.</p>
          </Link>
          <Link href="/aula" className="rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-5 hover:border-[color:var(--accent)]">
            <p className="font-display text-xl text-[color:var(--fg)]">Aula</p>
            <p className="mt-2 text-sm text-[color:var(--fg-muted)]">Cursos online y presenciales.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
