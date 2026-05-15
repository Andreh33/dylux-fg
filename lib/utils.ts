import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Composición de clases. `clsx` para condicionales, `twMerge` para
 * resolver conflictos de Tailwind (ej. `p-2 p-4` → `p-4`).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formateador de precio en EUR con espacios finos.
 * 1245 → "1 245,00 €"
 */
export function formatPrice(amount: number, currency = "EUR", locale = "es-ES") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

/**
 * Slugify ligero (no usa libraría, suficiente para SKUs y URLs).
 */
export function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Reading time aproximado (palabras por minuto = 220).
 */
export function readingTime(text: string) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

/**
 * Saludo contextual según hora local del navegador.
 * Lo usa el header en modo logueado.
 */
export function saludoPorHora(date: Date = new Date()) {
  const h = date.getHours();
  if (h >= 4 && h < 7) return "Buenos días, madrugador.";
  if (h >= 7 && h < 12) return "Buenos días.";
  if (h >= 12 && h < 15) return "Buen mediodía.";
  if (h >= 15 && h < 19) return "Buenas tardes.";
  if (h >= 19 && h < 23) return "Buenas noches, cómplice.";
  return "Sigue ahí abajo. Que descanses.";
}
