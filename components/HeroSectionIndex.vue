<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'HeroSection',
  // 	},
  // })
</script>
<template>
    <section>
        <div>
            <div class="pb-36 pt-2 px-6 relative rounded-3xl md:pb-48 lg:pb-72 lg:px-12">
                <div class="-mx-4 flex flex-wrap items-center justify-center lg:space-y-0 mt-24 space-y-6">
                    <div class="px-4 text-center w-full md:w-8/12 xl:w-6/12">
                        <h1 class="leading-tight mb-2 text-blue-950">
              Um novo tipo de leilão </h1>
                        <h5 class="mb-6 text-indigo-900 lg:text-gray-500">
              O melhor dos leilões tradicionais com a agilidade da negociação
              eletrônica </h5>
                        <UButton to="https://vuedesigner.com" size="xl" target="_blank" class="!rounded-3xl blue mt-4 px-7 py-3" label="Comece agora">
</UButton>
                    </div>
                </div>
            </div>
        </div>
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
