<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

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
  const words = ['Translate', 'Nuxt', 'Global', '世界', 'Mundo', 'язык', 'भाषा']
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
      <h2 class="moran-text">
        <span class="moran-letter">
          Translate Without Limits
        </span>
      </h2>
      <p class="subtitle">
        Empower your Nuxt.js applications with seamless, powerful, and customizable translation capabilities. Break
        language barriers and reach a global audience with ease.
      </p>
      <DemoSection />
    </div>
    <div class="slow-fall-wrapper">
      <div class="slow-fall-card">
        <div v-for="item in slowFallingItems" :key="item.id" class="slow-falling-item" :style="item.style">
          {{ item.text }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 4rem 0;
  position: relative;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.moran-text {
  font-size: 3rem;
  font-weight: 700;
  color: #36E4DA;
  margin-bottom: 1.2rem;
}

.moran-letter {
  display: inline-block;
  animation: moranEffect 4s ease-in-out infinite;
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

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
  }

  .hero-content {
    max-width: 100%;
  }

  .moran-text {
    font-size: 2rem;
  }

  .slow-fall-wrapper {
    display: none;
  }
}
</style>
