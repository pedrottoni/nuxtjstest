<script setup>
  const { $gsap } = useNuxtApp()

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
        <swiper
          :pagination="{
            clickable: true,
          }"
          :modules="[SwiperPagination]"
          :breakpoints="{
            '@0.00': {
              slidesPerView: 1.05,
              spaceBetween: 20,
            },
            '@0.64': {
              slidesPerView: 2.1,
              spaceBetween: 30,
            },
          }"
        >
          <swiper-slide>
            <UCard class="max-w-md max-w-lg">
              <template #header>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 60 62"
                  class="h-11"
                >
                  <circle
                    cx="44.5"
                    cy="46.5"
                    r="15.5"
                    fill="#66DAFF"
                    fill-opacity=".6"
                  />
                  <path
                    fill="#2D9AFF"
                    d="M5.56 50a5.35 5.35 0 0 1-3.93-1.63A5.35 5.35 0 0 1 0 44.44V5.56c0-1.53.54-2.84 1.63-3.93A5.35 5.35 0 0 1 5.56 0h38.88c1.53 0 2.84.54 3.93 1.63A5.35 5.35 0 0 1 50 5.56v38.88c0 1.53-.54 2.84-1.63 3.93A5.35 5.35 0 0 1 44.44 50H5.56Zm2.77-23.4 11.11-11.11 11.12 11.1 11.1-11.1 2.78 2.77V5.56H5.56v18.26l2.77 2.78ZM5.56 44.44h38.88V26.11l-2.77-2.78-11.11 11.11-11.12-11.1-11.1 11.1-2.78-2.77v12.77Zm0 0V26.11v5.56V5.56v38.88Z"
                  />
                </svg>
                <h6 class="mt-4">
                  Formação de <br class="hidden lg:block" />
                  preços eficiente
                </h6>
              </template>
              <template #default>
                <p>
                  Resultado da interação entre oferta e demanda. Para situações
                  com múltiplos compradores e vendedores. Academicamente
                  conhecidos por leilões do tipo duplo.
                </p>
              </template>
            </UCard>
          </swiper-slide>
          <swiper-slide>
            <UCard class="max-w-lg">
              <template #header>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 52 62"
                  class="h-11"
                >
                  <circle
                    cx="36.5"
                    cy="46.5"
                    r="15.5"
                    fill="#66DAFF"
                    fill-opacity=".6"
                  />
                  <path
                    fill="#2D9AFF"
                    d="M14.29 4.76V0h14.28v4.76H14.3Zm4.76 26.2h4.76v-14.3h-4.76v14.3ZM21.43 50c-2.94 0-5.7-.57-8.3-1.7A21.89 21.89 0 0 1 1.7 36.88a20.59 20.59 0 0 1-1.7-8.3c0-2.95.57-5.71 1.7-8.31A21.89 21.89 0 0 1 13.13 8.84c2.6-1.13 5.36-1.7 8.3-1.7 2.46 0 4.82.4 7.08 1.2 2.26.79 4.39 1.94 6.37 3.45l3.33-3.34 3.34 3.34-3.34 3.33a23.12 23.12 0 0 1 3.46 6.37 21.3 21.3 0 0 1-.51 15.38A21.89 21.89 0 0 1 29.73 48.3a20.59 20.59 0 0 1-8.3 1.7Zm0-4.76c4.6 0 8.53-1.63 11.78-4.88a16.06 16.06 0 0 0 4.89-11.79c0-4.6-1.63-8.53-4.89-11.78a16.06 16.06 0 0 0-11.78-4.89c-4.6 0-8.53 1.63-11.79 4.89a16.06 16.06 0 0 0-4.88 11.78c0 4.6 1.63 8.53 4.88 11.79a16.06 16.06 0 0 0 11.79 4.88Z"
                  />
                </svg>
                <h6 class="mt-4">
                  Via hora<br class="hidden lg:block" />
                  marcada
                </h6>
              </template>
              <template #default>
                <p>
                  Atualmente os processos de negociação são muito rápidos ou
                  muito lentos. Nosso pico de liquidez agendado permite calma na
                  inserção de ordens e rapidez na execução.
                </p>
              </template>
            </UCard>
          </swiper-slide>
          <swiper-slide>
            <UCard class="max-w-lg">
              <template #header>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 60 62"
                  class="h-11"
                >
                  <circle
                    cx="44.5"
                    cy="46.5"
                    r="15.5"
                    fill="#66DAFF"
                    fill-opacity=".6"
                  />
                  <path
                    fill="#2D9AFF"
                    d="M25 40.27c2.84 0 5.26-1 7.24-2.98a9.86 9.86 0 0 0 2.99-7.24c0-2.85-1-5.26-2.99-7.25A9.86 9.86 0 0 0 25 19.82c-2.84 0-5.26 1-7.24 2.98a9.86 9.86 0 0 0-2.99 7.25c0 2.84 1 5.25 2.99 7.24A9.86 9.86 0 0 0 25 40.27Zm0-4.09c-1.7 0-3.15-.6-4.35-1.79a5.92 5.92 0 0 1-1.79-4.34c0-1.7.6-3.16 1.8-4.35A5.92 5.92 0 0 1 25 23.9c1.7 0 3.15.6 4.35 1.8a5.92 5.92 0 0 1 1.79 4.35c0 1.7-.6 3.15-1.8 4.34A5.92 5.92 0 0 1 25 36.2Zm0 10.91a26.31 26.31 0 0 1-15.11-4.63A26.32 26.32 0 0 1 0 30.05a26.32 26.32 0 0 1 9.89-12.42A26.31 26.31 0 0 1 25 13c5.53 0 10.57 1.54 15.11 4.63A26.32 26.32 0 0 1 50 30.05a26.32 26.32 0 0 1-9.89 12.41A26.31 26.31 0 0 1 25 47.09Zm0-4.54a21.7 21.7 0 0 0 11.79-3.39A22.21 22.21 0 0 0 45 30.05a22.21 22.21 0 0 0-8.21-9.12A21.7 21.7 0 0 0 25 17.55a21.7 21.7 0 0 0-11.79 3.38A22.21 22.21 0 0 0 5 30.05a22.21 22.21 0 0 0 8.21 9.11A21.7 21.7 0 0 0 25 42.55Z"
                  />
                </svg>
                <h6 class="mt-4">
                  Anonimato<br class="hidden lg:block" />
                  garantido
                </h6>
              </template>
              <template #default>
                <p>
                  As únicas informações compartilhadas com o resto do mercado
                  são os totais e preço final da negociação. Preço e quantidades
                  individuais nunca são divulgados.
                </p>
              </template>
            </UCard>
          </swiper-slide>
          <swiper-slide>
            <UCard class="max-w-lg">
              <template #header>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 66 62"
                  class="h-11"
                >
                  <circle
                    cx="40.5"
                    cy="46.5"
                    r="15.5"
                    fill="#66DAFF"
                    fill-opacity=".6"
                  />
                  <path
                    fill="#2D9AFF"
                    d="M17.77 45 1 28.09l4.23-4.2L22 40.81 17.77 45Zm16.77 0L17.77 28.09l4.15-4.27 12.62 12.72L61.84 9 66 13.27 34.54 45Zm0-16.91-4.23-4.2L45 9.07l4.22 4.2-14.7 14.82Z"
                  />
                </svg>
                <h6 class="mt-4">
                  Sem<br class="hidden lg:block" />
                  conflitos
                </h6>
              </template>
              <template #default>
                <p class="pr-5">
                  Anulamos conflitos de interesse entre os participantes, com
                  regras de negociação claras, e garantimos a preferência para
                  os clientes com maiores volumes.
                </p>
              </template>
            </UCard>
          </swiper-slide>
        </swiper>
      </div>
      <div
        class="card-trigger hidden gap-6 lg:gap-10 xl:gap-12 md:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]"
      >
        <UCard class="sec1card max-w-md max-w-lg">
          <template #header>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 60 62"
              class="h-11"
            >
              <circle
                cx="44.5"
                cy="46.5"
                r="15.5"
                fill="#66DAFF"
                fill-opacity=".6"
              />
              <path
                fill="#2D9AFF"
                d="M5.56 50a5.35 5.35 0 0 1-3.93-1.63A5.35 5.35 0 0 1 0 44.44V5.56c0-1.53.54-2.84 1.63-3.93A5.35 5.35 0 0 1 5.56 0h38.88c1.53 0 2.84.54 3.93 1.63A5.35 5.35 0 0 1 50 5.56v38.88c0 1.53-.54 2.84-1.63 3.93A5.35 5.35 0 0 1 44.44 50H5.56Zm2.77-23.4 11.11-11.11 11.12 11.1 11.1-11.1 2.78 2.77V5.56H5.56v18.26l2.77 2.78ZM5.56 44.44h38.88V26.11l-2.77-2.78-11.11 11.11-11.12-11.1-11.1 11.1-2.78-2.77v12.77Zm0 0V26.11v5.56V5.56v38.88Z"
              />
            </svg>
            <h6 class="mt-4">
              Formação de <br class="hidden lg:block" />
              preços eficiente
            </h6>
          </template>
          <template #default>
            <p class="md:w-56">
              Resultado da interação entre oferta e demanda. Para situações com
              múltiplos compradores e vendedores. Academicamente conhecidos por
              leilões do tipo duplo.
            </p>
          </template>
          <template #footer>
            <UButton
              to="about"
              variant="link"
              trailing-icon="i-material-symbols-open-in-new"
              color="tertiary"
              class="hidden text-tertiary-500 lg:text-tertiary-500"
              >Saiba mais</UButton
            >
          </template>
        </UCard>
        <UCard class="sec1card max-w-lg">
          <template #header>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 52 62"
              class="h-11"
            >
              <circle
                cx="36.5"
                cy="46.5"
                r="15.5"
                fill="#66DAFF"
                fill-opacity=".6"
              />
              <path
                fill="#2D9AFF"
                d="M14.29 4.76V0h14.28v4.76H14.3Zm4.76 26.2h4.76v-14.3h-4.76v14.3ZM21.43 50c-2.94 0-5.7-.57-8.3-1.7A21.89 21.89 0 0 1 1.7 36.88a20.59 20.59 0 0 1-1.7-8.3c0-2.95.57-5.71 1.7-8.31A21.89 21.89 0 0 1 13.13 8.84c2.6-1.13 5.36-1.7 8.3-1.7 2.46 0 4.82.4 7.08 1.2 2.26.79 4.39 1.94 6.37 3.45l3.33-3.34 3.34 3.34-3.34 3.33a23.12 23.12 0 0 1 3.46 6.37 21.3 21.3 0 0 1-.51 15.38A21.89 21.89 0 0 1 29.73 48.3a20.59 20.59 0 0 1-8.3 1.7Zm0-4.76c4.6 0 8.53-1.63 11.78-4.88a16.06 16.06 0 0 0 4.89-11.79c0-4.6-1.63-8.53-4.89-11.78a16.06 16.06 0 0 0-11.78-4.89c-4.6 0-8.53 1.63-11.79 4.89a16.06 16.06 0 0 0-4.88 11.78c0 4.6 1.63 8.53 4.88 11.79a16.06 16.06 0 0 0 11.79 4.88Z"
              />
            </svg>
            <h6 class="mt-4">
              Via hora<br class="hidden lg:block" />
              marcada
            </h6>
          </template>
          <template #default>
            <p class="w-60">
              Atualmente os processos de negociação são muito rápidos ou muito
              lentos. Nosso pico de liquidez agendado permite calma na inserção
              de ordens e rapidez na execução.
            </p>
          </template>
        </UCard>
        <UCard class="sec1card max-w-lg">
          <template #header>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 60 62"
              class="h-11"
            >
              <circle
                cx="44.5"
                cy="46.5"
                r="15.5"
                fill="#66DAFF"
                fill-opacity=".6"
              />
              <path
                fill="#2D9AFF"
                d="M25 40.27c2.84 0 5.26-1 7.24-2.98a9.86 9.86 0 0 0 2.99-7.24c0-2.85-1-5.26-2.99-7.25A9.86 9.86 0 0 0 25 19.82c-2.84 0-5.26 1-7.24 2.98a9.86 9.86 0 0 0-2.99 7.25c0 2.84 1 5.25 2.99 7.24A9.86 9.86 0 0 0 25 40.27Zm0-4.09c-1.7 0-3.15-.6-4.35-1.79a5.92 5.92 0 0 1-1.79-4.34c0-1.7.6-3.16 1.8-4.35A5.92 5.92 0 0 1 25 23.9c1.7 0 3.15.6 4.35 1.8a5.92 5.92 0 0 1 1.79 4.35c0 1.7-.6 3.15-1.8 4.34A5.92 5.92 0 0 1 25 36.2Zm0 10.91a26.31 26.31 0 0 1-15.11-4.63A26.32 26.32 0 0 1 0 30.05a26.32 26.32 0 0 1 9.89-12.42A26.31 26.31 0 0 1 25 13c5.53 0 10.57 1.54 15.11 4.63A26.32 26.32 0 0 1 50 30.05a26.32 26.32 0 0 1-9.89 12.41A26.31 26.31 0 0 1 25 47.09Zm0-4.54a21.7 21.7 0 0 0 11.79-3.39A22.21 22.21 0 0 0 45 30.05a22.21 22.21 0 0 0-8.21-9.12A21.7 21.7 0 0 0 25 17.55a21.7 21.7 0 0 0-11.79 3.38A22.21 22.21 0 0 0 5 30.05a22.21 22.21 0 0 0 8.21 9.11A21.7 21.7 0 0 0 25 42.55Z"
              />
            </svg>
            <h6 class="mt-4">
              Anonimato<br class="hidden lg:block" />
              garantido
            </h6>
          </template>
          <template #default>
            <p class="md:w-56">
              As únicas informações compartilhadas com o resto do mercado são os
              totais e preço final da negociação. Preço e quantidades
              individuais nunca são divulgados.
            </p>
          </template>
        </UCard>
        <UCard class="sec1card max-w-lg">
          <template #header>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 66 62"
              class="h-11"
            >
              <circle
                cx="40.5"
                cy="46.5"
                r="15.5"
                fill="#66DAFF"
                fill-opacity=".6"
              />
              <path
                fill="#2D9AFF"
                d="M17.77 45 1 28.09l4.23-4.2L22 40.81 17.77 45Zm16.77 0L17.77 28.09l4.15-4.27 12.62 12.72L61.84 9 66 13.27 34.54 45Zm0-16.91-4.23-4.2L45 9.07l4.22 4.2-14.7 14.82Z"
              />
            </svg>
            <h6 class="mt-4">
              Sem<br class="hidden lg:block" />
              conflitos
            </h6>
          </template>
          <template #default>
            <p class="md:w-56">
              Anulamos conflitos de interesse entre os participantes, com regras
              de negociação claras, e garantimos a preferência para os clientes
              com maiores volumes.
            </p>
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
