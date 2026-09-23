<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

// Getter syntax keeps meta reactive when the locale changes.
useSeoMeta({
  title: () => t('Legal.terms.seoTitle'),
  description: () => t('Legal.terms.seoDescription'),
})

const plans = computed(() => [
  t('Legal.terms.plan1'),
  t('Legal.terms.plan2'),
  t('Legal.terms.plan3'),
  t('Legal.terms.plan4'),
])

const accountDuties = computed(() => [
  t('Legal.terms.account1'),
  t('Legal.terms.account2'),
  t('Legal.terms.account3'),
  t('Legal.terms.account4'),
  t('Legal.terms.account5'),
])

const prohibited = computed(() => [
  t('Legal.terms.use1'),
  t('Legal.terms.use2'),
  t('Legal.terms.use3'),
  t('Legal.terms.use4'),
  t('Legal.terms.use5'),
  t('Legal.terms.use6'),
])

const misc = computed(() => [
  t('Legal.terms.misc1'),
  t('Legal.terms.misc2'),
  t('Legal.terms.misc3'),
  t('Legal.terms.misc4'),
  t('Legal.terms.misc5'),
])
</script>

<template>
  <LegalPage
    :title="t('Legal.terms.title')"
    :subtitle="t('Legal.terms.subtitle')"
    :updated-label="t('Legal.terms.updatedLabel')"
    :updated-date="t('Legal.terms.updatedDate')"
    icon="i-lucide-scroll-text"
  >
    <!-- Who the counterparty actually is comes first: a visitor should never
         have to guess which company stands behind the product. -->
    <LegalSection :title="t('Legal.terms.partiesTitle')" :body="t('Legal.terms.partiesBody')">
      <p class="mt-3 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.terms.partiesGroup') }}</p>
    </LegalSection>

    <LegalSection :title="t('Legal.terms.acceptTitle')" :body="t('Legal.terms.acceptBody')">
      <p class="mt-3 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.terms.acceptOrder') }}</p>
    </LegalSection>

    <!-- Called out rather than buried: "we link your media, we do not store
         it" is the single most consequential line here for a studio. -->
    <LegalSection :title="t('Legal.terms.serviceTitle')" :body="t('Legal.terms.serviceBody')">
      <p class="mt-4 flex gap-3 rounded-lg border border-[var(--accent-amber)]/40 bg-[var(--accent-amber)]/10 p-4">
        <UIcon name="i-lucide-triangle-alert" class="mt-0.5 size-4 shrink-0 text-[var(--accent-amber)]" />
        <span class="leading-relaxed text-[var(--text)]">{{ t('Legal.terms.serviceMedia') }}</span>
      </p>
    </LegalSection>

    <LegalSection :title="t('Legal.terms.accountTitle')" :body="t('Legal.terms.accountIntro')">
      <LegalList :items="accountDuties" icon="i-lucide-check" icon-class="text-[var(--accent-emerald)]" />
      <p class="mt-4 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.terms.accountNote') }}</p>
    </LegalSection>

    <LegalSection :title="t('Legal.terms.plansTitle')" :body="t('Legal.terms.plansIntro')">
      <LegalList :items="plans" icon="i-lucide-tag" icon-class="text-[var(--accent-cyan)]" />
      <p class="mt-4 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.terms.plansBilling') }}</p>
      <p class="mt-3 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.terms.plansChanges') }}</p>
      <p class="mt-3 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.terms.plansFailure') }}</p>
      <p class="mt-3 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.terms.plansLimits') }}</p>
    </LegalSection>

    <LegalSection :title="t('Legal.terms.cancelTitle')" :body="t('Legal.terms.cancelBody')">
      <p class="mt-3 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.terms.cancelConsumer') }}</p>
    </LegalSection>

    <LegalSection :title="t('Legal.terms.dataTitle')" :body="t('Legal.terms.dataBody')">
      <p class="mt-3 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.terms.dataResponsibility') }}</p>
    </LegalSection>

    <LegalSection :title="t('Legal.terms.useTitle')" :body="t('Legal.terms.useIntro')">
      <LegalList :items="prohibited" icon="i-lucide-x" icon-class="text-[var(--text-muted)]" />
      <p class="mt-4 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.terms.useConsequence') }}</p>
      <p class="mt-3 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.terms.useNotice') }}</p>
    </LegalSection>

    <LegalSection :title="t('Legal.terms.thirdPartyTitle')" :body="t('Legal.terms.thirdPartyBody')" />

    <LegalSection :title="t('Legal.terms.ipTitle')" :body="t('Legal.terms.ipBody')">
      <p class="mt-3 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.terms.ipFeedback') }}</p>
    </LegalSection>

    <LegalSection :title="t('Legal.terms.availabilityTitle')" :body="t('Legal.terms.availabilityBody')" />
    <LegalSection :title="t('Legal.terms.indemnityTitle')" :body="t('Legal.terms.indemnityBody')" />

    <LegalSection :title="t('Legal.terms.liabilityTitle')" :body="t('Legal.terms.liabilityBody')">
      <p class="mt-3 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.terms.liabilityCarveout') }}</p>
    </LegalSection>

    <LegalSection :title="t('Legal.terms.terminationTitle')" :body="t('Legal.terms.terminationBody')" />

    <LegalSection :title="t('Legal.terms.disputesTitle')" :body="t('Legal.terms.disputesBody')">
      <p class="mt-3 leading-relaxed text-[var(--text-muted)]">{{ t('Legal.terms.disputesCarveout') }}</p>
    </LegalSection>

    <LegalSection :title="t('Legal.terms.lawTitle')" :body="t('Legal.terms.lawBody')" />
    <LegalSection :title="t('Legal.terms.forceTitle')" :body="t('Legal.terms.forceBody')" />

    <LegalSection :title="t('Legal.terms.miscTitle')" :body="t('Legal.terms.miscIntro')">
      <LegalList :items="misc" />
    </LegalSection>

    <LegalSection :title="t('Legal.terms.changesTitle')" :body="t('Legal.terms.changesBody')" />

    <LegalContact :title="t('Legal.terms.contactTitle')" :body="t('Legal.terms.contactBody')">
      <UButton :to="localePath('contact')" color="primary" size="lg">
        {{ t('Legal.terms.contactCta') }}
      </UButton>
      <UButton :to="localePath('privacy')" color="neutral" variant="outline" size="lg">
        {{ t('Legal.terms.privacyCta') }}
      </UButton>
    </LegalContact>
  </LegalPage>
</template>
