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
:global(html),
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
:global(.goog-te-gadget-icon),
:global(.goog-te-float-top),
:global(.goog-te-float-bottom),
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

:global(.VIpgJd-ZVi9od-ORHb) *,
:global(.VIpgJd-ZVi9od-SmfZ) *,
:global(.VIpgJd-ZVi9od-xl07Ob) *,
:global(.VIpgJd-ZVi9od-vH1Gmf) *,
:global(.VIpgJd-ZVi9od-l9xktf) * {
  display: none;
}

:global(.VIpgJd-yAWNEb-hvhgNd),
:global(.VIpgJd-ZVi9od-SmfZ-OEVmcd),
:global(.VIpgJd-ZVi9od-ORHb-bN97Pc),
:global(.VIpgJd-ZVi9od-ORHb-KE6vqe),
:global(.VIpgJd-ZVi9od-ORHb),
:global(.VIpgJd-ZVi9od-vH1Gmf-hgDUwe),
:global(.VIpgJd-ZVi9od-vH1Gmf-KrhPNb),
:global(.VIpgJd-ZVi9od-xl07Ob-ibnC6b),
:global(.VIpgJd-ZVi9od-SmfZ-hSRGPd),
:global(.VIpgJd-ZVi9od-TvD9Pc-hSRGPd),
:global(.VIpgJd-ZVi9od-LgbsSe),
:global(.VIpgJd-ZVi9od-vH1Gmf-ibnC6b),
:global(.VIpgJd-ZVi9od-aZ2wEe-wOHMyf),
:global(.VIpgJd-ZVi9od-l9xktf-yePe5c),
:global(.VIpgJd-ZVi9od-l9xktf-I9GLp),
:global(.VIpgJd-ZVi9od-l9xktf-VgwJlc),
:global(.VIpgJd-ZVi9od-l9xktf-fmcmS),
:global(.VIpgJd-ZVi9od-l9xktf-OEVmcd),
:global(.VIpgJd-ZVi9od-vH1Gmf-ibnC6b-gk6SMd),
:global(.VIpgJd-yAWNEb-VIpgJd-fmcmS-sn54Q),
:global(.VIpgJd-yAWNEb-r4nke),
:global(.VIpgJd-yAWNEb-yAWNEb-Vy2Aqc-pbTTYe),
:global(.VIpgJd-ZVi9od-aZ2wEe-Jt5cK),
:global(.VIpgJd-ZVi9od-aZ2wEe-OiiCO),
:global(.VIpgJd-ZVi9od-aZ2wEe),
:global(.VIpgJd-ZVi9od-aZ2wEe-OiiCO-ti6hGc) {
  display: none;
}
</style>
