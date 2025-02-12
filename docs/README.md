### Nuxt Google Translate 

[Documentation](https://nexoscreation.tech/docs/resources/google-translate/)

#### Installation

Install the module via npm:

```bash
npm install nuxt-google-translate
```

#### Configuration

You need to configure the module in the `nuxt.config.js` file:

```js
export default {
  modules: ["@nuxtjs/google-translate"],
  googleTranslate: {
    // The default language of your app
    defaultLanguage: "en",
    // List of supported languages
    supportedLanguages: ["en", "es", "fr", "de", "ja", "zh-CN", "zh-TW"],
  },
};
```

### Components

Add the `<GoogleTranslate />` component to your app:

```vue
<template>
  <div>
    <!--[ Init Google Translate ]-->
    <GoogleTranslate />
  </div>
</template>
```

Add the `<LanguageSelector />` component to your header or specific elements:

```vue
<template>
  <div>
    <!--[ Add Language Dropdown Menu ]-->
    <LanguageSelector />
  </div>
</template>
```

#### Supported Languages

This module supports **over 100 languages**, and here is the list of languages along with their ISO-639 codes (for easier integration):

   - **Abkhaz**: ab
   - **Acehnese**: ace
   - **Acholi**: ach
   - **Afrikaans**: af
   - **Albanian**: sq
   - **Alur**: alz
   - **Amharic**: am
   - **Arabic**: ar
   - **Armenian**: hy
   - **Assamese**: as
   - **Awadhi**: awa
   - **Aymara**: ay
   - **Azerbaijani**: az
   - **Balinese**: ban
   - **Bambara**: bm
   - **Bashkir**: ba
   - **Basque**: eu
   - **Batak Karo**: btx
   - **Batak Simalungun**: bts
   - **Batak Toba**: bbc
   - **Belarusian**: be
   - **Bemba**: bem
   - **Bengali**: bn
   - **Betawi**: bew
   - **Bhojpuri**: bho
   - **Bikol**: bik
   - **Bosnian**: bs
   - **Breton**: br
   - **Bulgarian**: bg
   - **Buryat**: bua
   - **Cantonese**: yue
   - **Catalan**: ca
   - **Cebuano**: ceb
   - **Chichewa (Nyanja)**: ny
   - **Chinese (Simplified)**: zh-CN or zh
   - **Chinese (Traditional)**: zh-TW
   - **Chuvash**: cv
   - **Corsican**: co
   - **Crimean Tatar**: crh
   - **Croatian**: hr
   - **Czech**: cs
   - **Danish**: da
   - **Dinka**: din
   - **Divehi**: dv
   - **Dogri**: doi
   - **Dombe**: dov
   - **Dutch**: nl
   - **Dzongkha**: dz
   - **English**: en
   - **Esperanto**: eo
   - **Estonian**: et
   - **Ewe**: ee
   - **Fijian**: fj
   - **Filipino (Tagalog)**: fil or tl
   - **Finnish**: fi
   - **French**: fr
   - **French (French)**: fr-FR
   - **French (Canadian)**: fr-CA
   - **Frisian**: fy
   - **Fulfulde**: ff
   - **Ga**: gaa
   - **Galician**: gl
   - **Ganda (Luganda)**: lg
   - **Georgian**: ka
   - **German**: de
   - **Greek**: el
   - **Guarani**: gn
   - **Gujarati**: gu
   - **Haitian Creole**: ht
   - **Hakha Chin**: cnh
   - **Hausa**: ha
   - **Hawaiian**: haw
   - **Hebrew**: iw or he
   - **Hiligaynon**: hil
   - **Hindi**: hi
   - **Hmong**: hmn
   - **Hungarian**: hu
   - **Icelandic**: is
   - **Igbo**: ig
   - **Iloko**: ilo
   - **Indonesian**: id
   - **Irish**: ga
   - **Italian**: it
   - **Japanese**: ja
   - **Javanese**: jw or jv
   - **Kannada**: kn
   - **Kapampangan**: pam
   - **Kazakh**: kk
   - **Khmer**: km
   - **Kinyarwanda**: rw
   - **Korean**: ko
   - **Kurdish (Kurmanji)**: ku
   - **Kurdish (Sorani)**: ckb
   - **Latvian**: lv
   - **Lithuanian**: lt
   - **Macedonian**: mk
   - **Malay**: ms
   - **Malayalam**: ml
   - **Maltese**: mt
   - **Marathi**: mr
   - **Mongolian**: mn
   - **Nepali**: ne
   - **Norwegian**: no
   - **Persian**: fa
   - **Polish**: pl
   - **Portuguese**: pt
   - **Punjabi**: pa
   - **Romanian**: ro
   - **Russian**: ru
   - **Serbian**: sr
   - **Spanish**: es
   - **Swahili**: sw
   - **Swedish**: sv
   - **Tamil**: ta
   - **Telugu**: te
   - **Turkish**: tr
   - **Ukrainian**: uk
   - **Urdu**: ur
   - **Vietnamese**: vi
   - **Welsh**: cy
   - **Yoruba**: yo
   - **Zulu**: zu

This list of supported languages can be used as part of the `supportedLanguages` array in your `nuxt.config.js` file for enabling Google Translate support across your application.
