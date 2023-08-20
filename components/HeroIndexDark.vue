<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'HeroSection',
  // 	},
  // })
</script>
<template>
    <section class="flex flex-col heroindexsection overflow-hidden pt-32 px-4 relative">
        <div class="absolute backgroundelements z-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 2856 1298">
                <g opacity=".6">
                    <path fill="url(#a)" d="M1100.53 482.12 1560.24.14 1230.57 0l-286.6 317.84 156.56 164.28Z"/>
                    <path fill="url(#b)" d="M940.69 656.27 317.04.14H.24l613.94 660.11L11.43 1298h321.6l607.66-641.73Z"/>
                    <path fill="url(#c)" d="M1102.03 821.5 936.18 994.85 1225.53 1298h325.69l-449.19-476.5Z"/>
                    <path fill="url(#d)" d="M1914.76 656.14 2538.41 0h316.8l-613.94 660.12 602.74 637.74h-321.59l-607.66-641.72Z"/>
                </g>
                <defs>
                    <linearGradient id="a" x1="2384.99" x2="2384.99" y1="0" y2="1297.86" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#006A97"/>
                        <stop offset="1" stop-color="#2700EC" stop-opacity="0"/>
                    </linearGradient>
                    <linearGradient id="b" x1="2384.99" x2="2384.99" y1="0" y2="1297.86" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#006A97"/>
                        <stop offset="1" stop-color="#2700EC" stop-opacity="0"/>
                    </linearGradient>
                    <linearGradient id="c" x1="2384.99" x2="2384.99" y1="0" y2="1297.86" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#006A97"/>
                        <stop offset="1" stop-color="#2700EC" stop-opacity="0"/>
                    </linearGradient>
                    <linearGradient id="d" x1="2384.99" x2="2384.99" y1="0" y2="1297.86" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#006A97"/>
                        <stop offset="1" stop-color="#2700EC" stop-opacity="0"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <div class="justify-around place-items-center relative text-center z-1">
            <h1 class="leading-tight mb-2 text-white">Um novo</h1>
            <h1 class="text-tertiary">tipo de leilão</h1>
            <h4 class="!font-light mb-6 mt-10 text-white">
        Com regras de negocio modernas e diferenciadas,<br class="hidden sm:block"/>
        Criamos uma solução revolucionaria. </h4>
            <UButton to="contact" size="xl" class="rounded-xl mt-4 px-7 py-3 relative z-20" label="Comece agora" color="tertiary">
</UButton>
        </div>
    </section>
</template>
<style scoped>
  .heroindexsection {
    background: linear-gradient(180deg, #182350 0%, #1d4381 100%),
      lightgray 50% / cover no-repeat;
    height: clamp(52rem, 90vw, 65rem);
    margin-bottom: clamp(-35rem, -42vw, 54rem);

    @media screen and (max-width: 767px) {
      height: clamp(52rem, 90vw, 64rem);
      margin-bottom: clamp(-35rem, -42vw, 54rem);
    }

    .backgroundelements {
      height: clamp(64rem, 80vw, 64rem);
      top: 0;
      left: 50%;
      svg {
        height: clamp(64rem, 80vw, 64rem);
        opacity: 40%;
        margin: 0 -50%;
      }
    }
    h4 {
      font-size: 1.4rem;
      line-height: 2.3rem;
    }
  }
</style>
