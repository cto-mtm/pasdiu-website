<script setup lang="ts">
/** Closing "questions?" card shared by the legal pages. Actions go in the slot. */
defineProps<{
  title: string
  body: string
}>()
</script>

<template>
  <div class="pd-card mt-14 p-6 text-center sm:p-8">
    <h2 class="font-display text-lg sm:text-xl">{{ title }}</h2>
    <p class="mx-auto mt-3 max-w-xl text-[var(--text-muted)]">{{ body }}</p>
    <div class="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
      <slot />
    </div>
  </div>
</template>
