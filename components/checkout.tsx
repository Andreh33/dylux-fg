"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useMorral } from "@/lib/store";
import { formatPrice } from "@/lib/utils";

const pasos = ["Identidad", "Envío", "Pago", "Repaso"] as const;
type PasoId = typeof pasos[number];

export function Checkout() {
  const router = useRouter();
  const items = useMorral((s) => s.items);
  const vaciar = useMorral((s) => s.vaciar);

  const [paso, setPaso] = useState<PasoId>("Identidad");
  const [datos, setDatos] = useState({
    email: "",
    nombre: "",
    direccion: "",
    cp: "",
    ciudad: "",
    pais: "España",
    envio: "estandar" as "estandar" | "express" | "click-collect",
    pago: "tarjeta" as "tarjeta" | "apple" | "google" | "bizum" | "sepa",
    notas: "",
    terminos: false,
  });

  const subtotal = items.reduce((sum, it) => sum + it.precio * it.cantidad, 0);
  const envio =
    datos.envio === "express" ? 14.9 : datos.envio === "click-collect" ? 0 : subtotal >= 80 ? 0 : 6.9;
  const total = subtotal + envio;

  function siguiente() {
    const idx = pasos.indexOf(paso);
    if (idx < pasos.length - 1) setPaso(pasos[idx + 1]!);
  }

  function anterior() {
    const idx = pasos.indexOf(paso);
    if (idx > 0) setPaso(pasos[idx - 1]!);
  }

  function confirmar() {
    const id = Math.random().toString(36).slice(2, 8).toUpperCase();
    vaciar();
    router.push(`/caja/confirmacion/${id}`);
  }

  if (items.length === 0) {
    return (
      <div className="grid min-h-[60vh] place-items-center px-6 py-12">
        <div className="text-center">
          <p className="eyebrow mb-4">Caja</p>
          <h1 className="font-display text-4xl text-[color:var(--fg)]">
            Tu morral está vacío.
          </h1>
          <p className="mt-3 text-[color:var(--fg-muted)]">
            Pasa por la tienda y vuelve cuando lleves algo.
          </p>
          <Link
            href="/tienda"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[color:var(--accent)] px-5 py-2.5 text-sm font-medium text-[color:var(--color-verde-1)]"
          >
            Ir a la tienda →
          </Link>
        </div>
      </div>
    );
  }

  const idxActual = pasos.indexOf(paso);

  return (
    <div className="mx-auto grid max-w-[1440px] gap-12 px-6 pb-32 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:px-10">
      <div>
        {/* Stepper */}
        <header className="border-b border-[color:var(--border-fine)] py-10 lg:py-16">
          <p className="eyebrow mb-3">Pasar por Caja</p>
          <h1 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight text-[color:var(--fg)]">
            {paso}.
          </h1>
          <ol className="mt-8 flex items-center gap-4 overflow-x-auto">
            {pasos.map((p, i) => {
              const done = i < idxActual;
              const active = p === paso;
              return (
                <li key={p} className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => i <= idxActual && setPaso(p)}
                    disabled={i > idxActual}
                    className={`flex items-center gap-2 text-sm transition-colors ${
                      active
                        ? "text-[color:var(--accent)]"
                        : done
                          ? "text-[color:var(--fg)] hover:text-[color:var(--accent)]"
                          : "cursor-not-allowed text-[color:var(--fg-dim)]"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`grid h-6 w-6 place-items-center rounded-full border font-mono text-[10px] ${
                        done
                          ? "border-[color:var(--accent)] bg-[color:var(--accent)] text-[color:var(--color-verde-1)]"
                          : active
                            ? "border-[color:var(--accent)] text-[color:var(--accent)]"
                            : "border-[color:var(--border)]"
                      }`}
                    >
                      {done ? "✓" : i + 1}
                    </span>
                    {p}
                  </button>
                  {i < pasos.length - 1 && (
                    <span aria-hidden className="text-[color:var(--fg-dim)]">/</span>
                  )}
                </li>
              );
            })}
          </ol>
        </header>

        <AnimatePresence mode="wait">
          <motion.section
            key={paso}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="py-10"
          >
            {paso === "Identidad" && (
              <div className="max-w-md space-y-4">
                <Field
                  label="Email"
                  type="email"
                  required
                  value={datos.email}
                  onChange={(v) => setDatos({ ...datos, email: v })}
                  helper="Solo te escribimos lo justo y necesario."
                />
                <Field
                  label="Nombre completo"
                  required
                  value={datos.nombre}
                  onChange={(v) => setDatos({ ...datos, nombre: v })}
                />
                <p className="pt-4 text-sm text-[color:var(--fg-muted)]">
                  ¿Ya tienes cuenta? <Link href="/entrar" className="text-[color:var(--accent)] underline-offset-4 hover:underline">Entrar</Link>
                </p>
              </div>
            )}

            {paso === "Envío" && (
              <div className="max-w-2xl space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <Field
                    label="Dirección"
                    required
                    value={datos.direccion}
                    onChange={(v) => setDatos({ ...datos, direccion: v })}
                  />
                  <Field
                    label="Código postal"
                    required
                    value={datos.cp}
                    onChange={(v) => setDatos({ ...datos, cp: v })}
                  />
                  <Field
                    label="Ciudad"
                    required
                    value={datos.ciudad}
                    onChange={(v) => setDatos({ ...datos, ciudad: v })}
                  />
                  <Field
                    label="País"
                    value={datos.pais}
                    onChange={(v) => setDatos({ ...datos, pais: v })}
                  />
                </div>

                <fieldset>
                  <legend className="eyebrow mb-3">Modo de envío</legend>
                  <div className="space-y-2">
                    <RadioOption
                      label="Estándar · 48 h península"
                      desc={subtotal >= 80 ? "Gratis (pedido > 80 €)" : `${formatPrice(6.9)}`}
                      value="estandar"
                      checked={datos.envio === "estandar"}
                      onChange={() => setDatos({ ...datos, envio: "estandar" })}
                    />
                    <RadioOption
                      label="Express · 24 h"
                      desc={formatPrice(14.9)}
                      value="express"
                      checked={datos.envio === "express"}
                      onChange={() => setDatos({ ...datos, envio: "express" })}
                    />
                    <RadioOption
                      label="Click & Collect · Armería partner"
                      desc="Gratis · 24-72 h"
                      value="click-collect"
                      checked={datos.envio === "click-collect"}
                      onChange={() => setDatos({ ...datos, envio: "click-collect" })}
                    />
                  </div>
                </fieldset>
              </div>
            )}

            {paso === "Pago" && (
              <div className="max-w-2xl space-y-6">
                <fieldset>
                  <legend className="eyebrow mb-3">Método de pago</legend>
                  <div className="space-y-2">
                    <RadioOption label="Tarjeta · Stripe" desc="Visa, Mastercard, Amex · 3DS2" value="tarjeta" checked={datos.pago === "tarjeta"} onChange={() => setDatos({ ...datos, pago: "tarjeta" })} />
                    <RadioOption label="Apple Pay" desc="Touch ID / Face ID" value="apple" checked={datos.pago === "apple"} onChange={() => setDatos({ ...datos, pago: "apple" })} />
                    <RadioOption label="Google Pay" desc="One-tap" value="google" checked={datos.pago === "google"} onChange={() => setDatos({ ...datos, pago: "google" })} />
                    <RadioOption label="Bizum" desc="Solo España · Compra rápida" value="bizum" checked={datos.pago === "bizum"} onChange={() => setDatos({ ...datos, pago: "bizum" })} />
                    <RadioOption label="Transferencia SEPA" desc="2-3 días laborables" value="sepa" checked={datos.pago === "sepa"} onChange={() => setDatos({ ...datos, pago: "sepa" })} />
                  </div>
                </fieldset>

                <div className="rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-4 text-xs text-[color:var(--fg-muted)]">
                  Pago seguro PCI DSS Level 2. No guardamos números de tarjeta. Los datos viajan cifrados extremo a extremo.
                </div>
              </div>
            )}

            {paso === "Repaso" && (
              <div className="max-w-2xl space-y-6">
                <div className="space-y-4 rounded-md border border-[color:var(--border-fine)] bg-[color:var(--bg-raised)] p-5">
                  <div>
                    <p className="eyebrow mb-1">Envío a</p>
                    <p className="text-sm">
                      {datos.nombre} · {datos.email}
                      <br />
                      {datos.direccion}, {datos.cp} {datos.ciudad}, {datos.pais}
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow mb-1">Modo</p>
                    <p className="text-sm capitalize">{datos.envio.replace("-", " ")}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-1">Pago</p>
                    <p className="text-sm capitalize">{datos.pago}</p>
                  </div>
                </div>

                <Field
                  label="Notas al pedido (opcional)"
                  textarea
                  value={datos.notas}
                  onChange={(v) => setDatos({ ...datos, notas: v })}
                  helper="Ej.: «dejar al vecino», «envuelve para regalo». Si pones nombre de perro, ya sabes."
                />

                <label className="flex items-start gap-2 text-sm text-[color:var(--fg-muted)]">
                  <input
                    type="checkbox"
                    checked={datos.terminos}
                    onChange={(e) => setDatos({ ...datos, terminos: e.target.checked })}
                    className="mt-0.5 h-4 w-4 accent-[color:var(--accent)]"
                  />
                  <span>
                    He leído los <Link href="/terminos" className="text-[color:var(--accent)] underline-offset-4 hover:underline">términos y condiciones</Link> y la <Link href="/privacidad" className="text-[color:var(--accent)] underline-offset-4 hover:underline">política de privacidad</Link>.
                  </span>
                </label>

                <label className="flex items-start gap-2 text-sm text-[color:var(--fg-muted)]">
                  <input type="checkbox" defaultChecked className="mt-0.5 h-4 w-4 accent-[color:var(--accent)]" />
                  <span>
                    Donar 1 € a <strong>RedFly España</strong> (conservación de truchas autóctonas). Esto va a la asociación, no a nosotros.
                  </span>
                </label>
              </div>
            )}

            {/* Botones de paso */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                disabled={idxActual === 0}
                onClick={anterior}
                className="rounded-md border border-[color:var(--border)] px-5 py-2.5 text-sm text-[color:var(--fg)] transition-colors hover:border-[color:var(--accent)] disabled:opacity-40"
              >
                ← Anterior
              </button>
              {paso === "Repaso" ? (
                <button
                  type="button"
                  onClick={confirmar}
                  disabled={!datos.terminos}
                  className="rounded-md bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-[color:var(--color-verde-1)] transition-colors hover:bg-[color:var(--accent-hover)] disabled:opacity-40"
                >
                  Confirmar pedido · {formatPrice(total)}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={siguiente}
                  className="rounded-md bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-[color:var(--color-verde-1)] transition-colors hover:bg-[color:var(--accent-hover)]"
                >
                  Continuar →
                </button>
              )}
            </div>
          </motion.section>
        </AnimatePresence>
      </div>

      {/* Resumen sticky */}
      <aside className="lg:sticky lg:top-32 lg:self-start">
        <div className="rounded-md border border-[color:var(--border)] bg-[color:var(--bg-raised)] p-6">
          <p className="eyebrow mb-4">Resumen del morral</p>
          <ul className="space-y-3 border-b border-[color:var(--border-fine)] pb-4">
            {items.map((it) => (
              <li key={it.slug} className="flex items-start justify-between gap-3 text-sm">
                <span className="flex-1">
                  <span className="block text-[color:var(--fg)]">{it.nombre}</span>
                  <span className="font-mono text-xs text-[color:var(--fg-dim)]">
                    × {it.cantidad}
                  </span>
                </span>
                <span className="font-mono tabular-nums text-[color:var(--fg)]">
                  {formatPrice(it.precio * it.cantidad)}
                </span>
              </li>
            ))}
          </ul>
          <dl className="mt-4 space-y-1.5 text-sm">
            <div className="flex justify-between text-[color:var(--fg-muted)]">
              <dt>Subtotal</dt>
              <dd className="font-mono tabular-nums">{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between text-[color:var(--fg-muted)]">
              <dt>Envío</dt>
              <dd className="font-mono tabular-nums">
                {envio === 0 ? "Gratis" : formatPrice(envio)}
              </dd>
            </div>
            <div className="flex justify-between border-t border-[color:var(--border-fine)] pt-2 text-base text-[color:var(--fg)]">
              <dt>Total</dt>
              <dd className="font-mono tabular-nums">{formatPrice(total)}</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs text-[color:var(--fg-dim)]">
            Devolución en 365 días · 48 h península · Embalaje kraft con cordel yute · cero plástico
          </p>
        </div>
      </aside>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  textarea,
  helper,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  helper?: string;
}) {
  return (
    <label className="block">
      <span className="eyebrow mb-1.5 block">
        {label}
        {required && <span className="ml-1 text-[color:var(--color-vermellon)]">*</span>}
      </span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="w-full resize-none rounded-md border border-[color:var(--border)] bg-[color:var(--bg)] px-3 py-2 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--fg-dim)] focus-visible:border-[color:var(--accent)]"
        />
      ) : (
        <input
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-md border border-[color:var(--border)] bg-[color:var(--bg)] px-3 py-2 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--fg-dim)] focus-visible:border-[color:var(--accent)]"
        />
      )}
      {helper && <span className="mt-1 block text-xs text-[color:var(--fg-dim)]">{helper}</span>}
    </label>
  );
}

function RadioOption({
  label,
  desc,
  value,
  checked,
  onChange,
}: {
  label: string;
  desc: string;
  value: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label
      className={`flex cursor-pointer items-start gap-3 rounded-md border p-4 transition-colors ${
        checked
          ? "border-[color:var(--accent)] bg-[color:var(--bg-raised)]"
          : "border-[color:var(--border-fine)] bg-[color:var(--bg-raised)]/40 hover:border-[color:var(--border)]"
      }`}
    >
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className="mt-1 h-4 w-4 flex-shrink-0 accent-[color:var(--accent)]"
      />
      <span className="flex-1">
        <span className="block font-medium text-[color:var(--fg)]">{label}</span>
        <span className="block text-xs text-[color:var(--fg-muted)]">{desc}</span>
      </span>
    </label>
  );
}
