import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Preguntas frecuentes con respuesta honesta.",
};

const grupos = [
  {
    titulo: "General",
    preguntas: [
      {
        p: "¿Qué es Montaraz?",
        r: "Una tienda online curada de caza, pesca, montaña y cocina del despiece, con magazine, atlas, expediciones y Club Maestre.",
      },
      {
        p: "¿Es legal vender armas online?",
        r: "Sí, con licencia comprobada. El producto se entrega vía armería partner si así lo exige la normativa.",
      },
      {
        p: "¿Vendéis a Latinoamérica?",
        r: "Estamos preparando rutas. Pregúntanos antes de comprar.",
      },
      {
        p: "¿Hay tienda física?",
        r: "Casa Madrid (calle del Pez, 12) y Casa Asturias (Cangas de Onís). Horarios reducidos, cita previa para armas.",
      },
    ],
  },
  {
    titulo: "Pedidos y envíos",
    preguntas: [
      {
        p: "¿Cuánto tarda el envío?",
        r: "48 h península (24 h Express). 5-7 días Europa. 10-14 días resto.",
      },
      {
        p: "¿Coste de envío?",
        r: "Gratis a partir de 80 € (península). Express 14,90 €.",
      },
      {
        p: "¿Métodos de pago?",
        r: "Tarjeta, Apple Pay, Google Pay, Bizum, Klarna, Sequra, SEPA, transferencia.",
      },
      {
        p: "¿Reembolsos?",
        r: "3-5 días hábiles tras recepción de la devolución.",
      },
    ],
  },
  {
    titulo: "Devoluciones",
    preguntas: [
      {
        p: "¿Plazo de devolución?",
        r: "365 días en ropa y accesorios sin estrenar. 30 días en armas (sujeto a normativa).",
      },
      {
        p: "¿Cómo devuelvo?",
        r: "Self-RMA en /cuenta/pedidos/[id]. Te generamos etiqueta prepago.",
      },
    ],
  },
  {
    titulo: "Club Maestre y Avituallamiento",
    preguntas: [
      {
        p: "¿Cómo se sube de nivel en el Club?",
        r: "Gasto neto (sin envío, sin tax) + actividad genuina (cursos, jornadas, reseñas, trofeos) en los últimos 12 meses. Sin gamificación tóxica.",
      },
      {
        p: "¿Puedo pausar la suscripción Avituallamiento?",
        r: "Sí, hasta 3 meses por vez. Cancela en cualquier momento sin penalización.",
      },
    ],
  },
  {
    titulo: "Comunidad y privacidad",
    preguntas: [
      {
        p: "¿Vendéis mis datos?",
        r: "Nunca. RGPD a rajatabla. Puedes pedir export, edit y delete en /cuenta/configuracion.",
      },
      {
        p: "¿Mis trofeos son públicos?",
        r: "Privados por defecto. Si decides hacer público alguno, no se publican coordenadas exactas, solo región.",
      },
    ],
  },
];

export default function FaqPage() {
  // JSON-LD para FAQPage schema
  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: grupos.flatMap((g) =>
      g.preguntas.map((p) => ({
        "@type": "Question",
        name: p.p,
        acceptedAnswer: { "@type": "Answer", text: p.r },
      }))
    ),
  };

  return (
    <div className="pb-32 pt-32 lg:pt-44">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <p className="eyebrow mb-3">Preguntas frecuentes</p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-[color:var(--fg)]">
          FAQ.
        </h1>

        <div className="mt-16 space-y-12">
          {grupos.map((g) => (
            <section key={g.titulo}>
              <h2 className="font-display text-2xl text-[color:var(--color-laton-6)]">
                {g.titulo}
              </h2>
              <div className="mt-6 space-y-2">
                {g.preguntas.map((p) => (
                  <details
                    key={p.p}
                    className="group rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)]"
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-4 p-5 text-base font-medium text-[color:var(--fg)] [&::-webkit-details-marker]:hidden">
                      {p.p}
                      <span aria-hidden className="text-2xl leading-none text-[color:var(--fg-dim)] group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="px-5 pb-5 text-sm text-[color:var(--fg-muted)]">
                      {p.r}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-6">
          <p className="text-base text-[color:var(--fg)]">¿No encuentras tu pregunta?</p>
          <Link
            href="/contacto"
            className="mt-3 inline-flex items-center gap-2 rounded-md bg-[color:var(--accent)] px-4 py-2 text-sm font-medium text-[color:var(--color-verde-1)]"
          >
            Escríbenos →
          </Link>
        </div>
      </div>
    </div>
  );
}
