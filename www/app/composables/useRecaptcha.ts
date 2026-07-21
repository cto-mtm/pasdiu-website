declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

/**
 * Composable to execute Google reCAPTCHA v3 on the client.
 * Obtains a score-based token for form submissions.
 */
export function useRecaptcha() {
  const config = useRuntimeConfig()
  const siteKey = config.public.recaptchaSiteKey as string | undefined

  function loadScript(): Promise<void> {
    if (typeof window === 'undefined') return Promise.resolve()
    if (window.grecaptcha) return Promise.resolve()

    return new Promise((resolve, reject) => {
      const scriptId = 'recaptcha-v3-script'
      let script = document.getElementById(scriptId) as HTMLScriptElement | null

      if (script) {
        if (window.grecaptcha) {
          resolve()
        } else {
          script.addEventListener('load', () => resolve())
          script.addEventListener('error', (e) => reject(e))
        }
        return
      }

      script = document.createElement('script')
      script.id = scriptId
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
      script.async = true
      script.defer = true
      script.onload = () => resolve()
      script.onerror = (e) => reject(e)
      document.head.appendChild(script)
    })
  }

  async function execute(action: string = 'submit'): Promise<string | undefined> {
    if (!siteKey || siteKey === 'REPLACE_ME') {
      return undefined
    }

    try {
      await loadScript()
      if (typeof window === 'undefined' || !window.grecaptcha) return undefined

      return new Promise<string>((resolve, reject) => {
        window.grecaptcha!.ready(async () => {
          try {
            const token = await window.grecaptcha!.execute(siteKey, { action })
            resolve(token)
          } catch (err) {
            reject(err)
          }
        })
      })
    } catch (err) {
      console.warn('reCAPTCHA v3 execution failed:', err)
      return undefined
    }
  }

  return { execute }
}
