import { ref, readonly } from 'vue'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

/**
 * Configuration interface for Google Translate Element
 * @interface GoogleTranslateConfig
 * @property {string} pageLanguage - The default language of the page
 * @property {string} [includedLanguages] - Comma-separated list of supported languages
 * @property {boolean} autoDisplay - Whether to automatically display the widget
 * @property {boolean} multilanguagePage - Indicates if the page has multiple languages
 * @property {string} layout - The layout style of the translate widget
 */
interface GoogleTranslateConfig {
  pageLanguage: string
  includedLanguages?: string
  autoDisplay: boolean
  multilanguagePage: boolean
  layout: string
}

/**
 * Extend Window interface to include Google Translate types
 */
declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: {
          new(config: GoogleTranslateConfig, elementId: string): void
          InlineLayout: {
            SIMPLE: string
            HORIZONTAL: string
            VERTICAL: string
          }
        }
      }
    }
    googleTranslateElementInit?: () => void
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  // Get configuration from Nuxt runtime config
  const config = useRuntimeConfig()
  const options = config.public.googleTranslate

  // Initialize state variables
  const defaultLanguage = options?.defaultLanguage ?? 'en'
  const supportedLanguages = options?.supportedLanguages ?? ['en']
  const activeLanguage = ref(defaultLanguage)
  // Read from googtrans cookie on init (client-side only)
  if (import.meta.client) {
    const cookieLang = document.cookie
      .split('; ')
      .find(row => row.startsWith('googtrans='))
      ?.split('=')[1]
      ?.split('/')[2] // gets the target language from '/en/gu'

    if (cookieLang && supportedLanguages.includes(cookieLang)) {
      activeLanguage.value = cookieLang
    }
  }

  const isLoaded = ref(false)

  const deleteGoogtransCookie = () => {
    const cookieName = 'googtrans'
    const expiry = 'expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

    // Delete for current domain
    document.cookie = `${cookieName}=; ${expiry}`

    // Delete for exact hostname
    document.cookie = `${cookieName}=; ${expiry} domain=${window.location.hostname};`

    // Delete for base domain (if applicable)
    const baseDomain = window.location.hostname.split('.').slice(-2).join('.')
    if (baseDomain !== window.location.hostname) {
      document.cookie = `${cookieName}=; ${expiry} domain=.${baseDomain};`
    }
  }

  /**
   * Sets the active language and updates the Google Translate widget
   * @param {string} lang - The language code to set
   */
  const setLanguage = (lang: string) => {
    if (!supportedLanguages.includes(lang)) {
      console.warn(`[nuxt-google-translate] Unsupported language: ${lang}.`)
      return
    }

    // Handle reset to default language
    if (lang === defaultLanguage) {
      // Clear any existing googtrans cookies to prevent issues with reloading
      deleteGoogtransCookie()
      // Only reload if the language was actually changed
      if (activeLanguage.value !== defaultLanguage) {
        location.reload()
      }
      activeLanguage.value = defaultLanguage
      return
    }

    // For switching to a non-default language
    if (lang !== activeLanguage.value) {
      activeLanguage.value = lang
      updateGoogleTranslate(lang)

      // Set the googtrans cookie for the new language
      if (import.meta.client) {
        document.cookie = `googtrans=/en/${lang};path=/;`
      }
    }
  }

  /**
   * Updates the Google Translate widget to the specified language
   * Only runs on client-side and when the widget is loaded
   * @param {string} lang - The language code to update to
   */
  const updateGoogleTranslate = (lang: string) => {
    if (!import.meta.client || !isLoaded.value) return

    // Find the Google Translate iframe
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement
    if (select) {
      select.value = lang
      select.dispatchEvent(new Event('change'))
    }
  }

  /**
   * Initializes the Google Translate widget
   */
  const initializeGoogleTranslate = () => {
    if (!window.google?.translate?.TranslateElement) return

    new window.google.translate.TranslateElement(
      {
        pageLanguage: defaultLanguage,
        includedLanguages: supportedLanguages.join(','),
        autoDisplay: false,
        multilanguagePage: false,
        layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
      },
      'nuxt_translate_element',
    )
    isLoaded.value = true
    updateGoogleTranslate(activeLanguage.value)
  }

  /**
   * Loads the Google Translate script dynamically
   * Only runs once on client-side when the widget hasn't been loaded
   */
  const loadGoogleTranslate = () => {
    if (!import.meta.client || isLoaded.value) return

    // Ensure script hasn't been loaded before
    if (document.querySelector('#google-translate-script')) return

    // Define `googleTranslateElementInit` before loading
    window.googleTranslateElementInit = initializeGoogleTranslate

    // Already loaded?
    if (window.google?.translate?.TranslateElement) {
      initializeGoogleTranslate()
      return
    }

    // Create and append script
    const script = document.createElement('script')
    script.id = 'google-translate-script'
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    script.defer = true

    script.onload = () => {
      // console.log('[nuxt-google-translate] Google Translate script loaded successfully.')
      initializeGoogleTranslate() // Initialize on load
    }

    script.onerror = () => {
      console.error('[nuxt-google-translate] Failed to load Google Translate script.')
    }

    document.body.appendChild(script)
  }

  // Load Google Translate when the app is mounted (client-side only)
  if (import.meta.client) {
    nuxtApp.hook('app:mounted', () => {
      loadGoogleTranslate()
    })
  }

  // Provide the translation functionality to the app
  return {
    provide: {
      googleTranslate: {
        activeLanguage: readonly(activeLanguage),
        supportedLanguages: readonly(supportedLanguages),
        setLanguage,
        isLoaded: readonly(isLoaded),
      },
    },
  }
})
