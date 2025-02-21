export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  compatibilityDate: '2025-01-25',
  nitro: {
    externals: {
      inline: ['lucide-vue-next'],
    },
  },
  vite: {
    build: {
      rollupOptions: {
        external: ['lucide-vue-next'],
      },
    },
  },
  googleTranslate: {
    defaultLanguage: 'en',
    supportedLanguages: [
      'te', 'tr', 'uk', 'ur', 'vi', 'cy', 'yo', 'zu', 'en',
    ],
  },
})
