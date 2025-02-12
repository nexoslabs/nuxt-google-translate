import { defineNuxtModule, addComponent, addImports, addPlugin, createResolver } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'
import { defu } from 'defu'

/**
 * Module options interface
 * @interface ModuleOptions
 * @property {string} defaultLanguage - The default language for the translation
 * @property {string[]} supportedLanguages - Array of supported language codes
 */
export interface ModuleOptions {
  defaultLanguage: string
  supportedLanguages: string[]
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-google-translate',
    configKey: 'googleTranslate',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  // Default configuration options
  defaults: {
    defaultLanguage: 'en',
    supportedLanguages: ['en', 'fr', 'hi', 'id', 'ru', 'ko'],
  },
  setup(options, nuxt: Nuxt) {
    const { resolve } = createResolver(import.meta.url || __filename)

    // Validate the default language
    if (!Array.isArray(options.supportedLanguages) || !options.supportedLanguages.includes(options.defaultLanguage)) {
      throw new Error(
        `[nuxt-google-translate] Unsupported defaultLanguage: '${options.defaultLanguage}'. Supported languages are: ${options.supportedLanguages?.join(', ')}`,
      )
    }

    // Register the GoogleTranslate component
    addComponent({
      name: 'GoogleTranslate',
      filePath: resolve('./runtime/components/GoogleTranslate.vue'),
    })
    addComponent({
      name: 'LanguageSelector',
      filePath: resolve('./runtime/components/LanguageSelector.vue'),
    })

    // Register the useGoogleTranslate composable
    addImports({
      name: 'useGoogleTranslate',
      as: 'useGoogleTranslate',
      from: resolve('./runtime/composables/useGoogleTranslate'),
    })

    // Add the Google Translate plugin
    addPlugin({
      src: resolve('./runtime/plugins/google-translate'),
      mode: 'client', // or 'server' if needed
    })

    // Provide runtime configuration
    nuxt.options.runtimeConfig.public.googleTranslate = defu(nuxt.options.runtimeConfig.public.googleTranslate, {
      defaultLanguage: options.defaultLanguage,
      supportedLanguages: options.supportedLanguages,
    })

    // Log initialization information
    console.info(
      `\x1B[32m[nuxt-google-translate] Successfully initialized!\x1B[0m\n`
      + `\x1B[36m- Default Language: \x1B[33m${options.defaultLanguage}\x1B[0m\n`
      + `\x1B[36m- Supported Languages: \x1B[33m${options.supportedLanguages?.length}\x1B[0m`,
    )
  },
})
