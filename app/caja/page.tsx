import type { Metadata } from "next";
import { Checkout } from "@/components/checkout";

export const metadata: Metadata = {
  title: "Pasar por Caja",
  description:
    "Identidad · Envío · Pago · Repaso. Sin trampas, sin oscuro, sin scroll trampa.",
};

export default function CajaPage() {
  return (
    <div className="pt-24">
      <Checkout />
    </div>
  );
}
