<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const slug = computed(() => String(route.params.slug))

const { data: post } = await useAsyncData(`news-${slug.value}`, () =>
  queryCollection('news').path(`/news/${slug.value}`).first(),
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: t('News.notFound') })
}

// Render dates in the active locale ("July 10, 2026" / "10 de julio de 2026").
function formatDate(date: string) {
  return new Intl.DateTimeFormat(locale.value, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(date))
}

useSeoMeta({
  title: `${post.value.title} — Pasdiu`,
  description: post.value.description,
})
</script>

<template>
  <article v-if="post" class="max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-24">
    <NuxtLink
      :to="localePath('news')"
      class="text-sm text-[var(--accent-cyan)] inline-flex items-center gap-1 mb-8 hover:gap-2 transition-all"
    >
      <UIcon name="i-lucide-arrow-left" class="size-4" />
      {{ t('News.back') }}
    </NuxtLink>

    <p class="text-xs text-[var(--text-muted)] mb-4">
      <time :datetime="post.date">{{ formatDate(post.date) }}</time>
      <span v-if="post.category" class="ml-2 text-[var(--accent-cyan)] uppercase tracking-wide">{{ post.category }}</span>
    </p>

    <h1 class="text-3xl sm:text-4xl mb-6">{{ post.title }}</h1>

    <div class="prose prose-invert max-w-none prose-headings:font-display prose-a:text-[var(--accent-cyan)]">
      <ContentRenderer :value="post" />
    </div>
  </article>
</template>
