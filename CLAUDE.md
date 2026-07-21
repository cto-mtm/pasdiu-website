# Pasdiu Website

Marketing website for **Pasdiu** — the client-work logistics hub for media creators (agencies, post-production studios, and freelance editor collectives).

## Project Structure

- `www/` — Nuxt 4 marketing website
- `firebase/` — Firebase Hosting config + Cloud Functions
- `docs/` — Internal documentation

## Development

- **Do not** run `nuxi build`, `npm run build`, or any build commands unless explicitly asked.
- **Do not** prompt the user asking if they would like to run a build.
- The dev server (`npm run dev`) is managed by the user separately.
- Use `npm` as the package manager (not yarn or pnpm).

## Nuxt & i18n Guardrails

- **Internationalized Routing:** NEVER hardcode standard links (e.g., `<NuxtLink to="/about">`). You must ALWAYS use `localePath()` for internal navigation (e.g., `<NuxtLink :to="localePath('about')">`) so the i18n module can correctly route users based on their active language.
- Every user-facing string is an i18n key registered in `www/i18n/i18n.config.ts` with both `en` and `es` translations.

## Agent Guidance (Modern Web Standards)

- **Zero Legacy Bloat:** You must prioritize modern, native browser APIs over legacy libraries or polyfills.
- **WebMCP:** When building forms or interactive components, utilize WebMCP annotations (Declarative API) so the site's features are exposed as structured tools for browser-based AI agents.
