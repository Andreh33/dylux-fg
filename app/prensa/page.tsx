import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prensa",
  description: "Press kit, logos, imágenes hi-res, datos de impacto, contacto directo.",
};

const apariciones = [
  {
    medio: "Jara y Sedal",
    fecha: "Octubre 2026",
    titulo: "«Montaraz, la armería online que cree que el cazador no es un cliente»",
    url: "#",
  },
  {
    medio: "Trofeo Caza",
    fecha: "Septiembre 2026",
    titulo: "Llega la primera tienda online curada de caza y pesca con magazine propio",
    url: "#",
  },
  {
    medio: "El País · Cultura",
    fecha: "Agosto 2026",
    titulo: "El pequeño ecommerce que se atreve con becadas y cuchillería artesana",
    url: "#",
  },
  {
    medio: "Cuadernos de Pesca",
    fecha: "Julio 2026",
    titulo: "Entrevista a Inés Marqués: «Una caña no se compra, se calza»",
    url: "#",
  },
];

export default function PrensaPage() {
  return (
    <div className="pb-32 pt-32 lg:pt-44">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <p className="eyebrow mb-3">Prensa</p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-[color:var(--fg)]">
          Press kit.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[color:var(--fg-muted)]">
          Logos, imágenes alta resolución, biografías de curadores, datos de impacto. Contacto directo: <a href="mailto:prensa@montaraz.com" className="text-[color:var(--accent)] underline-offset-4 hover:underline">prensa@montaraz.com</a>
        </p>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <DescargaCard titulo="Logos · SVG + PNG" tamaño="2.4 MB · zip" />
          <DescargaCard titulo="Imágenes alta resolución" tamaño="184 MB · zip" />
          <DescargaCard titulo="Fact sheet · PDF" tamaño="640 KB · PDF" />
        </div>

        <section className="mt-24">
          <p className="eyebrow mb-6">Apariciones recientes</p>
          <ul className="space-y-4">
            {apariciones.map((a, i) => (
              <li
                key={i}
                className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[color:var(--border-fine)] pb-4"
              >
                <div className="flex-1">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--color-laton-6)]">
                    {a.medio} · {a.fecha}
                  </p>
                  <p className="mt-1 font-display text-lg text-[color:var(--fg)]">
                    «{a.titulo}»
                  </p>
                </div>
                <Link href={a.url} className="text-sm text-[color:var(--accent)] hover:underline">
                  Leer →
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-24 rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-8">
          <p className="eyebrow mb-3">Para entrevistas</p>
          <p className="text-base text-[color:var(--fg)]">
            Los tres curadores (Alfredo, Inés, Tomé) están disponibles para entrevistas. Vídeo-llamada, presencial o por escrito.
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--fg-dim)]">
            prensa@montaraz.com · respuesta 24 h
          </p>
        </section>
      </div>
    </div>
  );
}

function DescargaCard({ titulo, tamaño }: { titulo: string; tamaño: string }) {
  return (
    <button
      type="button"
      className="rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-5 text-left transition-colors hover:border-[color:var(--accent)]"
    >
      <p className="font-display text-xl text-[color:var(--fg)]">{titulo}</p>
      <p className="mt-2 font-mono text-xs uppercase tracking-wider text-[color:var(--fg-dim)]">
        ↓ {tamaño}
      </p>
    </button>
  );
}
