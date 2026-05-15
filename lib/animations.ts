/**
 * Diccionario centralizado de transiciones y variantes para Framer Motion.
 * Cada entrada está nombrada en castellano para coherencia con el resto del brief.
 *
 * Referencias en el BRIEF.md: §33.3 (Curvas de easing personalizadas)
 */

import type { Transition, Variants } from "motion/react";

// =============================================================================
// Curvas de easing (Bezier custom)
// =============================================================================

export const ease = {
  monteIn:    [0.7, 0, 0.84, 0]    as const, // entrada con peso
  monteOut:   [0.16, 1, 0.3, 1]    as const, // expo out "Apple-like"
  monteInOut: [0.83, 0, 0.17, 1]   as const,
  pendulum:   [0.45, 0, 0.55, 1]   as const,
  wind:       [0.25, 1, 0.5, 1]    as const,
  tide:       [0.55, 0, 0.1, 1]    as const,
  shutter:    [0.85, 0, 0.15, 1]   as const,
} as const;

// =============================================================================
// Duraciones de referencia
// =============================================================================

export const dur = {
  micro: 0.12,
  small: 0.2,
  medium: 0.36,
  long: 0.56,
  cinema: 1.2,
} as const;

// =============================================================================
// Springs canónicos
// =============================================================================

export const spring = {
  soft: { type: "spring" as const, stiffness: 80, damping: 18, mass: 1 },
  firm: { type: "spring" as const, stiffness: 240, damping: 26, mass: 0.8 },
} as const;

// =============================================================================
// Variants reutilizables
// =============================================================================

/**
 * Reveal estándar: opacidad 0→1 + translateY 24→0 al entrar en viewport.
 */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: dur.long, ease: ease.monteOut },
  },
};

/**
 * Reveal con stagger para hijos.
 */
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

/**
 * Reveal pequeño para items dentro de stagger.
 */
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: dur.medium, ease: ease.monteOut },
  },
};

/**
 * Word-by-word stagger (para manifesto, citas).
 */
export const wordVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: dur.medium,
      ease: ease.monteOut,
      delay: i * 0.04,
    },
  }),
};

/**
 * Cortina vertical (page transition).
 */
export const curtainVariants: Variants = {
  hidden: { scaleY: 0, originY: 1 },
  show: { scaleY: 1, transition: { duration: dur.long, ease: ease.monteInOut } },
  exit: { scaleY: 0, originY: 0, transition: { duration: dur.medium, ease: ease.monteIn } },
};

/**
 * Halo de aire para botones magnéticos.
 */
export const magneticTransition: Transition = {
  type: "spring",
  stiffness: 240,
  damping: 26,
  mass: 0.8,
};

/**
 * Hover sutil de card (lift + sombra).
 */
export const cardHover: Variants = {
  rest: { y: 0 },
  hover: {
    y: -4,
    transition: { duration: dur.small, ease: ease.monteOut },
  },
};

/**
 * Pulse 1× para morral counter.
 */
export const counterPulse: Variants = {
  rest: { scale: 1 },
  pulse: {
    scale: [1, 1.18, 1],
    transition: { duration: 0.4, ease: ease.pendulum, times: [0, 0.4, 1] },
  },
};
