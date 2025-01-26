<script setup lang="ts">
const installationSteps = [
  { step: 1, description: `npm install nuxt-google-translate (or yarn, if that's your jam)` },
  { step: 2, description: `Sprinkle some config magic in your nuxt.config.js` },
  { step: 3, description: `Voilà! Your app is now a language virtuoso!` },
  { step: 4, description: ` Wave your wand (or just restart your dev server)` },
]

const codeSnippets = {
  install: 'npm install nuxt-google-translate', // \n# or\nyarn add nuxt-google-translate
  config: `// nuxt.config.js
export default {
  modules: [
    'nuxt-google-translate'
  ],
  googleTranslate: {
    defaultLanguage: 'en',
    supportedLanguages: ['en', 'es', 'fr', 'de', 'zh', 'ja']
  }
}`,
  usage: `<template>
  <div>
    <!--[ Init Google Translate ]-->
    <GoogleTranslate />
    <!--[ Add Language Dropdown Menu ]-->
    <LanguageSelector />
  </div>
<template>

<script type="ts" setup>
// Test
</script&gt;`,
}
</script>

<template>
  <section class="demo-section">
    <div class="installation-guide">
      <h2>🛠️ Installation (Don't Worry, It's Not Rocket Science)</h2>
      <ol>
        <li
          v-for="step in installationSteps"
          :key="step.step"
        >
          <strong>Step {{ step.step }}:</strong> {{ step.description }}
          <pre v-if="step.step === 1"><code class="notranslate">{{ codeSnippets.install }}</code></pre>
          <pre v-if="step.step === 2"><code class="notranslate">{{ codeSnippets.config }}</code></pre>
          <pre v-if="step.step === 3"><code class="notranslate">{{ codeSnippets.usage }}</code></pre>
          <pre v-if="step.step === 4"><code class="notranslate">...</code></pre>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.demo-section {
  margin: 4rem 0;
  position: relative;
}

.installation-guide {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
}

.installation-guide h2 {
  color: #00DC82;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.installation-guide ol {
  list-style-type: none;
  padding: 0;
}

.installation-guide li {
  margin-bottom: 1.5rem;
}

.installation-guide strong {
  color: #00DC82;
}

pre {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 1rem;
  overflow-x: auto;
  margin-top: 0.5rem;
}

code {
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: #e0e0e0;
}

.mt-4 {
  margin-top: 1rem;
}
</style>
