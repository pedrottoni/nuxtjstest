<script setup lang="ts">
  import { isCurrentRoute } from '~/composables/nav'

  defineProps({
    navlinks: {
      type: Object,
      default() {
        return []
      },
    },
    currentPath: {
      type: String,
      default: '/',
    },
  })
</script>
<template>
  <div class="h-full items-center flex space-x-0">
    <UButton
      v-for="(navlink, index) in navlinks"
      :key="index"
      :to="navlink.link"
      :label="navlink.text"
      size="lg"
      variant="ghost"
      :color="isCurrentRoute(navlink, currentPath) ? 'primary' : 'blue'"
    >
    </UButton>
  </div>
</template>
<style scoped></style>
