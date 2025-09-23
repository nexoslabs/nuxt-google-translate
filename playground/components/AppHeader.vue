<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { GithubIcon, MenuIcon, XIcon } from 'lucide-vue-next'
import { useRuntimeConfig } from '#app'

const config = useRuntimeConfig()
const version = config.public.version || 'beta'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const updateScrollState = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollState)
  updateScrollState()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollState)
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <header
    class="notranslate"
    :class="{ 'scrolled': isScrolled, 'mobile-menu-open': isMobileMenuOpen }"
  >
    <div class="header-content">
      <div class="left">
        <h1>
          <svg
            class="logo"
            viewBox="0 0 100 100"
            width="40"
            height="40"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="#00DC82"
            />
            <text
              x="50"
              y="65"
              font-size="50"
              text-anchor="middle"
              fill="#fff"
            >N</text>
          </svg>
          <span class="visually-hidden">Nuxt Google Translate</span>
        </h1>
        <span
          class="version"
          :title="`Version ${version}`"
        >{{ version }}</span>
      </div>
      <nav class="right">
        <LanguageSelector />
        <a
          href="https://github.com/nexoslabs/nuxt-google-translate"
          target="_blank"
          rel="noopener noreferrer"
          class="github-link"
          aria-label="View on GitHub"
        >
          <GithubIcon class="github-icon" />
          <span class="github-text">GitHub</span>
        </a>
        <button
          class="mobile-menu-toggle"
          aria-label="Toggle mobile menu"
          @click="toggleMobileMenu"
        >
          <MenuIcon v-if="!isMobileMenuOpen" />
          <XIcon v-else />
        </button>
      </nav>
    </div>
    <div
      class="mobile-menu"
      :class="{ open: isMobileMenuOpen }"
    >
      <LanguageSelector />
      <a
        href="https://github.com/nexoslabs/nuxt-google-translate"
        target="_blank"
        rel="noopener noreferrer"
        class="github-link"
      >
        <GithubIcon class="github-icon" />
        GitHub
      </a>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 0rem 1rem;
  background: hsla(224, 41%, 7%, 0.8);
  backdrop-filter: blur(8px);
  border-bottom: 2px solid hsla(224, 0%, 100%, 0.1);
  transition: all 0.3s ease;
}

header.scrolled {
  background: hsla(224, 41%, 7%, 0.95);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left,
.right {
  display: flex;
  align-items: center;
}

.visually-hidden{
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
}

.logo {
  display: none;
}

header:hover .logo {
  transform: rotate(360deg);
}

.version {
  align-self: center;
  font-size: 0.75rem;
  color: hsla(224, 0%, 100%, 0.6);
  margin-left: 0.5rem;
  padding: 0.2rem 0.5rem;
  background: hsla(224, 0%, 100%, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.version:hover {
  background: hsla(224, 0%, 100%, 0.2);
}

.github-link {
  color: hsl(224, 0%, 100%);
  text-decoration: none;
  padding: 0.5rem 1rem;
  background: hsla(224, 0%, 12%, 0.95);
  border: 1px solid hsla(224, 0%, 50%, 0.7);
  border-radius: 2px;
  transition: all 0.2s ease;
  margin-left: 1rem;
  display: flex;
  align-items: center;
}

.github-link:hover {
  background: hsla(224, 0%, 100%, 0.1);
  border-color: hsla(224, 0%, 100%, 0.3);
}

.github-icon {
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
}

.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-menu {
  display: none;
}

@media (max-width: 768px) {
  .github-text {
    display: none;
  }

  .visually-hidden {
    display: none;
  }

  .github-link {
    padding: 0.5rem;
  }

  .github-icon {
    margin-right: 0;
  }

  .mobile-menu-toggle {
    display: block;
    margin-left: 1rem;
  }

  .logo {
    display: block;
    width: 40px;
    height: 40px;
    transition: transform 0.3s ease;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background: hsla(224, 41%, 7%, 0.95);
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    transform: translateY(-150%);
    opacity: 0;
    transition: all 0.3s ease;
  }

  .mobile-menu.open {
    transform: translateY(0);
    opacity: 1;
  }

  .mobile-menu .github-link {
    margin: 1rem 0 0 0;
  }

  .mobile-menu-open {
    background: hsla(224, 41%, 7%, 0.95);
  }
}
</style>
