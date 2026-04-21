/**
 * Joystickz DS corner-radius tokens (in pixels).
 */

export const radius = {
  small: 4,
  base:  8,
  large: 16,
  full:  9999,
} as const;

export type RadiusToken = keyof typeof radius;
