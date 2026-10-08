# Repository guide for coding agents

This is José Antonio López Molina's Astro AdTech portfolio. Preserve Spanish-facing content and existing visual identity unless task explicitly requests changes. See [README.md](README.md) for setup, project map, and current metadata/deployment caveats.

## Working rules

- Read affected components and callers before editing. Keep changes narrow; preserve responsive behavior, theme behavior, and accessibility semantics.
- Follow existing Astro, TypeScript, CSS, and Spanish UI-copy conventions. Prefer existing components and `src/data/` content over duplication.
- Respect unrelated tracked and untracked changes. Do not edit generated `dist/`, `.astro/`, or installed `node_modules/` files. `.pi/` is ignored local tooling state, not shared guidance.
- For behavior or layout changes, run `pnpm build` and inspect relevant page in browser when possible. Report checks not run. `package.json` has no test, lint, or typecheck script; never claim those checks passed without running an applicable command.
- Do not commit, push, or publish without explicit authorization.
