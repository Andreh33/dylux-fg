import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pared de trofeos",
  description: "Trofeos digitales con respeto. Foto, especie, región (sin coordenadas exactas).",
};

const trofeos = [
  { especie: "Ciervo · Cantábrico", fecha: "Berrea 2026", verificado: true },
  { especie: "Trucha del Sella · 38 cm", fecha: "Mayo 2026", verificado: true },
  { especie: "Sarrio · Pirineo", fecha: "Octubre 2025", verificado: true },
  { especie: "Becada · Asturias", fecha: "Diciembre 2024", verificado: false },
  { especie: "Lubina · Cantábrico", fecha: "Noviembre 2024", verificado: true },
  { especie: "Black-bass · Tajo", fecha: "Junio 2023", verificado: false },
];

export default function TrofeosPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <p className="eyebrow mb-3">Tu pared</p>
        <h1 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight text-[color:var(--fg)]">
          Trofeos digitales.
        </h1>
        <p className="mt-6 max-w-xl text-base text-[color:var(--fg-muted)]">
          «Trofeo no es récord; es respeto.» Cada captura se publica con foto, especie y región aproximada. Las coordenadas exactas no se comparten.
        </p>

        {/* Pared 3D ligera con perspective */}
        <div
          className="mt-16"
          style={{
            perspective: "1200px",
          }}
        >
          <div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            style={{
              transform: "rotateX(2deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {trofeos.map((t, i) => (
              <article
                key={i}
                className="group relative aspect-[4/5] rounded-md border-2 border-[color:var(--color-laton-3)] bg-[color:var(--bg-raised)] p-3 transition-transform hover:rotate-y-3"
                style={{
                  boxShadow:
                    "inset 0 0 0 1px var(--color-laton-4), 0 10px 20px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="absolute inset-3"
                  style={{
                    background: `
                      linear-gradient(135deg,
                        var(--color-verde-3) 0%,
                        var(--color-verde-5) 60%,
                        var(--color-laton-3) 100%)
                    `,
                  }}
                />
                <div className="absolute inset-x-3 bottom-3 rounded-sm bg-[color:var(--color-verde-1)]/70 p-3 backdrop-blur-sm">
                  <p className="font-display text-base text-[color:var(--fg)]">
                    {t.especie}
                  </p>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--fg-dim)]">
                      {t.fecha}
                    </span>
                    {t.verificado && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-musgo)]">
                        ✓ Verificado
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
