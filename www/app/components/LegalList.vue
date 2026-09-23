<script setup lang="ts">
/** Icon-marked list of plain statements — used for rights, plans, and rules. */
withDefaults(
  defineProps<{
    items: string[]
    icon?: string
    iconClass?: string
  }>(),
  {
    icon: 'i-lucide-dot',
    iconClass: 'text-[var(--text-muted)]',
  },
)
</script>

<template>
  <ul class="mt-4 space-y-3">
    <li v-for="(item, i) in items" :key="i" class="flex gap-3">
      <UIcon :name="icon" class="mt-1 size-4 shrink-0" :class="iconClass" />
      <span class="leading-relaxed text-[var(--text-muted)]">{{ item }}</span>
    </li>
  </ul>
</template>
