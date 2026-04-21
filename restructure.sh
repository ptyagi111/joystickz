#!/usr/bin/env bash
#
# Joystickz monorepo restructure.
#
# Run from the repo root:
#   bash restructure.sh
#
# What this does:
#   1. Creates a `monorepo-restructure` branch off main.
#   2. Moves the Next.js app into apps/docs/ (git mv, history preserved).
#   3. Extracts components/ui/ into packages/web/ (@ptyagi111/jsz-web).
#   4. Creates packages/tokens/ (@ptyagi111/jsz-tokens) from the _scaffold/.
#   5. Wires npm workspaces at the repo root.
#   6. Rewrites imports: @/components/ui/* → @ptyagi111/jsz-web
#      and @/lib/utils inside the web package → ./utils.
#   7. Adds transpilePackages to next.config.ts and @source to globals.css.
#   8. Runs npm install and npm run build to verify.
#
# If anything fails, you can roll back entirely:
#   git checkout main && git branch -D monorepo-restructure
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

say() { printf '\n\033[1;36m▶ %s\033[0m\n' "$*"; }
warn() { printf '\033[1;33m⚠ %s\033[0m\n' "$*"; }
die() { printf '\033[1;31m✗ %s\033[0m\n' "$*" >&2; exit 1; }

# ── Safety checks ─────────────────────────────────────────────────
say "Running safety checks"

[ -d .git ] || die "Not a git repo (run this from the repo root)."

# Clear any stale lock files left by an aborted previous attempt.
rm -f .git/HEAD.lock .git/index.lock .git/objects/maintenance.lock 2>/dev/null || true

CURRENT_BRANCH=$(git branch --show-current)
[ "$CURRENT_BRANCH" = "main" ] || die "Expected to be on 'main' (currently on '$CURRENT_BRANCH'). Run: git checkout main"

# Delete a stray file from an earlier sandbox permissions test, if present.
rm -f test-in-repo.txt 2>/dev/null || true

if [ -n "$(git status --porcelain | grep -v '^?? restructure\.sh$' | grep -v '^?? _scaffold/' | grep -v '^?? test-in-repo\.txt$' || true)" ]; then
  git status --short
  die "Working tree has changes outside restructure.sh / _scaffold/. Commit or stash them first."
fi

if git rev-parse --verify monorepo-restructure >/dev/null 2>&1; then
  die "Branch 'monorepo-restructure' already exists. Delete it first: git branch -D monorepo-restructure"
fi

[ -d _scaffold ] || die "_scaffold/ directory is missing. It should have been staged in this repo — re-run the Claude session that produced it."

command -v npm >/dev/null || die "npm not found on PATH."

# ── Branch ────────────────────────────────────────────────────────
say "Creating branch 'monorepo-restructure'"
git checkout -b monorepo-restructure

# ── Directory scaffolding ─────────────────────────────────────────
say "Creating target directory layout"
mkdir -p apps/docs/components
mkdir -p packages/tokens/src
mkdir -p packages/web/src

# ── Move components/ui → packages/web/src (git mv preserves history) ─
say "Moving components/ui/* → packages/web/src/"
for f in badge button card filter-chip hud input-field lobby-card menu-item result-card tabs toast typography; do
  if [ -f "components/ui/${f}.tsx" ]; then
    git mv "components/ui/${f}.tsx" "packages/web/src/${f}.tsx"
  else
    warn "components/ui/${f}.tsx not found (skipping)"
  fi
done
git mv components/ui/index.ts packages/web/src/index.ts

# ── Move components/docs → apps/docs/components/docs ───────────────
say "Moving components/docs → apps/docs/components/docs"
git mv components/docs apps/docs/components/docs

# Clean up now-empty components/ (if empty)
rmdir components/ui 2>/dev/null || true
rmdir components 2>/dev/null || true

# ── Move Next.js app pieces → apps/docs ───────────────────────────
say "Moving Next.js app into apps/docs/"
git mv app apps/docs/app
git mv lib apps/docs/lib
git mv public apps/docs/public
git mv next.config.ts apps/docs/next.config.ts
git mv postcss.config.mjs apps/docs/postcss.config.mjs
git mv eslint.config.mjs apps/docs/eslint.config.mjs
git mv tsconfig.json apps/docs/tsconfig.json

# Move old root package.json → apps/docs (we'll overwrite content below).
# This preserves some git history for the docs workspace.
git mv package.json apps/docs/package.json

# next-env.d.ts is gitignored so it's not under git's control. Plain mv.
[ -f next-env.d.ts ] && mv next-env.d.ts apps/docs/next-env.d.ts || true

# ── Drop scaffold files into place ────────────────────────────────
say "Copying scaffold files into place"

cp _scaffold/root-package.json                package.json
cp _scaffold/docs-package.json                apps/docs/package.json
cp _scaffold/root-gitignore                   .gitignore
cp _scaffold/root-README.md                   README.md

cp _scaffold/tokens/package.json              packages/tokens/package.json
cp _scaffold/tokens/tsconfig.json             packages/tokens/tsconfig.json
cp _scaffold/tokens/README.md                 packages/tokens/README.md
cp _scaffold/tokens/src/index.ts              packages/tokens/src/index.ts
cp _scaffold/tokens/src/colors.ts             packages/tokens/src/colors.ts
cp _scaffold/tokens/src/spacing.ts            packages/tokens/src/spacing.ts
cp _scaffold/tokens/src/typography.ts         packages/tokens/src/typography.ts
cp _scaffold/tokens/src/radius.ts             packages/tokens/src/radius.ts

