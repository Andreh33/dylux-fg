"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { formatPrice } from "@/lib/utils";
import { useMorral } from "@/lib/store";

type Pieza = {
  id: string;
  nombre: string;
  precio: number;
  detalle: string;
  pesoG?: number;
};

type Paso = {
  id: string;
  titulo: string;
  descripcion: string;
  piezas: Pieza[];
};

const pasos: Paso[] = [
  {
    id: "calibre",
    titulo: "Calibre",
    descripcion: "Para qué vas a usarlo. La decisión más importante.",
    piezas: [
      { id: "243", nombre: ".243 Win", detalle: "Corzo, monte bajo, distancias < 200 m.", precio: 0 },
      { id: "270", nombre: ".270 Win", detalle: "Polivalente: corzo, ciervo, rebeco.", precio: 30 },
      { id: "308", nombre: ".308 Win", detalle: "Caza mayor, militar, top ventas.", precio: 0 },
      { id: "3006", nombre: ".30-06 Sprg", detalle: "Caza mayor pesada, clásico.", precio: 20 },
      { id: "65cm", nombre: "6.5 Creedmoor", detalle: "Tiro largo, balística moderna.", precio: 80 },
      { id: "300wm", nombre: ".300 Win Mag", detalle: "Caza mayor a larga distancia, premium.", precio: 180 },
    ],
  },
  {
    id: "accion",
    titulo: "Acción",
    descripcion: "El corazón del rifle. Cerrojo manual.",
    piezas: [
      { id: "sako90", nombre: "Sako 90", detalle: "Acción finlandesa. Recorrido corto, fiable.", precio: 2450, pesoG: 1450 },
      { id: "tikkat3x", nombre: "Tikka T3X", detalle: "Mismo grupo Sako, precio justo.", precio: 1120, pesoG: 1380 },
      { id: "bergarab14", nombre: "Bergara B-14", detalle: "Acción española, precisión garantizada.", precio: 990, pesoG: 1410 },
      { id: "mauserm18", nombre: "Mauser M18", detalle: "Alemana, honestidad probada.", precio: 1090, pesoG: 1500 },
    ],
  },
  {
    id: "canon",
    titulo: "Cañón",
    descripcion: "Longitud + acabado.",
    piezas: [
      { id: "510", nombre: "510 mm · pavonado", detalle: "Estándar. Equilibrio ligereza/precisión.", precio: 0, pesoG: 980 },
      { id: "560", nombre: "560 mm · pavonado", detalle: "Más velocidad para magnum.", precio: 60, pesoG: 1060 },
      { id: "510fl", nombre: "510 mm · fluteado", detalle: "Menos peso, disipa calor.", precio: 180, pesoG: 880 },
      { id: "510cer", nombre: "510 mm · cerakote desert", detalle: "Acabado armería, anti-corrosión.", precio: 290, pesoG: 985 },
    ],
  },
  {
    id: "culata",
    titulo: "Culata",
    descripcion: "Nogal o polímero.",
    piezas: [
      { id: "nogal-a", nombre: "Nogal grado A", detalle: "Veta estándar, aceitada.", precio: 0, pesoG: 880 },
      { id: "nogal-aaa", nombre: "Nogal grado AAA", detalle: "Veta seleccionada. Pieza única.", precio: 480, pesoG: 880 },
      { id: "sintetica", nombre: "Sintética negra", detalle: "Resistente a la lluvia y zarza.", precio: 0, pesoG: 720 },
      { id: "sintetica-cer", nombre: "Sintética cerakote", detalle: "Tierra/oliva, todoterreno.", precio: 120, pesoG: 720 },
    ],
  },
  {
    id: "gatillo",
    titulo: "Gatillo",
    descripcion: "Ajuste de presión.",
    piezas: [
      { id: "13kg", nombre: "1.3 kg ajustable", detalle: "Recomendación armero. Fino y firme.", precio: 0 },
      { id: "10kg", nombre: "1.0 kg ajustable", detalle: "Tirador experimentado. Cuidado en frío.", precio: 90 },
      { id: "set", nombre: "Set Trigger 0.5 kg", detalle: "Tiro de precisión. Cuidado con guantes.", precio: 220 },
    ],
  },
  {
    id: "optica",
    titulo: "Óptica",
    descripcion: "Tu ojo extendido.",
    piezas: [
      { id: "z5", nombre: "Swarovski Z5 3.5-18x44", detalle: "Crepuscular alpino, BR-i.", precio: 1690, pesoG: 510 },
      { id: "v4", nombre: "Zeiss Conquest V4 3-12x56", detalle: "Crepuscular Zeiss, aguardo.", precio: 1190, pesoG: 660 },
      { id: "magnus", nombre: "Leica Magnus 1.5-10x42", detalle: "Compacta y luminosa.", precio: 1890, pesoG: 530 },
      { id: "vortex", nombre: "Vortex Razor HD Gen III", detalle: "Calidad-precio americana.", precio: 2490, pesoG: 770 },
      { id: "sinoptica", nombre: "Sin óptica", detalle: "Ya tienes una o quieres elegir más tarde.", precio: 0 },
    ],
  },
  {
    id: "monturas",
    titulo: "Monturas",
    descripcion: "Para sujetar la óptica.",
    piezas: [
      { id: "warne", nombre: "Warne Maxima QD", detalle: "Desmontaje rápido. Estándar.", precio: 120, pesoG: 180 },
      { id: "spuhr", nombre: "Spuhr ISMS 30mm", detalle: "Premium, anti-cant integrado.", precio: 480, pesoG: 290 },
      { id: "tier1", nombre: "Tier-One Tactical", detalle: "Inglesas, profesionales.", precio: 320, pesoG: 240 },
    ],
  },
  {
    id: "correa",
    titulo: "Correa",
    descripcion: "Para no cansar el hombro.",
    piezas: [
      { id: "cuero", nombre: "Cuero engrasado", detalle: "Clásica, envejece bien.", precio: 65 },
      { id: "neopreno", nombre: "Neopreno acolchado", detalle: "Mochila pesada y trayectos largos.", precio: 45 },
      { id: "trenza", nombre: "Trenza tradicional", detalle: "Cordones, estética campera.", precio: 85 },
      { id: "sincorrea", nombre: "Sin correa", detalle: "Ya tienes una.", precio: 0 },
    ],
  },
  {
    id: "funda",
    titulo: "Funda",
    descripcion: "Transporte hasta el coto.",
    piezas: [
      { id: "blanda", nombre: "Blanda acolchada", detalle: "Para coche y trayectos cortos.", precio: 110 },
      { id: "rigida", nombre: "Rígida ABS", detalle: "Avión y trayectos largos.", precio: 220 },
      { id: "sko", nombre: "Sko Air Soft Travel", detalle: "Premium, IATA aprobada.", precio: 380 },
    ],
  },
  {
    id: "caja",
    titulo: "Caja",
    descripcion: "Para guardarlo en casa.",
    piezas: [
      { id: "cartonkraft", nombre: "Cartón kraft (estándar Montaraz)", detalle: "Llega así. Reciclable.", precio: 0 },
      { id: "madera", nombre: "Caja de madera con grabado", detalle: "Personalizada con tu nombre.", precio: 180 },
    ],
  },
  {
    id: "personalizacion",
    titulo: "Grabado / Personalización",
    descripcion: "Tu nombre, tu coto, una fecha.",
    piezas: [
      { id: "sinpers", nombre: "Sin grabado", detalle: "Sale como está de fábrica.", precio: 0 },
      { id: "inicial", nombre: "Iniciales en culata (oro)", detalle: "Iniciales discretas.", precio: 120 },
      { id: "grabado", nombre: "Grabado completo armero", detalle: "Nombre, fecha, coto. Trabajo de Alfredo.", precio: 380 },
    ],
  },
];

