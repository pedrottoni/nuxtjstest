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
    $gsap.to('.image', {
      ease: 'power1.out',
      xPercent: -48,
      opacity: 1,
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
  <section class="py-32 bg-slate-100">
    <div
      class="container flex flex-col gap-8 mx-auto place-items-center px-4 relative md:flex-row md:place-items-center"
    >
      <div class="vamos">
        <h2 class="title1">Vamos começar?</h2>
        <h4 class="title2 lg:max-w-2xl mt-4 my-8">
          Conheça a plataforma de leilão eletrônico que une as vantagens dos
          leilões tradicionais com a agilidade da negociação eletrônica.
        </h4>
        <UButton
          to="contact"
          size="xl"
          class="btn btnsolid mb-14 mt-4 px-7 py-3 relative rounded-md z-20"
          label="Comece agora"
          color="tertiary"
        >
        </UButton>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 591 814"
        class="-right-28 -z-10 absolute h-full"
      >
        <path
          fill="#7777F8"
          d="M591 411.52 199.09 0H0l385.81 414.01L7.05 814h202.1L591 411.52Z"
          opacity=".08"
        />
      </svg>
      <NuxtImg src="vamos.png" class="image relative lg:w-7/12" />
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
    transform: translateX(+50%);
    opacity: 0;
  }
</style>
