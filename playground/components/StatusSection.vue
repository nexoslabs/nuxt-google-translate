<script setup lang="ts">
import { computed, ref } from 'vue'
import { GlobeIcon, CheckCircleIcon, XCircleIcon } from 'lucide-vue-next'
import { useGoogleTranslate } from '#imports'

const { activeLanguage, supportedLanguages, isLoaded } = useGoogleTranslate()

// Compute the number of supported languages with optional chaining
const languageCount = computed(() => supportedLanguages?.length ?? 0)

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
  <section
    class="status-section"
    :class="{ 'status-section--loaded': isLoaded, 'status-section--error': hasError }"
  >
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
  </section>
</template>

<style scoped>
.status-section {
  margin-bottom: 4rem;
  transition: all 0.3s ease;
}

.demo-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.demo-card h2 {
  color: #00DC82;
  font-size: 1.75rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.emoji {
  margin-right: 0.5rem;
  font-size: 2rem;
}

.demo-card p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 1.1rem;
}

.status-card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.status-item {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.status-item:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

.status-item h3 {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
}

.status-item p {
  font-size: 1.5rem;
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
  gap: 1.5rem;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  text-align: center;
  margin: 2rem 0;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(0, 220, 130, 0.1);
  border-top-color: #00DC82;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.error-message {
  color: #ff4757;
  background: rgba(255, 71, 87, 0.1);
}

.icon {
  width: 24px;
  height: 24px;
  margin-right: 0.75rem;
}

.icon--large {
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .status-card {
    grid-template-columns: 1fr;
  }

  .demo-card h2 {
    font-size: 1.5rem;
  }

  .demo-card p {
    font-size: 1rem;
  }

  .status-item p {
    font-size: 1.25rem;
  }
}
</style>
