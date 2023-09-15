<script setup lang="ts">
  defineProps({
    btnlabel: {
      type: String,
      default: '',
    },
    btnicon: {
      type: String,
      default: '',
    },
  })

  const swiper = useSwiper()
</script>

<template>
  <UButton
    :label="btnlabel"
    class="py-4 btn-sandbox"
    variant="link"
    :icon="btnicon"
    @click="swiper.slideNext()"
  />
</template>

<style scoped></style>
