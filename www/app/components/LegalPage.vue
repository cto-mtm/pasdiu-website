<script setup lang="ts">
/**
 * Shell for long-form legal pages (privacy, terms).
 *
 * Owns the hero, the prose column, and the noindex hint — legal pages carry no
 * ranking value and shouldn't compete with product pages in search.
 */
withDefaults(
  defineProps<{
    title: string
    subtitle: string
    updatedLabel: string
    updatedDate: string
    icon?: string
  }>(),
  { icon: 'i-lucide-shield-check' },
)

useHead({
  meta: [{ name: 'robots', content: 'noindex, follow' }],
})
</script>

<template>
  <div>
    <section class="max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-10">
      <span class="pd-enter inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">
        <UIcon :name="icon" class="size-3.5 text-[var(--accent-cyan)]" />
        {{ updatedLabel }}: {{ updatedDate }}
      </span>
      <h1 class="pd-enter pd-enter-delay-1 text-3xl sm:text-4xl mt-6 mb-5">{{ title }}</h1>
      <p class="pd-enter pd-enter-delay-2 text-lg text-[var(--text-muted)]">{{ subtitle }}</p>
    </section>

    <section class="max-w-3xl mx-auto px-4 sm:px-6 pb-24">
      <slot />
    </section>
  </div>
</template>
