<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

// Getter syntax keeps meta reactive when the locale changes.
useSeoMeta({
  title: () => t('Index.meta.title'),
  description: () => t('Index.meta.description'),
})

const highlights = [
  { key: 'boards', icon: 'i-lucide-kanban' },
  { key: 'iteration', icon: 'i-lucide-layers' },
  { key: 'portal', icon: 'i-lucide-badge-check' },
  { key: 'ledger', icon: 'i-lucide-file-spreadsheet' },
]

const roles = [
  {
    key: 'managers',
    icon: 'i-lucide-layout-dashboard',
    accent: 'var(--accent-cyan)',
    avatar: '/images/avatars/producer.webp',
  },
  {
    key: 'editors',
    icon: 'i-lucide-clapperboard',
    accent: 'var(--accent-amber)',
    avatar: '/images/avatars/editor.webp',
  },
  {
    key: 'clients',
    icon: 'i-lucide-check-circle-2',
    accent: 'var(--accent-emerald)',
    avatar: '/images/avatars/client.webp',
  },
]
</script>

<template>
  <div>
    <!-- Hero: full-size, layered background ready for video/animation swap-in -->
    <!-- `isolate` creates a stacking context so the -z-10 background layers
         paint inside this section instead of behind the page background. -->
    <section class="relative isolate overflow-hidden min-h-[85vh] flex items-center">
      <!-- Background: a photoshoot happening behind a very dark film.
           Drifting studio-glow orbs (parallax on scroll) + camera strobes
           firing at staggered intervals, under animated grain and a vignette. -->
      <div class="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <!-- The shoot itself: filmstrips of stills drifting past, then hidden
             behind the "very dark film" overlay below. Swap the stills in
             /public/images/stills/ for real client work. -->
        <div class="absolute inset-0 flex flex-col justify-center gap-12">
          <FilmStrip class="-rotate-3 w-[120%] -ml-[10%]" duration="80s" />
          <FilmStrip class="rotate-2 w-[120%] -ml-[10%]" duration="110s" reverse />
        </div>
        <!-- The very dark film — tune the /55 up or down to hide/show the shoot -->
        <div class="absolute inset-0 bg-[var(--bg)]/55" />

        <!-- Studio glow orbs -->
        <div class="pd-parallax absolute -top-32 -right-32 size-[32rem]" style="--parallax: -70">
          <div class="size-full rounded-full bg-[var(--accent-cyan)]/10 blur-3xl pd-float" />
        </div>
        <div class="pd-parallax absolute bottom-0 -left-24 size-[24rem]" style="--parallax: 50">
          <div class="size-full rounded-full bg-[var(--accent-emerald)]/10 blur-3xl pd-float" style="animation-delay: 2s" />
        </div>

        <!-- Camera strobes (staggered, irregular-feeling flashes) -->
        <div class="pd-strobe left-[12%] top-[18%] size-72 bg-white/50" style="--strobe-period: 9s" />
        <div class="pd-strobe right-[18%] top-[30%] size-96 bg-[var(--accent-cyan)]/40" style="--strobe-period: 13s; --strobe-delay: 4s" />
        <div class="pd-strobe left-[42%] bottom-[12%] size-64 bg-[var(--accent-amber)]/35" style="--strobe-period: 17s; --strobe-delay: 9s" />

        <!-- Film grain + the "very dark film" vignette on top -->
        <div class="pd-grain" />
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]" />
      </div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <!-- Single integrated human creator eyebrow -->
        <div class="pd-enter flex items-center gap-3 mb-6">
          <div class="flex -space-x-2 overflow-hidden">
            <img src="/images/avatars/producer.webp" alt="Producer" class="inline-block size-7 rounded-full ring-2 ring-[var(--surface-2)] object-cover" />
            <img src="/images/avatars/editor.webp" alt="Editor" class="inline-block size-7 rounded-full ring-2 ring-[var(--surface-2)] object-cover" />
            <img src="/images/avatars/client.webp" alt="Client" class="inline-block size-7 rounded-full ring-2 ring-[var(--surface-2)] object-cover" />
          </div>
          <span class="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--accent-cyan)]">
            {{ t('Index.hero.kicker') }}
          </span>
        </div>
        <h1 class="pd-enter pd-enter-delay-1 text-4xl sm:text-6xl max-w-3xl mb-6">
          {{ t('Index.hero.title') }}
        </h1>
        <p class="pd-enter pd-enter-delay-2 text-lg text-[var(--text-muted)] max-w-2xl mb-10">
          {{ t('Index.hero.subtitle') }}
        </p>
        <div class="pd-enter pd-enter-delay-3 flex flex-wrap items-center gap-4">
          <UButton to="https://app.pasdiu.com" color="primary" size="xl" class="pd-glow-cyan">
            {{ t('Index.hero.ctaPrimary') }}
          </UButton>
          <UButton :to="localePath('pricing')" color="neutral" variant="outline" size="xl">
            {{ t('Index.hero.ctaSecondary') }}
          </UButton>
        </div>
        <p class="pd-enter pd-enter-delay-3 mt-6 text-xs text-[var(--text-muted)]">
          {{ t('Index.hero.note') }}
        </p>
      </div>
    </section>

    <!-- Product screenshot -->
    <section class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 -mt-16 sm:-mt-24 pb-16">
      <ScreenshotFrame
        class="pd-enter pd-enter-delay-3"
        src="/images/screenshots/clients-list.webp"
        :alt="t('Index.hero.screenshotAlt')"
        :caption="t('Index.hero.screenshotCaption')"
      />
    </section>

    <!-- Highlights -->
    <section class="pd-reveal max-w-6xl mx-auto px-4 sm:px-6 py-24">
      <h2 class="text-2xl sm:text-4xl mb-12">{{ t('Index.highlights.title') }}</h2>
      <div class="grid gap-6 sm:grid-cols-2">
        <article
          v-for="item in highlights"
          :key="item.key"
          class="pd-card group p-6 transition-all duration-300 hover:border-[var(--accent-cyan)]/50 hover:-translate-y-1"
        >
          <UIcon :name="item.icon" class="size-8 text-[var(--accent-cyan)] mb-4 transition-transform duration-300 group-hover:scale-110" />
          <h3 class="text-lg mb-2">{{ t(`Index.highlights.${item.key}.title`) }}</h3>
          <p class="text-sm text-[var(--text-muted)]">{{ t(`Index.highlights.${item.key}.body`) }}</p>
        </article>
      </div>
    </section>

    <div class="pd-divider max-w-6xl mx-auto" />

    <!-- Roles: Humanized creator seats -->
    <section class="pd-reveal max-w-6xl mx-auto px-4 sm:px-6 py-24">
      <div class="mb-12">
        <h2 class="text-2xl sm:text-4xl mb-3">{{ t('Index.roles.title') }}</h2>
        <p class="text-[var(--text-muted)] max-w-2xl text-base">{{ t('Index.roles.subtitle') }}</p>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        <article v-for="role in roles" :key="role.key" class="pd-card-elevated p-6 flex flex-col justify-between group">
          <div>
            <div class="flex items-center justify-between mb-6">
              <div class="relative">
                <img :src="role.avatar" :alt="t(`Index.roles.${role.key}.title`)" class="size-14 rounded-full object-cover ring-2 ring-[var(--border)] transition-transform duration-300 group-hover:scale-105" />
                <div class="absolute -bottom-1 -right-1 size-6 rounded-full bg-[var(--surface)] flex items-center justify-center border border-[var(--border)]">
                  <UIcon :name="role.icon" class="size-3.5" :style="{ color: role.accent }" />
                </div>
              </div>
              <span class="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text-muted)]">
                {{ t(`Index.roles.${role.key}.badge`) }}
              </span>
            </div>
            <p class="text-xs uppercase tracking-wider font-semibold mb-1" :style="{ color: role.accent }">
              {{ t(`Index.roles.${role.key}.subtitle`) }}
            </p>
            <h3 class="text-xl font-semibold mb-3">{{ t(`Index.roles.${role.key}.title`) }}</h3>
            <p class="text-sm text-[var(--text-muted)] leading-relaxed">{{ t(`Index.roles.${role.key}.body`) }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- CTA band -->
    <section class="border-t border-[var(--border)] bg-[var(--surface)]">
      <div class="pd-reveal max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 class="text-2xl sm:text-4xl mb-4">{{ t('Index.ctaBand.title') }}</h2>
        <p class="text-[var(--text-muted)] max-w-xl mx-auto mb-8">{{ t('Index.ctaBand.body') }}</p>
        <UButton to="https://app.pasdiu.com" color="primary" size="xl" class="pd-glow-cyan">
          {{ t('Index.ctaBand.cta') }}
        </UButton>
      </div>
    </section>
  </div>
</template>
