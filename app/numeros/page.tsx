import type { Metadata } from "next";
import { LegalPage, H2, P } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Números",
  description: "Transparencia financiera: ingresos, costes, donaciones, países servidos.",
};

export default function NumerosPage() {
  return (
    <LegalPage
      eyebrow="Transparencia · Q4 2026"
      titulo="Números."
      intro="Lo que ganamos, lo que gastamos, lo que donamos. Actualizado cada trimestre."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Cifra valor="132 480 €" label="Ingresos netos Q4" />
        <Cifra valor="1 380 €" label="Donados a conservación" />
        <Cifra valor="2 487" label="Pedidos atendidos" />
        <Cifra valor="64" label="Países servidos" />
        <Cifra valor="98,4%" label="Satisfacción soporte" />
        <Cifra valor="±0,15%" label="Tasa devolución" />
      </div>

      <H2>Donaciones acumuladas 2026</H2>
      <P>
        4 880 € donados a RedFly España (truchas autóctonas), Fundación Oso Pardo, ANSE Murcia y Quercus. Lo equivalente al 1,02% de los ingresos netos del año.
      </P>

      <H2>Sostenibilidad Q4</H2>
      <P>
        2,4 toneladas de CO₂ compensado vía proyecto verificado de reforestación en Cantabria. 287 kg de cartón ahorrado por reuso de cajas Avituallamiento.
      </P>

      <H2>Equipo</H2>
      <P>
        12 personas en plantilla (5 socios, 7 contratos). 14 curadores freelance. Salario más bajo:salario más alto = 1:3,2.
      </P>

      <H2>Auditoría</H2>
      <P>
        Auditoría anual con consultora externa. Próximo informe completo: enero 2027.
      </P>
    </LegalPage>
  );
}

function Cifra({ valor, label }: { valor: string; label: string }) {
  return (
    <div className="rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-5">
      <p className="font-display text-3xl text-[color:var(--color-laton-6)]">
        {valor}
      </p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[color:var(--fg-dim)]">
        {label}
      </p>
    </div>
  );
}
