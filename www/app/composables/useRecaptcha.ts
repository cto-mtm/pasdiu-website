declare global {
  interface Window {
    grecaptcha?: {
      enterprise?: {
        ready: (cb: () => void) => void
        execute: (siteKey: string, options: { action: string }) => Promise<string>
      }
    }
  }
}

/**
 * Composable to execute Google reCAPTCHA Enterprise on the client.
 * Obtains a score-based token for form submissions.
 */
export function useRecaptcha() {
  const config = useRuntimeConfig()
  const siteKey = config.public.recaptchaSiteKey as string | undefined

  function loadScript(): Promise<void> {
    if (typeof window === 'undefined') return Promise.resolve()
    if (window.grecaptcha?.enterprise && typeof window.grecaptcha.enterprise.execute === 'function') {
      return Promise.resolve()
    }

    return new Promise((resolve, reject) => {
      if (!siteKey || siteKey === 'REPLACE_ME') {
        reject(new Error('reCAPTCHA site key is missing or invalid.'))
        return
      }

      const scriptId = 'recaptcha-enterprise-script'
      let script = document.getElementById(scriptId) as HTMLScriptElement | null

      if (script) {
        if (window.grecaptcha?.enterprise) {
          resolve()
        } else {
          script.addEventListener('load', () => resolve())
          script.addEventListener('error', () => reject(new Error('reCAPTCHA script failed to load.')))
        }
        return
      }

      script = document.createElement('script')
      script.id = scriptId
      script.src = `https://www.google.com/recaptcha/enterprise.js?render=${encodeURIComponent(siteKey)}`
      script.async = true
      script.defer = true
      script.onload = () => resolve()
      script.onerror = () => reject(new Error('reCAPTCHA script failed to load (blocked by client or network error).'))
      document.head.appendChild(script)
    })
  }

  // Pre-load script as soon as composable is mounted on client
  if (typeof window !== 'undefined') {
    onMounted(() => {
      loadScript().catch((err) => {
        console.warn('reCAPTCHA Enterprise preload warning:', err.message)
      })
    })
  }

  async function execute(action: string = 'submit'): Promise<string> {
    if (!siteKey || siteKey === 'REPLACE_ME') {
      throw new Error('reCAPTCHA site key is not configured.')
    }

    await loadScript()

    if (typeof window === 'undefined' || !window.grecaptcha?.enterprise) {
      throw new Error('reCAPTCHA Enterprise SDK is not available.')
    }

    return new Promise<string>((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('reCAPTCHA verification timed out.'))
      }, 10000)

      window.grecaptcha!.enterprise!.ready(() => {
        window.grecaptcha!.enterprise!
          .execute(siteKey, { action })
          .then((token) => {
            clearTimeout(timeout)
            if (!token) {
              reject(new Error('reCAPTCHA returned an empty token.'))
            } else {
              resolve(token)
            }
          })
          .catch((err) => {
            clearTimeout(timeout)
            reject(err instanceof Error ? err : new Error(String(err)))
          })
      })
    })
  }

  return { execute, loadScript }
}
