<template>
  <div class="language-selector">
    <label for="language-select">Select Language:</label>
    <select
      id="language-select"
      v-model="selectedLanguage"
      @change="changeLanguage"
    >
      <option
        v-for="lang in supportedLanguages"
        :key="lang"
        :value="lang"
      >
        {{ getLanguageName(lang) }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useGoogleTranslate } from '../composables/useGoogleTranslate'

export default defineComponent({
  name: 'LanguageSelector',
  setup() {
    const { activeLanguage, setLanguage, supportedLanguages } = useGoogleTranslate()
    const selectedLanguage = ref(activeLanguage.value)

    watch(activeLanguage, (newLang) => {
      selectedLanguage.value = newLang
    })

    const changeLanguage = () => {
      setLanguage(selectedLanguage.value)
    }

    const getLanguageName = (langCode: string) => {
      const languageNames: Record<string, string> = {
        en: 'English',
        es: 'Español',
        fr: 'Français',
        hi: 'हिन्दी',
        zh: '中文',
        de: 'Deutsch',
      }
      return languageNames[langCode] || langCode
    }

    return {
      selectedLanguage,
      supportedLanguages,
      changeLanguage,
      getLanguageName,
    }
  },
})
</script>

<style scoped>
.language-selector {
  margin: 20px 0;
}

select {
  margin-left: 10px;
  padding: 5px;
  font-size: 16px;
}
</style>
