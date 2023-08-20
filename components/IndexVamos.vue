<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'IndexVamosComeçar',
  // 	},
  // })
</script>
<template>
  <section class="py-32 bg-slate-100">
    <div
      class="container flex flex-col gap-8 mx-auto place-items-center px-4 relative md:flex-row md:place-items-center"
    >
      <div class="md:w-1/2 title">
        <h2>Vamos começar?</h2>
        <h4 class="lg:max-w-2xl mt-4 my-8">
          Conheça a plataforma de leilão eletrônico que une as vantagens dos
          leilões tradicionais com a agilidade da negociação eletrônica.
        </h4>
        <UButton
          to=""
          label="Comece agora"
          size="xl"
          class="rounded-xl mt-4 px-7 py-3"
          color="tertiary"
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 591 814"
        class="-right-28 -z-10 absolute h-full"
      >
        <path
          fill="#7777F8"
          d="M591 411.52 199.09 0H0l385.81 414.01L7.05 814h202.1L591 411.52Z"
          opacity=".08"
        />
      </svg>
      <NuxtImg src="vamos.png" class="lg:w-7/12" />
    </div>
  </section>
</template>
<style scoped></style>
