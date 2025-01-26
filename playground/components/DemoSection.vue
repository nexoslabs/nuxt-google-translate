<script setup lang="ts">
import { ref } from 'vue'

// Sample translated text (this would be dynamically translated in a real implementation)
const sampleTranslatedText = ref({
  npm: 'npm install nuxt-google-translate',
  npx: 'npx nuxi coming soon!',
  yarn: 'yarn comming soon!',
  pnpm: 'pnpm coming soon!',
  bun: 'bun coming soon!',
})

// Function to get a random supported language code
const getRandomLanguage = () => {
  const languages = Object.keys(sampleTranslatedText.value)
  return languages[Math.floor(Math.random() * languages.length)]
}

// Reactive reference for the current sample language
const currentSampleLanguage = ref(getRandomLanguage())

// Function to change the sample language
const changeSampleLanguage = () => {
  currentSampleLanguage.value = getRandomLanguage()
}
</script>

<template>
  <div class="sample-translation">
    <h3>Try Translation:</h3>
    <code
      class="sample-text notranslate"
      @click="changeSampleLanguage"
    >
      {{ sampleTranslatedText[currentSampleLanguage] }}
    </code>
    <p class="sample-instruction">
      Click to see another language
    </p>
  </div>
</template>

<style lang="css" scoped>
.sample-translation {
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sample-translation h3 {
  font-size: 1.5rem;
  color: #00DC82;
  margin-bottom: 0.5rem;
}

.sample-text {
  font-size: 1.5rem;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.sample-text:hover {
  background: rgba(255, 255, 255, 0.2);
}

.sample-instruction {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.25rem;
}
</style>