cp _scaffold/web-package.json                 packages/web/package.json
cp _scaffold/web-tsconfig.json                packages/web/tsconfig.json
cp _scaffold/web-README.md                    packages/web/README.md
cp _scaffold/web-utils.ts                     packages/web/src/utils.ts

# ── Rewrite imports ───────────────────────────────────────────────
say "Rewriting imports in apps/docs: @/components/ui/* → @ptyagi111/jsz-web"
# Match: from "@/components/ui/<file>"  OR  from "@/components/ui"
#        (also handles the single-quote variant, just in case)
find apps/docs -type f \( -name "*.ts" -o -name "*.tsx" \) -print0 \
  | xargs -0 sed -i.bak -E \
      -e 's#from "@/components/ui/[a-z][a-z0-9-]*"#from "@ptyagi111/jsz-web"#g' \
      -e "s#from '@/components/ui/[a-z][a-z0-9-]*'#from '@ptyagi111/jsz-web'#g" \
      -e 's#from "@/components/ui"#from "@ptyagi111/jsz-web"#g' \
      -e "s#from '@/components/ui'#from '@ptyagi111/jsz-web'#g"
find apps/docs -type f -name "*.bak" -delete

say "Rewriting imports in packages/web: @/lib/utils → ./utils"
find packages/web/src -type f \( -name "*.ts" -o -name "*.tsx" \) -print0 \
  | xargs -0 sed -i.bak -E \
      -e 's#from "@/lib/utils"#from "./utils"#g' \
      -e "s#from '@/lib/utils'#from './utils'#g"
find packages/web/src -type f -name "*.bak" -delete

# ── Patch next.config.ts (transpilePackages) ──────────────────────
say "Writing apps/docs/next.config.ts with transpilePackages"
cat > apps/docs/next.config.ts <<'EOF'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile workspace packages so Next.js can consume their raw .ts/.tsx sources.
  transpilePackages: ["@ptyagi111/jsz-web", "@ptyagi111/jsz-tokens"],
};

export default nextConfig;
EOF

# ── Patch globals.css (@source for Tailwind v4 to see packages/web) ─
say "Adding @source directive to apps/docs/app/globals.css for Tailwind v4 content scanning"
CSS_FILE="apps/docs/app/globals.css"
if [ -f "$CSS_FILE" ] && ! grep -q '@source "../../../packages/web/src"' "$CSS_FILE"; then
  # Insert @source line right after the `@import "tailwindcss";` line.
  awk '
    { print }
    /^@import "tailwindcss";/ && !done {
      print "@source \"../../../packages/web/src\";"
      done = 1
    }
  ' "$CSS_FILE" > "${CSS_FILE}.new" && mv "${CSS_FILE}.new" "$CSS_FILE"
fi

# ── Clean up generated / stale files ──────────────────────────────
say "Cleaning old root node_modules, lockfile, and build caches"
rm -rf node_modules package-lock.json .next tsconfig.tsbuildinfo

# ── Remove the scaffold (no longer needed) ────────────────────────
say "Removing _scaffold/"
rm -rf _scaffold

# ── Stage the restructure as a commit ─────────────────────────────
say "Committing restructure"
git add -A
git commit -m "Restructure into monorepo: apps/docs + packages/{tokens,web}

- Move Next.js app to apps/docs/ (history preserved via git mv)
- Extract components/ui/ to packages/web/ as @ptyagi111/jsz-web
- Create packages/tokens/ as @ptyagi111/jsz-tokens (colors, spacing,
  typography, radii — mirrors apps/docs/app/globals.css)
- npm workspaces at the repo root
- Rewrite @/components/ui/* imports in docs to @ptyagi111/jsz-web
- Rewrite @/lib/utils inside packages/web/src to ./utils
- next.config.ts: transpilePackages for the workspace packages
- globals.css: @source directive so Tailwind v4 scans packages/web/src

Publishing is wired for GitHub Packages (publishConfig) but no actual
publish step runs yet — deferred until the repo moves to the Skillz org
and @ptyagi111/* can flip to @skillz/*.

The Vercel docs site (arcade-mcp-testing.vercel.app) will need its
Root Directory set to 'apps/docs' in the Vercel dashboard before this
branch is merged to main."

# ── Install dependencies ──────────────────────────────────────────
say "Running npm install (this resolves the workspace graph — can take a minute)"
npm install

# ── Verify the docs still builds ──────────────────────────────────
say "Building apps/docs to verify the restructure is clean"
if npm run build --workspace apps/docs; then
  printf '\n\033[1;32m✅ Monorepo restructure succeeded and docs built cleanly.\033[0m\n'
  printf '\nNext steps:\n'
  printf '  1. Review the diff:   git log --stat -1\n'
  printf '  2. Spin up locally:   npm run dev\n'
  printf '  3. When ready, rename the GitHub repo ptyagi111/figma → ptyagi111/joystickz on github.com.\n'
  printf '  4. Then: git remote set-url origin git@github.com:ptyagi111/joystickz.git\n'
  printf '  5. Push the branch:   git push -u origin monorepo-restructure\n'
  printf '  6. In Vercel dashboard, set Project → Settings → General → Root Directory to: apps/docs\n'
  printf '  7. Merge to main. Vercel redeploys; arcade-mcp-testing.vercel.app should work unchanged.\n\n'
else
  printf '\n\033[1;31m✗ Build failed.\033[0m The restructure commit is in place on branch monorepo-restructure.\n'
  printf 'You can inspect, fix, and re-run `npm run build --workspace apps/docs`.\n'
  printf 'Or roll back entirely:  git checkout main && git branch -D monorepo-restructure\n\n'
  exit 1
fi
