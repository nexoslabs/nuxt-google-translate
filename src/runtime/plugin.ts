import { ref, readonly, watchEffect } from 'vue'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

interface TranslateElementInstance {
  setPageLanguage: (language: string) => void
}

interface GoogleTranslateConfig {
  pageLanguage: string
  layout: string
  autoDisplay: boolean
}

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: {
          new (config: GoogleTranslateConfig, elementId: string): TranslateElementInstance
          InlineLayout: {
            SIMPLE: string
          }
        }
      }
    }
    googleTranslateElementInit: () => void
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const defaultLanguage = config.googleTranslate?.defaultLanguage ?? 'en'
  const activeLanguage = ref(defaultLanguage)

  const setLanguage = (lang: string) => {
    activeLanguage.value = lang
  }

  nuxtApp.provide('googleTranslate', {
    activeLanguage: readonly(activeLanguage),
    setLanguage,
  })

  if (import.meta.client) {
    const scriptId = 'google-translate-script'

    // Check if the script is already loaded
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.id = scriptId
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      document.body.appendChild(script)
    }

    // Initialize the widget after the script is loaded
    window.googleTranslateElementInit = () => {
      const translateElement = new window.google.translate.TranslateElement(
        {
          pageLanguage: defaultLanguage,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element',
      )

      // Watch for language changes and update Google Translate widget
      watchEffect(() => {
        translateElement.setPageLanguage(activeLanguage.value)
      })
    }

    console.log('[nuxt-google-translate] Plugin injected successfully!')
  }
})
