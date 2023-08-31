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
      title: 'Nicho de atuação',
      value: 'tab4',
      disabled: 'false',
    },
  ])

  const { $gsap, $ScrollTrigger } = useNuxtApp()
</script>
<template>
  <section class="bg-slate-100 py-32 z-10 relative">
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
                Solução ágil<br />
                e eficiente
              </h5>
              <p>
                A EXE Auctions é uma plataforma de leilão criada para trazer
                mais eficiência e transparência na formação de preços em
                mercados com poucos participantes. Isso é possível graças ao seu
                modelo inovador, que combina as vantagens dos leilões e da
                negociação por sistemas eletrônicos.
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <h5 class="mb-6">
                Plataforma<br />
                de leilão duplo
              </h5>
              <p>
                Após um bom tempo trabalhando nas mais importantes instituicoes
                financeiras do mundo e com os melhores profissionais do mercado
                local e offshore. Desenvolvemos para todos uma única plataforma
                de leilão duplo que alia rapidez, eficiência na formação de
                preços, anonimato e ausência de ruídos.
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
                picos de liquidez sem interferência humana e sem algoritmos
                baseados em proxies de mercados semelhantes. Trazemos o jeito
                mais moderno da atualizade de transacionar ativos. Uma forma de
                execução que todos saem corretamente satisfeitos.
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <h5 class="mb-6">Nicho<br />de atuação</h5>
              <p class="mb-4">
                Os traders acessam a plataforma e inserem suas ordens de compra
                e venda. A EXE envia o resultado das transações para a
                corretora, que fica responsável pela boletagem e pela liquidação
                das operações. Todo o relacionamento de crédito com o clientes
                continuam sendo gerenciado pela corretora parceira.
              </p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <TabBar class="hidden md:block" :tabs="tabs" active="tab1">
        <template #content="{ active }">
          <template v-if="active == 'tab1'">
            <NuxtImg src="about.png" class="w-1/3'" />
            <div>
              <h5 class="mb-6">
                Solução ágil<br />
                e eficiente
              </h5>
              <p>
                A EXE Auctions é uma plataforma de leilão criada para trazer
                mais eficiência e transparência na formação de preços em
                mercados com poucos participantes. Isso é possível graças ao seu
                modelo inovador, que combina as vantagens dos leilões e da
                negociação por sistemas eletrônicos.
              </p>
            </div>
          </template>
          <template v-if="active == 'tab2'">
            <NuxtImg src="duplo.png" class="w-1/2'" />
            <div>
              <h5 class="mb-6">
                Plataforma<br />
                de leilão duplo
              </h5>
              <p>
                Após um bom tempo trabalhando nas mais importantes instituicoes
                financeiras do mundo e com os melhores profissionais do mercado
                local e offshore. Desenvolvemos para todos uma única plataforma
                de leilão duplo que alia rapidez, eficiência na formação de
                preços, anonimato e ausência de ruídos.
              </p>
            </div>
          </template>
          <template v-if="active == 'tab3'">
            <NuxtImg src="commodities.png" class="w-1/2'" />
            <div>
              <h5 class="mb-6">Totalmente<br />eletrônico</h5>
              <p>
                Resolvendo atritos de todos os mercados de commodities, gerando
                picos de liquidez sem interferência humana e sem algoritmos
                baseados em proxies de mercados semelhantes. Trazemos o jeito
                mais moderno da atualizade de transacionar ativos. Uma forma de
                execução que todos saem corretamente satisfeitos.
              </p>
            </div>
          </template>
          <template v-if="active == 'tab4'">
            <NuxtImg src="funcionamento.png" class="w-1/2'" />
            <div>
              <h5 class="mb-6">
                Nicho<br />
                de atuação
              </h5>
              <p class="mb-4">
                Os traders acessam a plataforma e inserem suas ordens de compra
                e venda. A EXE envia o resultado das transações para a
                corretora, que fica responsável pela boletagem e pela liquidação
                das operações. Todo o relacionamento de crédito com o clientes
                continuam sendo gerenciado pela corretora parceira.
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
