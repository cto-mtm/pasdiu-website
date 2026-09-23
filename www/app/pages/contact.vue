<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

// Getter syntax keeps meta reactive when the locale changes.
useSeoMeta({
  title: () => t('Contact.meta.title'),
  description: () => t('Contact.meta.description'),
})

const { submit } = useSubmitForm()
const { execute: getRecaptchaToken } = useRecaptcha()

const form = reactive({
  name: '',
  email: '',
  company: '',
  teamSize: '',
  message: '',
})

const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const errorMessage = ref('')

const teamSizeKeys = ['solo', 'small', 'medium', 'large'] as const

async function onSubmit() {
  status.value = 'sending'
  errorMessage.value = ''

  let recaptchaToken: string | undefined
  try {
    recaptchaToken = await getRecaptchaToken('contact_form')
  } catch (err) {
    status.value = 'error'
    errorMessage.value = err instanceof Error ? err.message : 'reCAPTCHA verification failed to load.'
    return
  }

  const result = await submit(
    'contact',
    {
      name: form.name,
      email: form.email,
      company: form.company || undefined,
      // The select stores a locale-independent key; translate at submit time.
      teamSize: form.teamSize ? t(`Contact.form.teamSizeOptions.${form.teamSize}`) : undefined,
      message: form.message,
    },
    recaptchaToken,
  )

  if (result.success) {
    status.value = 'success'
    form.name = ''
    form.email = ''
    form.company = ''
    form.teamSize = ''
    form.message = ''
  } else {
    status.value = 'error'
    errorMessage.value = result.error ?? ''
  }
}
</script>

