import type { ReactNode } from "react";

export function LegalPage({
  eyebrow,
  titulo,
  intro,
  children,
}: {
  eyebrow: string;
  titulo: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div className="pb-32 pt-32 lg:pt-44">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tight text-[color:var(--fg)]">
          {titulo}
        </h1>
        {intro && (
          <p className="mt-6 text-lg text-[color:var(--fg-muted)]">{intro}</p>
        )}
        <div className="prose-montaraz mt-12 space-y-8">{children}</div>
      </div>
    </div>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display mt-12 text-2xl text-[color:var(--color-laton-6)] first:mt-0">
      {children}
    </h2>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-base leading-relaxed text-[color:var(--fg-muted)]">
      {children}
    </p>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="space-y-2 text-base text-[color:var(--fg-muted)]">{children}</ul>;
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span aria-hidden className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-[color:var(--accent)]" />
      <span>{children}</span>
    </li>
  );
}
