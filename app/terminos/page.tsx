import type { Metadata } from "next";
import { LegalPage, H2, P, UL, LI } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Condiciones generales de contratación. Conformes a la Ley General de Defensa del Consumidor.",
};

export default function TerminosPage() {
  return (
    <LegalPage
      eyebrow="Términos · v1.0"
      titulo="Condiciones de contratación."
      intro="Lengua llana. Sin párrafos trampa. Sin clic-to-aceptar oculto."
    >
      <H2>Quiénes somos</H2>
      <P>
        Montaraz S.L. — CIF B-99999999. Calle del Pez, 12, 28004 Madrid. Inscrita en el Registro Mercantil de Madrid, tomo XXXX, folio YYYY.
      </P>

      <H2>Productos y precios</H2>
      <UL>
        <LI>Precios en €, IVA incluido (España). Resto UE/internacional: ajustado en checkout.</LI>
        <LI>Stock real. Si se agota tras tu compra, te avisamos en 24 h con opciones (esperar restock + descuento, o reembolso).</LI>
      </UL>

      <H2>Pedidos</H2>
      <UL>
        <LI>Tu pedido se acepta cuando recibes el email de confirmación.</LI>
        <LI>Nos reservamos el derecho de rechazar pedidos sospechosos o que vulneren nuestra carta ética.</LI>
        <LI>Las armas y munición se sujetan al aviso específico en <strong>/aviso-armas</strong>.</LI>
      </UL>

      <H2>Pago</H2>
      <P>
        Procesado por Stripe (PCI DSS Level 2). No guardamos tu PAN. 3DS2 para autenticación reforzada (PSD2).
      </P>

      <H2>Derecho de desistimiento</H2>
      <P>
        14 días naturales (Ley General Defensa del Consumidor). Plazos ampliados Montaraz: ver <strong>/devoluciones</strong>. Excepciones legales: productos personalizados (cuchillos grabados, etc.).
      </P>

      <H2>Garantía</H2>
      <P>
        2 años garantía legal. Garantía adicional Montaraz descrita en <strong>/garantia</strong>.
      </P>

      <H2>Resolución de conflictos</H2>
      <UL>
        <LI>Intenta primero el diálogo: <strong>hola@montaraz.com</strong>. Respondemos.</LI>
        <LI>Plataforma europea ODR: <strong>ec.europa.eu/consumers/odr</strong>.</LI>
        <LI>Tribunales de Madrid (capital). El consumidor puede acudir a los de su domicilio.</LI>
      </UL>

      <H2>Propiedad intelectual</H2>
      <P>
        Todo el contenido (textos, fotografías, ilustraciones, código) es propiedad de Montaraz S.L. o de sus autores con licencia de uso para nosotros. Algunas piezas del Cuaderno se publican bajo CC-BY-NC; se indica en cada caso.
      </P>

      <H2>Modificaciones</H2>
      <P>
        Si cambiamos estos términos, te avisamos por email con 30 días de antelación. Si la nueva versión te afecta de forma sustancial, podrás cancelar tu cuenta sin coste durante esos 30 días.
      </P>
    </LegalPage>
  );
}
