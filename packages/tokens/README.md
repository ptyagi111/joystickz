# @ptyagi111/jsz-tokens

Framework-agnostic design tokens for the Joystickz design system. Consumed by `@ptyagi111/jsz-web` (and a future `@ptyagi111/jsz-native`).

## Usage

```ts
import { colors, spacing, fontSize, radius } from "@ptyagi111/jsz-tokens";

colors.bg.primary;   // "#10101e"
spacing[400];        // 16
fontSize.h1;         // "3.5rem"
radius.base;         // 8
```

Individual exports are also available:

```ts
import { colors } from "@ptyagi111/jsz-tokens/colors";
import { spacing } from "@ptyagi111/jsz-tokens/spacing";
```

## Source of truth

Values mirror `apps/docs/app/globals.css` (`@theme inline` block), which itself is sourced from the Figma file "Arcade-DSL" (`j5l9mSi413UrUpzbJHXQ0w`). Any update here should be mirrored in the CSS.
