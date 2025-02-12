import { computed } from 'vue'
import { useNuxtApp } from '#app'

/**
 * Composable to access Google Translate functionality
 * @returns {object} An object containing Google Translate state and methods
 */
export function useGoogleTranslate() {
  // Access the Nuxt app instance to get the injected $googleTranslate object
  const { $googleTranslate } = useNuxtApp()

  // Check if the plugin is properly injected
  if (!$googleTranslate) {
    console.warn('[useGoogleTranslate] Google Translate plugin is not available. Ensure the plugin is loaded.')
    return {
      activeLanguage: computed(() => 'en'), // Default to English
      supportedLanguages: computed(() => ['en']), // Default fallback
      setLanguage: () => console.warn('[useGoogleTranslate] setLanguage() is unavailable.'),
      isLoaded: computed(() => false),
    }
  }

  // Return an object with Google Translate functionality
  return {
    /**
     * Ref containing the currently active language
     * @type {ComputedRef<string>}
     */
    activeLanguage: computed(() => $googleTranslate.activeLanguage.value),

    /**
     * Array of supported language codes
     * @type {ComputedRef<readonly string[]>}
     */
    supportedLanguages: computed(() => $googleTranslate.supportedLanguages),

    /**
     * Function to set the active language
     * @param {string} lang - The language code to set
     */
    setLanguage: (lang: string) => $googleTranslate.setLanguage(lang),

    /**
     * Ref indicating whether the Google Translate script has been loaded
     * @type {ComputedRef<boolean>}
     */
    isLoaded: computed(() => $googleTranslate.isLoaded.value),
  }
}
