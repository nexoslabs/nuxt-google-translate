#### **Configuration**

You need to configure the module in the `nuxt.config.js` file:

```js
export default {
  modules: ["@nuxtjs/google-translate"],
  googleTranslate: {
    // List of supported languages
    supportedLanguages: ["en", "es", "fr", "de", "ja", "zh-CN", "zh-TW"],
    // The default language of your app
    defaultLanguage: "en",
  },
};
```