<template>
  <div>
    <section class="max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-12">
      <p class="pd-enter text-xs uppercase tracking-[0.25em] text-[var(--accent-cyan)] mb-6">
        {{ t('Contact.header.kicker') }}
      </p>
      <h1 class="pd-enter pd-enter-delay-1 text-3xl sm:text-5xl mb-6">
        {{ t('Contact.header.title') }}
      </h1>
      <p class="pd-enter pd-enter-delay-2 text-lg text-[var(--text-muted)]">
        {{ t('Contact.header.subtitle') }}
      </p>
    </section>

    <section class="max-w-3xl mx-auto px-4 sm:px-6 pb-24">
      <!--
        WebMCP Declarative API: `toolname` / `tooldescription` expose this
        form as a structured tool for browser-based AI agents.
        Semantic markup per Modern Web Guidance: <form> wrapper, explicit
        <label for>, aria-describedby for hints and errors.
      -->
      <form
        class="pd-card p-6 sm:p-8 space-y-6"
        toolname="contact_pasdiu"
        tooldescription="Send a message to the Pasdiu team with your name, work email, optional company and team size, and a message."
        novalidate
        @submit.prevent="onSubmit"
      >
        <p class="text-xs text-[var(--text-muted)]" aria-hidden="true">
          <span class="text-[var(--accent-amber)]">*</span> {{ t('Contact.form.requiredHint') }}
        </p>

        <div class="grid gap-6 sm:grid-cols-2">
          <div>
            <label for="contact-name" class="block text-sm mb-2">
              {{ t('Contact.form.name') }} <span class="text-[var(--accent-amber)]" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              v-model="form.name"
              name="name"
              type="text"
              required
              autocomplete="name"
              :placeholder="t('Contact.form.namePlaceholder')"
              toolparamdescription="Full name of the person contacting Pasdiu"
              class="w-full rounded-lg bg-[var(--surface-2)] border border-[var(--border)] px-4 py-2.5 text-sm placeholder:text-[var(--text-muted)]/60 focus:border-[var(--accent-cyan)] transition-colors"
            >
          </div>

          <div>
            <label for="contact-email" class="block text-sm mb-2">
              {{ t('Contact.form.email') }} <span class="text-[var(--accent-amber)]" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-email"
              v-model="form.email"
              name="email"
              type="email"
              required
              autocomplete="email"
              :placeholder="t('Contact.form.emailPlaceholder')"
              toolparamdescription="Work email address for the reply"
              class="w-full rounded-lg bg-[var(--surface-2)] border border-[var(--border)] px-4 py-2.5 text-sm placeholder:text-[var(--text-muted)]/60 focus:border-[var(--accent-cyan)] transition-colors"
            >
          </div>

          <div>
            <label for="contact-company" class="block text-sm mb-2">{{ t('Contact.form.company') }}</label>
            <input
              id="contact-company"
              v-model="form.company"
              name="company"
              type="text"
              autocomplete="organization"
              :placeholder="t('Contact.form.companyPlaceholder')"
              toolparamdescription="Company, studio, or agency name (optional)"
              class="w-full rounded-lg bg-[var(--surface-2)] border border-[var(--border)] px-4 py-2.5 text-sm placeholder:text-[var(--text-muted)]/60 focus:border-[var(--accent-cyan)] transition-colors"
            >
          </div>

          <div>
            <label for="contact-team-size" class="block text-sm mb-2">{{ t('Contact.form.teamSize') }}</label>
            <select
              id="contact-team-size"
              v-model="form.teamSize"
              name="teamSize"
              toolparamdescription="Approximate team size (optional): Just me, 2-15, 16-50, or 50+"
              class="w-full rounded-lg bg-[var(--surface-2)] border border-[var(--border)] px-4 py-2.5 text-sm focus:border-[var(--accent-cyan)] transition-colors"
            >
              <option value="" />
              <!-- Values are stable keys so a selection survives a locale switch. -->
              <option v-for="key in teamSizeKeys" :key="key" :value="key">
                {{ t(`Contact.form.teamSizeOptions.${key}`) }}
              </option>
            </select>
          </div>
        </div>

        <div>
          <label for="contact-message" class="block text-sm mb-2">
            {{ t('Contact.form.message') }} <span class="text-[var(--accent-amber)]" aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            v-model="form.message"
            name="message"
            required
            rows="5"
            :placeholder="t('Contact.form.messagePlaceholder')"
            aria-describedby="contact-message-hint"
            toolparamdescription="The message for the Pasdiu team"
            class="w-full rounded-lg bg-[var(--surface-2)] border border-[var(--border)] px-4 py-2.5 text-sm placeholder:text-[var(--text-muted)]/60 focus:border-[var(--accent-cyan)] transition-colors"
          />
          <p id="contact-message-hint" class="mt-2 text-xs text-[var(--text-muted)]">
            {{ t('Contact.form.messageHint') }}
          </p>
        </div>

        <div aria-live="polite">
          <p v-if="status === 'success'" class="text-sm text-[var(--accent-emerald)]">
            {{ t('Contact.form.success') }}
          </p>
          <p v-else-if="status === 'error'" class="text-sm text-[var(--accent-amber)]">
            {{ t('Contact.form.error') }}
            <span v-if="errorMessage" class="block text-xs text-[var(--text-muted)] mt-1">{{ errorMessage }}</span>
          </p>
        </div>

        <UButton
          type="submit"
          color="primary"
          size="lg"
          :loading="status === 'sending'"
          :disabled="status === 'sending'"
          class="pd-glow-cyan"
        >
          {{ status === 'sending' ? t('Contact.form.sending') : t('Contact.form.submit') }}
        </UButton>

        <!-- Privacy notice at the point of collection: the policy has to be
             one click away from the field that collects the data, not only
             from the footer. -->
        <p class="mt-4 text-xs leading-relaxed text-[var(--text-muted)]">
          {{ t('Contact.form.privacy') }}
          <NuxtLink :to="localePath('privacy')" class="text-[var(--accent-cyan)] underline underline-offset-2">
            {{ t('Contact.form.privacyLink') }}
          </NuxtLink>
        </p>

        <!--
          Google's reCAPTCHA terms require either the floating badge or this
          disclosure. Keep both in sync: if the badge is ever hidden in CSS,
          this text is what keeps us compliant.
        -->
        <p class="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
          {{ t('Contact.form.recaptchaNotice') }}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="underline underline-offset-2">
            {{ t('Contact.form.recaptchaPrivacy') }}
          </a>
          {{ t('Contact.form.recaptchaAnd') }}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener" class="underline underline-offset-2">
            {{ t('Contact.form.recaptchaTerms') }}
          </a>{{ t('Contact.form.recaptchaApply') }}
        </p>
      </form>
    </section>
  </div>
</template>
