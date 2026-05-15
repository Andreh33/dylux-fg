import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Email, chat, teléfono, vídeo-llamada. Cara y firma humana.",
};

export default function ContactoPage() {
  return (
    <div className="pb-32 pt-32 lg:pt-44">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <p className="eyebrow mb-3">Contacto</p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-[color:var(--fg)]">
          Hablamos.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-[color:var(--fg-muted)]">
          Sin chatbots huecos. Detrás del email hay una persona con cara y firma. Te respondemos en 12 h (chat: 3 min).
        </p>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-6">
            <p className="eyebrow mb-2">Chat web</p>
            <p className="font-display text-2xl text-[color:var(--fg)]">3 minutos</p>
            <p className="mt-2 text-sm text-[color:var(--fg-muted)]">
              9-21h CET de lunes a viernes. Te atiende Tomé, Inés o Alfredo según el tema.
            </p>
          </div>
          <div className="rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-6">
            <p className="eyebrow mb-2">Email</p>
            <p className="font-display text-2xl text-[color:var(--fg)]">12 horas</p>
            <a href="mailto:hola@montaraz.com" className="mt-2 inline-block text-sm text-[color:var(--accent)] hover:underline">
              hola@montaraz.com
            </a>
          </div>
          <div className="rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-6">
            <p className="eyebrow mb-2">Teléfono</p>
            <p className="font-display text-2xl text-[color:var(--fg)]">5 timbres</p>
            <a href="tel:+34910000000" className="mt-2 inline-block text-sm text-[color:var(--accent)] hover:underline">
              +34 91 000 00 00
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Form */}
          <form className="space-y-4">
            <p className="eyebrow mb-2">Escríbenos</p>
            <label className="block">
              <span className="eyebrow mb-1.5 block">Nombre</span>
              <input type="text" className="w-full rounded-md border border-[color:var(--border)] bg-[color:var(--bg)] px-3 py-2.5 text-sm" />
            </label>
            <label className="block">
              <span className="eyebrow mb-1.5 block">Email</span>
              <input type="email" required className="w-full rounded-md border border-[color:var(--border)] bg-[color:var(--bg)] px-3 py-2.5 text-sm" />
            </label>
            <label className="block">
              <span className="eyebrow mb-1.5 block">Asunto</span>
              <select className="w-full rounded-md border border-[color:var(--border)] bg-[color:var(--bg)] px-3 py-2.5 text-sm">
                <option>Consulta general</option>
                <option>Pedido</option>
                <option>Devolución</option>
                <option>Productos · armas y munición</option>
                <option>Curadores · colaboración</option>
                <option>Prensa</option>
                <option>B2B</option>
              </select>
            </label>
            <label className="block">
              <span className="eyebrow mb-1.5 block">Mensaje</span>
              <textarea rows={5} className="w-full resize-none rounded-md border border-[color:var(--border)] bg-[color:var(--bg)] px-3 py-2.5 text-sm" />
            </label>
            <button type="submit" className="rounded-md bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-[color:var(--color-verde-1)]">
              Enviar
            </button>
          </form>

          {/* Casas físicas */}
          <div className="space-y-6">
            <p className="eyebrow">Casas físicas</p>
            <div className="rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-6">
              <p className="font-display text-2xl text-[color:var(--fg)]">Casa Madrid</p>
              <p className="mt-2 text-sm text-[color:var(--fg-muted)]">
                Calle del Pez, 12 · 28004 Madrid
                <br />
                L-V 11:00–19:00 · S 11:00–14:00
              </p>
              <p className="mt-3 font-mono text-xs text-[color:var(--fg-dim)]">
                Cita previa para PDP de armas
              </p>
            </div>
            <div className="rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-6">
              <p className="font-display text-2xl text-[color:var(--fg)]">Casa Asturias</p>
              <p className="mt-2 text-sm text-[color:var(--fg-muted)]">
                Plaza del Sella, 3 · 33550 Cangas de Onís
                <br />
                S-D 10:00–14:00 · L-V cerrado
              </p>
              <p className="mt-3 font-mono text-xs text-[color:var(--fg-dim)]">
                Cita previa todo
              </p>
            </div>
          </div>
        </div>

        <p className="mt-16 text-center font-display text-2xl text-[color:var(--color-laton-6)]">
          Buen viento.
        </p>
      </div>
    </div>
  );
}
