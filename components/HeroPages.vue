<script lang="ts" setup>
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
    estilo: {
      type: String,
      default: 'relative',
    },
  })
</script>
<template>
    <section class="bg-slate-100 relative overflow-hidden">
        <div class="container flex flex-col gap-8 mx-auto pb-24 place-items-center pt-36 px-4 md:flex-row md:justify-between h-full">
            <div class="flex flex-col place-items-center title md:place-items-start">
                <h1 class="text-center md:text-left">{{ props.title }}</h1>
                <h4 class="mt-4 my-8 text-center md:text-left">{{ props.subtitle }}</h4>
                <UButton v-if="props.buttom" to="" label="Comece agora" size="xl" class="rounded-xl mt-4 px-7 py-3" color="tertiary"/>
            </div>
            <nuxt-img :src="props.img" fit="cover" :class="props.estilo"/>
        </div>
    </section>
</template>
<style scoped>
  section {
    height: clamp(40rem, 80vh, 80vh);
    &::before {
      content: url(arrow.svg);
      width: clamp(29rem, 60vh, 60vh);
      position: absolute;
      display: block;
      left: 56%;
      z-index: 0;
      @media screen and (max-width: 1023px) {
        left: 59vw;
      }
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
  h1 {
    font-size: clamp(2.5rem, 6vw, 3.8rem);
    line-height: clamp(2.8rem, 7vw, 3.8rem);
  }
  .title {
    max-width: clamp(22rem, 54vw, 26rem);
    @media screen and (min-width: 768px) {
      width: 26rem;
    }
  }
  .aboutimg {
    left: 46vw;
    bottom: -0.3rem;
    height: 85%;
    width: auto;
    @media screen and (max-width: 1440px) {
      left: 43vw;
    }
    @media screen and (max-width: 1023px) {
      left: 59vw;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
</style>
