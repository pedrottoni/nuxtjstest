<script>
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'ModeloInovador',
  // 	},
  // })
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue'

  // Import Swiper styles
  import 'swiper/css'

  import 'swiper/css/pagination'

  // import required modules
  import { Pagination } from 'swiper/modules'

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
      }
    },
  }
</script>
<template>
  <section class="py-32">
    <swiper :pagination="true" :modules="modules" class="mySwiper">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
    </swiper>
    <div class="container mx-auto px-4 relative">
      <div class="mb-20 md:max-w-md">
        <h3>Modelo inovador</h3>
        <h2>Uma experiência radicalmente aprimorada</h2>
      </div>
      <div
        class="gap-6 lg:gap-10 xl:gap-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]"
      >
        <UCard class="max-w-md max-w-lg">
          <template #header>
            <nuxt-img src="/formacao.svg" class="h-16 pt-4" />
            <h6 class="mt-2">
              Formação de <br class="hidden lg:block" />
              preços eficiente
            </h6>
          </template>
          <template #default>
            <p class="md:w-56">
              Oferecemos uma formação de preços por oferta de demanda para
              ativos financeiros intercambiáveis por outros do mesmo tipo.
              ("commodity")
            </p>
          </template>
          <template #footer>
            <UButton
              to="about"
              variant="link"
              trailing-icon="i-material-symbols-open-in-new"
              color="tertiary"
              class="text-tertiary-500 lg:text-tertiary-500"
              >Saiba mais</UButton
            >
          </template>
        </UCard>
        <UCard class="max-w-lg">
          <template #header>
            <nuxt-img src="/comhora.svg" class="h-16 pt-4" />
            <h6 class="mt-2">
              Via hora<br class="hidden lg:block" />
              marcada
            </h6>
          </template>
          <template #default>
            <p class="md:w-60">
              Alguns processos de negociação as vezes sao muito rápidos e outras
              muito lentos. Nosso pico de liquidez por agendado é a melhor
              solução no mercado.
            </p>
          </template>
          <template #footer>
            <UButton
              to="about"
              variant="link"
              class="text-primary-500 lg:text-tertiary-500"
              trailing-icon="i-material-symbols-open-in-new"
              color="tertiary"
              >Saiba mais</UButton
            >
          </template>
        </UCard>
        <UCard class="max-w-lg">
          <template #header>
            <nuxt-img src="/anonimato.svg" class="h-16 pt-4" />
            <h6 class="mt-2">
              Anonimato<br class="hidden lg:block" />
              garantido
            </h6>
          </template>
          <template #default>
            <p class="md:w-56">
              As únicas informações compartilhadas com o resto do mercado são:
              se existia compra, venda ou não; o preço final e a quantidade
              total.
            </p>
          </template>
          <template #footer>
            <UButton
              to="about"
              variant="link"
              class="text-primary-500 lg:text-tertiary-500"
              trailing-icon="i-material-symbols-open-in-new"
              color="tertiary"
              >Saiba mais</UButton
            >
          </template>
        </UCard>
        <UCard class="max-w-lg">
          <template #header>
            <nuxt-img src="/conflitos.svg" class="h-16 pt-4" />
            <h6 class="mt-2">
              Sem<br class="hidden lg:block" />
              conflitos
            </h6>
          </template>
          <template #default>
            <p class="md:w-56">
              Anulamos conflitos de interesse entre os participantes. Garantindo
              a preferencia para os clientes com volumes maiores.
            </p>
          </template>
          <template #footer>
            <UButton
              to="about"
              variant="link"
              class="text-primary-500 lg:text-tertiary-500"
              trailing-icon="i-material-symbols-open-in-new"
              color="tertiary"
              >Saiba mais</UButton
            >
          </template>
        </UCard>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
