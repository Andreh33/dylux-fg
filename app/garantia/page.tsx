import type { Metadata } from "next";
import { LegalPage, H2, P, UL, LI } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Garantía Montaraz",
  description: "Garantía legal + garantía Montaraz: si falla al primer uso, lo reemplazamos.",
};

export default function GarantiaPage() {
  return (
    <LegalPage
      eyebrow="Garantía"
      titulo="Lo que prometemos."
      intro="Garantía legal UE de 2 años + nuestra garantía adicional, gratis y sin letra pequeña."
    >
      <H2>Garantía legal · 2 años</H2>
      <P>
        Conforme a la Ley General para la Defensa de los Consumidores. Todo producto está garantizado 2 años frente a defectos de conformidad. Tiempo de respuesta: 14 días para gestión, 30 días para resolución.
      </P>

      <H2>Garantía Montaraz · adicional</H2>
      <UL>
        <LI><strong>Primer uso.</strong> Si el producto falla en su primer uso real (no por mal uso evidente), lo reemplazamos sin preguntas. Aunque pasen meses entre la compra y la primera salida al campo.</LI>
        <LI><strong>Reparación.</strong> Cuchillería, ropa técnica, ópticas: intentamos reparar antes que sustituir. Tenemos talleres asociados en Madrid y Asturias.</LI>
        <LI><strong>Reposición de piezas.</strong> Botones, cremalleras, cordones, hebillas: 5 años de reposición gratuita en ropa propia.</LI>
        <LI><strong>Mantenimiento gratuito.</strong> Si compras un rifle en Montaraz, te hacemos limpieza profesional anual el primer año, sin coste.</LI>
      </UL>

      <H2>Qué NO cubre</H2>
      <UL>
        <LI>Mal uso evidente, negligencia, uso fuera de las especificaciones.</LI>
        <LI>Desgaste normal por uso (suelas, costuras de roce).</LI>
        <LI>Modificaciones realizadas por terceros (otros armeros, talleres).</LI>
        <LI>Daños por accidente (caída, incendio, robo): te ayudamos a tramitar con tu seguro.</LI>
      </UL>

      <H2>Cómo activar la garantía</H2>
      <P>
        Desde <strong>/cuenta/pedidos/[id]</strong> → botón "Iniciar garantía". Cuéntanos qué pasó. Subes fotos si las tienes. Te respondemos en 12 h con instrucciones. Si toca devolver, generamos etiqueta prepago.
      </P>
    </LegalPage>
  );
}
