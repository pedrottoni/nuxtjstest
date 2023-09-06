<script setup>
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'ModeloInovador',
  // 	},
  // })
  const { $gsap, $ScrollTrigger } = useNuxtApp()

  onMounted(() => {
    $gsap.from('.sec1card', {
      ease: 'power1.out',
      yPercent: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.3,
      scrollTrigger: {
        trigger: '.card-trigger',
        start: 'top 95%',
        end: 'bottom 12%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse',
      },
    })
  })
</script>
<template class="backdrop-blur-3xl">
    <section id="modelo" class="py-32 relative z-10">
        <div class="container mx-auto px-4 relative">
            <div class="mb-20 md:max-w-md">
                <h3>Modelo inovador</h3>
                <h2>Uma experiência radicalmente aprimorada</h2>
            </div>
            <div class="-mb-10 -mt-16 block md:hidden">
                <swiper :pagination="{
            clickable: true,
          }" :modules="[SwiperPagination]" :breakpoints="{
            '@0.00': {
              slidesPerView: 1.05,
              spaceBetween: 20,
            },
            '@0.64': {
              slidesPerView: 2.1,
              spaceBetween: 30,
            },
          }">
                    <swiper-slide>
                        <UCard class="max-w-md max-w-lg">
                            <template #header>
                                <nuxt-img src="/formacao.svg" class="h-11"/>
                                <h6 class="mt-4">
                  Formação de <br class="hidden lg:block"/>
                  preços eficiente </h6>
                            </template>
                            <template #default>
                                <p>
                  Resultado da interação entre oferta e demanda. Para situações
                  com múltiplos compradores e vendedores. Academicamente
                  conhecidos por leilões do tipo duplo. </p>
                            </template>
                        </UCard>
                    </swiper-slide>
                    <swiper-slide>
                        <UCard class="max-w-lg">
                            <template #header>
                                <nuxt-img src="/comhora.svg" class="h-11"/>
                                <h6 class="mt-4">
                  Via hora<br class="hidden lg:block"/>
                  marcada </h6>
                            </template>
                            <template #default>
                                <p>
                  Atualmente os processos de negociação são muito rápidos ou
                  muito lentos. Nosso pico de liquidez agendado permite calma na
                  inserção de ordens e rapidez na execução. </p>
                            </template>
                        </UCard>
                    </swiper-slide>
                    <swiper-slide>
                        <UCard class="max-w-lg">
                            <template #header>
                                <nuxt-img src="/anonimato.svg" class="h-11"/>
                                <h6 class="mt-4">
                  Anonimato<br class="hidden lg:block"/>
                  garantido </h6>
                            </template>
                            <template #default>
                                <p>
                  As únicas informações compartilhadas com o resto do mercado
                  são os totais e preço final da negociação. Preço e quantidades
                  individuais nunca são divulgados. </p>
                            </template>
                        </UCard>
                    </swiper-slide>
                    <swiper-slide>
                        <UCard class="max-w-lg">
                            <template #header>
                                <nuxt-img src="/conflitos.svg" class="h-11"/>
                                <h6 class="mt-4">
                  Sem<br class="hidden lg:block"/>
                  conflitos </h6>
                            </template>
                            <template #default>
                                <p class="pr-5">
                  Anulamos conflitos de interesse entre os participantes, com
                  regras de negociação claras e garantindo a preferencia para os
                  clientes com volumes maiores </p>
                            </template>
                        </UCard>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="card-trigger hidden gap-6 lg:gap-10 xl:gap-12 md:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
                <UCard class="sec1card max-w-md max-w-lg">
                    <template #header>
                        <nuxt-img src="/formacao.svg" class="h-11"/>
                        <h6 class="mt-4">
              Formação de <br class="hidden lg:block"/>
              preços eficiente </h6>
                    </template>
                    <template #default>
                        <p class="md:w-56">
              Resultado da interação entre oferta e demanda. Para situações com
              múltiplos compradores e vendedores. Academicamente conhecidos por
              leilões do tipo duplo. </p>
                    </template>
                    <template #footer>
                        <UButton to="about" variant="link" trailing-icon="i-material-symbols-open-in-new" color="tertiary" class="hidden text-tertiary-500 lg:text-tertiary-500">Saiba mais</UButton>
                    </template>
                </UCard>
                <UCard class="sec1card max-w-lg">
                    <template #header>
                        <nuxt-img src="/comhora.svg" class="h-11"/>
                        <h6 class="mt-4">
              Via hora<br class="hidden lg:block"/>
              marcada </h6>
                    </template>
                    <template #default>
                        <p class="w-60">
              Atualmente os processos de negociação são muito rápidos ou muito
              lentos. Nosso pico de liquidez agendado permite calma na inserção
              de ordens e rapidez na execução. </p>
                    </template>
                </UCard>
                <UCard class="sec1card max-w-lg">
                    <template #header>
                        <nuxt-img src="/anonimato.svg" class="h-11"/>
                        <h6 class="mt-4">
              Anonimato<br class="hidden lg:block"/>
              garantido </h6>
                    </template>
                    <template #default>
                        <p class="md:w-56">
              As únicas informações compartilhadas com o resto do mercado são os
              totais e preço final da negociação. Preço e quantidades
              individuais nunca são divulgados. </p>
                    </template>
                </UCard>
                <UCard class="sec1card max-w-lg">
                    <template #header>
                        <nuxt-img src="/conflitos.svg" class="h-11"/>
                        <h6 class="mt-4">
              Sem<br class="hidden lg:block"/>
              conflitos </h6>
                    </template>
                    <template #default>
                        <p class="md:w-56">
              Anulamos conflitos de interesse entre os participantes, com regras
              de negociação claras e garantindo a preferencia para os clientes
              com volumes maiores. </p>
                    </template>
                </UCard>
            </div>
        </div>
    </section>
</template>
<style scoped>
  .swiper {
    width: 109%;
    height: 21rem;
    padding: 2rem;
    position: relative;
    margin: 0 -1rem;
  }

  .swiper-slide {
    background: hsl(0, 0%, 100%);

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 2rem;
    box-shadow: hsla(0, 0%, 0%, 0.05) 0px 6px 24px 0px,
      hsla(0, 0%, 0%, 0.08) 0px 0px 0px 1px;
    border-radius: 1rem;
  }
</style>
