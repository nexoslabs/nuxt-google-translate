<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer>
    <div class="footer-content">
      <p>&copy; {{ currentYear }} Nexos Creation</p>
      <nav>
        <a href="/docs">Documentation</a>
        <a href="/github">GitHub</a>
        <a href="/support">Support</a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: relative;
  z-index: 10;
  background: rgba(11, 15, 26, 0.8);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  gap: 2rem;
}

a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: #00DC82;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  nav {
    justify-content: center;
  }
}
</style>
