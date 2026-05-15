import type { Metadata } from "next";
import { LegalPage, H2, P, UL, LI } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Política de cookies. Sin trampas, sin trackers ocultos.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Cookies"
      titulo="Tres categorías, tú decides."
      intro="Default: solo necesarias. El resto requieren tu consentimiento explícito."
    >
      <H2>Necesarias (siempre activas)</H2>
      <UL>
        <LI><code>montaraz:morral</code> — Persiste tu carrito.</LI>
        <LI><code>montaraz:cuaderno</code> — Persiste tu wishlist.</LI>
        <LI><code>montaraz:tema</code> — Persiste tu preferencia de tema.</LI>
        <LI><code>montaraz:cookies</code> — Persiste esta misma decisión.</LI>
        <LI><code>__Host-session</code> — Sesión segura HttpOnly si estás logueado.</LI>
      </UL>
      <P>
        Sin estas la web no funciona. Las usamos al amparo del interés legítimo y son técnicamente imprescindibles.
      </P>

      <H2>Analíticas (opcional)</H2>
      <UL>
        <LI><strong>PostHog:</strong> eventos agregados, sin replay. Solo si lo activas.</LI>
        <LI><strong>Vercel Speed Insights:</strong> Core Web Vitals anónimos.</LI>
      </UL>

      <H2>Marketing (opcional)</H2>
      <UL>
        <LI>Personalización de recomendaciones del catálogo.</LI>
        <LI>Recordatorio amable de carrito abandonado (máx. 3 emails).</LI>
      </UL>

      <H2>Gestión</H2>
      <P>
        Puedes cambiar tu decisión en cualquier momento desde el pie de cada página, link "Cookies". Reseteamos tu elección y vuelves a ver el banner.
      </P>
    </LegalPage>
  );
}
