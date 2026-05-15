import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal",
  description: "Centro de documentos legales: términos, privacidad, cookies, aviso armas, ética, garantía, devoluciones, envíos.",
};

const documentos = [
  { href: "/terminos", titulo: "Términos y condiciones", desc: "Condiciones generales de contratación." },
  { href: "/privacidad", titulo: "Política de privacidad", desc: "Datos personales y RGPD." },
  { href: "/cookies", titulo: "Política de cookies", desc: "Tres categorías, tú decides." },
  { href: "/aviso-armas", titulo: "Aviso · armas y munición", desc: "Productos sujetos a regulación." },
  { href: "/etica", titulo: "Carta de ética", desc: "Lo que defendemos y lo que rechazamos." },
  { href: "/garantia", titulo: "Garantía Montaraz", desc: "Legal + adicional, gratis y sin letra pequeña." },
  { href: "/devoluciones", titulo: "Devoluciones", desc: "365 días en ropa. Self-RMA con etiqueta prepago." },
  { href: "/envios", titulo: "Envíos", desc: "Tarifas, plazos, click&collect." },
  { href: "/sostenibilidad", titulo: "Sostenibilidad", desc: "Reporte trimestral con cifras reales." },
];

export default function LegalPage() {
  return (
    <div className="pb-32 pt-32 lg:pt-44">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <p className="eyebrow mb-3">Centro legal</p>
        <h1 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-tight text-[color:var(--fg)]">
          Documentos.
        </h1>
        <p className="mt-6 text-lg text-[color:var(--fg-muted)]">
          Todos los documentos legales en un sitio. Lengua llana, sin párrafos trampa, sin clic-to-aceptar oculto.
        </p>

        <ul className="mt-12 space-y-3">
          {documentos.map((d) => (
            <li key={d.href}>
              <Link
                href={d.href}
                className="block rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-5 transition-colors hover:border-[color:var(--accent)]"
              >
                <p className="font-display text-xl text-[color:var(--fg)]">{d.titulo}</p>
                <p className="mt-1 text-sm text-[color:var(--fg-muted)]">{d.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
