<template>
  <div id="google_translate_element" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GoogleTranslate',
})
</script>

<style scoped>
/* Styling for the translate element */
#google_translate_element {
  margin: 20px 0;
  text-align: center;
}

/* Hide the Google Translate banner */
:global(.goog-te-banner-frame.skiptranslate) {
  display: none !important;
}

:global(body) {
  top: 0 !important;
}
</style>
