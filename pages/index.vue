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
    <IndexDiferenciaisComparativo class="hidden" />
    <IndexDiferenciaisComparativoDark />
    <NossoProcesso />
    <NossoTime />
    <IndexVamos />
    <PerguntasFrequentes />
  </main>
</template>
<style scoped></style>
