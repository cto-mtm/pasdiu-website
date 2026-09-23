<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

// Lets visitors reopen the consent banner to change or withdraw their choice
// without hunting for the footer link.
const { open: cookieSettingsOpen } = useCookieConsent()

// Getter syntax keeps meta reactive when the locale changes.
useSeoMeta({
  title: () => t('Legal.privacy.seoTitle'),
  description: () => t('Legal.privacy.seoDescription'),
})

const summary = computed(() => [
  t('Legal.privacy.summary1'),
  t('Legal.privacy.summary2'),
  t('Legal.privacy.summary3'),
  t('Legal.privacy.summary4'),
])

const collected = computed(() => [
  { icon: 'i-lucide-mail', title: t('Legal.privacy.collect1Title'), body: t('Legal.privacy.collect1Body') },
  { icon: 'i-lucide-bar-chart-3', title: t('Legal.privacy.collect2Title'), body: t('Legal.privacy.collect2Body') },
  { icon: 'i-lucide-server', title: t('Legal.privacy.collect3Title'), body: t('Legal.privacy.collect3Body') },
])

const bases = computed(() => [
  t('Legal.privacy.basis1'),
  t('Legal.privacy.basis2'),
  t('Legal.privacy.basis3'),
  t('Legal.privacy.basis4'),
])

const processors = computed(() => [
  t('Legal.privacy.sharing1'),
  t('Legal.privacy.sharing2'),
  t('Legal.privacy.sharing3'),
])

const retention = computed(() => [
  t('Legal.privacy.retention1'),
  t('Legal.privacy.retention2'),
  t('Legal.privacy.retention3'),
])

/** Sections that are just a heading and a paragraph. */
const plainSections = computed(() =>
  (['automated', 'security', 'minors', 'links', 'changes'] as const).map(key => ({
    key,
    title: t(`Legal.privacy.${key}Title`),
    body: t(`Legal.privacy.${key}Body`),
  })),
)
</script>

<template>
  <LegalPage
    :title="t('Legal.privacy.title')"
    :subtitle="t('Legal.privacy.subtitle')"
    :updated-label="t('Legal.privacy.updatedLabel')"
    :updated-date="t('Legal.privacy.updatedDate')"
  >
    <!-- Plain-language summary. Marked non-binding so it can stay short
         without the full text having to match it word for word. -->
    <div class="pd-card p-5 sm:p-6">
      <h2 class="flex items-center gap-2 font-semibold text-[var(--text)]">
        <UIcon name="i-lucide-list-checks" class="size-4 text-[var(--accent-cyan)]" />
        {{ t('Legal.privacy.summaryTitle') }}
      </h2>
      <LegalList :items="summary" icon="i-lucide-check" icon-class="text-[var(--accent-emerald)]" />
      <p class="mt-4 text-sm text-[var(--text-muted)]">{{ t('Legal.privacy.summaryNote') }}</p>
    </div>

    <!-- Controller + the MTM relationship, stated before anything else. -->
    <LegalSection :title="t('Legal.privacy.operatorTitle')" :body="t('Legal.privacy.operatorBody')">
      <div class="pd-card mt-6 p-5">
        <h3 class="text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">
          {{ t('Legal.privacy.controllerLabel') }}
        </h3>
        <p class="mt-2 text-[var(--text)]">{{ t('Legal.privacy.controllerBody') }}</p>
      </div>
    </LegalSection>

    <LegalSection :title="t('Legal.privacy.groupTitle')" :body="t('Legal.privacy.groupBody')">
      <p class="mt-3 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.privacy.groupSeparate') }}</p>
    </LegalSection>

    <LegalSection :title="t('Legal.privacy.scopeTitle')" :body="t('Legal.privacy.scopeBody')" />

    <LegalSection :title="t('Legal.privacy.collectTitle')" :body="t('Legal.privacy.collectIntro')">
      <div class="mt-6 space-y-4">
        <div v-for="c in collected" :key="c.title" class="pd-card p-5">
          <h3 class="flex items-center gap-2 font-semibold text-[var(--text)]">
            <UIcon :name="c.icon" class="size-4 text-[var(--accent-cyan)]" />
            {{ c.title }}
          </h3>
          <p class="mt-2 leading-relaxed text-[var(--text-muted)]">{{ c.body }}</p>
        </div>
      </div>
      <h3 class="mt-8 font-semibold text-[var(--text)]">{{ t('Legal.privacy.collectNoneTitle') }}</h3>
      <p class="mt-2 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.privacy.collectNoneBody') }}</p>
    </LegalSection>

    <LegalSection :title="t('Legal.privacy.basisTitle')" :body="t('Legal.privacy.basisIntro')">
      <LegalList :items="bases" icon="i-lucide-check" icon-class="text-[var(--accent-emerald)]" />
      <p class="mt-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 text-[var(--text)]">
        {{ t('Legal.privacy.basisNote') }}
      </p>
      <p class="mt-4 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.privacy.basisWithdraw') }}</p>
    </LegalSection>

    <LegalSection :title="t('Legal.privacy.sharingTitle')" :body="t('Legal.privacy.sharingIntro')">
      <LegalList :items="processors" />
      <p class="mt-4 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.privacy.sharingOther') }}</p>
      <p class="mt-3 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.privacy.sharingTransfer') }}</p>
    </LegalSection>

    <LegalSection :title="t('Legal.privacy.cookiesTitle')" :body="t('Legal.privacy.cookiesBody')">
      <p class="mt-3 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.privacy.cookiesControl') }}</p>
      <UButton
        class="mt-4"
        color="neutral"
        variant="outline"
        icon="i-lucide-cookie"
        @click="cookieSettingsOpen = true"
      >
        {{ t('CookieConsent.reopen') }}
      </UButton>
    </LegalSection>

    <LegalSection :title="t('Legal.privacy.retentionTitle')" :body="t('Legal.privacy.retentionIntro')">
      <LegalList :items="retention" />
      <p class="mt-4 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.privacy.retentionNote') }}</p>
    </LegalSection>

    <LegalSection :title="t('Legal.privacy.rightsTitle')" :body="t('Legal.privacy.rightsIntro')">
      <p class="mt-3 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.privacy.rightsFree') }}</p>
      <p class="mt-3 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.privacy.rightsComplaint') }}</p>
    </LegalSection>

    <LegalSection :title="t('Legal.privacy.usRightsTitle')" :body="t('Legal.privacy.usRightsBody')">
      <p class="mt-3 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.privacy.usRightsSale') }}</p>
    </LegalSection>

    <LegalSection v-for="s in plainSections" :key="s.key" :title="s.title" :body="s.body" />

    <LegalContact :title="t('Legal.privacy.contactTitle')" :body="t('Legal.privacy.contactBody')">
      <UButton :to="localePath('contact')" color="primary" size="lg">
        {{ t('Legal.privacy.contactCta') }}
      </UButton>
      <UButton :to="localePath('terms')" color="neutral" variant="outline" size="lg">
        {{ t('Legal.privacy.termsCta') }}
      </UButton>
    </LegalContact>
  </LegalPage>
</template>
