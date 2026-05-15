import type { Metadata } from "next";
import { LegalPage, H2, P, UL, LI } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Devoluciones",
  description: "365 días en ropa y accesorios. Self-RMA con etiqueta prepago.",
};

export default function DevolucionesPage() {
  return (
    <LegalPage
      eyebrow="Devoluciones"
      titulo="Sin trampas, sin formularios."
      intro="Cambiar de idea es de sabios. Aquí te lo ponemos fácil."
    >
      <H2>Plazo</H2>
      <UL>
        <LI><strong>365 días</strong> en ropa, accesorios, ópticas, mochilas, calzado, libros: sin estrenar y en su embalaje.</LI>
        <LI><strong>30 días</strong> en armas (sujeto a normativa).</LI>
        <LI><strong>14 días</strong> en consumibles (munición, cebos, conservas, hilos, moscas): sin abrir.</LI>
        <LI><strong>No aplica</strong> a productos personalizados (cuchillos grabados, configuradores con grabado).</LI>
      </UL>

      <H2>Cómo se devuelve</H2>
      <UL>
        <LI>1. Entra en <strong>/cuenta/pedidos/[id]</strong> y dale a "Iniciar devolución".</LI>
        <LI>2. Eliges si es cambio o reembolso, y el motivo (opcional).</LI>
        <LI>3. Generamos etiqueta prepago al instante. La descargas o te la enviamos por email.</LI>
        <LI>4. Empaquetas (la caja Montaraz original sirve), llevas al punto SEUR/MRW.</LI>
        <LI>5. Cuando recibimos, en 3-5 días hábiles tienes el reembolso en tu tarjeta original.</LI>
      </UL>

      <H2>Devolución sin queja</H2>
      <P>
        Si devuelves sin queja explícita, te apuntamos en silencio un sello "Devuelve y vuelve" en tu cuenta. Es un easter egg que respeta tu derecho.
      </P>

      <H2>Coste</H2>
      <P>
        Devoluciones por defecto: <strong>gratis</strong>. Si la causa es "cambio de idea" y el pedido fue gratuito de envío, te descontamos 6,90 € (coste del envío original).
      </P>

      <H2>Cambios</H2>
      <P>
        Si quieres talla distinta del mismo producto: te enviamos la nueva talla antes de recibir la devolución (te bloqueamos el importe en la tarjeta y lo liberamos al recibir la antigua).
      </P>

      <H2>Devolución de la caja Avituallamiento</H2>
      <P>
        Si te devuelves la caja de madera intacta (no la abres, no la usas), te descontamos <strong>5 €</strong> del siguiente Avituallamiento. Conservación operativa.
      </P>
    </LegalPage>
  );
}
