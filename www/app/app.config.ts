export default defineAppConfig({
  ui: {
    colors: {
      // Cinematic Dark palette — mirrors the app's status accents:
      // cyan = in-progress / primary CTA, emerald = approved, amber = revisions.
      primary: 'cyan',
      secondary: 'emerald',
      accent: 'amber',
      success: 'emerald',
      info: 'cyan',
      warning: 'amber',
      error: 'red',
      neutral: 'neutral',
    },
    // Button size overrides — extend later, e.g.:
    // button: {
    //   slots: { base: 'font-body tracking-tight' },
    //   defaultVariants: { size: 'lg' },
    // },
  },
})
