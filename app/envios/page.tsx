import type { Metadata } from "next";
import { LegalPage, H2, P, UL, LI } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Envíos",
  description: "48 h península. Express 24 h. Click & Collect en armerías partner.",
};

export default function EnviosPage() {
  return (
    <LegalPage
      eyebrow="Envíos · 2026"
      titulo="Tarifas y plazos."
      intro="Embalaje silencioso, seguimiento en directo, recogida en armería si lo prefieres."
    >
      <H2>España península</H2>
      <UL>
        <LI><strong>Estándar 48 h</strong> · Gratis a partir de 80 €. Por debajo, 6,90 €.</LI>
        <LI><strong>Express 24 h</strong> · 14,90 € para todos los pedidos.</LI>
        <LI><strong>Click & Collect</strong> · Gratis. Recoges en armería partner cercana. 24-72 h.</LI>
        <LI><strong>Casa Madrid/Asturias</strong> · Gratis. Recoges en cita previa.</LI>
      </UL>

      <H2>Baleares · Canarias · Ceuta · Melilla</H2>
      <UL>
        <LI>Plazo: 5-8 días hábiles.</LI>
        <LI>Coste: 14,90 € (Baleares) / 24,90 € (Canarias, Ceuta, Melilla).</LI>
        <LI>Importes IVA-IGIC se ajustan automáticamente en checkout.</LI>
      </UL>

      <H2>Europa</H2>
      <UL>
        <LI>Portugal · 5-7 días · desde 12,90 €</LI>
        <LI>Francia · Alemania · Italia · 6-8 días · desde 18,90 €</LI>
        <LI>Reino Unido · 7-10 días · desde 24,90 € (DDP, sin sorpresas).</LI>
        <LI>Resto UE · 8-10 días · desde 22,90 €</LI>
      </UL>

      <H2>Resto del mundo</H2>
      <P>
        EE.UU., Canadá, Suiza, Noruega: 10-14 días, tarifas calculadas en checkout. DAP (aduanas a tu cargo).
      </P>

      <H2>Armas y munición</H2>
      <P>
        Por normativa, no envío directo a particular. Envío a armería partner cercana a tu domicilio. Tú recoges con DNI + licencia + firma en su libro.
      </P>

      <H2>Embalaje</H2>
      <P>
        Cartón crudo FSC, papel kraft, cordel yute, sello cera en pedidos &gt;300 €. Tarjeta a mano en pedidos &gt;500 €. Cero plástico decorativo. Devuelves la caja del Avituallamiento intacta y te descontamos 5 €.
      </P>

      <H2>Seguimiento</H2>
      <UL>
        <LI>Email al confirmar pedido, al despachar y al entregar.</LI>
        <LI>SMS el día de la entrega con franja horaria.</LI>
        <LI>Track URL en tiempo real (SEUR · DHL · MRW · GLS).</LI>
      </UL>
    </LegalPage>
  );
}
