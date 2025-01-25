<!-- - **Title:** `nuxt-google-translate`
- **Description:**  
  A simple Nuxt module that integrates the Google Translate widget into your Nuxt.js application, allowing seamless multilingual support without requiring an API key.

- **Tags:**  
  `nuxt`, `nuxt-module`, `google-translate`, `multilingual`, `translation`, `nuxt-widget`, `language-switcher` -->
  
# nuxt-google-translate

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A simple Nuxt module to integrate the Google Translate widget into your Nuxt.js application. Enable seamless multilingual support on your website without the need for a Google API key.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/your-org/my-module?file=playground%2Fapp.vue) 
- [📖 &nbsp;Documentation](https://example.com)

---

## Features

- Easy integration of the Google Translate widget
- Automatic language detection and translation
- Supports a wide range of languages
- Lightweight and easy to customize
- No API key or server setup required

---

## Quick Setup

Install the module to your Nuxt application with one command:


```bash
npm install nuxt-google-translate
# or
yarn add nuxt-google-translate
```

<!-- ```bash
npx nuxi module add google-translate
``` -->

That's it! You can now use My Module in your Nuxt app ✨

---

## Usage

1. Add the module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-google-translate'],
});
```

2. (Optional) Configure the default language in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-google-translate'],
  googleTranslate: {
    defaultLanguage: 'en', // Set your default site language (e.g., 'en', 'fr', 'es')
  },
});
```

3. Use the widget in your application by including the `<GoogleTranslateWidget>` component in your layout or specific pages:

```vue
<template>
  <div>
    <GoogleTranslateWidget />
  </div>
</template>
```

---

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
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

</details>

---

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the module.

---

### Questions or Feedback?

If you have any questions or suggestions, please open an issue or submit a pull request. 🚀


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/m/nuxt-google-translate.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-google-translate

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-google-translate.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/nuxt-google-translate

[license-src]: https://img.shields.io/npm/l/nuxt-google-translate.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-google-translate

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
