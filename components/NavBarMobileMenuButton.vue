<script setup lang="ts">
  import { useMobileMenu } from '~/composables/mobile-menu'
  const { isMobileMenuOpen, openMobileMenu } = useMobileMenu()
</script>
<template>
    <UButton size="xl" class="!py-2 !rounded-lg leading-none" :icon="
      isMobileMenuOpen ? 'i-material-symbols-close' : 'i-material-symbols-menu'
    " @click="openMobileMenu" variant="ghost" block><span class="sr-only">Open main menu</span>
    </UButton>
</template>
<style scoped></style>
