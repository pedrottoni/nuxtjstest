<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'HeroSection',
  // 	},
  // })
</script>
<template>
  <section
    class="flex flex-col heroindexsection overflow-hidden pt-32 px-4 relative sm:pt-40 md:pt-28"
  >
    <div class="absolute backgroundelements z-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 2791 1248"
      >
        <path
          stroke="#fff"
          stroke-width="6"
          d="m1493 8.2 4.9-5h-320.3l-1 1-271.4 302.4-1.8 2 1.9 2L1053.5 467l2.2 2.3 2.2-2.3L1493 8.2ZM906.7 632.8l1.9-2-2-2L316.1 4l-.8-1H7.2l4.6 5 579.4 626.4-568.7 605.1-4.8 5h312.7l.9-.8 575.3-611ZM1059.3 786l-2.2-2.3-2.2 2.3-157 165-2 2 2 2.1 274 288.6.8 1h316.6l-4.8-5L1059.3 786Z"
          opacity=".3"
        />
        <path
          fill="#7777F8"
          d="M1113.4 466.7 1552.6 6l-315-.1-273.8 303.7 149.6 157ZM960.6 633 364.7 6.2H62L648.6 637 72.7 1246.3H380L960.6 633Zm154.2 158L956.3 956.6l276.5 289.7H1544L1114.8 791Z"
          opacity=".1"
        />
        <path
          stroke="#fff"
          stroke-width="6"
          d="m1833.5 632.7-2-2 2-2.1L2423.9 3.9l.9-.9h308l-4.6 5-579.3 626.4 568.7 605.1 4.7 5h-312.7l-.8-.9-575.3-610.9Z"
          opacity=".3"
        />
        <path
          fill="#7777F8"
          d="m1891.4 633 596-627H2790l-586.6 630.8 576 609.4H2472L1891.4 633Z"
          opacity=".1"
        />
      </svg>
    </div>
    <div class="justify-around place-items-center relative text-center z-1">
      <h1 class="leading-tight mb-2 text-blue-950">Um novo</h1>
      <h1 class="text-primary-500">tipo de leilão</h1>
      <h4 class="mb-6 mt-10">
        Com regras de negocio modernas e diferenciadas,<br
          class="hidden sm:block"
        />
        Criamos uma solução revolucionaria.
      </h4>
      <UButton
        to="contact"
        size="xl"
        class="rounded-xl mt-4 px-7 py-3 relative z-20"
        label="Comece agora"
        color="tertiary"
      >
      </UButton>
    </div>
  </section>
</template>
<style scoped>
  .heroindexsection {
    background-color: hsl(0, 0%, 100%);
    background-image: radial-gradient(
        at 100% 61%,
        hsla(206, 100%, 94%) 0px,
        transparent 50%
      ),
      radial-gradient(at 60% 97%, hsl(278, 100%, 96%) 0px, transparent 50%),
      radial-gradient(at 3% 97%, hsl(203, 100%, 96%) 0px, transparent 50%),
      radial-gradient(at 40% 97%, hsl(53, 100%, 82%) 0px, transparent 50%);
    background-size: 600% 600%;
    animation: backgroundanimation 10s ease infinite;
    height: clamp(46rem, 90vw, 66rem);
    margin-bottom: clamp(-37rem, -90vw, 66rem);

    @media screen and (max-width: 1440px) {
    }
    @media screen and (max-width: 1023px) {
      height: clamp(46rem, 90vw, 66rem);
      margin-bottom: clamp(-37rem, -90vw, 66rem);
    }
    @media screen and (max-width: 768px) {
      height: clamp(46rem, 90vw, 66rem);
      margin-bottom: clamp(-37rem, -90vw, 66rem);
    }
    .backgroundelements {
      height: 64rem;
      top: 0;
      left: 50%;
      svg {
        height: 60rem;
        opacity: 50%;
        margin: 0 -50%;
      }
    }
    h4 {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.3rem;
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
