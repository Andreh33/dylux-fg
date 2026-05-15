"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// =============================================================================
// Morral (carrito)
// =============================================================================

export type MorralItem = {
  slug: string;
  nombre: string;
  precio: number;
  cantidad: number;
  imagen?: string;
  curador?: string;
};

type MorralState = {
  items: MorralItem[];
  abierto: boolean;
  añadir: (item: Omit<MorralItem, "cantidad"> & { cantidad?: number }) => void;
  quitar: (slug: string) => void;
  setCantidad: (slug: string, cantidad: number) => void;
  vaciar: () => void;
  abrir: () => void;
  cerrar: () => void;
  toggle: () => void;
};

export const useMorral = create<MorralState>()(
  persist(
    (set) => ({
      items: [],
      abierto: false,
      añadir: (item) =>
        set((s) => {
          const existing = s.items.find((it) => it.slug === item.slug);
          if (existing) {
            return {
              items: s.items.map((it) =>
                it.slug === item.slug
                  ? { ...it, cantidad: it.cantidad + (item.cantidad ?? 1) }
                  : it
              ),
              abierto: true,
            };
          }
          return {
            items: [...s.items, { ...item, cantidad: item.cantidad ?? 1 }],
            abierto: true,
          };
        }),
      quitar: (slug) =>
        set((s) => ({ items: s.items.filter((it) => it.slug !== slug) })),
      setCantidad: (slug, cantidad) =>
        set((s) => ({
          items: s.items
            .map((it) => (it.slug === slug ? { ...it, cantidad } : it))
            .filter((it) => it.cantidad > 0),
        })),
      vaciar: () => set({ items: [] }),
      abrir: () => set({ abierto: true }),
      cerrar: () => set({ abierto: false }),
      toggle: () => set((s) => ({ abierto: !s.abierto })),
    }),
    {
      name: "montaraz:morral",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }) as unknown as MorralState,
    }
  )
);

// =============================================================================
// Cuaderno (wishlist)
// =============================================================================

type CuadernoState = {
  slugs: string[];
  añadir: (slug: string) => void;
  quitar: (slug: string) => void;
  toggle: (slug: string) => void;
  contiene: (slug: string) => boolean;
};

export const useCuaderno = create<CuadernoState>()(
  persist(
    (set, get) => ({
      slugs: [],
      añadir: (slug) =>
        set((s) => ({ slugs: Array.from(new Set([...s.slugs, slug])) })),
      quitar: (slug) =>
        set((s) => ({ slugs: s.slugs.filter((x) => x !== slug) })),
      toggle: (slug) => {
        if (get().slugs.includes(slug)) get().quitar(slug);
        else get().añadir(slug);
      },
      contiene: (slug) => get().slugs.includes(slug),
    }),
    {
      name: "montaraz:cuaderno",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// =============================================================================
// Tema (dark / light / tarde de campo)
// =============================================================================

export type Tema = "auto" | "dark" | "light" | "tarde";

type TemaState = {
  tema: Tema;
  set: (tema: Tema) => void;
  cycle: () => void;
};

export const useTema = create<TemaState>()(
  persist(
    (set, get) => ({
      tema: "auto",
      set: (tema) => {
        set({ tema });
        aplicarTema(tema);
      },
      cycle: () => {
        const orden: Tema[] = ["auto", "dark", "light", "tarde"];
        const idx = orden.indexOf(get().tema);
        const next = orden[(idx + 1) % orden.length]!;
        set({ tema: next });
        aplicarTema(next);
      },
    }),
    {
      name: "montaraz:tema",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) aplicarTema(state.tema);
      },
    }
  )
);

export function aplicarTema(tema: Tema) {
  if (typeof document === "undefined") return;
  const html = document.documentElement;

  if (tema === "auto") {
    html.removeAttribute("data-theme");
    return;
  }
  if (tema === "dark") {
    html.removeAttribute("data-theme");
    return;
  }
  html.setAttribute("data-theme", tema);
}

// =============================================================================
// Easter eggs — registro y unlock
// =============================================================================

export type EggId =
  | "konami"
  | "brujula-sur"
  | "logo-crt"
  | "cuaderno-footer"
  | "mosca-silenciosa"
  | "modo-tinta"
  | "modo-sigilo"
  | "carabo-noche"
  | "lluvia-hojas"
  | "primera-visita";

type EggState = {
  desbloqueados: EggId[];
  ultimoMensaje: string | null;
  desbloquear: (id: EggId, mensaje?: string) => void;
  esta: (id: EggId) => boolean;
  setMensaje: (mensaje: string | null) => void;
};

export const useEggs = create<EggState>()(
  persist(
    (set, get) => ({
      desbloqueados: [],
      ultimoMensaje: null,
      desbloquear: (id, mensaje) => {
        if (get().desbloqueados.includes(id)) return;
        set((s) => ({
          desbloqueados: [...s.desbloqueados, id],
          ultimoMensaje: mensaje ?? null,
        }));
      },
      esta: (id) => get().desbloqueados.includes(id),
      setMensaje: (mensaje) => set({ ultimoMensaje: mensaje }),
    }),
    {
      name: "montaraz:eggs",
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ desbloqueados: s.desbloqueados }) as unknown as EggState,
    }
  )
);

// =============================================================================
// Comparador
// =============================================================================

type ComparadorState = {
  slugs: string[];
  añadir: (slug: string) => void;
  quitar: (slug: string) => void;
  toggle: (slug: string) => void;
  vaciar: () => void;
};

export const useComparador = create<ComparadorState>()(
  persist(
    (set, get) => ({
      slugs: [],
      añadir: (slug) =>
        set((s) => ({
          slugs: s.slugs.includes(slug)
            ? s.slugs
            : [...s.slugs, slug].slice(0, 4), // máx 4
        })),
      quitar: (slug) =>
        set((s) => ({ slugs: s.slugs.filter((x) => x !== slug) })),
      toggle: (slug) => {
        if (get().slugs.includes(slug)) get().quitar(slug);
        else get().añadir(slug);
      },
      vaciar: () => set({ slugs: [] }),
    }),
    {
      name: "montaraz:comparador",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// =============================================================================
// Cookies (consentimiento RGPD)
// =============================================================================

export type Consentimiento = {
  necesarias: true; // siempre
  analiticas: boolean;
  marketing: boolean;
  decidido: boolean;
};

type CookiesState = {
  c: Consentimiento;
  aceptarTodas: () => void;
  rechazarOpcionales: () => void;
  set: (parcial: Partial<Consentimiento>) => void;
};

export const useCookies = create<CookiesState>()(
  persist(
    (set) => ({
      c: { necesarias: true, analiticas: false, marketing: false, decidido: false },
      aceptarTodas: () =>
        set({
          c: { necesarias: true, analiticas: true, marketing: true, decidido: true },
        }),
      rechazarOpcionales: () =>
        set({
          c: { necesarias: true, analiticas: false, marketing: false, decidido: true },
        }),
      set: (parcial) =>
        set((s) => ({ c: { ...s.c, ...parcial, necesarias: true, decidido: true } })),
    }),
    {
      name: "montaraz:cookies",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
