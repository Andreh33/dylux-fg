import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diario de campo",
  description: "Capturas, jornadas, anotaciones. Privado por defecto. Coordenadas exactas nunca.",
};

const entradas = [
  {
    fecha: "12 nov 2026",
    hora: "07:14",
    lugar: "Picos de Europa · Macizo Oriental",
    modalidad: "Rececho",
    especie: "Ciervo macho",
    detalle: "Tirada 187 m. Sako 90 .308 Win. Hornady ELD-X 178 gr. Pieza cobrada limpia. Luna llena al 78%, viento NE 6 km/h.",
  },
  {
    fecha: "5 nov 2026",
    hora: "16:32",
    lugar: "Río Sella · Coto de Carrizos",
    modalidad: "Mosca seca",
    especie: "Trucha asalmonada 38 cm",
    detalle: "Captura-suelta. Royal Sella #16. Cazonete 4. Marea baja saliente. Tres subidas previas, picó a la cuarta deriva.",
  },
  {
    fecha: "18 oct 2026",
    hora: "06:48",
    lugar: "Sierra de Gredos · Vereda del Cabrerizo",
    modalidad: "Rececho",
    especie: "Sin cobro",
    detalle: "Vimos tres machos a más de 400 m. Decidí no disparar. Demasiado lejos, viento variable. Cobré dos kilómetros andando por panorámica.",
  },
];

export default function DiarioPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="flex items-end justify-between gap-4 border-b border-[color:var(--border-fine)] pb-8">
          <div>
            <p className="eyebrow mb-3">Diario de campo · 2026</p>
            <h1 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight text-[color:var(--fg)]">
              Tu cuaderno.
            </h1>
          </div>
          <button
            type="button"
            className="rounded-md bg-[color:var(--accent)] px-4 py-2 text-sm font-medium text-[color:var(--color-verde-1)]"
          >
            + Nueva entrada
          </button>
        </div>

        <ol className="mt-12 space-y-12">
          {entradas.map((e, i) => (
            <li key={i} className="relative pl-8">
              <span aria-hidden className="absolute left-0 top-2 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              {i < entradas.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[3px] top-4 h-full w-px bg-[color:var(--border-fine)]"
                />
              )}
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--fg-dim)]">
                {e.fecha} · {e.hora} · {e.lugar}
              </p>
              <h2 className="font-display mt-2 text-2xl text-[color:var(--fg)]">
                {e.modalidad} · <span className="text-[color:var(--color-laton-6)]">{e.especie}</span>
              </h2>
              <p className="mt-2 text-sm text-[color:var(--fg-muted)]">{e.detalle}</p>
            </li>
          ))}
        </ol>

        <p className="mt-16 text-xs text-[color:var(--fg-dim)]">
          Tu diario es privado por defecto. Las coordenadas exactas no se publican nunca; sólo región aproximada.
        </p>
      </div>
    </div>
  );
}
