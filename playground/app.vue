<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="app">
    <AppHeader />
    <main>
      <HeroSection />
      <FeaturesSection />
      <DocsSection />
      <StatusSection />
    </main>
    <AppFooter />
    <div class="utility">
      <ClientOnly>
        <GoogleTranslate />
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  padding: 0;
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

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
  }
}
</style>
