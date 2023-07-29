<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'HeroSection',
  // 	},
  // })
</script>
<template>
  <section class="flex flex-col pt-32 px-4">
    <div class="text-center">
      <h1 class="leading-tight mb-2 text-blue-950">Um novo tipo de leilão</h1>
      <h4 class="mb-6 text-indigo-900 lg:text-2xl lg:text-gray-500">
        O melhor dos leilões tradicionais com a agilidade da negociação
        eletrônica
      </h4>
      <UButton
        to="contact"
        size="xl"
        class="!rounded-3xl blue mt-4 px-7 py-3"
        label="Comece agora"
      >
      </UButton>
    </div>
    <div
      data-empty-placeholder
      class="-bottom-24 bg-slate-700 container flex h-96 place-self-center px-4 relative rounded-3xl w-full"
    ></div>
  </section>
</template>
<style scoped>
  section {
    background-color: hsla(206, 100%, 90%, 1);
    background-image: radial-gradient(
        at 100% 61%,
        hsla(206, 100%, 91%, 1) 0px,
        transparent 50%
      ),
      radial-gradient(at 3% 97%, hsla(240, 100%, 91%, 1) 0px, transparent 50%),
      radial-gradient(at 27% 14%, hsla(189, 100%, 91%, 1) 0px, transparent 50%),
      radial-gradient(at 58% 97%, hsla(266, 100%, 91%, 1) 0px, transparent 50%);
  }
</style>
