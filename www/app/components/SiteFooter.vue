<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-[var(--border)] bg-[var(--surface)]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-3">
      <div>
        <p class="flex items-center gap-2.5 font-display text-lg mb-3">
          <img src="/images/logo-white.svg" alt="" aria-hidden="true" class="size-8">
          PASDIU
        </p>
        <p class="text-sm text-[var(--text-muted)] max-w-xs">{{ t('SiteFooter.tagline') }}</p>
      </div>

      <nav :aria-label="t('SiteFooter.product')">
        <p class="text-sm font-semibold mb-3 text-[var(--text)]">{{ t('SiteFooter.product') }}</p>
        <ul class="space-y-2 text-sm">
          <li><NuxtLink :to="localePath('features')" class="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">{{ t('SiteFooter.features') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('pricing')" class="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">{{ t('SiteFooter.pricing') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('news')" class="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">{{ t('SiteFooter.news') }}</NuxtLink></li>
        </ul>
      </nav>

      <nav :aria-label="t('SiteFooter.company')">
        <p class="text-sm font-semibold mb-3 text-[var(--text)]">{{ t('SiteFooter.company') }}</p>
        <ul class="space-y-2 text-sm">
          <li><NuxtLink :to="localePath('contact')" class="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">{{ t('SiteFooter.contact') }}</NuxtLink></li>
        </ul>
      </nav>
    </div>

    <div class="pd-divider" />
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-xs text-[var(--text-muted)]">
      © {{ year }} Pasdiu. {{ t('SiteFooter.rights') }}
    </div>
  </footer>
</template>
