<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

// Getter syntax keeps meta reactive when the locale changes.
useSeoMeta({
  title: () => t('Features.meta.title'),
  description: () => t('Features.meta.description'),
})

const items = [
  { key: 'nesting', icon: 'i-lucide-network' },
  { key: 'boards', icon: 'i-lucide-kanban' },
  { key: 'iteration', icon: 'i-lucide-layers' },
  { key: 'brief', icon: 'i-lucide-panel-right-open' },
  { key: 'ledger', icon: 'i-lucide-file-spreadsheet' },
  { key: 'roles', icon: 'i-lucide-users' },
  { key: 'portal', icon: 'i-lucide-badge-check' },
  { key: 'i18n', icon: 'i-lucide-languages' },
  { key: 'native', icon: 'i-lucide-smartphone' },
]

// Product tour screenshots using optimized actual captures.
const tour = [
  { key: 'boards', src: '/images/screenshots/tasks-list.webp', glow: 'cyan' },
  { key: 'iteration', src: '/images/screenshots/task-details.webp', glow: 'amber' },
  { key: 'portal', src: '/images/screenshots/client-view.webp', glow: 'emerald' },
] as const
</script>

<template>
  <div>
    <section class="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
      <!-- Humanized creator trust pill -->
      <div class="pd-enter flex items-center gap-3 mb-6">
        <div class="flex -space-x-2 overflow-hidden">
          <img src="/images/avatars/producer.webp" alt="Producer" class="inline-block size-7 rounded-full ring-2 ring-[var(--surface-2)] object-cover" />
          <img src="/images/avatars/editor.webp" alt="Editor" class="inline-block size-7 rounded-full ring-2 ring-[var(--surface-2)] object-cover" />
          <img src="/images/avatars/client.webp" alt="Client" class="inline-block size-7 rounded-full ring-2 ring-[var(--surface-2)] object-cover" />
        </div>
        <span class="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--accent-cyan)]">
          {{ t('Features.header.kicker') }}
        </span>
      </div>

      <h1 class="pd-enter pd-enter-delay-1 text-3xl sm:text-5xl max-w-3xl mb-6">
        {{ t('Features.header.title') }}
      </h1>
      <p class="pd-enter pd-enter-delay-2 text-lg text-[var(--text-muted)] max-w-2xl">
        {{ t('Features.header.subtitle') }}
      </p>
    </section>

    <section class="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
      <div class="pd-reveal grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="item in items"
          :key="item.key"
          class="pd-card group p-6 transition-all duration-300 hover:border-[var(--accent-cyan)]/50 hover:-translate-y-1 flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <UIcon :name="item.icon" class="size-7 text-[var(--accent-cyan)] transition-transform duration-300 group-hover:scale-110" />
              <span class="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text-muted)]">
                {{ t(`Features.items.${item.key}.role`) }}
              </span>
            </div>
            <h2 class="text-base font-semibold mb-2">{{ t(`Features.items.${item.key}.title`) }}</h2>
            <p class="text-sm text-[var(--text-muted)] leading-relaxed">{{ t(`Features.items.${item.key}.body`) }}</p>
          </div>
        </article>
      </div>
    </section>

    <div class="pd-divider max-w-6xl mx-auto" />

    <!-- Product tour: screenshot gallery -->
    <section class="pd-reveal max-w-6xl mx-auto px-4 sm:px-6 py-24">
      <h2 class="text-2xl sm:text-4xl mb-3">{{ t('Features.tour.title') }}</h2>
      <p class="text-[var(--text-muted)] max-w-2xl mb-12">{{ t('Features.tour.subtitle') }}</p>
      <div class="grid gap-10 lg:grid-cols-3">
        <div v-for="shot in tour" :key="shot.key" class="space-y-3">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[var(--accent-cyan)]/30 bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] font-medium">
              {{ t(`Features.tour.${shot.key}.role`) }}
            </span>
          </div>
          <ScreenshotFrame
            :src="shot.src"
            :glow="shot.glow"
            :alt="t(`Features.tour.${shot.key}.alt`)"
            :caption="t(`Features.tour.${shot.key}.caption`)"
          />
        </div>
      </div>
    </section>

    <section class="border-t border-[var(--border)] bg-[var(--surface)]">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 class="text-2xl sm:text-4xl mb-4">{{ t('Features.cta.title') }}</h2>
        <p class="text-[var(--text-muted)] max-w-xl mx-auto mb-8">{{ t('Features.cta.body') }}</p>
        <UButton to="https://app.pasdiu.com" color="primary" size="xl" class="pd-glow-cyan">
          {{ t('Features.cta.button') }}
        </UButton>
      </div>
    </section>
  </div>
</template>
