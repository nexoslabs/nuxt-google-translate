<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useGoogleTranslate } from '../composables/useGoogleTranslate'

const { activeLanguage, supportedLanguages, setLanguage, isLoaded } = useGoogleTranslate()
const selectedLanguage = ref(activeLanguage.value)
const isOpen = ref(false)

// Watch for changes in activeLanguage and update selectedLanguage
watch(activeLanguage, (newLang) => {
  selectedLanguage.value = newLang
})

// Change the language when a new option is selected
const changeLanguage = (lang: string) => {
  setLanguage(lang)
  isOpen.value = false
}

// Toggle the dropdown
const toggleDropdown = () => {
  if (isLoaded.value) {
    isOpen.value = !isOpen.value
  }
}

// Close the dropdown when clicking outside
const closeDropdown = (event: Event) => {
  if (isOpen.value && !(event.target as HTMLElement).closest('.language-selector')) {
    isOpen.value = false
  }
}

// Add event listener to close dropdown when clicking outside
if (import.meta.client) {
  document.addEventListener('click', closeDropdown)
}

// Language names mapping
const languageNames: Record<string, string> = {
  ar: 'Arabic',
  cs: 'Czech',
  da: 'Danish',
  en: 'English',
  fi: 'Finnish',
  fr: 'French',
  gu: 'ગુજરાતી',
  hi: 'हिन्दी',
  id: 'Indonesian',
  it: 'Italian',
  ja: 'Japanese',
  ko: 'Korean',
  ru: 'Russian',
  sv: 'Swedish',
  ta: 'Tamil',
  tr: 'Turkish',
  uk: 'Ukrainian',
  vi: 'Vietnamese',
}

// Get the full name of the language
const getLanguageName = (langCode: string) => {
  return languageNames[langCode] || langCode
}

// Compute the current language name
const currentLanguageName = computed(() => getLanguageName(selectedLanguage.value))
</script>

