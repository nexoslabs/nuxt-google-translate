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
</template>

<style scoped>
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

@keyframes slowFallAndFade {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }

  10%, 90% {
    opacity: var(--opacity);
  }

  100% {
    transform: translateY(20px);
    opacity: 0;
  }
}
</style>
