<script setup lang="ts">
const { t, tm, rt } = useI18n()
const localePath = useLocalePath()

// Getter syntax keeps meta reactive when the locale changes.
useSeoMeta({
  title: () => t('Pricing.meta.title'),
  description: () => t('Pricing.meta.description'),
})

const annual = ref(false)

const prices = {
  free: { monthly: 0, annual: 0 },
  studio: { monthly: 12, annual: 10 },
  agency: { monthly: 25, annual: 21 },
} as const

const tiers = [
  { key: 'free', highlighted: false, hasPrice: true },
  { key: 'studio', highlighted: true, hasPrice: true },
  { key: 'agency', highlighted: false, hasPrice: true },
  { key: 'enterprise', highlighted: false, hasPrice: false },
] as const

function price(key: 'free' | 'studio' | 'agency') {
  return annual.value ? prices[key].annual : prices[key].monthly
}

function features(key: string): string[] {
  return (tm(`Pricing.tiers.${key}.features`) as unknown[]).map(f => rt(f as string))
}

const notes = [
  { key: 'media', icon: 'i-lucide-link' },
  { key: 'seats', icon: 'i-lucide-user-check' },
  { key: 'clients', icon: 'i-lucide-heart-handshake' },
]
</script>

<template>
  <div>
    <section class="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12 text-center">
      <p class="pd-enter text-xs uppercase tracking-[0.25em] text-[var(--accent-cyan)] mb-6">
        {{ t('Pricing.header.kicker') }}
      </p>
      <h1 class="pd-enter pd-enter-delay-1 text-3xl sm:text-5xl mb-6">
        {{ t('Pricing.header.title') }}
      </h1>
      <p class="pd-enter pd-enter-delay-2 text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-10">
        {{ t('Pricing.header.subtitle') }}
      </p>

      <!-- Billing period toggle -->
      <div
        class="pd-enter pd-enter-delay-3 inline-flex items-center gap-1 pd-card p-1"
        role="group"
        :aria-label="t('Pricing.billing.label')"
        toolname="toggle_billing_cycle"
        tooldescription="Switch between monthly and annual billing options to see discounted pricing"
      >
        <button
          type="button"
          class="px-4 py-2 rounded-lg text-sm transition-colors"
          :class="!annual ? 'bg-[var(--surface-2)] text-[var(--text)]' : 'text-[var(--text-muted)] hover:text-[var(--text)]'"
          :aria-pressed="!annual"
          toolaction="select_monthly_billing"
          @click="annual = false"
        >
          {{ t('Pricing.billing.monthly') }}
        </button>
        <button
          type="button"
          class="px-4 py-2 rounded-lg text-sm transition-colors"
          :class="annual ? 'bg-[var(--surface-2)] text-[var(--text)]' : 'text-[var(--text-muted)] hover:text-[var(--text)]'"
          :aria-pressed="annual"
          toolaction="select_annual_billing"
          @click="annual = true"
        >
          {{ t('Pricing.billing.annual') }}
          <span class="text-[var(--accent-emerald)] ml-1 text-xs">{{ t('Pricing.billing.annualNote') }}</span>
        </button>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4 items-stretch">
        <article
          v-for="tier in tiers"
          :key="tier.key"
          class="relative flex flex-col p-6 transition-all duration-300 hover:-translate-y-1"
          :class="tier.highlighted ? 'pd-card-elevated border-[var(--accent-cyan)]/60 pd-glow-cyan' : 'pd-card'"
          toolname="view_plan_tier"
          :tooldescription="`Plan tier details for ${tier.key}`"
        >
          <p
            v-if="tier.highlighted"
            class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs bg-[var(--accent-cyan)] text-[#0f172a] whitespace-nowrap"
          >
            {{ t('Pricing.mostPopular') }}
          </p>

          <h2 class="text-lg mb-2">{{ t(`Pricing.tiers.${tier.key}.name`) }}</h2>

          <p class="mb-1">
            <template v-if="tier.hasPrice">
              <span class="text-4xl font-display">${{ price(tier.key as 'free' | 'studio' | 'agency') }}</span>
              <span class="text-xs text-[var(--text-muted)] ml-2">{{ t('Pricing.perSeatMonth') }}</span>
            </template>
            <template v-else>
              <span class="text-4xl font-display">{{ t('Pricing.custom') }}</span>
            </template>
          </p>

          <p class="text-sm text-[var(--text-muted)] mb-6 min-h-12">{{ t(`Pricing.tiers.${tier.key}.blurb`) }}</p>

          <ul class="space-y-2 text-sm mb-8 flex-1">
            <li v-for="feature in features(tier.key)" :key="feature" class="flex gap-2">
              <UIcon name="i-lucide-check" class="size-4 shrink-0 mt-0.5 text-[var(--accent-emerald)]" />
              <span class="text-[var(--text-muted)]">{{ feature }}</span>
            </li>
          </ul>

          <UButton
            :to="localePath('contact')"
            :color="tier.highlighted ? 'primary' : 'neutral'"
            :variant="tier.highlighted ? 'solid' : 'outline'"
            block
            :toolaction="`choose_${tier.key}_plan`"
          >
            {{ t(`Pricing.tiers.${tier.key}.cta`) }}
          </UButton>
        </article>
      </div>

      <!-- Notes -->
      <div class="pd-reveal mt-20">
        <h2 class="text-xl sm:text-2xl mb-8">{{ t('Pricing.notes.title') }}</h2>
        <div class="grid gap-6 md:grid-cols-3">
          <div v-for="note in notes" :key="note.key" class="flex gap-3">
            <UIcon :name="note.icon" class="size-5 shrink-0 mt-0.5 text-[var(--accent-cyan)]" />
            <p class="text-sm text-[var(--text-muted)]">{{ t(`Pricing.notes.${note.key}`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="border-t border-[var(--border)] bg-[var(--surface)]">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 class="text-2xl sm:text-4xl mb-4">{{ t('Pricing.faqCta.title') }}</h2>
        <p class="text-[var(--text-muted)] max-w-xl mx-auto mb-8">{{ t('Pricing.faqCta.body') }}</p>
        <UButton :to="localePath('contact')" color="primary" size="xl" class="pd-glow-cyan">
          {{ t('Pricing.faqCta.button') }}
        </UButton>
      </div>
    </section>
  </div>
</template>
