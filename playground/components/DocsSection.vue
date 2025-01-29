<script setup lang="ts">
import { ref } from 'vue'
import { CopyIcon, CheckIcon } from 'lucide-vue-next'

const installationSteps = [
  { step: 1, description: 'Install the package', code: 'install' },
  { step: 2, description: 'Configure your Nuxt app', code: 'config' },
  { step: 3, description: 'Use the components', code: 'usage' },
  { step: 4, description: 'Restart your dev server', code: null },
]

const codeSnippets = {
  install: `npm install nuxt-google-translate\n# or\nyarn add nuxt-google-translate`,
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
    <!-- Initialize Google Translate -->
    <GoogleTranslate />
    <!-- Add Language Dropdown Menu -->
    <LanguageSelector />
  </div>
</template>

<script setup lang="ts">
import { useGoogleTranslate } from '#imports'

const { activeLanguage, setLanguage } = useGoogleTranslate()
</script&gt;
`,
}

const copiedStates = ref({
  install: false,
  config: false,
  usage: false,
})

const copyToClipboard = async (code: keyof typeof codeSnippets) => {
  try {
    await navigator.clipboard.writeText(codeSnippets[code])
    copiedStates.value[code] = true
    setTimeout(() => {
      copiedStates.value[code] = false
    }, 2000)
  }
  catch (err) {
    console.error('Failed to copy text: ', err)
  }
}
</script>

<template>
  <section
    class="demo-section"
    aria-labelledby="installation-guide"
  >
    <div class="installation-guide">
      <h2 id="installation-guide">
        🛠️ Installation (Don't Worry, It's Not Rocket Science)
      </h2>
      <ol>
        <li
          v-for="step in installationSteps"
          :key="step.step"
          class="installation-step"
        >
          <h3>Step {{ step.step }}: {{ step.description }}</h3>
          <div
            v-if="step.code"
            class="code-block"
          >
            <pre><code>{{ codeSnippets[step.code as keyof typeof codeSnippets] }}</code></pre>
            <button
              class="copy-button"
              :aria-label="copiedStates[step.code as keyof typeof copiedStates] ? 'Copied' : 'Copy to clipboard'"
              @click="copyToClipboard(step.code as 'install' | 'config' | 'usage')"
            >
              <CopyIcon v-if="!copiedStates[step.code as keyof typeof copiedStates]" />
              <CheckIcon v-else />
            </button>
          </div>
          <div
            v-else
            class="emoji-block"
          >
            <span
              class="emoji"
              aria-hidden="true"
            >🎉</span>
            <span>You're all set!</span>
          </div>
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
  background: hsla(0, 0%, 100%, 0.05);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.1);
}

.installation-guide h2 {
  color: #00DC82;
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
}

.installation-guide ol {
  list-style-type: none;
  padding: 0;
}

.installation-step {
  margin-bottom: 2rem;
}

.installation-step h3 {
  color: #00DC82;
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
}

.code-block {
  font-family: 'Courier New', Courier, monospace;
  position: relative;
  background: hsla(0, 0%, 0%, 0.2);
  border: 1px solid hsla(0, 0%, 0%, 0.25);
  border-radius: 0.4rem;
  padding: 0.2rem;
  margin-top: 0.5rem;
}

pre {
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: hsla(0, 0%, 0%, 0.2);
  border: 1px solid hsla(0, 0%, 0%, 0.25);
  overflow-x: auto;
  margin: 0;
}

code {
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: #e0e0e0;
}

.copy-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: hsla(0, 0%, 100%, 0.1);
  border: none;
  border-radius: 4px;
  padding: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.copy-button:hover {
  background: hsla(0, 0%, 100%, 0.2);
}

.copy-button svg {
  width: 1rem;
  height: 1rem;
  color: #00DC82;
}

.emoji-block {
  display: flex;
  align-items: center;
  background: hsla(155, 100%, 43%, 0.1);
  border-radius: 6px;
  padding: 1rem;
  margin-top: 0.5rem;
}

.emoji {
  font-size: 1.5rem;
  margin-right: 0.5rem;
}

@media (max-width: 640px) {
  .installation-guide {
    padding: 1.5rem;
  }

  .installation-guide h2 {
    font-size: 1.5rem;
  }

  .installation-step h3 {
    font-size: 1.1rem;
  }

  code {
    font-size: 0.8rem;
  }
}
</style>
