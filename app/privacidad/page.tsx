import type { Metadata } from "next";
import { LegalPage, H2, P, UL, LI } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "RGPD. Sin venta de datos. Sin trackers ocultos.",
};

export default function PrivacidadPage() {
  return (
    <LegalPage
      eyebrow="Política de privacidad · v1.0"
      titulo="Lo que sabemos de ti."
      intro="Y lo que NO hacemos con esa información."
    >
      <H2>Qué datos recogemos</H2>
      <UL>
        <LI><strong>Identidad:</strong> email, nombre. Sólo si te registras.</LI>
        <LI><strong>Pedidos:</strong> dirección de envío, productos, importe. Conservados 5 años (obligación fiscal).</LI>
        <LI><strong>Cuenta opcional:</strong> diario, trofeos, cuaderno. Los borras tú cuando quieras.</LI>
        <LI><strong>Licencia armera:</strong> sólo si compras armas. Cifrada at-rest (AES-256-GCM). Conservada 10 años (Ley de Armas).</LI>
        <LI><strong>Analítica:</strong> agregada, anonimizada, solo si das consentimiento explícito.</LI>
      </UL>

      <H2>Qué NO hacemos</H2>
      <UL>
        <LI>No vendemos datos a terceros. Nunca.</LI>
        <LI>No usamos session replay sin consentimiento.</LI>
        <LI>No instalamos píxeles de tracking sin consentimiento.</LI>
        <LI>No te perseguimos con remarketing si pides salir.</LI>
      </UL>

      <H2>Tus derechos (RGPD)</H2>
      <UL>
        <LI><strong>Acceso:</strong> exporta todo lo que tenemos en /cuenta/configuracion.</LI>
        <LI><strong>Rectificación:</strong> edita tus datos en /cuenta.</LI>
        <LI><strong>Supresión:</strong> "Eliminar mi cuenta" en /cuenta/configuracion. Borrado en 30 días.</LI>
        <LI><strong>Portabilidad:</strong> formato JSON estándar.</LI>
        <LI><strong>Oposición / limitación:</strong> contacta a <strong>privacidad@montaraz.com</strong>.</LI>
      </UL>

      <H2>Responsable</H2>
      <P>
        Montaraz S.L. — CIF B-99999999 — Calle del Pez, 12, 28004 Madrid. DPO: Inés Marqués (dpo@montaraz.com).
      </P>

      <H2>Reclamaciones</H2>
      <P>
        Si crees que vulneramos tus derechos: <strong>www.aepd.es</strong> (Agencia Española de Protección de Datos).
      </P>
    </LegalPage>
  );
}
