# Ridhi Sidhi

Marketing site for the Ridhi Sidhi garment showroom. Built with TanStack Start, React, TypeScript and Tailwind CSS.

## Requirements

- **npm only.** Do not use Bun, pnpm or Yarn; `package-lock.json` is the single lockfile.
- **Node.js 24.x** (see `.nvmrc` and `engines` in `package.json`).

## Commands

```sh
npm install        # install dependencies
npm run dev        # dev server at http://localhost:8080
npm run build      # production build (Vercel Build Output API -> .vercel/output)
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run format     # prettier --write
```

`npm run preview` currently returns 500 locally; see `MIGRATION_NOTES.md`. Use `npm run dev` for local checks.

## Deploying

The Nitro preset is pinned to `vercel` in `vite.config.ts`, so `npm run build` writes the Vercel Build Output API format to `.vercel/output`.
