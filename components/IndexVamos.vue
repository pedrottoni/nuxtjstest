<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'IndexVamosComeçar',
  // 	},
  // })
</script>

<template>
  <div
    class="container flex flex-col gap-8 mx-auto pb-24 place-items-center pt-16 px-4 md:flex-row md:justify-between"
  >
    <div class="title">
      <h2>Vamos começar?</h2>
      <h4 class="mt-4 my-8">
        Conheça a plataforma de leilão eletrônico que une as vantagens dos
        leilões tradicionais com a agilidade da negociação eletrônica
      </h4>
      <UButton
        to=""
        label="Comece agora"
        size="xl"
        class="!rounded-3xl blue mt-4 px-7 py-3"
      />
    </div>
    <nuxt-img
      src="https://placehold.co/600x400?text=IMG"
      fit="cover"
      class="md:w-1/2"
    />
  </div>
</template>

<style scoped></style>
