<script setup lang="ts">
  import { computed } from 'vue'
  import { useNav } from '~/composables/nav'

  const { navlinks, currentPath } = useNav()
  const desktopNavTabs = computed(() => {
    return navlinks.value.slice(1, navlinks.value.length)
  })
  const mobileNavTabs = computed(() => {
    return navlinks.value.slice(1, navlinks.value.length)
  })

  const { $gsap, $ScrollTrigger } = useNuxtApp()

  onMounted(() => {
    $gsap.to('.navbarDark', {
      background: '#1c2654',
      top: '-8',
      ease: 'power1.out',
      duration: 0.2,
      scrollTrigger: {
        start: '10px 10px',
        end: 'bottom 10px',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse',
      },
    })
  })

  const isOpen = ref(false)
</script>
<template>
  <nav class="border-info-100 fixed navbarDark w-full z-40">
    <div class="container mx-auto px-4">
      <div class="flex h-fit items-center justify-between py-3">
        <div class="flex items-center justify-between w-full">
          <div class="flex flex-shrink-0 items-center">
            <NuxtLink to="/" class="text-primary-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 83 27"
                class="w-20"
              >
                <path
                  fill="#FBFCFD"
                  d="M25.76 3.43H4.92v8.68h16.1V15H4.91v8.57h20.84v2.88H0V.55h25.76v2.88Z"
                />
                <path
                  fill="#FBFCFD"
                  d="M56.81.55v2.88h20.84v8.68h-16.1V15h16.1v8.57H56.81v2.88h25.76V.55H56.81Z"
                />
                <path
                  fill="#FBFCFD"
                  d="M47.65 10.17 56.8.55l-6.48.09-5.8 6.25 3.12 3.28Z"
                />
                <path
                  fill="#FBFCFD"
                  d="M44.46 13.65 32.03.55H25.7l12.24 13.17-12.02 12.73h6.42l12.11-12.8Z"
                />
                <path
                  fill="#FBFCFD"
                  d="m56.25 26.03-8.57-9.09-3.3 3.46 5.76 6.05h6.5l-.37-.42h-.02Z"
                />
              </svg>
            </NuxtLink>
          </div>
          <NavBarDesktopTabs
            :navlinks="desktopNavTabs"
            :current-path="currentPath"
            class="hidden gap-4 lg:flex sm:ml-6"
          />
        </div>
        <UModal v-model="isOpen">
          <div class="bg-slate-800 flex flex-col place-items-center px-6 py-8">
            <div
              class="border-2 border-slate-50 flex h-24 p-4 rounded-full w-24"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 83 27"
                class="w-20"
              >
                <path
                  fill="#FBFCFD"
                  d="M25.76 3.43H4.92v8.68h16.1V15H4.91v8.57h20.84v2.88H0V.55h25.76v2.88Z"
                />
                <path
                  fill="#FBFCFD"
                  d="M56.81.55v2.88h20.84v8.68h-16.1V15h16.1v8.57H56.81v2.88h25.76V.55H56.81Z"
                />
                <path
                  fill="#FBFCFD"
                  d="M47.65 10.17 56.8.55l-6.48.09-5.8 6.25 3.12 3.28Z"
                />
                <path
                  fill="#FBFCFD"
                  d="M44.46 13.65 32.03.55H25.7l12.24 13.17-12.02 12.73h6.42l12.11-12.8Z"
                />
                <path
                  fill="#FBFCFD"
                  d="m56.25 26.03-8.57-9.09-3.3 3.46 5.76 6.05h6.5l-.37-.42h-.02Z"
                />
              </svg>
            </div>
            <h5 class="my-4 pt-2 text-center text-slate-50">Bem-vindo!</h5>
            <p class="mb-8 text-center text-slate-50">
              Para acessar, escolha uma das opções abaixo:
            </p>
            <UButton
              label="Sandbox"
              block
              class="button-sandbox mb-2 py-3 rounded-md"
            />
            <UButton
              label="Devs"
              block
              class="button-dev py-3 rounded-md"
              color="tertiary"
            />
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1 absolute right-3 text-tertiary-500 top-4"
              @click="isOpen = false"
            />
          </div>
        </UModal>
        <UButton
          class="btn font-bold mr-3 px-6 py-2 ring-2 ring-tertiary-500 rounded-md md:ml-12"
          label="Entrar"
          color="tertiary"
          variant="outline"
          @click="isOpen = true"
        />
        <div class="navmobile-btn -mr-2 items-center relative">
          <NavBarMobileMenuButton v-if="navlinks.length" class="lg:hidden" />
        </div>
      </div>
    </div>
    <NavBarMobileMenu :navlinks="mobileNavTabs" :current-path="currentPath" />
  </nav>
</template>
<style scoped>
  .btn {
    box-shadow: inset 0px 0px 0px 2px hsl(37, 98%, 53%) !important;
    color: hsl(37, 90%, 55%);
    font-weight: 600;
    &:hover {
      color: hsl(30, 90%, 50%);
      box-shadow: inset 0px 0px 0px 2px hsl(30, 90%, 48%) !important;
      background: none !important;
    }
  }

  .modal-content {
    max-width: 10rem;
  }
  .button-sandbox {
    background: hsl(37, 90%, 55%);
    color: hsl(0, 0%, 100%);
    &:hover {
      background: hsl(20, 90%, 50%);
    }
  }
  .button-dev {
    background: hsl(220, 62%, 33%);
    color: hsl(0, 0%, 100%);
    &:hover {
      background: hsl(220, 62%, 23%);
    }
  }
</style>
