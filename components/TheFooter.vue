<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'TheFooter',
  // 	},
  // })
</script>
<template>
  <div class="pb-24 pt-12">
    <div class="container mx-auto px-8">
      <div class="flex flex-wrap justify-center space-x-8">
        <NuxtLink
          href="https://www.facebook.com/vuedesigner"
          aria-label="facebook"
          external
          target="_blank"
        >
          <Icon name="logos:facebook" class="text-2xl"></Icon>
        </NuxtLink>
        <NuxtLink
          href="https://twitter.com/vuedesigner"
          aria-label="twitter"
          external
          target="_blank"
        >
          <Icon name="logos:twitter" class="text-2xl"></Icon>
        </NuxtLink>

        <NuxtLink
          href="https://www.youtube.com/@vuedesigner"
          aria-label="youtube"
          external
          target="_blank"
        >
          <Icon name="logos:youtube-icon" class="text-2xl"></Icon>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
