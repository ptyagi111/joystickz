/**
 * Joystickz DS typography tokens.
 * Font: DM Sans.
 */

export const fontFamily = {
  sans: '"DM Sans", sans-serif',
} as const;

export const fontSize = {
  h1:        "3.5rem",    // 56px
  h2:        "2rem",      // 32px
  h3:        "1.5rem",    // 24px
  "body-xl": "1.25rem",   // 20px
  "body-l":  "1rem",      // 16px
  "body-m":  "0.875rem",  // 14px
  "body-s":  "0.75rem",   // 12px
} as const;

export const fontWeight = {
  regular:   400,
  bold:      700,
  extrabold: 800,
} as const;

export const letterSpacing = {
  heading: "-0.03em",
} as const;

export const lineHeight = {
  tight:  1.2,
  normal: 1.4,
} as const;

export type FontSizeToken = keyof typeof fontSize;
export type FontWeightToken = keyof typeof fontWeight;
