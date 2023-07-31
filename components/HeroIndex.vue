<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'HeroSection',
  // 	},
  // })
</script>
<template>
    <section class="flex flex-col pt-40 px-4">
        <div class="text-center">
            <h1 class="leading-tight mb-2 text-blue-950">
        Um novo <br class="block md:hidden"/>
        tipo de leilão </h1>
            <h4 class="mt-4 mb-6 text-indigo-900">
        Com regras de negocio modernas e diferenciadas.<br class="hidden sm:block"/>
        Criamos uma solução revolucionaria. </h4>
            <UButton to="contact" size="xl" class="!rounded-3xl blue mt-4 px-7 py-3" label="Comece agora">
</UButton>
        </div>
        <div data-empty-placeholder class="-bottom-24 bg-slate-700 container flex h-96 place-self-center px-4 relative rounded-3xl w-full"></div>
    </section>
</template>
<style scoped>
  section {
    h4 {
      font-size: 1.5rem;
      line-height: 2.4rem;
    }
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
