import type { Metadata } from "next";
import { LunaMareas } from "@/components/scene/luna-mareas";

export const metadata: Metadata = {
  title: "Calendario lunar y mareas",
  description:
    "Mareas, lunas, vedas y predicción de pesca/caza. Datos AEMET + Puertos del Estado.",
};

export default function CalendarioPage() {
  return (
    <div>
      <section className="pt-32 pb-8 lg:pt-44">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <p className="eyebrow mb-4">Calendario · Lunas · Mareas · Vedas</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-tight text-[color:var(--fg)]">
            Cuándo, no qué.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[color:var(--fg-muted)]">
            La luna y la marea deciden tu jornada. Aquí los datos en vivo, una recomendación honesta y el botón para apuntarse al boletín que te avisa cuando hay luna buena.
          </p>
        </div>
      </section>
      <LunaMareas />
    </div>
  );
}
