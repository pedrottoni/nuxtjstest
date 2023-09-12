<script setup lang="ts">
  import { useMobileMenu } from '~/composables/mobile-menu'
  import { isCurrentRoute } from '~/composables/nav'
  const { isMobileMenuOpen } = useMobileMenu()
  const { $gsap } = useNuxtApp()

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
    <div v-show="isMobileMenuOpen" class="bg-slate-800 border-blue-800 border-t-2 navmobile overflow-hidden pb-5 place-content-center place-items-center pt-1 shadow text-neutral-900 sm:min-w-[200px]">
        <UButton v-for="(navlink, index) in navlinks" :key="index" :to="navlink.link" :variant="isCurrentRoute(navlink, currentPath) ? 'solid' : 'ghost'" block class="!rounded-lg border-2 border-blue-800 navmobile-links" @click="isMobileMenuOpen = !isMobileMenuOpen"><span class="sm:text-center">{{ navlink.text }}</span>
        </UButton>
    </div>
</template>
<style scoped>
  .navmobile {
    background: hsl(229, 50%, 22%);
    height: calc(100vh - 4rem);
    display: grid;
    align-content: stretch;
    gap: 0.3rem;

    .navmobile-links {
      color: hsl(0, 0%, 100%);
      text-align: center;
      height: 100%;
      width: 99vw;
    }
  }
</style>
