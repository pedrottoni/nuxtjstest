<script setup lang="ts">
  // definePageMeta({
  //   name: 'home',
  //   title: 'Home',
  //   navOrder: 1,
  // })

  useHead({
    title: () => 'Home',
  })
</script>
<template>
  <main class="overflow-hidden">
    <HeroIndex />
    <IndexParceiros />
    <IndexModeloInovador />
    <OQueFazemos />
    <IndexDiferenciaisComparativoDark />
    <NossoProcesso />
    <NossoTime />
    <IndexVamosDark />
    <PerguntasFrequentes />
  </main>
</template>
<style scoped></style>
