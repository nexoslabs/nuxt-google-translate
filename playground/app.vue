<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const { activeLanguage, supportedLanguages, isLoaded } = useGoogleTranslate()

// Moran text effect
const moranText = 'Break Language Barriers'
const moranLetters = ref(moranText.split('').map((letter, index) => ({
  letter,
  style: {
    animationDelay: `${index * 0.1}s`,
  },
})))
</script>

<template>
  <div class="app">
    <AppHeader />
    <main>
      <section class="hero">
        <div class="hero-content">
          <h2 class="moran-text">
            <span
              v-for="{ letter, style } in moranLetters"
              :key="letter + style.animationDelay"
              :style="style"
              class="moran-letter"
            >
              {{ letter }}
            </span>
          </h2>
          <p class="subtitle">
            Seamless translation integration for your Nuxt applications
          </p>
          <div
            v-if="isLoaded"
            class="status-card"
          >
            <div class="status-item">
              <h3>Current Language</h3>
              <p>{{ activeLanguage }}</p>
            </div>
            <div class="status-item">
              <h3>Available Languages</h3>
              <p>{{ supportedLanguages.length }}</p>
            </div>
          </div>
          <div
            v-else
            class="loading"
          >
            <div class="spinner" />
            <p>Initializing translator...</p>
          </div>
        </div>
        <div class="slow-fall-wrapper">
          <SlowFallCard class="slow-fall-card" />
        </div>
      </section>
      <section class="demo-section">
        <div class="demo-card">
          <h2>Try It Out</h2>
          <p>
            Welcome to our multilingual showcase! Select a language from the dropdown below
            to see this text transform instantly. Experience the power of seamless translation
            integration with Nuxt.js.
          </p>
          <LanguageSelector />
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  background: #0B0F1A;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: relative;
  overflow: hidden;
}

main {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  position: relative;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.moran-text {
  font-size: 3rem;
  font-weight: 700;
  color: #00DC82;
  margin-bottom: 1rem;
  display: inline-block;
}

.moran-letter {
  display: inline-block;
  animation: moranEffect 2s ease-in-out infinite;
}

@keyframes moranEffect {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
}

.slow-fall-wrapper {
  flex: 1;
  max-width: 300px;
  height: 400px;
  position: relative;
}

.slow-fall-card {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.status-card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.status-item h3 {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
}

.status-item p {
  font-size: 1.25rem;
  color: #fff;
  margin: 0;
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(0, 220, 130, 0.1);
  border-top-color: #00DC82;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.demo-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.demo-card h2 {
  color: #00DC82;
  margin-bottom: 1rem;
}

.demo-card p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
  }

  .moran-text {
    font-size: 2rem;
  }

  .slow-fall-wrapper {
    display: none;
  }
}
</style>
