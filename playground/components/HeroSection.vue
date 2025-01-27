<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { GlobeIcon, ArrowRightIcon } from 'lucide-vue-next'
import DemoSection from './DemoSection.vue'

const { activeLanguage } = useGoogleTranslate()

interface SlowFallingItem {
  id: number
  text: string
  style: {
    top: string
    left: string
    fontSize: string
    opacity: number
    animationDuration: string
    animationDelay: string
  }
}

const slowFallingItems = ref<SlowFallingItem[]>([])

const createSlowFallingItem = (id: number): SlowFallingItem => {
  const words = ['Translate', 'Nuxt', 'Global', '世界', 'Vue', 'Hello', 'Word', 'язык', 'भाषा']
  return {
    id,
    text: words[Math.floor(Math.random() * words.length)],
    style: {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      fontSize: `${Math.random() * 8 + 12}px`,
      opacity: Math.random() * 0.5 + 0.3,
      animationDuration: `${Math.random() * 10 + 15}s`,
      animationDelay: `${Math.random() * 5}s`,
    },
  }
}

const generateSlowFallingItems = () => {
  slowFallingItems.value = Array.from({ length: 20 }, (_, i) => createSlowFallingItem(i))
}

let slowFallInterval: number

onMounted(() => {
  generateSlowFallingItems()
  slowFallInterval = window.setInterval(() => {
    slowFallingItems.value = slowFallingItems.value.map((item, index) =>
      Math.random() > 0.9 ? createSlowFallingItem(index) : item,
    )
  }, 5000)
})

onUnmounted(() => {
  clearInterval(slowFallInterval)
})
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="moran-text">
        <span class="moran-letter">
          Translate Without Limits
        </span>
      </h1>
      <p class="subtitle">
        Empower your Nuxt.js applications with seamless, powerful, and customizable translation capabilities. Break
        language barriers and reach a global audience with ease.
      </p>
      <div class="cta-container">
        <a
          href="#demo"
          class="cta-button"
        >
          Try it now
          <ArrowRightIcon class="icon" />
        </a>
        <div class="language-indicator">
          <GlobeIcon class="icon" />
          <span>Current: {{ activeLanguage }}</span>
        </div>
      </div>
      <div
        id="demo"
        class="demo-wrapper"
      >
        <DemoSection />
      </div>
    </div>
    <div class="slow-fall-wrapper">
      <div class="slow-fall-card">
        <div
          v-for="item in slowFallingItems"
          :key="item.id"
          class="slow-falling-item"
          :style="item.style"
        >
          {{ item.text }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 6rem 0 4rem;
  position: relative;
}

.hero-content {
  flex: 1;
  max-width: 600px;
  margin-right: 2rem;
}

.moran-text {
  font-size: 3rem;
  font-weight: 800;
  color: #00DC82;
  margin-bottom: 1.5rem;
}

.moran-letter {
  display: inline-block;
  animation: moranEffect 4s ease-in-out infinite;
}

.subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.cta-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: #00DC82;
  color: #0B0F1A;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #36E4DA;
  transform: translateY(-2px);
}

.cta-button .icon {
  margin-left: 0.5rem;
  width: 18px;
  height: 18px;
}

.language-indicator {
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.language-indicator .icon {
  margin-right: 0.5rem;
  width: 18px;
  height: 18px;
}

.slow-fall-wrapper {
  flex: 1;
  max-width: 300px;
  height: 400px;
  position: relative;
}

.slow-fall-card {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slow-falling-item {
  position: absolute;
  color: #00DC82;
  font-family: monospace;
  white-space: nowrap;
  text-shadow: 0 0 10px rgba(0, 220, 130, 0.3);
  animation: slowFallAndFade linear infinite;
}

.demo-wrapper {
  width: 100%;
  margin-top: 4rem;
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

@keyframes slowFallAndFade {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }

  10%,
  90% {
    opacity: var(--opacity);
  }

  100% {
    transform: translateY(20px);
    opacity: 0;
  }
}

@media (max-width: 1024px) {
  .hero {
    flex-direction: column;
    align-items: center;
    padding: 4rem 0 2rem;
  }

  .hero-content {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 2rem;
  }

  .moran-text {
    font-size: 3rem;
    text-align: center;
  }

  .subtitle {
    text-align: center;
  }

  .cta-container {
    justify-content: center;
  }

  .slow-fall-wrapper {
    max-width: 100%;
    height: 200px;
  }
}

@media (max-width: 640px) {
  .moran-text {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .cta-container {
    flex-direction: column;
    align-items: stretch;
  }

  .cta-button {
    justify-content: center;
  }
}
</style>
