<script setup lang="ts">
  const { $gsap } = useNuxtApp()

  onMounted(() => {
    $gsap.from('.vamostitle', {
      ease: 'power1.out',
      xPercent: -50,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '#vamos',
        start: 'top 85%',
        end: 'bottom 22%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse',
      },
    })
    $gsap.from('.vamosimage', {
      ease: 'power1.out',
      xPercent: +50,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '#vamos',
        start: 'top 85%',
        end: 'bottom 22%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse',
      },
    })
  })
</script>
<template>
  <section id="vamos">
    <div
      class="container gap-8 grid mx-auto place-items-center px-4 relative md:grid-cols-2"
    >
      <div class="pt-32 text-center vamos md:pb-32 md:text-left">
        <h2 class="vamostitle text-slate-50 title">Vamos começar?</h2>
        <h4 class="vamostitle mt-4 my-8 text-slate-50 title w-80 lg:max-w-2xl">
          Conheça a plataforma de leilão eletrônico que une as vantagens dos
          leilões tradicionais com a agilidade da negociação eletrônica.
        </h4>
        <UButton
          to="https://wa.me/18609679811"
          target="_blank"
          size="xl"
          class="vamostitle btnsolid flex mb-8 mt-4 place-content-center px-7 py-3 relative rounded-md z-20 md:mb-0"
          label="Entre em contato"
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
      <NuxtImg
        src="vamos.png"
        class="vamosimage pb-32 relative md:pt-32"
        alt=""
        fit="contain"
        width="558"
        height="350"
      />
    </div>
  </section>
</template>
<style scoped>
  section {
    background: linear-gradient(180deg, #182350 0%, #1d4381 100%),
      lightgray 50% / cover no-repeat;
  }
  .vamosimage {
    width: clamp(20rem, 50vw, 40rem);
  }
  .bg {
    position: absolute;
    left: clamp(10rem, 52vw, 60rem);
  }

  .btnsolid {
    background: hsl(34, 100%, 50%);

    &:hover {
      background: hsl(30, 100%, 50%);
    }
  }
</style>
