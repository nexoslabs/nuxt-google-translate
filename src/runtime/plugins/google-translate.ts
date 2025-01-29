import { ref, readonly } from 'vue'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

/**
 * Configuration interface for Google Translate Element
 * @interface GoogleTranslateConfig
 * @property {string} pageLanguage - The default language of the page
 * @property {string} [includedLanguages] - Comma-separated list of supported languages
 * @property {string} layout - The layout style of the translate widget
 * @property {boolean} autoDisplay - Whether to automatically display the widget
 */
interface GoogleTranslateConfig {
  pageLanguage: string
  includedLanguages?: string
  layout: string
  autoDisplay: boolean
}

/**
 * Extend Window interface to include Google Translate types
 * This provides TypeScript support for the Google Translate API
 */
declare global {
  interface Window {
    google: {
      translate: {
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
    googleTranslateElementInit: () => void
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
  const isLoaded = ref(false)

  /**
   * Sets the active language and updates the Google Translate widget
   * @param {string} lang - The language code to set
   */
  const setLanguage = (lang: string) => {
    if (supportedLanguages.includes(lang)) {
      activeLanguage.value = lang
      updateGoogleTranslate(lang)
    }
    else {
      console.warn(`[nuxt-google-translate] Unsupported language: ${lang}. Using default.`)
    }
  }

  /**
   * Updates the Google Translate widget to the specified language
   * Only runs on client-side and when the widget is loaded
   * @param {string} lang - The language code to update to
   */
  const updateGoogleTranslate = (lang: string) => {
    if (import.meta.client && isLoaded.value) {
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement
      if (select) {
        select.value = lang
        select.dispatchEvent(new Event('change'))
      }
    }
  }

  /**
   * Loads the Google Translate script and initializes the widget
   * Only runs once on client-side when the widget hasn't been loaded
   */
  const loadGoogleTranslate = () => {
    if (import.meta.client && !isLoaded.value) {
      if (document.querySelector('#google-translate-script')) return

      // Create and append the Google Translate script
      const script = document.createElement('script')
      script.id = 'google-translate-script'
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true // Ensures that script is loaded asynchronously
      script.defer = true // Prevents blocking of other elements on page load

      script.onload = () => {
        // Initialize the Google Translate widget when the script loads
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: defaultLanguage,
              includedLanguages: supportedLanguages.join(','),
              layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
              autoDisplay: false,
            },
            'nuxt_translate_element',
          )
          // Mark as loaded and update to initial language
          isLoaded.value = true
          updateGoogleTranslate(activeLanguage.value)
        }
      }

      // Append the script **AFTER** the page has loaded
      window.addEventListener('load', () => {
        document.body.appendChild(script)
      })
    }
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
