<script setup lang="ts">
const { t, locale, setLocale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const nav = computed(() => [
  { key: 'features', to: localePath('features') },
  { key: 'pricing', to: localePath('pricing') },
  { key: 'news', to: localePath('news') },
  { key: 'contact', to: localePath('contact') },
])

// Smart navbar: hides when scrolling down, reappears when scrolling up.
const hidden = ref(false)
const scrolled = ref(false)
let lastY = 0

function onScroll() {
  const y = window.scrollY
  scrolled.value = y > 8
  hidden.value = y > 80 && y > lastY
  lastY = y
}

// ── Full-screen mobile menu ──────────────────────────────────
const mobileOpen = ref(false)

// Lock page scroll while the overlay is open.
watch(mobileOpen, (open) => {
  if (import.meta.client) document.documentElement.style.overflow = open ? 'hidden' : ''
})

// Close on navigation and on Escape.
watch(() => route.fullPath, () => { mobileOpen.value = false })

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') mobileOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  if (import.meta.client) document.documentElement.style.overflow = ''
})

function toggleLocale() {
  setLocale(locale.value === 'en' ? 'es' : 'en')
}
</script>

<template>
  <header
    class="sticky top-0 z-50 transition-all duration-300"
    :class="[
      hidden ? '-translate-y-full' : 'translate-y-0',
      scrolled ? 'bg-[var(--bg)]/90 backdrop-blur border-b border-[var(--border)]' : 'bg-transparent border-b border-transparent',
    ]"
  >
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between" :aria-label="t('SiteHeader.mainNav')">
      <NuxtLink :to="localePath('index')" class="flex items-center gap-2.5 font-display text-lg text-[var(--text)] hover:text-[var(--accent-cyan)] transition-colors">
        <!-- Logo mark is decorative; the adjacent wordmark carries the name. -->
        <img src="/images/logo-white.svg" alt="" aria-hidden="true" class="size-8">
        PASDIU
      </NuxtLink>

      <div class="hidden md:flex items-center gap-6">
        <NuxtLink
          v-for="item in nav"
          :key="item.key"
          :to="item.to"
          class="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
        >
          {{ t(`SiteHeader.${item.key}`) }}
        </NuxtLink>

        <button
          type="button"
          class="text-sm text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors uppercase"
          :aria-label="t('SiteHeader.switchLanguage')"
          toolname="switch_language"
          tooldescription="Switch site language between English and Spanish"
          @click="toggleLocale"
        >
          {{ locale === 'en' ? 'ES' : 'EN' }}
        </button>

        <UButton :to="localePath('contact')" color="primary" variant="solid" size="sm" class="pd-glow-cyan" toolaction="header_get_started">
          {{ t('SiteHeader.cta') }}
        </UButton>
      </div>

      <button
        type="button"
        class="md:hidden p-2 text-[var(--text)]"
        :aria-label="mobileOpen ? t('SiteHeader.closeMenu') : t('SiteHeader.toggleMenu')"
        :aria-expanded="mobileOpen"
        @click="mobileOpen = !mobileOpen"
      >
        <UIcon name="i-lucide-menu" class="size-6" />
      </button>
    </nav>

    <!-- Full-screen animated mobile menu: circular clip-path reveal from the
         hamburger corner, staggered link entrances, locale + CTA pinned below. -->
    <Teleport to="body">
      <Transition name="pd-menu">
        <div
          v-if="mobileOpen"
          class="pd-menu fixed inset-0 z-[60] md:hidden flex flex-col bg-[var(--bg)]/95 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          :aria-label="t('SiteHeader.menuLabel')"
        >
          <!-- Decorative glow, mirrors the hero background -->
          <div class="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            <div class="absolute -top-24 -right-24 size-80 rounded-full bg-[var(--accent-cyan)]/10 blur-3xl pd-float" />
            <div class="absolute -bottom-24 -left-24 size-80 rounded-full bg-[var(--accent-emerald)]/10 blur-3xl pd-float" style="animation-delay: 2s" />
          </div>

          <div class="h-16 px-4 sm:px-6 flex items-center justify-between">
            <NuxtLink :to="localePath('index')" class="flex items-center gap-2.5 font-display text-lg text-[var(--text)]" @click="mobileOpen = false">
              <img src="/images/logo-white.svg" alt="" aria-hidden="true" class="size-8">
              PASDIU
            </NuxtLink>
            <button type="button" class="p-2 text-[var(--text)]" :aria-label="t('SiteHeader.closeMenu')" @click="mobileOpen = false">
              <UIcon name="i-lucide-x" class="size-6" />
            </button>
          </div>

          <nav class="flex-1 flex flex-col justify-center gap-2 px-6" :aria-label="t('SiteHeader.menuLabel')">
            <NuxtLink
              v-for="(item, i) in nav"
              :key="item.key"
              :to="item.to"
              class="pd-menu-item font-display text-3xl py-3 text-[var(--text)] hover:text-[var(--accent-cyan)] transition-colors"
              :style="{ '--i': i }"
              @click="mobileOpen = false"
            >
              {{ t(`SiteHeader.${item.key}`) }}
            </NuxtLink>
          </nav>

          <div class="pd-menu-item px-6 pb-10 flex items-center justify-between gap-4" :style="{ '--i': nav.length }">
            <button
              type="button"
              class="text-sm text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
              :aria-label="t('SiteHeader.switchLanguage')"
              @click="toggleLocale"
            >
              {{ locale === 'en' ? 'Español' : 'English' }}
            </button>
            <UButton :to="localePath('contact')" color="primary" size="lg" class="pd-glow-cyan" @click="mobileOpen = false">
              {{ t('SiteHeader.cta') }}
            </UButton>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>
