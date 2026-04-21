# Joystickz

The Joystickz (JSZ) design system — design tokens, components, and documentation — for Skillz's Arcade product and beyond.

## Layout

```
joystickz/
├── apps/
│   └── docs/         Next.js docs site → arcade-mcp-testing.vercel.app
└── packages/
    ├── tokens/       @ptyagi111/jsz-tokens — colors, typography, spacing, radii
    └── web/          @ptyagi111/jsz-web    — React components (web)
```

A `packages/native/` for React Native is planned — the Arcade RN app will consume `tokens` + `native` (same tokens, platform-specific components).

## Local development

```bash
npm install             # installs all workspaces
npm run dev             # runs the docs site (apps/docs)
npm run build           # builds the docs site
npm run typecheck       # typechecks all workspaces
```

## Publishing

Packages are configured to publish to GitHub Packages (`npm.pkg.github.com`). Actual `npm publish` is deferred until the repo migrates to the Skillz org and package scopes flip from `@ptyagi111/*` to `@skillz/*`.

## Deployment

The docs site is deployed on Vercel. The Vercel project's Root Directory should be set to `apps/docs` in the dashboard — URL `arcade-mcp-testing.vercel.app` is preserved through the GitHub repo rename.
