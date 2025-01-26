<script setup lang="ts">
import { useRuntimeConfig } from '#app'

const config = useRuntimeConfig()
const version = config.public.version || 'alpha'
</script>

<template>
  <header class="notranslate">
    <div class="header-content">
      <div class="left">
        <h1>Nuxt Google Translate</h1>
        <span class="version">{{ version }}</span>
      </div>
      <div class="right">
        <LanguageSelector />
        <a
          href="https://github.com/your-repo"
          target="_blank"
          rel="noopener noreferrer"
          class="github-link"
        >GitHub</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  position: relative;
  z-index: 10;
  padding: 1.5rem;
  background: rgba(11, 15, 26, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left, .right {
  display: flex;
  justify-content: end;
  align-items: center;
}

h1 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #00DC82;
  margin: 0;
}

.version {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  margin-left: 0.5rem;
}

.github-link {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  transition: all 0.2s ease;
  margin-left: 1rem;
}

.github-link:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}
</style>
