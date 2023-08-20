<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'ParceirosIndex',
  // 	},
  // })
</script>
<template>
    <section class="container flex mx-auto place-content-center relative w-full z-10 md:px-4">
        <SVGHeroIndex class="absolute -top-20 hidden"/>
        <nuxt-img src="/PNGHeroIndex.png" width="800" class="w-8/12 hidden"/>
        <nuxt-img src="/indexBgDark.png" class="indexbglight hidden"/>
        <nuxt-img src="/indexBgLight.png" class="indexbgdark"/>
        <div class="flex flex-wrap gap-8 mt-40 mx-auto place-content-evenly place-items-start hidden">
            <nuxt-img src="/logo1.png"/>
            <nuxt-img src="/logo2.png"/>
            <nuxt-img src="/logo3.png"/>
            <nuxt-img src="/logo4.png"/>
        </div>
    </section>
</template>
<style scoped>
  .indexbglight {
    width: 120vw;
    max-width: 1600px;
    margin-left: 2rem;
    margin-bottom: -4rem;
  }
  .indexbgdark {
    width: 90vw;
    max-width: 1200px;
  }
</style>
