"use client";

import { motion } from "motion/react";

const testimonios = [
  {
    autor: "Lucas R.",
    rol: "Recechista, Cantabria",
    fecha: "Octubre 2026",
    texto:
      "El primer rifle que compro online sin haberlo cogido en la mano. La diferencia: una llamada con Alfredo antes de pagar. Eso no se paga; se agradece.",
    producto: "Sako 90 Hunter",
  },
  {
    autor: "Marta P.",
    rol: "Mosquera, Pirineo",
    fecha: "Septiembre 2026",
    texto:
      "Las moscas atadas por Manuel son las que me han dado las tres truchas más bonitas del año. Y la caja de madera del Avituallamiento la he reutilizado de neceser de mosca.",
    producto: "Lote Pirineo Caddis · Avituallamiento Maestre",
  },
  {
    autor: "Daniel L.",
    rol: "Montero, Extremadura",
    fecha: "Agosto 2026",
    texto:
      "Compraban mis padres en armerías. Yo en Montaraz. La cuchillería Pallarès llegó con sello cera y tarjeta a mano. Esto no es ecommerce. Es otra cosa.",
    producto: "Pallarès Solsona Carnicero",
  },
  {
    autor: "Bea F.",
    rol: "Pescadora, Galicia",
    fecha: "Julio 2026",
    texto:
      "Hice click&collect en la armería de Burela. Salí con el equipo y un café. La logística es de las cosas que más cuidan. Se nota.",
    producto: "Shimano Stella FK 3000 + DUO Realis Pencil",
  },
  {
    autor: "Sigrid M.",
    rol: "Regaló a su pareja, Múnich",
    fecha: "Diciembre 2025",
    texto:
      "Compré un cuchillo personalizado con grabado para mi marido. Tardaron 11 días, llegó perfecto, con una carta en alemán que no esperaba.",
    producto: "Cuchillo Sella · personalizado",
  },
  {
    autor: "Tomás A.",
    rol: "Maestre desde 2026",
    fecha: "Junio 2026",
    texto:
      "El acceso al cuaderno secreto del Atlas Maestre vale el coste del Club por sí solo. Tres ríos truchales que ni los locales me habían contado.",
    producto: "Club Maestre",
  },
];

/**
 * Escena 9 — Voces de la casa (UGC + testimonios).
 * Referencia §14.10 del BRIEF.
 */
export function Voces() {
  return (
    <section
      className="relative bg-[color:var(--color-verde-3)] py-24 lg:py-32"
      aria-labelledby="voces-title"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">Voces de la casa</p>
          <h2
            id="voces-title"
            className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight text-[color:var(--fg)]"
          >
            Lo que nos cuentan los nuestros.
          </h2>
          <p className="mt-4 text-base text-[color:var(--fg-muted)]">
            Sin filtros, sin retoque. Reseñas verificadas (cada una vinculada a un pedido real). Los Maestres tienen icono dorado.
          </p>
        </div>

        <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
          {testimonios.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.05,
              }}
              className="mb-6 break-inside-avoid rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-6"
            >
              <blockquote className="font-display text-lg leading-snug text-[color:var(--fg)]">
                «{t.texto}»
              </blockquote>
              <figcaption className="mt-4 border-t border-[color:var(--border-fine)] pt-4">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--color-laton-6)]">
                  {t.autor}
                </p>
                <p className="text-xs text-[color:var(--fg-dim)]">
                  {t.rol} · {t.fecha}
                </p>
                <p className="mt-2 text-xs text-[color:var(--fg-muted)]">
                  ✓ Compra verificada · {t.producto}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
