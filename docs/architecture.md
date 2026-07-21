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

## Legacy URLs

301 redirects from old URLs live in `routeRules` in `www/nuxt.config.ts`, tracked in `/legacy_urls.md`.
