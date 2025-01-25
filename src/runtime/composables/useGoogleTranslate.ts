import { ref, readonly } from 'vue'
import { useRuntimeConfig } from '#app'

const SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'hi', 'zh', 'de'] as const
type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]

export function useGoogleTranslate(initialLanguage?: SupportedLanguage) {
  const config = useRuntimeConfig()
  const defaultLanguage = (config.public.googleTranslate?.defaultLanguage as SupportedLanguage) ?? 'en'

  const activeLanguage = ref<SupportedLanguage>(initialLanguage || defaultLanguage)

  const setLanguage = (lang: SupportedLanguage) => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      activeLanguage.value = lang
      // Trigger Google Translate to update the page
      const googleTranslateElement = document.querySelector('.goog-te-combo') as HTMLSelectElement
      if (googleTranslateElement) {
        googleTranslateElement.value = lang
        googleTranslateElement.dispatchEvent(new Event('change'))
      }
    }
    else {
      console.warn(`[nuxt-google-translate] Unsupported language: ${lang}. Using default.`)
    }
  }

  return {
    activeLanguage: readonly(activeLanguage),
    setLanguage,
    supportedLanguages: SUPPORTED_LANGUAGES,
  }
}
