import type { Metadata } from "next";
import { LegalPage, H2, P, UL, LI } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Aviso · armas y munición",
  description: "Productos sujetos a regulación. Licencia obligatoria.",
};

export default function AvisoArmasPage() {
  return (
    <LegalPage
      eyebrow="Aviso legal · productos regulados"
      titulo="Armas y munición."
      intro="Esto es serio. Aquí cumplimos. Aquí no se hacen excepciones."
    >
      <H2>Productos regulados que comercializamos</H2>
      <UL>
        <LI>Armas largas (escopeta, rifle, carabina) — Licencia tipo D, E o F según producto.</LI>
        <LI>Munición — Asociada a la licencia del arma correspondiente.</LI>
        <LI>Cuchillería de más de 11 cm — Sujeta a la regulación autonómica.</LI>
        <LI>Ópticas con visión nocturna — Reguladas para uso cinegético específico.</LI>
      </UL>

      <H2>Cómo se compra un arma en Montaraz</H2>
      <UL>
        <LI>1. Configuras o eliges el arma en la web.</LI>
        <LI>2. En checkout subes tu licencia vigente (PDF). Se cifra at-rest (AES-256-GCM).</LI>
        <LI>3. Nuestro responsable de armería verifica manualmente. Tiempo: 24-48 h hábiles.</LI>
        <LI>4. Aprobada la documentación, el arma se envía a una armería partner cerca de tu domicilio (no envío directo a particular).</LI>
        <LI>5. Recoges en armería con tu DNI y licencia. Te firmas en su libro.</LI>
      </UL>

      <H2>Restricciones autonómicas</H2>
      <P>
        Mantenemos un mapeo actualizado de prohibiciones por CCAA. Si la dirección de envío está en una zona con restricción específica para el calibre, modalidad o material, el sistema lo rechaza en checkout y te avisamos.
      </P>

      <H2>Internacional</H2>
      <P>
        Exportación de armas: sólo si presentas licencia, permiso de importación del país destino y, cuando aplique, cumplimiento ITAR. Pesca: pocas restricciones, salvo cebos vivos.
      </P>

      <H2>Auditoría y logs</H2>
      <P>
        Toda compra de arma o munición se loguea con timestamp, IP, user-id y hash de licencia. Acceso a logs restringido a administradores con 2FA. Conservación 10 años (Ley de Armas).
      </P>

      <H2>Si detectamos sospecha de fraude</H2>
      <P>
        Aplicamos cola de revisión manual. Notificamos a autoridad competente si el patrón lo justifica (Ley Orgánica 4/2015). Los datos se preservan.
      </P>

      <H2>Aviso ético</H2>
      <P>
        No vendemos a quien no respeta vedas, ni a quien presume públicamente de furtivismo, ni a quien usa lenguaje que glorifica la muerte. Vemos perfiles, no sólo licencias. Es legal rechazar a un comprador. Lo hacemos cuando toca.
      </P>
    </LegalPage>
  );
}
