<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

// Render dates in the active locale ("July 10, 2026" / "10 de julio de 2026").
function formatDate(date: string) {
  return new Intl.DateTimeFormat(locale.value, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(date))
}

// Getter syntax keeps meta reactive when the locale changes.
useSeoMeta({
  title: () => t('News.meta.title'),
  description: () => t('News.meta.description'),
})

const { data: posts } = await useAsyncData('news-list', () =>
  queryCollection('news').order('date', 'DESC').all(),
)

function slugOf(path: string) {
  return path.split('/').filter(Boolean).pop() ?? ''
}
</script>

<template>
  <div>
    <section class="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-12">
      <p class="pd-enter text-xs uppercase tracking-[0.25em] text-[var(--accent-cyan)] mb-6">
        {{ t('News.header.kicker') }}
      </p>
      <h1 class="pd-enter pd-enter-delay-1 text-3xl sm:text-5xl mb-6">
        {{ t('News.header.title') }}
      </h1>
      <p class="pd-enter pd-enter-delay-2 text-lg text-[var(--text-muted)]">
        {{ t('News.header.subtitle') }}
      </p>
    </section>

    <section class="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
      <p v-if="!posts?.length" class="text-[var(--text-muted)]">{{ t('News.empty') }}</p>

      <div v-else class="space-y-6">
        <article
          v-for="post in posts"
          :key="post.path"
          class="pd-card group p-6 transition-all duration-300 hover:border-[var(--accent-cyan)]/50"
        >
          <p class="text-xs text-[var(--text-muted)] mb-2">
            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
            <span v-if="post.category" class="ml-2 text-[var(--accent-cyan)] uppercase tracking-wide">{{ post.category }}</span>
          </p>
          <h2 class="text-xl mb-2">
            <NuxtLink :to="localePath({ name: 'news-slug', params: { slug: slugOf(post.path) } })" class="hover:text-[var(--accent-cyan)] transition-colors">
              {{ post.title }}
            </NuxtLink>
          </h2>
          <p class="text-sm text-[var(--text-muted)] mb-4">{{ post.description }}</p>
          <NuxtLink
            :to="localePath({ name: 'news-slug', params: { slug: slugOf(post.path) } })"
            class="text-sm text-[var(--accent-cyan)] inline-flex items-center gap-1 group-hover:gap-2 transition-all"
          >
            {{ t('News.readMore') }}
            <UIcon name="i-lucide-arrow-right" class="size-4" />
          </NuxtLink>
        </article>
      </div>
    </section>
  </div>
</template>
