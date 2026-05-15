import type { Metadata } from "next";
import { LegalPage, H2, P, UL, LI } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Sostenibilidad",
  description: "Embalaje, donaciones, energía, vedas, captura ética. Sin greenwashing.",
};

export default function SostenibilidadPage() {
  return (
    <LegalPage
      eyebrow="Reporte trimestral · Q4 2026"
      titulo="Sostenibilidad."
      intro="Cifras reales, sin lavado, sin adjetivos vacíos. Esto es lo que llevamos hecho."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <Cifra valor="100%" label="Embalaje reciclable" />
        <Cifra valor="1%" label="Ingresos a conservación" />
        <Cifra valor="0" label="Plástico decorativo" />
        <Cifra valor="2,4 t" label="CO₂ compensado (Q4)" />
        <Cifra valor="287 kg" label="Cartón ahorrado por reuso" />
        <Cifra valor="640 €" label="Donados a RedFly Q4" />
      </div>

      <H2>Embalaje</H2>
      <UL>
        <LI>Cartón crudo FSC, sin tintas de petróleo. Tintas vegetales sólo en sellos.</LI>
        <LI>Papel kraft sin blanquear como relleno. Cordel de yute en lugar de cinta plástica.</LI>
        <LI>Lana cruda y serrín reciclado para producto frágil.</LI>
        <LI>Caja Avituallamiento: madera ligera reciclable, devolutiva con 5 € de descuento si la devuelves intacta.</LI>
      </UL>

      <H2>Logística</H2>
      <UL>
        <LI>Consolidación de envíos: agrupamos pedidos del mismo CP cuando es posible.</LI>
        <LI>Última milla con SEUR Eco y Correos (vehículos eléctricos en ciudades de más de 100k habitantes).</LI>
        <LI>Cero envíos aéreos dentro de península.</LI>
      </UL>

      <H2>Donaciones · Q4 2026</H2>
      <UL>
        <LI>RedFly España (truchas autóctonas) · 640 €</LI>
        <LI>Fundación Oso Pardo · 320 €</LI>
        <LI>ANSE Murcia · 180 €</LI>
        <LI>Quercus · 240 €</LI>
        <LI><strong>Total trimestre: 1 380 €</strong> (1,04% de los ingresos netos)</LI>
      </UL>

      <H2>Producto</H2>
      <UL>
        <LI>Etiqueta verde "Sin plomo" en munición lead-free.</LI>
        <LI>Etiqueta "Material reciclado" en ropa con +30% reciclado.</LI>
        <LI>Etiqueta "Compensación CO₂ incluida" en productos con compensación verificada.</LI>
        <LI>Cero comercialización de especies protegidas, tróficos prohibidos, trampas indiscriminadas.</LI>
      </UL>

      <H2>Vedas y cuotas</H2>
      <P>
        Filtros automáticos en checkout: si la dirección de envío está en una CCAA con prohibiciones específicas para un producto, se muestra aviso y se rechaza la compra.
      </P>

      <H2>Hosting y energía</H2>
      <UL>
        <LI>Vercel (Lambda + Edge) opera con energía 100% renovable (compromiso público desde 2022).</LI>
        <LI>Imágenes en formato AVIF (40% más ligeras que JPEG), texturas KTX2 para modelos 3D.</LI>
        <LI>Cache agresivo: cada petición evitada es energía ahorrada.</LI>
      </UL>

      <H2>Auditoría</H2>
      <P>
        Auditoría anual independiente con consultora externa especializada en huella ambiental. Publicaremos el informe completo en /numeros cada enero.
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
