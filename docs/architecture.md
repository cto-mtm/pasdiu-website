# Architecture

One-page brief on how the Pasdiu website pieces fit together.

## Big picture

```
www/ (Nuxt 4) ──generate──▶ firebase/www/ ──▶ Firebase Hosting (static)
                                                  │
contact form ──POST (CORS)──▶ Cloud Function submitForm ──▶ Gmail SMTP (nodemailer)
                                   │
                              reCAPTCHA v3 + zod validation
```

- **Nuxt builds into `firebase/www/`** — that's why `firebase.json` sets `hosting.public` to `"www"` (relative to `firebase/`). The deploy flow generates the static site there; the folder is gitignored.
- **Firebase Hosting** serves the static output with long-lived cache headers for `_nuxt/`, `_fonts/`, `images/`, `videos/`.
- **Cloud Functions** handle form POSTs from the static site. `submitForm` (us-central1, v2 onRequest) accepts `{ formType, data, recaptchaToken }` from CORS-allowed origins only, validates against the zod schema in `models.ts`, verifies reCAPTCHA v3 (score ≥ 0.5; bypassed in the emulator), then sends a notification email to the site owner and a confirmation email to the submitter.
- **Secrets** (`GMAIL_USER`, `GMAIL_APP_PASSWORD`, `GMAIL_SENDER`, `RECAPTCHA_SECRET_KEY`) live in Firebase Secret Manager via `defineSecret`.
- **Emails** go out via Gmail SMTP + nodemailer; templates are inline-styled HTML in `functions/src/templates/`. Preview them locally with `npm run preview:emails`.
- **Content** lives in `www/content/` — the `news` collection (`content/news/*.md`) powers the News section via @nuxt/content.

## i18n — non-negotiable

The site ships in English (default) and Spanish. When creating new pages or links, **always use `localePath()`** for internal navigation — a hardcoded `to="/pricing"` drops the user's selected language. Translations live in `www/i18n/locales/**` (one module per component/page, exporting `{ en, es }`) and are registered in `www/i18n/i18n.config.ts`.

## Agent-facing surfaces (WebMCP / LLM discovery)

The site describes itself to AI agents through static files in `www/public/` plus a runtime plugin. **Four of these are duplicated in `www/public/.well-known/` and must be kept byte-identical** — `llms.txt`, `llms.json`, `webmcp.json` are served from both paths, and editing only one silently leaves stale copy live at the other URL.

| Surface | What it holds |
|---|---|
| `public/llms.txt` + `.well-known/llms.txt` | Short site index; one line per page |
| `public/llms-full.txt` | Full knowledge base — §3 is the **pricing tier matrix**, §6 the WebMCP tool signatures |
| `public/webmcp.json` + `.well-known/webmcp.json` | JSON Schema for the registered tools; must match the plugin |
| `public/.well-known/ai-plugin.json` | `description_for_model` — how the site pitches itself to LLMs |
| `app/plugins/webmcp.client.ts` | Runtime tools (`get_site_info`, `calculate_pricing`) on `window.webMCP` / `navigator.modelContext` |

After changing any tool's name, parameters, or behaviour, update the plugin, both `webmcp.json` copies, and `llms-full.txt` §6 together — they are three hand-maintained descriptions of one contract.

## Pricing is duplicated — change it everywhere

Pricing lives in the marketing copy, not in a single constant, so a pricing change touches a fixed set of files. The current model is **one flat price per workspace** (Free $0 / Studio $49 / Agency $149 per month, annual = 10× monthly), with the seat allowance as a ceiling rather than a meter and client reviewers free and unlimited. Source of truth is `BUSINESS_MODEL.md` in the `pasdiu-app` repo.

- `www/app/pages/pricing.vue` — the `prices` object (monthly, annual total, monthly equivalent)
- `www/i18n/locales/pages/Pricing.ts` — tier limits, blurbs, fine print, meta description (en + es)
- `www/i18n/locales/pages/Index.ts` and `Features.ts` — the free-plan callouts ("3 seats · 3 clients · …")
- `www/i18n/locales/pages/Contact.ts` — team-size buckets, which mirror the tier seat gates
- `www/content/news/*.md` — announcement posts that quote prices
- The agent surfaces above (`llms-full.txt` §3, `webmcp.client.ts`, both `webmcp.json`, `ai-plugin.json`)

Grepping for `per seat`, `por puesto`, and the literal price figures catches all of them; note the site copy also contains deliberate *negations* ("not per seat"), so read the hits rather than replacing blindly.

## Legacy URLs

301 redirects from old URLs live in `routeRules` in `www/nuxt.config.ts`, tracked in `/legacy_urls.md`.
