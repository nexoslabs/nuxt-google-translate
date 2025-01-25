import { useNuxtApp } from '#app'

/**
 * Composable to access Google Translate functionality
 * @returns {object} An object containing Google Translate state and methods
 */
export function useGoogleTranslate() {
  // Access the Nuxt app instance to get the injected $googleTranslate object
  const { $googleTranslate } = useNuxtApp()

  // Return an object with Google Translate functionality
  return {
    /**
     * Ref containing the currently active language
     * @type {Ref<string>}
     */
    activeLanguage: $googleTranslate.activeLanguage,

    /**
     * Array of supported language codes
     * @type {readonly string[]}
     */
    supportedLanguages: $googleTranslate.supportedLanguages,

    /**
     * Function to set the active language
     * @param {string} lang - The language code to set
     */
    setLanguage: $googleTranslate.setLanguage,

    /**
     * Ref indicating whether the Google Translate script has been loaded
     * @type {Ref<boolean>}
     */
    isLoaded: $googleTranslate.isLoaded,
  }
}
