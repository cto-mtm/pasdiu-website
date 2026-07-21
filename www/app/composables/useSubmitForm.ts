export interface SubmitFormResult {
  success: boolean
  error?: string
}

/**
 * POSTs a form payload to the submitForm Cloud Function.
 * Never throws — server/network errors surface via the return value.
 */
export function useSubmitForm() {
  const config = useRuntimeConfig()

  async function submit(
    formType: string,
    data: Record<string, unknown>,
    recaptchaToken?: string,
  ): Promise<SubmitFormResult> {
    const url =
      config.public.submitFormUrl && config.public.submitFormUrl !== 'REPLACE_ME'
        ? config.public.submitFormUrl
        : 'https://us-central1-REPLACE_ME.cloudfunctions.net/submitForm'

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType, data, recaptchaToken }),
      })

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null
        return { success: false, error: body?.error ?? `Request failed (${res.status})` }
      }

      return { success: true }
    } catch (err) {
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Network error',
      }
    }
  }

  return { submit }
}
