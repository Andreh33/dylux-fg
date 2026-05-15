import type { Metadata } from "next";
import { AtlasPreview } from "@/components/scene/atlas-preview";

export const metadata: Metadata = {
  title: "Atlas",
  description:
    "Mapa vivo de Iberia salvaje: cotos, ríos, sierras, estuarios. Mejor época, modalidades y permisos.",
};

export default function AtlasPage() {
  return (
    <div>
      <section className="pt-32 pb-8 lg:pt-44">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <p className="eyebrow mb-4">Atlas Montaraz · v1</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-tight text-[color:var(--fg)]">
            Iberia salvaje.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[color:var(--fg-muted)]">
            Catorce regiones cinegéticas, doscientos puntos sobre la mesa. Algunos hay que cuidarlos: los coordenadas exactas no se publican. Si eres Maestre, hay un cuaderno secreto debajo.
          </p>
        </div>
      </section>
      <AtlasPreview />
    </div>
  );
}
