/**
 * Configuration options for the Nuxt Google Translate module
 */
export interface GoogleTranslateOptions {
  /**
   * The default language for the translation
   * @default 'en'
   */
  defaultLanguage: string

  /**
   * Array of supported language codes
   * @default ['ar', 'cs', 'da', 'en', 'fi', 'fr', 'gu', 'hi', 'id', 'it', 'ja', 'ko', 'sk', 'sv', 'th', 'tr', 'uk', 'vi']
   */
  supportedLanguages: string[]
}

/**
 * Configuration for Google Translate Element
 */
export interface GoogleTranslateConfig {
  pageLanguage: string
  includedLanguages?: string
  layout: string
  autoDisplay: boolean
}

/**
 * Interface for the Google Translate functionality provided by the plugin
 */
export interface GoogleTranslatePlugin {
  /**
   * The currently active language
   */
  activeLanguage: Ref<string>

  /**
   * Array of supported language codes
   */
  supportedLanguages: readonly string[]

  /**
   * Function to set the active language
   * @param lang - The language code to set
   */
  setLanguage: (lang: string) => void

  /**
   * Indicates whether the Google Translate script has been loaded
   */
  isLoaded: Ref<boolean>
}

/**
 * Augment the runtime config to include GoogleTranslateOptions
 */
declare module '@nuxt/schema' {
  interface RuntimeConfig {
    googleTranslate?: GoogleTranslateOptions
  }
  interface PublicRuntimeConfig {
    googleTranslate?: GoogleTranslateOptions
  }
}

/**
 * Augment the Nuxt app to include the Google Translate plugin
 */
declare module '#app' {
  interface NuxtApp {
    $googleTranslate: GoogleTranslatePlugin
  }
}
