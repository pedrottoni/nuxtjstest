<script setup lang="ts">
  import { ref } from 'vue'
  import TabBar from '~/components/TabBar.vue'

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
      title: 'Commodities',
      value: 'tab3',
      disabled: 'false',
    },
    {
      title: 'Funcionamento',
      value: 'tab4',
      disabled: 'false',
    },
  ])
</script>
<template>
  <section class="bg-slate-100 py-32">
    <div
      class="container flex flex-col gap-8 mx-auto place-items-center px-4 md:justify-between lg:px-40"
    >
      <div
        class="flex-col mb-14 place-items-center text-center w-12/12 md:max-w-xl lg:flex"
      >
        <h3>O que fazemos</h3>
        <h2>Uma plataforma ágil e eficiente para grandes negociações</h2>
      </div>
      <TabBar :tabs="tabs" active="tab1">
        <template #content="{ active }">
          <template v-if="active == 'tab1'">
            <NuxtImg src="about.png" class="w-1/2'" />
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
              <UButton
                to=""
                label="Comece agora"
                size="md"
                class="rounded-xl mt-8 px-7 py-3"
                color="tertiary"
              />
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
                Provemos para as corretoras a única plataforma de leilão duplo
                (com múltiplos compradores e vendedores) que alia rapidez,
                eficiência na formação de preços, anonimato e ausência de
                conflitos de interesse.
              </p>
              <UButton
                to=""
                label="Comece agora"
                size="md"
                class="rounded-xl mt-8 px-7 py-3"
                color="tertiary"
              />
            </div>
          </template>
          <template v-if="active == 'tab3'">
            <NuxtImg src="commodities.png" class="w-1/2'" />
            <div>
              <h5 class="mb-6">
                Solução para negociação de mercados de commodities
              </h5>
              <p>
                A plataforma soluciona problemas de negociação de todos os
                mercados de commodities – aqui entendidos como mercados em que
                são negociados ativos fungíveis (cujas características são
                iguais).
              </p>
              <UButton
                to=""
                label="Comece agora"
                size="md"
                class="rounded-xl mt-8 px-7 py-3"
                color="tertiary"
              />
            </div>
          </template>
          <template v-if="active == 'tab4'">
            <NuxtImg src="funcionamento.png" class="w-1/2'" />
            <div>
              <h5 class="mb-6">
                Funcionamento<br />
                da plataforma
              </h5>
              <p class="mb-4">
                Os traders da corretora acessam a plataforma e inserem suas
                ordens de compra e venda. A EXE Auctions envia o resultado das
                transações para as corretoras, que são as responsáveis pela
                boletagem e pela liquidação das operações.
              </p>
              <p>
                Em breve, a plataforma da EXE Auctions estará disponível para
                transações com títulos da dívida pública brasileira.
              </p>
              <UButton
                to=""
                label="Comece agora"
                size="md"
                class="rounded-xl mt-8 px-7 py-3"
                color="tertiary"
              />
            </div>
          </template>
        </template>
      </TabBar>
    </div>
  </section>
</template>
<style scoped></style>
