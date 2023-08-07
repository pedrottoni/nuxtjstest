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
    class="-mb-20 flex flex-col heroindexsection pt-32 sm:pt-40 px-4 relative sm:-mb-40 md:-mb-56 lg:-mb-56"
  >
    <div
      class="-left-3/4 absolute backgroundelements lg:left-auto md:-left-96 top-0 z-0"
    >
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
      <h1 class="leading-tight mb-2 text-blue-950">
        Um novo <br class="block md:hidden" />
        tipo de leilão
      </h1>
      <h4 class="mb-6 mt-4 text-indigo-900">
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
  </section>
</template>
<style scoped>
  .heroindexsection {
    background-color: rgb(237, 239, 255);
    background-image: radial-gradient(
        at 100% 61%,
        hsla(206, 100%, 91%, 1) 0px,
        transparent 50%
      ),
      radial-gradient(at 3% 97%, #aed8ff 0px, transparent 50%),
      radial-gradient(at 58% 97%, #ceaeff 0px, transparent 50%),
      radial-gradient(at 58% 47%, #fff6ae 0px, transparent 50%);
    background-size: 600% 600%;
    animation: backgroundanimation 10s ease infinite;
    height: 45rem;
    .backgroundelements {
      width: -webkit-fill-available;
      overflow: hidden;
      height: 45rem;
      svg {
        height: 100vh;
        opacity: 60%;
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
