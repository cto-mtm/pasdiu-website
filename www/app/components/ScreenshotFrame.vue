<script setup lang="ts">
/**
 * A styled "app window" frame for product screenshots.
 * Drop real screenshots into /public/images/screenshots/ and pass the path —
 * the frame, chrome bar, and glow stay identical, so swapping the placeholder
 * SVGs for real PNGs requires no layout changes.
 * The window tilts subtly toward the cursor (mouse only, skipped for touch
 * and prefers-reduced-motion).
 */
withDefaults(defineProps<{
  src: string
  alt: string
  caption?: string
  /** Accent glow behind the frame. */
  glow?: 'cyan' | 'emerald' | 'amber' | 'none'
}>(), { glow: 'cyan' })

const glowColor = {
  cyan: 'rgba(34, 211, 238, 0.12)',
  emerald: 'rgba(52, 211, 153, 0.12)',
  amber: 'rgba(251, 191, 36, 0.12)',
  none: 'transparent',
}

const windowEl = ref<HTMLElement | null>(null)
const tilt = ref('')

function onPointerMove(e: PointerEvent) {
  if (e.pointerType !== 'mouse' || !windowEl.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const r = windowEl.value.getBoundingClientRect()
  const x = (e.clientX - r.left) / r.width - 0.5
  const y = (e.clientY - r.top) / r.height - 0.5
  tilt.value = `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg)`
}
</script>

<template>
  <figure class="relative">
    <!-- Soft accent glow behind the window -->
    <div
      v-if="glow !== 'none'"
      class="absolute -inset-6 -z-10 rounded-3xl blur-2xl"
      :style="{ background: glowColor[glow] }"
      aria-hidden="true"
    />

    <div
      ref="windowEl"
      class="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-transform duration-200 ease-out will-change-transform"
      :style="{ transform: tilt }"
      @pointermove="onPointerMove"
      @pointerleave="tilt = ''"
    >
      <!-- Window chrome bar -->
      <div class="flex items-center gap-1.5 px-4 py-2.5 border-b border-[var(--border)] bg-[var(--surface-2)]" aria-hidden="true">
        <span class="size-2.5 rounded-full bg-[var(--border)]" />
        <span class="size-2.5 rounded-full bg-[var(--border)]" />
        <span class="size-2.5 rounded-full bg-[var(--border)]" />
      </div>
      <img :src="src" :alt="alt" loading="lazy" class="block w-full">
    </div>

    <figcaption v-if="caption" class="mt-3 text-center text-xs text-[var(--text-muted)]">
      {{ caption }}
    </figcaption>
  </figure>
</template>
