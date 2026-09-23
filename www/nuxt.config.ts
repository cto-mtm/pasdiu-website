// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true,
    timeline: { enabled: true },
  },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxtjs/seo',
    'nuxt-gtag',
    '@nuxtjs/i18n',
  ],

  i18n: {
    // Resolved relative to the i18n/ restructure dir (i18n v9+),
    // so this points at <root>/i18n/i18n.config.ts.
    vueI18n: './i18n.config.ts',
    // Absolute base URL so hreflang alternate links resolve correctly.
    baseUrl: 'https://pasdiu.com',
    locales: [
      { code: 'en', language: 'en-US', name: 'English' },
      { code: 'es', language: 'es-ES', name: 'Español' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
  },

  runtimeConfig: {
    public: {
      // Production URL of the deployed submitForm Cloud Function.
      submitFormUrl: 'https://us-central1-pasdiu-website.cloudfunctions.net/submitForm',
      recaptchaSiteKey: '6Lc7XF0tAAAAAKGTvDuGPWQOFaTmUNe2MRh4vts4',
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        { rel: 'help', type: 'text/plain', href: '/llms.txt' },
      ],
    },
  },

  gtag: {
    id: 'G-3JGD66480K',
    // Opt-in consent: do NOT inject the GA script on load. Nothing Google-side
    // loads (no script, no cookies) until the visitor accepts analytics in the
    // cookie banner, which calls useGtag().initialize().
    // See app/composables/useCookieConsent.ts + components/CookieConsent.vue.
    initMode: 'manual',
  },

  site: {
    url: 'https://pasdiu.com',
    name: 'Pasdiu',
    description:
      'Pasdiu is the client-work logistics hub for media creators — agencies, post-production studios, and freelance editor collectives managing client review and approval pipelines.',
    defaultLocale: 'en',
  },

  // The Pasdiu app ships a "Cinematic Dark" theme — the marketing site matches it.
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  image: {
    provider: 'none',
  },

  ui: {
    theme: {
      colors: ['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error', 'neutral'],
    },
  },

  routeRules: {
    // ────────────────────────────────────────────────────────────
    // LEGACY URL REDIRECTS
    // Add 301 redirects for old URLs from a prior site or domain
    // restructure. Keep this list in sync with /legacy_urls.md.
    //
    // Pattern A — single page:
    //   '/old-path': { redirect: { to: '/new-path', statusCode: 301 } },
    //
    // Pattern B — directory with wildcard:
    //   '/old-section/**': { redirect: { to: '/new-section', statusCode: 301 } },
    //
    // Pattern C — section merged into another:
    //   '/team': { redirect: { to: '/about#team', statusCode: 301 } },
    // ────────────────────────────────────────────────────────────

    // '/example-old': { redirect: { to: '/', statusCode: 301 } },
  },
})