<template>
  <div class="language-selector">
    <!-- Loading state -->
    <div
      v-if="!isLoaded"
      class="language-loading"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="loading-icon"
        viewBox="0 0 24 24"
      >
        <g>
          <path
            d="M17.201 2H6.8c-1.458 0-2.737.985-2.795 2.404c-.074 1.785 1.182 2.97 2.5 4.083c1.825 1.54 2.737 2.31 2.832 3.284q.023.229 0 .458c-.095.975-1.007 1.744-2.832 3.284c-1.355 1.143-2.578 2.207-2.5 4.083C4.062 21.016 5.34 22 6.799 22H17.2c1.458 0 2.737-.985 2.796-2.404c.046-1.13-.373-2.254-1.262-3.036c-.405-.357-.826-.698-1.24-1.047c-1.824-1.54-2.736-2.31-2.831-3.284a2.3 2.3 0 0 1 0-.458c.095-.975 1.008-1.744 2.832-3.284c1.34-1.131 2.577-2.229 2.5-4.083C19.939 2.984 18.66 2 17.202 2"
          />
          <path
            d="M9 21.638c0-.442 0-.663.088-.856a1 1 0 0 1 .046-.09c.107-.183.288-.312.65-.571c1.006-.719 1.51-1.078 2.081-1.116q.135-.009.27 0c.572.038 1.075.397 2.08 1.116c.363.259.544.388.651.571q.026.045.046.09c.088.193.088.414.088.856V22H9z"
          />
        </g>
      </svg>
      <span>translator...</span>
    </div>

    <!-- Loaded state -->
    <div
      v-else
      class="language-dropdown"
      @click="toggleDropdown"
    >
      <div class="selected-language">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="globe-icon"
          viewBox="0 0 24 24"
        >
          <g>
            <path
              d="M5 5.828h2.7m3.3 0H9.5m-1.8 0h1.8m-1.8 0V5m1.8.828c-.316 1.131-.98 2.201-1.736 3.141M5.836 11a19 19 0 0 0 1.928-2.03m0 0c-.385-.453-.925-1.184-1.08-1.515m1.08 1.514l1.157 1.203M13.5 19l.833-2m4.167 2l-.833-2m-3.334 0L16 13l1.667 4m-3.334 0h3.334"
            />
            <path
              d="M14 10V8c0-2.828 0-4.243-.879-5.121C12.243 2 10.828 2 8 2s-4.243 0-5.121.879C2 3.757 2 5.172 2 8s0 4.243.879 5.121C3.757 14 5.172 14 8 14h2"
            />
            <path
              d="M10 16c0-2.828 0-4.243.879-5.121C11.757 10 13.172 10 16 10s4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22s-4.243 0-5.121-.879C10 20.243 10 18.828 10 16m-6 .5c0 1.404 0 2.107.337 2.611a2 2 0 0 0 .552.552C5.393 20 6.096 20 7.5 20M20 7.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C18.607 4 17.904 4 16.5 4"
            />
          </g>
        </svg>
        <span>{{ currentLanguageName }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="chevron-icon"
          :class="{ 'chevron-up': isOpen }"
          viewBox="0 0 24 24"
        >
          <path d="M18 9s-4.419 6-6 6s-6-6-6-6" />
        </svg>
      </div>

      <!-- Dropdown options -->
      <ul
        v-if="isOpen"
        class="language-options"
      >
        <li
          v-for="lang in supportedLanguages"
          :key="lang"
          :class="{ active: lang === selectedLanguage }"
          @click="changeLanguage(lang)"
        >
          {{ getLanguageName(lang) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.language-selector {
  position: relative;
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: hsl(155, 0%, 96%);
  min-width: 75px;
  max-width: 175px;
}

.language-selector svg {
  width: 20x;
  height: 20px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5;
  color: currentColor;
}

.language-loading {
  display: flex;
  align-items: center;
  background-color: hsl(155, 0%, 12%);
  border: 1px solid hsl(155, 0%, 70%);
  padding: 0.5rem 1rem;
  border-radius: 6px;
}

.loading-icon {
  animation: spin 1s linear infinite;
  margin-right: 10px;
}

.language-dropdown {
  cursor: pointer;
  background-color: hsl(155, 0%, 12%);
  border: 1px solid hsl(155, 0%, 70%);
  border-radius: 6px;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
}

.language-dropdown:hover {
  box-shadow: 0 2px 8px hsla(0, 0%, 0%, 0.1);
}

.selected-language {
  display: flex;
  align-items: center;
}

.globe-icon {
  margin-right: 10px;
}

.chevron-icon {
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.chevron-up {
  transform: rotate(180deg);
}

.language-options {
  position: absolute;
  top: 42px;
  left: 0;
  width: 100%;
  background-color: hsl(155, 0%, 12%);
  border: 1px solid hsl(155, 0%, 70%);
  border-radius: 6px;
  box-shadow: 0 4px 12px hsla(0, 0%, 0%, 0.1);
  z-index: 10;
  max-height: 275px;
  overflow-y: auto;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.language-options li {
  padding: 10px;
  border-bottom: 1px solid hsl(155, 0%, 70%);
  transition: background-color 0.2s ease;
}

.language-options li:hover {
  background-color: hsl(155, 0%, 25%);
}

.language-options li.active {
  background-color: hsl(155, 0%, 50%);
  color: hsl(155, 100%, 43%);
  font-weight: 600;
}

.language-options::-webkit-scrollbar {
  width: 6px;
  -ms-overflow-style: none;
}

.language-options::-webkit-scrollbar-track {
  background: hsl(155, 0%, 8%);
  border-radius: 12px;
}

.language-options::-webkit-scrollbar-thumb {
  background: hsl(155, 0%, 24%);
  border-radius: 6px;
}

.language-options::-webkit-scrollbar-thumb:hover {
  background: hsl(155, 0%, 36%);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(90deg);
  }

  100% {
    transform: rotate(180deg);
  }
}
</style>
