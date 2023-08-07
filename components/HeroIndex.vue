<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'HeroSection',
  // 	},
  // })
</script>
<template>
  <section class="heroindexsection flex flex-col pt-40 px-4">
    <div class="absolute z-0 backgroundelements">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 2691 1256"
      >
        <path
          stroke="#fff"
          stroke-width="6"
          d="m1493 16.2 4.9-5h-320.3l-1 1-271.4 302.4-1.8 2 1.9 2L1053.5 475l2.2 2.3 2.2-2.3L1493 16.2ZM906.7 640.8l1.9-2-2-2L316.1 12l-.8-1H7.2l4.6 5 579.4 626.4-568.7 605.1-4.8 5h312.7l.9-.8 575.3-611ZM1059.3 794l-2.2-2.3-2.2 2.3-157 165-2 2 2 2.1 274 288.6.8 1h316.6l-4.8-5L1059.3 794Z"
          opacity=".3"
        />
        <path
          fill="#7777F8"
          d="M1113.4 470.4 1552.6 9.8h-315L963.8 313.3l149.6 157ZM960.6 636.8 364.7 9.8H62l586.6 630.8L72.7 1250H380l580.6-613.2Zm154.2 157.9L956.3 960.3l276.5 289.7H1544l-429.2-455.3Z"
          opacity=".1"
        />
        <path
          stroke="#fff"
          stroke-width="6"
          d="m1833.5 632.8-2-2 2-2.1L2423.9 4.1l.9-1h308l-4.6 5-579.3 626.4 568.7 605.1 4.7 5h-312.7l-.8-.9-575.3-610.9Z"
          opacity=".3"
        />
        <path
          fill="#7777F8"
          d="m1891.4 636.8 596-627H2790l-586.6 630.8 576 609.4H2472l-580.6-613.2Z"
          opacity=".1"
        />
      </svg>
    </div>
    <div class="text-center relative z-1">
      <h1 class="leading-tight mb-2 text-blue-950">
        Um novo <br class="block md:hidden" />
        tipo de leilão
      </h1>
      <h4 class="mt-4 mb-6 text-indigo-900">
        Com regras de negocio modernas e diferenciadas.<br
          class="hidden sm:block"
        />
        Criamos uma solução revolucionaria.
      </h4>
      <UButton
        to="contact"
        size="xl"
        class="!rounded-3xl blue mt-4 px-7 py-3"
        label="Comece agora"
      >
      </UButton>
    </div>
    <div
      data-empty-placeholder
      class="-bottom-24 bg-slate-700 container flex h-96 place-self-center px-4 relative rounded-3xl w-full"
    ></div>
  </section>
</template>
<style scoped>
  .heroindexsection {
    background-color: #a9d6f9;
    background-image: radial-gradient(
        at 100% 61%,
        hsla(206, 100%, 91%, 1) 0px,
        transparent 50%
      ),
      radial-gradient(at 3% 97%, #66b5ff 0px, transparent 50%),
      radial-gradient(at 27% 14%, #8276ea 0px, transparent 50%),
      radial-gradient(at 58% 97%, #c9aaf6 0px, transparent 50%);
    background-size: 600% 600%;
    animation: backgroundanimation 20s ease infinite;
    height: 80vh;
    .backgroundelements {
      width: 100vw;
      overflow: hidden;
      height: 80vh;
      top: 0;
      svg {
        height: 100%;
      }
    }
    h4 {
      font-size: 1.5rem;
      line-height: 2.4rem;
    }
  }

  @keyframes backgroundanimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