export function ConfiguradorRifle() {
  const añadir = useMorral((s) => s.añadir);
  const [seleccion, setSeleccion] = useState<Record<string, string>>({});
  const [pasoActual, setPasoActual] = useState(0);
  const [guardado, setGuardado] = useState(false);

  function elegir(pasoId: string, piezaId: string) {
    setSeleccion((s) => ({ ...s, [pasoId]: piezaId }));
  }

  function piezaSeleccionada(paso: Paso) {
    return paso.piezas.find((p) => p.id === seleccion[paso.id]);
  }

  const precio = useMemo(() => {
    return pasos.reduce((sum, p) => {
      const pieza = piezaSeleccionada(p);
      return sum + (pieza?.precio ?? 0);
    }, 0);
  }, [seleccion]);

  const peso = useMemo(() => {
    return pasos.reduce((sum, p) => {
      const pieza = piezaSeleccionada(p);
      return sum + (pieza?.pesoG ?? 0);
    }, 0);
  }, [seleccion]);

  const completos = pasos.filter((p) => seleccion[p.id]).length;
  const total = pasos.length;
  const completado = completos === total;

  function añadirAlMorral() {
    const nombre =
      pasos
        .filter((p) => seleccion[p.id])
        .map((p) => piezaSeleccionada(p)?.nombre)
        .filter(Boolean)
        .slice(0, 2)
        .join(" + ") || "Rifle configurado";
    añadir({
      slug: `configurador-${Date.now()}`,
      nombre: `Rifle configurado: ${nombre}`,
      precio,
      curador: "Alfredo",
    });
  }

  function compartir() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      const url = new URL(window.location.href);
      url.searchParams.set("cfg", btoa(JSON.stringify(seleccion)));
      navigator.clipboard.writeText(url.toString());
      setGuardado(true);
      setTimeout(() => setGuardado(false), 1800);
    }
  }

  const paso = pasos[pasoActual]!;

  return (
    <div className="mx-auto max-w-[1440px] px-6 pb-32 lg:px-10">
      {/* Header */}
      <header className="border-b border-[color:var(--border-fine)] py-12 lg:py-16">
        <p className="eyebrow mb-4">Configurador · Rifle de cerrojo</p>
        <h1 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight text-[color:var(--fg)]">
          Tu rifle, pieza a pieza.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-[color:var(--fg-muted)]">
          {total} pasos. Compatibilidades validadas. Sin compromiso. Cuando esté listo, añádelo al morral o compártelo con tu armero de confianza.
        </p>
      </header>

      <div className="grid gap-8 pt-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
        {/* Stepper lateral */}
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow mb-4">
            Paso {pasoActual + 1} de {total}
          </p>
          <div className="mb-6 h-1 w-full overflow-hidden rounded-full bg-[color:var(--bg-raised)]">
            <motion.div
              animate={{ width: `${(completos / total) * 100}%` }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-[color:var(--accent)]"
            />
          </div>
          <ul className="space-y-1">
            {pasos.map((p, i) => {
              const completo = Boolean(seleccion[p.id]);
              const active = i === pasoActual;
              return (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => setPasoActual(i)}
                    className={`group flex w-full items-start gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors ${
                      active
                        ? "bg-[color:var(--bg-raised)] text-[color:var(--accent)]"
                        : "text-[color:var(--fg-muted)] hover:bg-[color:var(--bg-raised)]/40 hover:text-[color:var(--fg)]"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`mt-1 grid h-4 w-4 flex-shrink-0 place-items-center rounded-full border ${
                        completo
                          ? "border-[color:var(--accent)] bg-[color:var(--accent)]"
                          : active
                            ? "border-[color:var(--accent)]"
                            : "border-[color:var(--border)]"
                      }`}
                    >
                      {completo && (
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="var(--color-verde-1)" strokeWidth="3">
                          <path d="M5 12l5 5 9-12" />
                        </svg>
                      )}
                    </span>
                    <span className="flex-1">
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-[color:var(--fg-dim)]">
                        {String(i + 1).padStart(2, "0")} · {p.titulo}
                      </span>
                      <span className="block">
                        {completo ? piezaSeleccionada(p)?.nombre : "Sin elegir"}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Panel */}
        <section>
          <AnimatePresence mode="wait">
            <motion.div
              key={paso.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display text-3xl leading-tight text-[color:var(--fg)]">
                {paso.titulo}
              </h2>
              <p className="mt-2 text-sm text-[color:var(--fg-muted)]">
                {paso.descripcion}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {paso.piezas.map((pieza) => {
                  const elegida = seleccion[paso.id] === pieza.id;
                  return (
                    <button
                      key={pieza.id}
                      type="button"
                      onClick={() => elegir(paso.id, pieza.id)}
                      className={`group relative rounded-md border p-5 text-left transition-all ${
                        elegida
                          ? "border-[color:var(--accent)] bg-[color:var(--bg-raised)]"
                          : "border-[color:var(--border-fine)] bg-[color:var(--bg-raised)]/40 hover:border-[color:var(--border)]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="font-display text-lg text-[color:var(--fg)]">
                          {pieza.nombre}
                        </p>
                        {pieza.precio === 0 ? (
                          <span className="font-mono text-xs text-[color:var(--fg-dim)]">
                            Sin coste extra
                          </span>
                        ) : (
                          <span className="font-mono text-sm tabular-nums text-[color:var(--accent)]">
                            +{formatPrice(pieza.precio)}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-[color:var(--fg-muted)]">
                        {pieza.detalle}
                      </p>
                      {pieza.pesoG && (
                        <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-[color:var(--fg-dim)]">
                          {pieza.pesoG} g
                        </p>
                      )}
                      {elegida && (
                        <motion.div
                          layoutId="config-active"
                          className="absolute inset-x-0 bottom-0 h-0.5 bg-[color:var(--accent)]"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Navegación pasos */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  disabled={pasoActual === 0}
                  onClick={() => setPasoActual((p) => Math.max(0, p - 1))}
                  className="rounded-md border border-[color:var(--border)] px-4 py-2 text-sm text-[color:var(--fg)] transition-colors hover:border-[color:var(--accent)] disabled:opacity-40"
                >
                  ← Anterior
                </button>
                {pasoActual < total - 1 ? (
                  <button
                    type="button"
                    onClick={() => setPasoActual((p) => Math.min(total - 1, p + 1))}
                    className="rounded-md bg-[color:var(--accent)] px-6 py-2.5 text-sm font-medium text-[color:var(--color-verde-1)] transition-colors hover:bg-[color:var(--accent-hover)]"
                  >
                    Siguiente →
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={!completado}
                    onClick={añadirAlMorral}
                    className="rounded-md bg-[color:var(--accent)] px-6 py-2.5 text-sm font-medium text-[color:var(--color-verde-1)] transition-colors hover:bg-[color:var(--accent-hover)] disabled:opacity-40"
                  >
                    Añadir al morral
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
      </div>

      {/* Resumen sticky inferior */}
      <motion.div
        initial={false}
        animate={completos > 0 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        className="fixed bottom-4 left-4 right-4 z-30 mx-auto max-w-3xl rounded-md border border-[color:var(--border)] bg-[color:var(--bg-raised)] p-4 shadow-2xl backdrop-blur-md"
      >
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[180px]">
            <p className="eyebrow mb-0.5">Tu pieza</p>
            <p className="font-mono text-xs tabular-nums text-[color:var(--fg-muted)]">
              {completos}/{total} pasos · {peso > 0 ? `${(peso / 1000).toFixed(2)} kg` : "—"} · {formatPrice(precio)}
            </p>
          </div>
          <button
            type="button"
            onClick={compartir}
            className="rounded-md border border-[color:var(--border)] px-3 py-2 text-xs text-[color:var(--fg)] transition-colors hover:border-[color:var(--accent)]"
          >
            {guardado ? "✓ Link copiado" : "Compartir config"}
          </button>
          <button
            type="button"
            disabled={!completado}
            onClick={añadirAlMorral}
            className="rounded-md bg-[color:var(--accent)] px-4 py-2 text-xs font-medium text-[color:var(--color-verde-1)] transition-colors hover:bg-[color:var(--accent-hover)] disabled:opacity-40"
          >
            Pedirlo · {formatPrice(precio)}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
