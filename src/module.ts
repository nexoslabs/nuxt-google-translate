import { defineNuxtModule, addComponent, addImports, addPlugin, createResolver } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'

// Module options TypeScript interface definition
export interface ModuleOptions {
  defaultLanguage: string
}

// Supported languages
const SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'hi', 'zh', 'de'] as const
type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-google-translate',
    configKey: 'googleTranslate',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    defaultLanguage: 'en' as SupportedLanguage,
  },
  setup(options, nuxt: Nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // Ensure valid language
    if (!SUPPORTED_LANGUAGES.includes(options.defaultLanguage as SupportedLanguage)) {
      throw new Error(
        `[nuxt-google-translate] Unsupported defaultLanguage: '${options.defaultLanguage}'. Supported languages are: ${SUPPORTED_LANGUAGES.join(', ')}`,
      )
    }

    console.info('[nuxt-google-translate] Initializing with options:', options)

    // Add styles
    nuxt.options.css.push(resolve('./runtime/styles/main.css'))

    // Add plugin
    addPlugin(resolve('./runtime/plugin'))

    // Add components
    addComponent({
      name: 'GoogleTranslate',
      export: 'GoogleTranslate',
      filePath: resolve('./runtime/components/GoogleTranslate.vue'),
    })
    addComponent({
      name: 'LanguageSelector',
      export: 'LanguageSelector',
      filePath: resolve('./runtime/components/LanguageSelector.vue'),
    })

    // Add composables
    addImports({
      name: 'useGoogleTranslate',
      as: 'useGoogleTranslate',
      from: resolve('./runtime/composables/useGoogleTranslate'),
    })

    // Provide runtime config
    nuxt.options.runtimeConfig.public.googleTranslate = {
      defaultLanguage: options.defaultLanguage,
    }
  },
})
