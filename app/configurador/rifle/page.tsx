import type { Metadata } from "next";
import { ConfiguradorRifle } from "@/components/configurador-rifle";

export const metadata: Metadata = {
  title: "Configurador de rifle",
  description:
    "Once pasos. 30 piezas combinables. Compatibilidades validadas. Compártelo con un link único y pídelo cuando estés listo.",
};

export default function ConfiguradorRiflePage() {
  return (
    <div className="pt-24">
      <ConfiguradorRifle />
    </div>
  );
}
