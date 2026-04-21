/**
 * Joystickz DS spacing scale (in pixels).
 *
 * Naming follows jsz-rules.md: Space.100 = 4px … Space.4000 = 160px.
 * Multiplier: value_px = (token_key / 100) * 4.
 */

export const spacing = {
  "100":  4,
  "200":  8,
  "300":  12,
  "400":  16,
  "500":  20,
  "600":  24,
  "800":  32,
  "1000": 40,
  "1200": 48,
  "1500": 60,
  "2000": 80,
  "3000": 120,
  "4000": 160,
} as const;

export type SpacingToken = keyof typeof spacing;
