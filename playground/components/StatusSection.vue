<script setup lang="ts">
import { computed, ref } from 'vue'
import { useGoogleTranslate } from '#imports'

const { activeLanguage, supportedLanguages, isLoaded } = useGoogleTranslate()

// Compute the number of supported languages with optional chaining
const languageCount = computed(() => supportedLanguages.value?.length ?? 0)

// Add error state
const hasError = ref(false)

// Simulate error after 10 seconds if not loaded
if (import.meta.client) {
  setTimeout(() => {
    if (!isLoaded.value) {
      hasError.value = true
    }
  }, 10000)
}
</script>

<template>
  <div
    class="status-section"
    :class="{ 'status-section--loaded': isLoaded, 'status-section--error': hasError }"
  >
    <div class="demo-card">
      <h2>🎬 Try It, It's Better Than Sliced Bread!</h2>
      <p>
        Go ahead, pick a language from our fancy dropdown. Watch as the text transforms like it's in a linguistic
        circus. It's almost as fun as popping bubble wrap!
      </p>
    </div>

    <div
      v-if="isLoaded"
      class="status-card"
    >
      <div class="status-item">
        <h3>
          <GlobeIcon class="icon" />
          Current Language
        </h3>
        <p>{{ activeLanguage }}</p>
      </div>
      <div class="status-item">
        <h3>
          <CheckCircleIcon class="icon" />
          Supported Languages
        </h3>
        <p>{{ languageCount }}</p>
      </div>
      <div class="status-item">
        <h3>Select Language</h3>
        <LanguageSelector />
      </div>
    </div>
    <div
      v-else-if="hasError"
      class="error-message"
      role="alert"
    >
      <XCircleIcon class="icon icon--large" />
      <p>Oops! We couldn't initialize the translator. Please try refreshing the page.</p>
    </div>
    <div
      v-else
      class="loading"
      role="status"
    >
      <div
        class="spinner"
        aria-hidden="true"
      />
      <p>Initializing translator...</p>
    </div>

    <div class="demo-card">
      <h2>🎉 Final Thoughts</h2>
      <p>Remember, with great power comes great responsibility. Use this module wisely, and maybe don't translate your love letters through it. Some things are better left in their original, heartfelt, possibly grammatically incorrect form.</p>
    </div>
  </div>
</template>

<style scoped>
.status-section {
  margin-bottom: 2rem;
  transition: all 0.3s ease;
}

.demo-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.demo-card h2 {
  color: #00DC82;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.demo-card p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.status-card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.status-item {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 1rem;
  transition: all 0.3s ease;
}

.status-item:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

.status-item h3 {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.status-item p {
  font-size: 1.25rem;
  color: #fff;
  margin: 0;
  font-weight: 600;
}

.loading,
.error-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  text-align: center;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(0, 220, 130, 0.1);
  border-top-color: #00DC82;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.error-message {
  color: #ff4757;
  background: rgba(255, 71, 87, 0.1);
}

.icon {
  width: 18px;
  height: 18px;
  margin-right: 0.5rem;
}

.icon--large {
  width: 48px;
  height: 48px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 640px) {
  .status-card {
    grid-template-columns: 1fr;
  }
}
</style>
