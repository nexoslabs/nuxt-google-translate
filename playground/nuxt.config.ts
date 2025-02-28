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
      'ab', 'ace', 'ach', 'af', 'sq', 'alz', 'am', 'ar', 'hy', 'as', 'awa', 'ay', 'az',
      'ban', 'bm', 'ba', 'eu', 'btx', 'bts', 'bbc', 'be', 'bem', 'bn', 'bew', 'bho',
      'bik', 'bs', 'br', 'bg', 'bua', 'yue', 'ca', 'ceb', 'ny', 'zh-CN', 'zh-TW', 'cv',
      'co', 'crh', 'hr', 'cs', 'da', 'din', 'dv', 'doi', 'dov', 'nl', 'dz', 'en', 'eo',
      'et', 'ee', 'fj', 'fil', 'fi', 'fr', 'fr-FR', 'fr-CA', 'fy', 'ff', 'gaa', 'gl',
      'lg', 'ka', 'de', 'el', 'gn', 'gu', 'ht', 'cnh', 'ha', 'haw', 'he', 'hil', 'hi',
      'hmn', 'hu', 'is', 'ig', 'ilo', 'id', 'ga', 'it', 'ja', 'jv', 'kn', 'pam', 'kk',
      'km', 'rw', 'ko', 'ku', 'ckb', 'lv', 'lt', 'mk', 'ms', 'ml', 'mt', 'mr', 'mn',
      'ne', 'no', 'fa', 'pl', 'pt', 'pa', 'ro', 'ru', 'sr', 'es', 'sw', 'sv', 'ta',
      'te', 'tr', 'uk', 'ur', 'vi', 'cy', 'yo', 'zu',
    ],
  },
})
