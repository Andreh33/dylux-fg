import Link from "next/link";

const columnas = [
  {
    titulo: "Tienda",
    links: [
      { label: "Monte (caza)", href: "/tienda/caza" },
      { label: "Aguas (pesca)", href: "/tienda/pesca" },
      { label: "Sendas (montaña)", href: "/tienda/montaña" },
      { label: "Cocina", href: "/tienda/cocina" },
      { label: "Cuchillería", href: "/tienda/cuchilleria" },
    ],
  },
  {
    titulo: "Casa",
    links: [
      { label: "Manifiesto", href: "/manifiesto" },
      { label: "Origen", href: "/origen" },
      { label: "Curadores", href: "/quien-es-quien" },
      { label: "Prensa", href: "/prensa" },
      { label: "Sostenibilidad", href: "/sostenibilidad" },
    ],
  },
  {
    titulo: "Aula",
    links: [
      { label: "Cursos", href: "/aula" },
      { label: "Expediciones", href: "/expediciones" },
      { label: "Atlas", href: "/atlas" },
      { label: "Calendario", href: "/calendario" },
      { label: "Revista", href: "/revista" },
    ],
  },
  {
    titulo: "Soporte",
    links: [
      { label: "Contacto", href: "/contacto" },
      { label: "FAQ", href: "/faq" },
      { label: "Garantía", href: "/garantia" },
      { label: "Envíos", href: "/envios" },
      { label: "Devoluciones", href: "/devoluciones" },
      { label: "Aviso armas", href: "/aviso-armas" },
      { label: "Privacidad", href: "/privacidad" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--border-fine)] bg-[color:var(--color-verde-2)] pt-24 pb-12 text-[color:var(--fg-muted)]">
      {/* Marquesina infinita */}
      <div className="overflow-hidden border-b border-[color:var(--border-fine)] py-3 mb-16">
        <div className="marquee gap-12 font-mono text-[10px] tracking-[0.32em] uppercase text-[color:var(--fg-dim)]">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="whitespace-nowrap">
              EST. 2026 · IBERIA SALVAJE · PROVISIÓN PARA LO INDÓMITO · FORJADO EN MADRID Y ASTURIAS · BUEN VIENTO ·
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-[1.4fr_2fr_1fr] lg:gap-16 lg:px-10">
        {/* Brand + newsletter */}
        <div>
          <p className="eyebrow mb-4">Cuaderno de Bitácora</p>
          <h3 className="font-display text-2xl text-[color:var(--fg)] mb-3 max-w-xs">
            Una carta mensual. Cero spam. Hilos de campo, lunas, recetas, ofertas serias.
          </h3>
          <form
            aria-label="Suscríbete al boletín"
            className="mt-6 flex gap-2 max-w-sm"
            action="#"
            method="post"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="tu@email.com"
              className="flex-1 rounded-md border border-[color:var(--border)] bg-[color:var(--bg)] px-3 py-2 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--fg-dim)] focus-visible:border-[color:var(--accent)]"
            />
            <button
              type="submit"
              className="rounded-md bg-[color:var(--accent)] px-4 py-2 text-sm font-medium text-[color:var(--color-verde-1)] transition-colors hover:bg-[color:var(--accent-hover)]"
            >
              Apúntame
            </button>
          </form>
          <p className="mt-3 text-xs text-[color:var(--fg-dim)]">
            Double opt-in. Baja con un clic. Tus datos son tuyos.
          </p>
        </div>

        {/* Columnas de links */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {columnas.map((col) => (
            <div key={col.titulo}>
              <p className="eyebrow mb-4">{col.titulo}</p>
              <ul className="space-y-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[color:var(--fg-muted)] transition-colors hover:text-[color:var(--accent)]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Meta */}
        <div className="text-sm">
          <p className="eyebrow mb-4">Casa</p>
          <p className="mb-2 text-[color:var(--fg-muted)]">
            Casa Montaraz Madrid
            <br />
            <span className="text-[color:var(--fg-dim)]">
              Calle del Pez, 12 · L-V 11–19h
            </span>
          </p>
          <p className="mt-4 text-[color:var(--fg-muted)]">
            Casa Montaraz Asturias
            <br />
            <span className="text-[color:var(--fg-dim)]">
              Plaza del Sella, 3 · S-D 10–14h
            </span>
          </p>
          <p className="mt-6 text-xs text-[color:var(--fg-dim)]">
            hola@montaraz.com
            <br />
            +34 91 000 00 00
          </p>
        </div>
      </div>

      {/* Letra mil pies */}
      <div className="mx-auto mt-20 max-w-[1440px] px-6 lg:px-10">
        <p
          aria-hidden
          className="font-display text-[clamp(4rem,16vw,15rem)] leading-none tracking-tighter text-[color:var(--color-verde-4)] select-none"
        >
          MONTARAZ
        </p>
      </div>

      <div className="mx-auto mt-8 flex max-w-[1440px] flex-col items-start justify-between gap-3 px-6 text-xs text-[color:var(--fg-dim)] md:flex-row md:items-center lg:px-10">
        <p>
          Forjado a mano en Madrid y Asturias. Con tinta, café y respeto.
        </p>
        <p className="font-mono">
          © 2026 Montaraz S.L. — CIF B-99999999 · Buen viento.
        </p>
      </div>
    </footer>
  );
}
