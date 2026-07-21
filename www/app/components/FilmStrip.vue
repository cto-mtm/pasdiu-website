<script setup lang="ts">
/**
 * Decorative auto-scrolling filmstrip (marquee) styled like a film negative.
 * Swap the placeholder SVGs in /public/images/stills/ for real client-work
 * photos or frame grabs — same filenames, no code changes. Add or remove
 * entries here if you have more/fewer stills.
 *
 * The track is rendered twice and animated to -50% for a seamless loop.
 * Purely decorative: aria-hidden, and static under prefers-reduced-motion.
 */
const stills = [1, 2, 3, 4, 5, 6].map(n => `/images/stills/still-${n}.svg`)

withDefaults(defineProps<{
  /** One full loop duration, e.g. '45s'. Slower reads as more ambient. */
  duration?: string
  /** Scroll the opposite way (nice when stacking two strips). */
  reverse?: boolean
}>(), { duration: '45s', reverse: false })
</script>

<template>
  <div class="pd-filmstrip" aria-hidden="true">
    <div
      class="pd-filmstrip-track"
      :style="{ animationDuration: duration, animationDirection: reverse ? 'reverse' : 'normal' }"
    >
      <template v-for="copy in 2" :key="copy">
        <img
          v-for="src in stills"
          :key="`${copy}-${src}`"
          :src="src"
          alt=""
          loading="lazy"
          class="pd-filmstrip-frame"
        >
      </template>
    </div>
  </div>
</template>
