# Pasdiu Website

Marketing site for **Pasdiu** — the client-work logistics hub for media creators. Nuxt 4 static site on Firebase Hosting, with Cloud Functions handling form submissions.

## What's in the box

- `www/` — Nuxt 4 marketing site (Nuxt UI, Tailwind, @nuxt/content news, @nuxtjs/seo, i18n en/es).
- `firebase/` — Hosting config + `submitForm` Cloud Function (zod validation, reCAPTCHA v3, Gmail SMTP via nodemailer).
- `docs/architecture.md` — how the pieces fit together.

## Quick start

```bash
cd www && npm install && npm run dev          # marketing site on :3000
cd ../firebase/functions && npm install       # cloud functions deps
npm run build                                 # compile functions
firebase emulators:start --only functions     # forms backend locally
```

## Routing note

All internal app navigation uses `@nuxtjs/i18n`. Use `localePath()` for every internal link so language preferences persist across page loads:

```vue
<NuxtLink :to="localePath('pricing')">…</NuxtLink>
```

## Image optimization

Run `npm run optimize:images` in `www/` to batch convert `public/images/` content to `.webp`. Use `npm run optimize:images -- --dry-run` to preview.

## Adding a new form type

1. Add an entry to `firebase/functions/src/models.ts` (`formConfigs`) with a zod schema.
2. `cd firebase/functions && npm run deploy`.
3. Call it from the site: `useSubmitForm('your-type', { ... })`.

## Changing pricing

Pricing is marketing copy spread across the pages, the i18n locale files, the news posts, and the agent-facing files in `www/public/` (some of which are duplicated under `.well-known/`). `docs/architecture.md` lists every file that has to move together.

## Adding a legacy redirect

1. Add the rule to `routeRules` in `www/nuxt.config.ts` (patterns are documented inline).
2. Add a row to `legacy_urls.md`.

## Required secrets (before deploying functions)

```bash
firebase functions:secrets:set GMAIL_USER
firebase functions:secrets:set GMAIL_APP_PASSWORD
firebase functions:secrets:set GMAIL_SENDER
firebase functions:secrets:set RECAPTCHA_SECRET_KEY
```

## Deploy

Run the automated deploy script from the root directory:

```bash
npm run deploy     # (or `npm run lunch`, or `./lunch.ps1`)
```

This automated script will:
1. Compile Firebase Cloud Functions (`npm run build` in `firebase/functions`).
2. Generate the static Nuxt site (`npm run generate` in `www/`).
3. Sync static `.output/public` files into `firebase/www/`.
4. Deploy Hosting & Functions via `firebase deploy`.

## Keeping dependencies fresh

Versions in `package.json` are pinned to the dates this boilerplate was
generated. They're intentionally NOT auto-updated on install — the goal is
that `npm install && npm run dev` always works on day one.

Recommended workflow when starting a new project from this scaffold:

1. `npm install` in both `www/` and `firebase/functions/` and confirm
   `npm run dev` boots cleanly.
2. Commit the scaffold as your baseline (`git commit -m "initial scaffold"`).
3. Run `npm outdated` in each folder to see drift, and `npm audit` for
   security issues.
4. Upgrade deliberately — one major version at a time, testing between each.
   Watch especially for breaking changes in Nuxt, Nuxt UI, Firebase
   Functions, and zod (these have all shipped breaking majors in the past).
5. After upgrading, re-run `npm run dev` and click through the key pages /
   submit the contact form before committing.

Avoid running `npm update` blindly — it will pull breaking majors without
warning and you'll lose the "clean baseline" property.
