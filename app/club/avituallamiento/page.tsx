import type { Metadata } from "next";
import { Avituallamiento } from "@/components/scene/avituallamiento";

export const metadata: Metadata = {
  title: "El Avituallamiento",
  description:
    "Caja mensual curada. Tres niveles: Montés, Maestre, Inédito. Pausa o cancela sin penalización.",
};

export default function AvituallamientoPage() {
  return (
    <div>
      <section className="pt-32 pb-8 lg:pt-44">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <p className="eyebrow mb-4">Suscripción mensual</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-tight text-[color:var(--fg)]">
            El Avituallamiento.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[color:var(--fg-muted)]">
            Cada mes te llega una caja con cosas curadas. Consumibles para el campo + un detalle de descubrimiento. La eliges tú; la cierra el curador.
          </p>
        </div>
      </section>
      <Avituallamiento />
    </div>
  );
}
