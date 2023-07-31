<script lang="ts" setup>
  import { Link } from '.nuxt/components'

  const props = defineProps({
    title: {
      type: String,
      default: 'Título',
    },
    subtitle: {
      type: String,
      default: 'subtítulo',
    },
    img: {
      type: String,
      default: 'https://source.unsplash.com/random',
    },
    buttom: {
      type: Boolean,
      default: false,
    },
  })
</script>
<template>
    <section class="bg-slate-100">
        <div class="container flex flex-col gap-8 mx-auto pb-24 place-items-center pt-36 px-4 md:flex-row md:justify-between">
            <div class="title">
                <h1>{{ props.title }}</h1>
                <h4 class="mt-4 my-8">{{ props.subtitle }}</h4>
                <UButton v-if="props.buttom" to="" label="Comece agora" size="xl" class="!rounded-3xl blue mt-4 px-7 py-3"/>
            </div>
            <nuxt-img :src="props.img" fit="cover" class="md:w-1/2"/>
        </div>
    </section>
</template>
<style scoped>
  h1 {
    @apply text-blue-500;
    font-size: 3rem;
    line-height: 3.4rem;
  }
  .title {
    max-width: 26rem;
  }
</style>
