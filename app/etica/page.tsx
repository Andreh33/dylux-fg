import type { Metadata } from "next";
import { LegalPage, H2, P, UL, LI } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Ética",
  description: "Compromiso ético Montaraz: caza y pesca con respeto, vedas, especies protegidas y conservación.",
};

export default function EticaPage() {
  return (
    <LegalPage
      eyebrow="Carta de compromiso"
      titulo="Ética."
      intro="Lo que sostenemos. Lo que rechazamos. Lo que firmamos cada vez que enviamos un paquete."
    >
      <H2>Lo que sí defendemos</H2>
      <UL>
        <LI>La caza y la pesca con licencia, respeto a las vedas, cuotas y tallas mínimas.</LI>
        <LI>La conservación de especies y ecosistemas. La caza ética es ecología.</LI>
        <LI>Los métodos selectivos. El uso responsable de munición y aparejos.</LI>
        <LI>El bienestar animal: tirada limpia, sangrado correcto, captura-suelta cuando proceda.</LI>
        <LI>El respeto a los guías, guardas, agricultores, ganaderos y vecinos del campo.</LI>
        <LI>La transparencia: si un producto falla, lo decimos.</LI>
      </UL>

      <H2>Lo que rechazamos</H2>
      <UL>
        <LI>El furtivismo. La caza fuera de veda. Sin excepciones.</LI>
        <LI>La caza o pesca de especies en peligro o protegidas (lince, oso, urogallo, anfibios, etc.).</LI>
        <LI>Las trampas indiscriminadas y los métodos prohibidos por la normativa europea.</LI>
        <LI>La glorificación de la muerte. Trofeo no es récord; es respeto.</LI>
        <LI>La crueldad. La caza por crueldad no es caza: es delito.</LI>
        <LI>El greenwashing. Si decimos "sostenible", lo medimos.</LI>
      </UL>

      <H2>Lo que nos comprometemos a hacer</H2>
      <UL>
        <LI>Donar el 1% de los ingresos anuales a asociaciones de conservación (RedFly, Fundación Oso Pardo, ANSE, Quercus).</LI>
        <LI>Embalaje 100% reciclable: cartón crudo FSC, papel kraft, cordel yute, cero plástico decorativo.</LI>
        <LI>Reportar anualmente el impacto en /sostenibilidad.</LI>
        <LI>Filtrar productos por restricción geográfica (CCAA con prohibiciones específicas) y avisar en checkout.</LI>
        <LI>Verificar licencia armera antes de despachar cualquier rifle, escopeta o munición.</LI>
      </UL>

      <H2>Si crees que incumplimos algo</H2>
      <P>
        Si ves un producto, un mensaje o una decisión que va contra esta carta, escríbenos a <strong>etica@montaraz.com</strong>. Respondemos. Y si la queja tiene razón, lo corregimos en público.
      </P>
    </LegalPage>
  );
}
