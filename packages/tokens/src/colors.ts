/**
 * Joystickz DS color tokens.
 *
 * Dark-theme-first. Exact values mirror apps/docs/app/globals.css (@theme inline).
 * Source: Figma "Arcade-DSL" (j5l9mSi413UrUpzbJHXQ0w).
 */

export const colors = {
  bg: {
    primary:   "#10101e",
    secondary: "#24243b",
    tertiary:  "#32324e",
    deep:      "#020217",
  },
  neutral: "#f5f5f5",
  brand: {
    primary: "#ffee35",
    dark:    "#cc7701",
  },
  positive: {
    primary: "#14ae5c",
    hover:   "#009951",
    dark:    "#008043",
    deeper:  "#024023",
  },
  negative: {
    primary: "#c00f0d",
    dark:    "#690807",
    deeper:  "#4d0b0a",
  },
  attentive: {
    primary: "#ffa935",
    dark:    "#cc7702",
    darker:  "#995901",
  },
  special: {
    gem: "#ea3fb8",
  },
  border: {
    primary: "#8484b3",
    dark:    "#24243b",
  },
  overlay: {
    default: "rgba(0, 0, 0, 0.5)",
    blanket: "rgba(0, 0, 0, 0.85)",
  },
} as const;

export type Colors = typeof colors;
