import type { Metadata } from "next";
import { Manifesto } from "@/components/scene/manifesto";

export const metadata: Metadata = {
  title: "Manifiesto",
  description:
    "Lo que sostiene a Montaraz: respeto, honestidad, precisión, trazabilidad, tradición, innovación, sostenibilidad, comunidad, lentitud y belleza.",
};

export default function ManifiestoPage() {
  return (
    <div>
      <section className="pt-32 pb-16 lg:pt-44">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="eyebrow mb-6">Documento fundacional · 2026</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-tight text-[color:var(--fg)]">
            Manifiesto.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-[color:var(--fg-muted)]">
            No vendemos artículos: vendemos provisión. Lo que sigue es lo que firmamos cada mañana antes de abrir el correo.
          </p>
        </div>
      </section>
      <Manifesto />
    </div>
  );
}
