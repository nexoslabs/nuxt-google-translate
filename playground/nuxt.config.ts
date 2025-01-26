export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  compatibilityDate: '2025-01-25',
  googleTranslate: {
    defaultLanguage: 'en',
    supportedLanguages: ['en', 'gu', 'fr', 'hi', 'ru', 'ko'], // Add or remove languages as needed
  },
})
