<script setup>
  import { ref } from 'vue'

  const tabs = ref([
    {
      title: 'Ágil e eficiente',
      value: 'tab1',
      disabled: 'false',
    },
    {
      title: 'Leilão duplo',
      value: 'tab2',
      disabled: 'false',
    },
    {
      title: 'Totalmente eletrônico',
      value: 'tab3',
      disabled: 'false',
    },
    {
      title: 'Como funciona',
      value: 'tab4',
      disabled: 'false',
    },
  ])

  const { $gsap } = useNuxtApp()
  const mm = $gsap.matchMedia()
  onMounted(() => {
    mm.add('(min-width: 24px)', () => {
      $gsap.from('.sec2tab', {
        ease: 'power1.out',
        opacity: -1,
        yPercent: 50,
        duration: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#tabs',
          start: 'top 95%',
          end: 'bottom 12%',
          scrub: false,
          toggleActions: 'play reverse play reverse',
        },
      })
      $gsap.from('.tabimg', {
        ease: 'power1.out',
        opacity: -1,
        xPercent: -50,
        duration: 0.3,
        scrollTrigger: {
          trigger: '#tabs',
          start: 'top 95%',
          end: 'bottom 12%',
          scrub: false,
          toggleActions: 'play reverse play reverse',
        },
      })
      $gsap.from('.tabtext', {
        ease: 'power1.out',
        opacity: -1,
        xPercent: 50,
        duration: 0.3,
        scrollTrigger: {
          trigger: '#tabs',
          start: 'top 95%',
          end: 'bottom 12%',
          scrub: false,
          toggleActions: 'play reverse play reverse',
        },
      })
    })
  })
</script>
<template>
  <section
    id="o-que-fazemos"
    class="bg-slate-100 pb-32 pt-24 relative z-10 md:pt-32"
  >
    <div
      class="container flex flex-col gap-8 mx-auto place-items-center px-4 md:justify-between lg:px-40"
    >
      <div
        class="flex-col mb-14 place-items-center text-center w-12/12 md:max-w-xl lg:flex"
      >
        <h3>O que fazemos</h3>
        <h2>Uma plataforma ágil e eficiente para grandes negociações</h2>
      </div>
      <div class="-mb-10 -mt-16 block w-full md:hidden">
        <swiper
          :pagination="{
            clickable: true,
          }"
          :modules="[SwiperPagination]"
          :breakpoints="{
            '@0.00': {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },
            '@0.64': {
              slidesPerView: 1.8,
              spaceBetween: 30,
            },
          }"
        >
          <swiper-slide>
            <div>
              <h5 class="mb-6">
                Ágil<br />
                e eficiente
              </h5>
              <p>
                A EXE Auctions é uma plataforma de leilão criada para trazer
                mais eficiência e transparência na formação de preços em
                mercados com poucos participantes. Isso só é possível graças ao
                seu modelo inovador, que combina as vantagens dos leilões
                tradicionais com a velocidade da negociação eletrônica.
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <h5 class="mb-6">
                Leilão<br />
                duplo
              </h5>
              <p>
                Após um bom tempo trabalhando com os melhores profissionais do
                mercado local e offshore, nas mais importantes instituições
                financeiras do mundo, desenvolvemos uma única plataforma de
                leilão duplo que alia rapidez, eficiência na formação de preços,
                anonimato e ausência de ruídos.
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <h5 class="mb-6">
                Totalmente<br />
                eletrônico
              </h5>
              <p>
                Resolvendo atritos de todos os mercados de commodities, gerando
                picos de liquidez sem intermediação humana e sem algoritmos
                baseados em estimativas de preço obsoletas. Trazemos o jeito
                mais moderno da atualidade de transacionar ativos. Uma forma de
                execução pela qual todos saem matematicamente satisfeitos.
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <h5 class="mb-6">Como<br />funciona</h5>
              <p class="mb-4">
                Os traders acessam a plataforma e inserem suas ordens de compra,
                venda ou troca. A EXE envia o resultado das transações para a
                corretora, que fica responsável pela boletagem e pela liquidação
                das operações. Todo o relacionamento de crédito com o clientes
                continua sendo gerenciado pela corretora parceira.
              </p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <TabBar class="hidden md:block" :tabs="tabs" active="tab1">
        <template #content="{ active }">
          <template v-if="active == 'tab1'">
            <img
              src="/about.png"
              width="483"
              height="441"
              class="tabimg"
              alt=""
            />

            <div class="tabtext">
              <h5 class="mb-6">
                Ágil<br />
                e eficiente
              </h5>
              <p>
                A EXE Auctions é uma plataforma de leilão criada para trazer
                mais eficiência e transparência na formação de preços em
                mercados com poucos participantes. Isso só é possível graças ao
                seu modelo inovador, que combina as vantagens dos leilões
                tradicionais com a velocidade da negociação eletrônica.
              </p>
            </div>
          </template>
          <template v-if="active == 'tab2'">
            <img src="/duplo.png" width="483" height="441" class="tabimg" />
            <div class="tabtext">
              <h5 class="mb-6">
                Leilão<br />
                duplo
              </h5>
              <p>
                Após um bom tempo trabalhando com os melhores profissionais do
                mercado local e offshore, nas mais importantes instituições
                financeiras do mundo, desenvolvemos uma única plataforma de
                leilão duplo que alia rapidez, eficiência na formação de preços,
                anonimato e ausência de ruídos.
              </p>
            </div>
          </template>
          <template v-if="active == 'tab3'">
            <img
              src="/commodities.png"
              width="483"
              height="441"
              class="tabimg"
              alt=""
            />
            <div class="tabtext">
              <h5 class="mb-6">
                Totalmente<br />
                eletrônico
              </h5>
              <p>
                Resolvendo atritos de todos os mercados de commodities, gerando
                picos de liquidez sem intermediação humana e sem algoritmos
                baseados em estimativas de preço obsoletas. Trazemos o jeito
                mais moderno da atualidade de transacionar ativos. Uma forma de
                execução pela qual todos saem matematicamente satisfeitos.
              </p>
            </div>
          </template>
          <template v-if="active == 'tab4'">
            <img
              src="/funcionamento.png"
              width="483"
              height="441"
              class="tabimg"
              alt=""
            />
            <div class="tabtext">
              <h5 class="mb-6">Como<br />funciona</h5>
              <p class="mb-4">
                Os traders acessam a plataforma e inserem suas ordens de compra,
                venda ou troca. A EXE envia o resultado das transações para a
                corretora, que fica responsável pela boletagem e pela liquidação
                das operações. Todo o relacionamento de crédito com o clientes
                continua sendo gerenciado pela corretora parceira.
              </p>
            </div>
          </template>
        </template>
      </TabBar>
    </div>
  </section>
</template>
<style scoped>
  .swiper {
    width: 109%;
    height: 30rem;
    padding: 2rem;
    position: relative;
    margin: 0 -1rem;
  }

  .swiper-slide {
    background: hsl(240, 20%, 99%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 2rem;
    box-shadow: hsla(0, 0%, 0%, 0.05) 0px 6px 24px 0px,
      hsla(0, 0%, 0%, 0.08) 0px 0px 0px 1px;
    border-radius: 1rem;
    flex-direction: column;
  }
</style>
