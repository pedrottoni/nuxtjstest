<script setup lang="ts">
  const { $gsap, $ScrollTrigger } = useNuxtApp()

  const animateVamos = () => {
    $gsap.to('.title1', {
      ease: 'power1.out',
      xPercent: 0,
      opacity: 1,
      duration: 0.3,
      scrollTrigger: {
        trigger: '.vamos',
        start: 'top 96%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse',
      },
    })
    $gsap.to('.title2', {
      ease: 'power1.out',
      xPercent: 0,
      opacity: 1,
      duration: 0.4,
      scrollTrigger: {
        trigger: '.vamos',
        start: 'top 96%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse',
      },
    })
    $gsap.to('.btn', {
      ease: 'power1.out',
      xPercent: 0,
      opacity: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.vamos',
        start: 'top 96%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse',
      },
    })
    $gsap.from('.image', {
      ease: 'power1.out',
      xPercent: 40,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.vamos',
        start: 'top 96%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse',
      },
    })
  }

  onMounted(() => {
    animateVamos()
  })
</script>
<template>
  <section class="bg-slate-100">
    <div
      class="container gap-8 grid mx-auto place-items-center px-4 relative md:grid-cols-2"
    >
      <div class="pt-32 text-center vamos md:pb-32 md:text-left">
        <h2 class="title1">Vamos começar?</h2>
        <h4 class="mt-4 my-8 title2 w-80 lg:max-w-2xl">
          Conheça a plataforma de leilão eletrônico que une as vantagens dos
          leilões tradicionais com a agilidade da negociação eletrônica.
        </h4>
        <UButton
          to="contact"
          size="xl"
          class="btn btnsolid flex mb-8 mt-4 place-content-center px-7 py-3 relative rounded-md z-20 md:mb-0"
          label="Comece agora"
          color="tertiary"
        >
        </UButton>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 591 814"
        class="bg h-full"
      >
        <path
          fill="#499afe"
          d="M591 411.52 199.09 0H0l385.81 414.01L7.05 814h202.1L591 411.52Z"
          opacity=".08"
        />
      </svg>
      <NuxtImg src="vamos.png" class="image pb-32 relative md:pt-32" />
    </div>
  </section>
</template>
<style scoped>
  .title1 {
    transform: translateX(-50%);
    opacity: 0;
  }
  .title2 {
    transform: translateX(-50%);
    opacity: 0;
  }
  .btn {
    transform: translateX(-50%);
    opacity: 0;
  }
  .image {
    width: clamp(20rem, 50vw, 40rem);
  }

  .bg {
    position: absolute;
    left: clamp(10rem, 52vw, 60rem);
  }
</style>
