# Nuxt Google Translate

[![npm](https://img.shields.io/npm/v/nuxt-google-translate)](https://www.npmjs.com/package/nuxt-google-translate)
[![npm](https://img.shields.io/npm/dt/nuxt-google-translate)](https://www.npmjs.com/package/nuxt-google-translate)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/your-username/nuxt-google-translate/CI)]()
[![GitHub](https://img.shields.io/github/license/your-username/nuxt-google-translate)](./LICENSE)

Easily integrate Google Translate into your Nuxt 3 application with this powerful and customizable module.

## Features

- 🌐 Seamless integration with Google Translate
- 🚀 Easy to set up and use
- 🎨 Customizable styling
- 📱 Responsive design
- 🔧 Configurable default language and supported languages

## Quick Setup

1. Add `nuxt-google-translate` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-google-translate

# Using yarn
yarn add --dev nuxt-google-translate

# Using npm
npm install --save-dev nuxt-google-translate
```

2. Add `nuxt-google-translate` to the `modules` section of `nuxt.config.ts`


```javascript
export default defineNuxtConfig({
  modules: [
    'nuxt-google-translate'
  ]
})
```

That's it! You can now use Nuxt Google Translate in your Nuxt app ✨

## Usage

### Basic Usage

Add the `<GoogleTranslate />` component to your layout or specific pages:

```vue
<template>
  <div>
    <GoogleTranslate />
    <!-- Your page content -->
  </div>
</template>
```

### Configuration

You can configure the module in your `nuxt.config.ts`:

```javascript
export default defineNuxtConfig({
  modules: ['nuxt-google-translate'],
  googleTranslate: {
    defaultLanguage: 'en',
    supportedLanguages: ['en', 'fr', 'es', 'de', 'ja']
  }
})
```

### Using the Composable

You can use the `useGoogleTranslate` composable in your components to programmatically change the language or access the current language:

```vue
<script setup>
import { useGoogleTranslate } from '#imports'

const { activeLanguage, setLanguage, supportedLanguages } = useGoogleTranslate()

// Change the language
const changeLanguage = (lang) => {
  setLanguage(lang)
}
</script>

<template>
  <div>
    <p>Current language: {{ activeLanguage }}</p>
    <select @change="changeLanguage($event.target.value)">
      <option v-for="lang in supportedLanguages" :key="lang" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>
```

## Development

```shellscript
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b my-feature-branch`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-feature-branch`
5. Submit a pull request


Please make sure to update tests as appropriate and adhere to the existing coding style.

## Troubleshooting

If you encounter any issues while using this module, please check the following:

1. Ensure you're using the latest version of the module
2. Check that you've correctly added the module to your `nuxt.config.ts`
3. Verify that the `<GoogleTranslate />` component is properly placed in your layout or pages
4. Check the browser console for any error messages


If you're still having problems, please [open an issue](https://github.com/your-username/nuxt-google-translate/issues/new) with a detailed description of the problem, your Nuxt version, and any relevant code snippets.

## License

[MIT License](./LICENSE)

## Questions or Feedback?

If you have any questions, suggestions, or feedback, please don't hesitate to [open an issue](https://github.com/your-username/nuxt-google-translate/issues/new) or [submit a pull request](https://github.com/your-username/nuxt-google-translate/pulls). We appreciate your input and want to make this module as useful as possible for the Nuxt community. 🚀
