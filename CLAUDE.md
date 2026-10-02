# CLAUDE.md

Guidance for Claude Code when working in this repo. See `AGENTS.md` for the
Lovable git-history rules (no rebasing/force-pushing the connected branch) —
those apply here too.

## What this is

Marketing site for the Ridhi Sidhi garment showroom: five routes (home,
collections, gallery, about, contact), built with TanStack Start, React 19,
TypeScript and Tailwind CSS 4. Deploys to Vercel via Nitro's `vercel` preset
(pinned in `vite.config.ts`).

## Package manager and runtime

- **npm only** — do not use Bun, pnpm or Yarn. `package-lock.json` is the
  single lockfile. (The project was migrated off Bun; see `MIGRATION_NOTES.md`.)
- **Node 24.x** (`engines.node` in `package.json`, `.nvmrc`).

## Commands

```sh
npm install        # install dependencies
npm run dev         # dev server at http://localhost:8080
npm run build       # production build -> .vercel/output (Vercel Build Output API)
npm run typecheck   # tsc --noEmit
npm run lint        # eslint
npm run format      # prettier --write
```

- `npm run preview` returns 500 locally (known TanStack/Nitro output-path
  mismatch, not something to "fix" — see `MIGRATION_NOTES.md`). Use
  `npm run dev` for local checks; use a Vercel preview deploy for
  production-like checks.
- Always run `npm run typecheck` and `npm run lint` after changes.

## Routing

File-based routing under `src/routes/` (TanStack Start / Router) — see
`src/routes/README.md` for the naming conventions (`$id`, `{-$category}`,
`$.tsx` splats, `__root.tsx`). Do **not** create `src/pages/` or Next.js/Remix-
style route files. `src/routeTree.gen.ts` is auto-generated — never hand-edit it.

## Project structure

- `src/components/site/` — shared chrome and editorial building blocks
  (`Header`, `Footer`, `PageShell`, `Reveal`, `SectionHeading`, `StoreMap`,
  `WhatsAppCta`). Route files compose these; keep new shared UI here rather
  than duplicating it per-route.
- `src/components/ui/` — shadcn-generated primitives. Leave the
  `react-refresh/only-export-components` lint warnings in this folder as-is
  (known/accepted, see `MIGRATION_NOTES.md`).
- `src/lib/site.ts` — the single source of truth for store facts (name,
  phone, WhatsApp link, email, address, hours, nav links). Change contact
  info here only, never hardcode it in a route or component.

## Known gaps (don't silently "fix" without checking with the user first)

- Contact form (`src/routes/contact.tsx`) is mocked: `handleSubmit` just does
  `preventDefault()` + `setSent(true)`; nothing is actually sent anywhere.
- No favicon in `public/` (`/favicon.ico` 404s).

## Style

- Prettier + ESLint (flat config, `eslint.config.js`) are the formatting
  authority — run `npm run format` / `npm run lint --fix` rather than
  hand-formatting.
- Line endings are enforced LF via `.gitattributes`.
