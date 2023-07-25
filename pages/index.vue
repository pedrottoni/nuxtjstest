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
    <main>
        <HeroSectionIndex/>
        <ParceirosIndex/>
        <ModeloInovador/>
        <AboutTemplate/>
        <WalkThrough/>
    </main>
</template>
<style scoped></style>
