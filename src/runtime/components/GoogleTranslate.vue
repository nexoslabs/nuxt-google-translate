<template>
  <!--
    This div will be replaced by the Google Translate widget
    The id must match the one specified in the plugin
  -->
  <div id="nuxt_translate_element" />
</template>

<script lang="ts" setup>
// This component doesn't require any additional setup logic
// The Google Translate widget will be injected into the div by the plugin
</script>

<style scoped>
/* Initially hide the translate element until loaded */
#nuxt_translate_element {
  visibility: hidden;
  width: 0;
  height: 0;
  overflow: hidden;
}

/* Global Styles for Google Translate */
:global(body) {
  margin: 0 !important;
  top: 0 !important;
}

/* Once loaded, make it visible but keep it non-intrusive */
:global(.goog-te-gadget) {
  display: inline-block !important;
  opacity: 0;
  /* Hide it while still working */
  pointer-events: none;
}

/* Hide unnecessary Google Translate UI elements */
:global(.goog-te-banner-frame),
:global(.goog-te-gadget-simple),
:global(.goog-gt-tt),
:global(.goog-te-combo),
:global(.skiptranslate),
:global(.skiptranslate > *),
:global(.VIpgJd-yAWNEb-L7lbkb),
:global(.VIpgJd-ZVi9od-vH1Gmf),
:global(.VIpgJd-ZVi9od-xl07Ob-lTBxed),
:global(.VIpgJd-ZVi9od-xl07Ob-OEVmcd),
:global(.VIpgJd-ZVi9od-l4eHX-hSRGPd),
:global(.VIpgJd-ZVi9od-ORHb-OEVmcd),
:global(.VIpgJd-ZVi9od-aZ2wEe-wOHMyf),
:global(.VIpgJd-ZVi9od-aZ2wEe-wOHMyf-ti6hGc),
:global(iframe.VIpgJd-ZVi9od-ORHb-OEVmcd) {
  display: none !important;
}
</style>
