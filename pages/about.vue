<script setup lang="ts">
  import { ref } from 'vue'
  import TabBar from '~/components/TabBar.vue'

  definePageMeta({
    layout: 'default',
    name: 'about',
    title: 'O que fazemos',
    navOrder: 4,
  })
  useHead({
    title: () => 'O que fazemos',
  })

  const items = [
    {
      label: 'A EXE Auctions é uma dark pool?',
      slot: 'faq1',
    },
    {
      label:
        'Como funciona essa historia das quantidades? Voces nao estao dando vantagem para os grandes?',
      slot: 'faq2',
    },
    {
      label: 'O que é o leilao de troca?',
      slot: 'faq3',
    },
    {
      label: 'Vocês fazem alguma coisa ESG?',
      slot: 'faq4',
    },
  ]

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
    <main class="overflow-hidden">
        <HeroPages title="Leilões financeiros ágeis e transparentes" subtitle="Leilões financeiros em alta velocidade, com segurança e formação de preços por oferta e demanda e pós definidos" img="about.png" buttom estilo="absolute w-1/2 aboutimg"/>
        <section class="py-28">
            <div class="container flex flex-col gap-8 mx-auto place-items-center px-4 md:justify-between lg:px-40">
                <div class="flex-col mb-8 place-items-center text-center w-12/12 lg:flex lg:w-8/12">
                    <h3>O que fazemos</h3>
                    <h2>Uma plataforma ágil e eficiente para grandes negociações</h2>
                </div>
                <TabBar :tabs="tabs" active="tab1">
                    <template #content="{ active }">
                        <template v-if="active == 'tab1'">
                            <NuxtImg src="about.png" class="w-1/2'"/>
                            <div>
                                <h5 class="mb-6">
                  Solução ágil<br/>
                  e eficiente </h5>
                                <p>
                  A EXE Auctions é uma plataforma de leilão criada para trazer
                  mais eficiência e transparência na formação de preços em
                  mercados com poucos participantes. Isso é possível graças ao
                  seu modelo inovador, que combina as vantagens dos leilões e da
                  negociação por sistemas eletrônicos. </p>
                                <UButton to="" label="Comece agora" size="md" class="rounded-xl mt-8 px-7 py-3" color="tertiary"/>
                            </div>
                        </template>
                        <template v-if="active == 'tab2'">
                            <NuxtImg src="about.png" class="w-1/2'"/>
                            <div>
                                <h5 class="mb-6">
                  Plataforma<br/>
                  de leilão duplo </h5>
                                <p>
                  Provemos para as corretoras a única plataforma de leilão duplo
                  (com múltiplos compradores e vendedores) que alia rapidez,
                  eficiência na formação de preços, anonimato e ausência de
                  conflitos de interesse. </p>
                                <UButton to="" label="Comece agora" size="md" class="rounded-xl mt-8 px-7 py-3" color="tertiary"/>
                            </div>
                        </template>
                        <template v-if="active == 'tab3'">
                            <NuxtImg src="about.png" class="w-1/2'"/>
                            <div>
                                <h5 class="mb-6">
                  Solução para negociação de mercados de commodities </h5>
                                <p>
                  A plataforma soluciona problemas de negociação de todos os
                  mercados de commodities – aqui entendidos como mercados em que
                  são negociados ativos fungíveis (cujas características são
                  iguais). </p>
                                <UButton to="" label="Comece agora" size="md" class="rounded-xl mt-8 px-7 py-3" color="tertiary"/>
                            </div>
                        </template>
                        <template v-if="active == 'tab4'">
                            <NuxtImg src="about.png" class="w-1/2'"/>
                            <div>
                                <h5 class="mb-6">
                  Funcionamento<br/>
                  da plataforma </h5>
                                <p class="mb-4">
                  Os traders da corretora acessam a plataforma e inserem suas
                  ordens de compra e venda. A EXE Auctions envia o resultado das
                  transações para as corretoras, que são as responsáveis pela
                  boletagem e pela liquidação das operações. </p>
                                <p>
                  Em breve, a plataforma da EXE Auctions estará disponível para
                  transações com títulos da dívida pública brasileira. </p>
                                <UButton to="" label="Comece agora" size="md" class="rounded-xl mt-8 px-7 py-3" color="tertiary"/>
                            </div>
                        </template>
                    </template>
                </TabBar>
            </div>
        </section>
        <section class="bg-slate-100 py-28">
            <div class="container flex flex-col mx-auto place-items-center px-4">
                <div class="mx-auto w-full mb-12">
                    <div class="title md:max-w-md">
                        <h3>Não definido</h3>
                        <h2>Não definido</h2>
                        <p>
              Provemos para as corretoras a única plataforma de leilão duplo
              (com múltiplos compradores e vendedores) que alia rapidez,
              eficiência na formação de preços, anonimato e ausência de
              conflitos de interesse. </p>
                    </div>
                </div>
                <div class="bg-transparent comparativo gap-0 grid grid-cols-3 grid-rows-7 max-w-5xl overflow-hidden place-items-center relative rounded-2xl w-full md:grid-cols-9 md:h-full">
                    <div class="border-slate-200 hidden place-items-end place-self-end py-8 w-full md:col-span-3 md:flex"></div>
                    <div class="bg-slate-100 border-2 border-secondary-10 flex h-full place-content-center place-items-end place-self-end py-8 rounded-t-2xl w-full z-10 md:col-span-2">
                        <h6 class="font-semibold md:text-lg text-center text-slate-500">
              Calls </h6>
                    </div>
                    <div class="bg-slate-100 border-b-2 border-r-2 border-secondary-10 border-t-2 flex h-full place-content-center place-items-end place-self-end py-8 rounded-t-2xl w-full z-10 md:col-span-2">
                        <h6 class="font-semibold md:text-lg text-center text-slate-500">
              ATS/Dark pools </h6>
                    </div>
                    <div class="bg-primary-500 border-l-r-2 border-r-2 border-slate-300 border-t-r-2 flex h-full place-content-center place-items-end place-self-end py-8 rounded-t-2xl w-full z-10 md:col-span-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 138 66" class="w-5/12">
                            <path fill="#f1f4f9" d="M43.2 4.7H8.7v14h26.7v4.7H8.7v14h34.5V42H.5V0h42.7v4.7ZM94.8 0v4.7h34.5v14h-26.7v4.7h26.7v14H94.8V42h42.7V0H94.8ZM79.6 15.6 94.8 0 84 .1l-9.6 10.2 5.2 5.3Zm-5.3 5.6L53.6 0H43.2l20.3 21.4-20 20.6h10.7l20-20.8Zm19.5 20.1L79.6 26.6l-5.5 5.6 9.6 9.8h10.8l-.6-.7Z"/>
                            <path fill="#f1f4f9" d="M11.9 52.4c1 1 1.6 2.4 1.6 4.3v9.2h-2v-2.4c-.5.8-1.2 1.4-2.1 1.8-1 .5-2 .7-3.2.7-1.8 0-3.1-.4-4.2-1.2C1 64 .5 63 .5 61.7s.5-2.3 1.4-3c1-.8 2.5-1.2 4.6-1.2h4.9v-.9c0-1.3-.4-2.2-1.1-3-.8-.6-1.9-.9-3.3-.9-1 0-2 .2-2.8.5-1 .3-1.7.7-2.3 1.2L.9 53c.8-.6 1.7-1 2.8-1.4C4.8 51 6 51 7.2 51c2 0 3.6.4 4.7 1.4ZM9.5 63.6c.8-.5 1.5-1.2 1.9-2.2V59H6.5c-2.6 0-4 .9-4 2.6 0 .9.4 1.6 1 2 .8.6 1.7.8 3 .8 1.2 0 2.2-.2 3-.8ZM35 51v15h-2v-2.7a5 5 0 0 1-2.3 2 7 7 0 0 1-3.3.8c-2 0-3.6-.5-4.8-1.6a6.5 6.5 0 0 1-1.7-4.8v-8.5h2v8.3a5 5 0 0 0 1.3 3.6c.8.8 2 1.2 3.4 1.2 1.7 0 3-.5 3.9-1.4 1-1 1.4-2.3 1.4-4v-7.7h2Zm10 14a7.1 7.1 0 0 1-2.8-2.6c-.7-1.2-1-2.5-1-4A7.1 7.1 0 0 1 45 52a8.5 8.5 0 0 1 7.6-.2c1 .5 1.9 1.2 2.5 2.2l-1.6 1a4.8 4.8 0 0 0-1.9-1.6 6 6 0 0 0-2.6-.6c-1 0-2 .2-3 .7-.9.5-1.6 1.2-2 2a6 6 0 0 0-.8 3 6 6 0 0 0 .7 3c.5 1 1.2 1.6 2.1 2.1 1 .5 2 .7 3 .7s1.8-.2 2.6-.5c.8-.4 1.4-1 2-1.6l1.5 1c-.6 1-1.4 1.7-2.5 2.2a8 8 0 0 1-3.6.7c-1.5 0-2.9-.3-4-1Zm24.3 0a4 4 0 0 1-1.4.7L66 66a5 5 0 0 1-3.4-1.1 4.2 4.2 0 0 1-1.2-3.2v-9h-2.7v-1.6h2.7v-3.3h2.1v3.3h4.7v1.7h-4.7v8.8c0 .9.3 1.5.7 2a3 3 0 0 0 2 .7c.4 0 .9 0 1.3-.2a3 3 0 0 0 1-.6l.7 1.5ZM75 47.4a1.3 1.3 0 0 1 0-2c.3-.3.6-.4 1-.4.5 0 .9.1 1.2.4.3.3.4.6.4 1s-.1.7-.4 1c-.3.3-.7.4-1.1.4-.5 0-.8-.1-1.1-.4Zm0 3.7h2.1v14.8h-2V51ZM87.1 65a7.3 7.3 0 0 1-3.8-6.5 7.1 7.1 0 0 1 3.9-6.5c1.1-.7 2.5-1 4-1a8 8 0 0 1 4 1 7 7 0 0 1 2.8 2.6 7 7 0 0 1 1 3.9 7.1 7.1 0 0 1-3.8 6.6 9 9 0 0 1-8-.1Zm7-1.5c.9-.5 1.6-1.1 2-2a6 6 0 0 0 .8-3 6 6 0 0 0-.8-3 5 5 0 0 0-2-2 6 6 0 0 0-3-.8 6 6 0 0 0-3 .7c-.8.5-1.5 1.2-2 2a6 6 0 0 0-.7 3 6 6 0 0 0 .7 3 5 5 0 0 0 2 2.1 6 6 0 0 0 3 .7 6 6 0 0 0 3-.7Zm23.6-10.9c1.1 1 1.7 2.6 1.7 4.7v8.6h-2.1v-8.4c0-1.6-.4-2.7-1.2-3.5-.8-.8-2-1.2-3.4-1.2-1.7 0-3 .4-4 1.4-1 1-1.5 2.2-1.5 3.9v7.8h-2V51h2v2.7c.5-.9 1.3-1.6 2.3-2 1-.6 2.2-.8 3.5-.8 2 0 3.5.5 4.7 1.6Zm9.8 12.9c-1.2-.4-2-.8-2.7-1.3l1-1.6c.6.5 1.4.9 2.4 1.2 1 .3 2 .4 3 .4 1.5 0 2.5-.2 3.2-.6.7-.4 1-1 1-1.8 0-.5-.2-1-.6-1.2-.3-.4-.8-.6-1.4-.8l-2.2-.4c-1.3-.2-2.3-.5-3-.7-.8-.2-1.5-.6-2-1.2-.6-.6-.8-1.3-.8-2.3 0-1.3.5-2.3 1.6-3 1-.9 2.6-1.2 4.5-1.2a12 12 0 0 1 5.5 1.3l-1 1.6a8 8 0 0 0-4.5-1.2c-1.3 0-2.3.2-3 .6-.7.5-1 1-1 1.8 0 .6.2 1 .5 1.4.4.3.9.6 1.5.7l2.3.5c1.3.2 2.2.5 3 .7.7.2 1.4.6 2 1.1.4.6.7 1.3.7 2.3 0 1.3-.6 2.3-1.7 3a8.3 8.3 0 0 1-4.7 1.2c-1.2 0-2.4-.2-3.6-.5Z"/>
                        </svg>
                    </div>
                    <div class="bg-slate-100 border-2 border-slate-200 col-span-3 flex h-full mt-8 place-content-center place-items-center w-full md:mt-0 md:pl-8 md:place-content-start md:rounded-tl-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 55 48" class="h-full mr-3 w-8">
                            <circle cx="40" cy="32.9" r="15" fill="#66DAFF" fill-opacity=".6"/>
                            <path fill="#7777F8" d="m28.5 19.8 18-11v22H24v4.5h22.5c1.2 0 2.3-.4 3.2-1.3.9-.9 1.3-2 1.3-3.1V4.4c0-1.2-.4-2.2-1.3-3.1-1-.9-2-1.3-3.2-1.3h-36C9.2 0 8.2.4 7.3 1.3 6.4 2.2 6 3.2 6 4.4v11h4.5V8.8l18 11Zm0-4.4-18-11h36l-18 11Zm18-6.6V4.4 31 9Z"/>
                            <path fill="#7777F8" fill-rule="evenodd" d="M17.7 37.7c-2 .9-4.4 1.3-7.3 1.3-2.8 0-5.3-.4-7.3-1.3S0 35.7 0 34.3v-11c0-1.4 1.2-2.5 3.2-3.4 2-.9 4.4-1.3 7.2-1.3s5.3.4 7.3 1.3 3.1 2 3.1 3.4v11c0 1.4-1.1 2.5-3 3.4Zm-9.5-7.1a22.4 22.4 0 0 0 8.4-.8l1.4-.6v-2.6a11.3 11.3 0 0 1-3 1 20.5 20.5 0 0 1-6.9.3A20.7 20.7 0 0 1 3 26.6v2.6a11.2 11.2 0 0 0 3.2 1l2 .4ZM7.8 36a18 18 0 0 0 9.4-1.2c.5-.2.7-.4.8-.6v-2.1a11.3 11.3 0 0 1-3 1 20.5 20.5 0 0 1-6.9.3A20.7 20.7 0 0 1 3 32v2.1c0 .2.3.4.7.6l1.8.7 2.4.5Zm2.6-10.8a18.4 18.4 0 0 1-6.8-1.4c-.4-.2-.6-.3-.7-.5l.7-.5 1.9-.7a18 18 0 0 1 11.7.7l.7.5c-.1.2-.3.4-.7.5a18.2 18.2 0 0 1-6.8 1.4Z" clip-rule="evenodd"/>
                        </svg>
                        <h6 class="font-semibold text-center text-slate-600 md:text-left">
              Modelo de precificação </h6>
                    </div>
                    <div class="bg-slate-50 border-b-2 border-l-2 border-r-2 border-slate-200 flex flex-col h-full place-content-end place-items-center px-3 py-10 w-full md:col-span-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 47 54" class="like w-3/12">
                            <ellipse cx="30.9" cy="37.4" fill="#A2CF66" opacity=".2" rx="16" ry="16.4"/>
                            <path fill="#A2CF66" d="M38.7 22.1a6.5 6.5 0 0 0 1.3-4c0-2.2-1.3-4.3-3.3-5.5-.5-.3-1-.5-1.7-.5H23l.3-6.2A5.4 5.4 0 0 0 18 .2a5.8 5.8 0 0 0-5.5 4.3L8 20.2H1.6c-.9 0-1.6.7-1.6 1.6v18.4c0 .9.7 1.6 1.6 1.6h30c.5 0 1 0 1.4-.3a6.5 6.5 0 0 0 3.6-7.8 6.5 6.5 0 0 0 1-5.8 6.5 6.5 0 0 0 1-5.8Zm-35.1 16V23.9h4v14.4h-4Zm31.8-17.8-1 1 .6 1.3c.2.4.4.9.4 1.4 0 .8-.4 1.6-1 2.1l-1.1 1 .7 1.3c.2.4.3.9.3 1.4 0 .8-.3 1.6-1 2.1l-1 1 .7 1.3a2.9 2.9 0 0 1-1.3 4H10.8V23.7l5-18.2a2.2 2.2 0 0 1 2-1.7c.4 0 .8.2 1 .4.6.4.9 1 .8 1.5l-.5 10H35a3 3 0 0 1 1.4 2.5c0 .8-.4 1.6-1 2.1Z"/>
                        </svg>
                        <p class="font-medium lg:text-base leading-4 lg:leading-5 mt-2 text-center text-slate-600">
              Por oferta<br/>
              e demanda </p>
                    </div>
                    <div class="bg-slate-50 border-b-2 border-r-2 border-slate-200 flex flex-col h-full md:col-span-2 place-content-end place-items-center px-3 py-10 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 54" class="like w-3/12" fill="none">
                            <ellipse cx="30.9" cy="24.4" fill="#D03435" opacity=".2" rx="16" ry="16.4"/>
                            <path fill="#D03435" d="M38.7 19.7a6.5 6.5 0 0 1 1.3 4c0 2.2-1.3 4.3-3.3 5.5-.5.3-1 .5-1.7.5H23l.3 6.2a5.4 5.4 0 0 1-5.4 5.7 5.8 5.8 0 0 1-5.5-4.3L8 21.6H1.6C.7 21.6 0 20.9 0 20V1.6C0 .7.7 0 1.6 0h30c.5 0 1 0 1.4.3A6.5 6.5 0 0 1 36.6 8a6.5 6.5 0 0 1 1 5.8 6.5 6.5 0 0 1 1 5.8ZM3.6 3.7V18h4V3.6h-4Zm31.8 17.8-1-1 .6-1.3c.2-.4.4-.9.4-1.4 0-.8-.4-1.6-1-2.1l-1.1-1 .7-1.3c.2-.4.3-.9.3-1.4 0-.8-.3-1.6-1-2.1l-1-1 .7-1.3a2.9 2.9 0 0 0-1.3-4H10.8v14.5l5 18.2a2.2 2.2 0 0 0 2 1.7c.4 0 .8-.2 1-.4.6-.4.9-1 .8-1.5l-.5-10H35a3 3 0 0 0 1.4-2.5c0-.8-.4-1.6-1-2.1Z"/>
                        </svg>
                        <p class="font-medium lg:text-base leading-4 lg:leading-5 mt-2 text-center text-slate-600">
              Predefinido<br/>
              pelo broker </p>
                    </div>
                    <div class="bg-real-white-100 border-b-2 border-r-2 border-slate-200 flex flex-col h-full place-content-end place-items-center px-3 py-10 w-full z-10 md:col-span-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 47 54" class="like w-3/12">
                            <ellipse cx="30.9" cy="37.4" fill="#A2CF66" opacity=".2" rx="16" ry="16.4"/>
                            <path fill="#A2CF66" d="M38.7 22.1a6.5 6.5 0 0 0 1.3-4c0-2.2-1.3-4.3-3.3-5.5-.5-.3-1-.5-1.7-.5H23l.3-6.2A5.4 5.4 0 0 0 18 .2a5.8 5.8 0 0 0-5.5 4.3L8 20.2H1.6c-.9 0-1.6.7-1.6 1.6v18.4c0 .9.7 1.6 1.6 1.6h30c.5 0 1 0 1.4-.3a6.5 6.5 0 0 0 3.6-7.8 6.5 6.5 0 0 0 1-5.8 6.5 6.5 0 0 0 1-5.8Zm-35.1 16V23.9h4v14.4h-4Zm31.8-17.8-1 1 .6 1.3c.2.4.4.9.4 1.4 0 .8-.4 1.6-1 2.1l-1.1 1 .7 1.3c.2.4.3.9.3 1.4 0 .8-.3 1.6-1 2.1l-1 1 .7 1.3a2.9 2.9 0 0 1-1.3 4H10.8V23.7l5-18.2a2.2 2.2 0 0 1 2-1.7c.4 0 .8.2 1 .4.6.4.9 1 .8 1.5l-.5 10H35a3 3 0 0 1 1.4 2.5c0 .8-.4 1.6-1 2.1Z"/>
                        </svg>
                        <p class="font-medium lg:text-base leading-4 lg:leading-5 mt-2 text-center text-slate-600">
              Por oferta<br/>
              e demanda </p>
                    </div>
                    <div class="bg-slate-100 border-2 border-slate-200 col-span-3 flex h-full mt-8 place-content-center place-items-center w-full md:border-b-2 md:border-r-0 md:border-t-0 md:mt-0 md:pl-8 md:place-content-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 55 48" class="h-full mr-3 w-8">
                            <circle cx="40" cy="33" r="15" fill="#66DAFF" fill-opacity=".6"/>
                            <path fill="#7777F8" d="M33 38.5c-5.2 0-9.7-1.8-13.3-5.5a18.4 18.4 0 0 1-5.5-13.5c0-5.3 1.8-9.7 5.5-13.4A18 18 0 0 1 33 .5c5.2 0 9.7 1.9 13.4 5.6 3.7 3.7 5.5 8.1 5.5 13.4 0 5.3-1.8 9.8-5.5 13.5A18.2 18.2 0 0 1 33 38.5Zm0-4.8c4 0 7.4-1.3 10.1-4.1 2.8-2.8 4.2-6.1 4.2-10.1s-1.4-7.3-4.2-10a13.6 13.6 0 0 0-10-4.3c-4 0-7.3 1.4-10 4.2a13.8 13.8 0 0 0-4.2 10.1c0 4 1.4 7.3 4.1 10 2.8 2.9 6.2 4.3 10 4.3Zm5.5-5.4 3.3-3.3-6.3-6.4V10h-4.8v10.5l7.8 7.8Zm-36.1-16V7.7h9.4v4.8H2.4ZM0 22v-5h11.8v5H0Zm2.4 9.5v-4.8h9.4v4.8H2.4Z"/>
                        </svg>
                        <h6 class="text-center font-semibold md:text-left text-slate-600">
              Processo de Negociação </h6>
                    </div>
                    <div class="bg-slate-50 border-b-2 border-l-2 border-r-2 border-slate-200 flex flex-col h-full place-content-end place-items-center px-3 py-10 w-full md:col-span-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 54" class="like w-3/12" fill="none">
                            <ellipse cx="30.9" cy="24.4" fill="#D03435" opacity=".2" rx="16" ry="16.4"/>
                            <path fill="#D03435" d="M38.7 19.7a6.5 6.5 0 0 1 1.3 4c0 2.2-1.3 4.3-3.3 5.5-.5.3-1 .5-1.7.5H23l.3 6.2a5.4 5.4 0 0 1-5.4 5.7 5.8 5.8 0 0 1-5.5-4.3L8 21.6H1.6C.7 21.6 0 20.9 0 20V1.6C0 .7.7 0 1.6 0h30c.5 0 1 0 1.4.3A6.5 6.5 0 0 1 36.6 8a6.5 6.5 0 0 1 1 5.8 6.5 6.5 0 0 1 1 5.8ZM3.6 3.7V18h4V3.6h-4Zm31.8 17.8-1-1 .6-1.3c.2-.4.4-.9.4-1.4 0-.8-.4-1.6-1-2.1l-1.1-1 .7-1.3c.2-.4.3-.9.3-1.4 0-.8-.3-1.6-1-2.1l-1-1 .7-1.3a2.9 2.9 0 0 0-1.3-4H10.8v14.5l5 18.2a2.2 2.2 0 0 0 2 1.7c.4 0 .8-.2 1-.4.6-.4.9-1 .8-1.5l-.5-10H35a3 3 0 0 0 1.4-2.5c0-.8-.4-1.6-1-2.1Z"/>
                        </svg>
                        <p class="font-medium lg:text-base leading-4 lg:leading-5 mt-2 text-center text-slate-600">
              Lento e<br/>
              exposto </p>
                    </div>
                    <div class="bg-slate-50 border-b-2 border-r-2 border-slate-200 flex flex-col h-full md:col-span-2 place-content-end place-items-center px-3 py-10 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 47 54" class="like w-3/12">
                            <ellipse cx="30.9" cy="37.4" fill="#A2CF66" opacity=".2" rx="16" ry="16.4"/>
                            <path fill="#A2CF66" d="M38.7 22.1a6.5 6.5 0 0 0 1.3-4c0-2.2-1.3-4.3-3.3-5.5-.5-.3-1-.5-1.7-.5H23l.3-6.2A5.4 5.4 0 0 0 18 .2a5.8 5.8 0 0 0-5.5 4.3L8 20.2H1.6c-.9 0-1.6.7-1.6 1.6v18.4c0 .9.7 1.6 1.6 1.6h30c.5 0 1 0 1.4-.3a6.5 6.5 0 0 0 3.6-7.8 6.5 6.5 0 0 0 1-5.8 6.5 6.5 0 0 0 1-5.8Zm-35.1 16V23.9h4v14.4h-4Zm31.8-17.8-1 1 .6 1.3c.2.4.4.9.4 1.4 0 .8-.4 1.6-1 2.1l-1.1 1 .7 1.3c.2.4.3.9.3 1.4 0 .8-.3 1.6-1 2.1l-1 1 .7 1.3a2.9 2.9 0 0 1-1.3 4H10.8V23.7l5-18.2a2.2 2.2 0 0 1 2-1.7c.4 0 .8.2 1 .4.6.4.9 1 .8 1.5l-.5 10H35a3 3 0 0 1 1.4 2.5c0 .8-.4 1.6-1 2.1Z"/>
                        </svg>
                        <p class="font-medium lg:text-base leading-4 lg:leading-5 mt-2 text-center text-slate-600">
              Rápido com<br/>
              ordens seladas </p>
                    </div>
                    <div class="bg-real-white-100 border-b-2 border-r-2 border-slate-200 flex flex-col h-full md-row-span-2 place-content-end place-items-center px-3 py-10 w-full z-10 md:col-span-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 47 54" class="like w-3/12">
                            <ellipse cx="30.9" cy="37.4" fill="#A2CF66" opacity=".2" rx="16" ry="16.4"/>
                            <path fill="#A2CF66" d="M38.7 22.1a6.5 6.5 0 0 0 1.3-4c0-2.2-1.3-4.3-3.3-5.5-.5-.3-1-.5-1.7-.5H23l.3-6.2A5.4 5.4 0 0 0 18 .2a5.8 5.8 0 0 0-5.5 4.3L8 20.2H1.6c-.9 0-1.6.7-1.6 1.6v18.4c0 .9.7 1.6 1.6 1.6h30c.5 0 1 0 1.4-.3a6.5 6.5 0 0 0 3.6-7.8 6.5 6.5 0 0 0 1-5.8 6.5 6.5 0 0 0 1-5.8Zm-35.1 16V23.9h4v14.4h-4Zm31.8-17.8-1 1 .6 1.3c.2.4.4.9.4 1.4 0 .8-.4 1.6-1 2.1l-1.1 1 .7 1.3c.2.4.3.9.3 1.4 0 .8-.3 1.6-1 2.1l-1 1 .7 1.3a2.9 2.9 0 0 1-1.3 4H10.8V23.7l5-18.2a2.2 2.2 0 0 1 2-1.7c.4 0 .8.2 1 .4.6.4.9 1 .8 1.5l-.5 10H35a3 3 0 0 1 1.4 2.5c0 .8-.4 1.6-1 2.1Z"/>
                        </svg>
                        <p class="font-medium lg:text-base leading-4 lg:leading-5 mt-2 text-center text-slate-600">
              Rápido com<br/>
              ordens seladas </p>
                    </div>
                    <div class="bg-slate-100 border-2 border-slate-200 col-span-3 flex h-full place-content-center place-items-center pt-8 w-full md:border-b-r-0 md:border-r-0 md:border-t-0 md:pl-8 md:place-content-start md:pt-0 md:rounded-bl-2xl">
                        <svg width="55" height="49" viewBox="0 0 55 49" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full mr-3 w-8">
                            <circle cx="40" cy="33.8984" r="15" fill="#66DAFF" fill-opacity="0.6"/>
                            <path d="M15 40.5L11.5 36.9375L17.9375 30.5H0V25.5H17.9375L11.5 19.0625L15 15.5L27.5 28L15 40.5ZM35 25.5L22.5 13L35 0.5L38.5 4.0625L32.0625 10.5H50V15.5H32.0625L38.5 21.9375L35 25.5Z" fill="#7777F8"/>
                        </svg>
                        <h6 class="text-center font-semibold md:text-left text-slate-600">
              Ordens de Troca </h6>
                    </div>
                    <div class="bg-slate-50 border-b-2 border-l-2 border-r-2 border-slate-200 border-t-b-2 flex flex-col h-full place-content-end place-items-center px-3 py-10 rounded-bl-2xl w-full md:col-span-2 md:pb-12 md:rounded-bl-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 54" class="like w-3/12" fill="none">
                            <ellipse cx="30.9" cy="24.4" fill="#D03435" opacity=".2" rx="16" ry="16.4"/>
                            <path fill="#D03435" d="M38.7 19.7a6.5 6.5 0 0 1 1.3 4c0 2.2-1.3 4.3-3.3 5.5-.5.3-1 .5-1.7.5H23l.3 6.2a5.4 5.4 0 0 1-5.4 5.7 5.8 5.8 0 0 1-5.5-4.3L8 21.6H1.6C.7 21.6 0 20.9 0 20V1.6C0 .7.7 0 1.6 0h30c.5 0 1 0 1.4.3A6.5 6.5 0 0 1 36.6 8a6.5 6.5 0 0 1 1 5.8 6.5 6.5 0 0 1 1 5.8ZM3.6 3.7V18h4V3.6h-4Zm31.8 17.8-1-1 .6-1.3c.2-.4.4-.9.4-1.4 0-.8-.4-1.6-1-2.1l-1.1-1 .7-1.3c.2-.4.3-.9.3-1.4 0-.8-.3-1.6-1-2.1l-1-1 .7-1.3a2.9 2.9 0 0 0-1.3-4H10.8v14.5l5 18.2a2.2 2.2 0 0 0 2 1.7c.4 0 .8-.2 1-.4.6-.4.9-1 .8-1.5l-.5-10H35a3 3 0 0 0 1.4-2.5c0-.8-.4-1.6-1-2.1Z"/>
                        </svg>
                        <p class="font-medium lg:text-base leading-4 lg:leading-5 mt-2 text-center text-slate-600">
              Não permite<br/>
              ordens de troca </p>
                    </div>
                    <div class="bg-slate-50 border-b-2 border-r-2 border-slate-200 flex flex-col h-full md:col-span-2 md:pb-12 place-content-end place-items-center px-3 py-10 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 54" class="like w-3/12" fill="none">
                            <ellipse cx="30.9" cy="24.4" fill="#D03435" opacity=".2" rx="16" ry="16.4"/>
                            <path fill="#D03435" d="M38.7 19.7a6.5 6.5 0 0 1 1.3 4c0 2.2-1.3 4.3-3.3 5.5-.5.3-1 .5-1.7.5H23l.3 6.2a5.4 5.4 0 0 1-5.4 5.7 5.8 5.8 0 0 1-5.5-4.3L8 21.6H1.6C.7 21.6 0 20.9 0 20V1.6C0 .7.7 0 1.6 0h30c.5 0 1 0 1.4.3A6.5 6.5 0 0 1 36.6 8a6.5 6.5 0 0 1 1 5.8 6.5 6.5 0 0 1 1 5.8ZM3.6 3.7V18h4V3.6h-4Zm31.8 17.8-1-1 .6-1.3c.2-.4.4-.9.4-1.4 0-.8-.4-1.6-1-2.1l-1.1-1 .7-1.3c.2-.4.3-.9.3-1.4 0-.8-.3-1.6-1-2.1l-1-1 .7-1.3a2.9 2.9 0 0 0-1.3-4H10.8v14.5l5 18.2a2.2 2.2 0 0 0 2 1.7c.4 0 .8-.2 1-.4.6-.4.9-1 .8-1.5l-.5-10H35a3 3 0 0 0 1.4-2.5c0-.8-.4-1.6-1-2.1Z"/>
                        </svg>
                        <p class="font-medium lg:text-base leading-4 lg:leading-5 mt-2 text-center text-slate-600">
              Não permite<br/>
              ordens de troca </p>
                    </div>
                    <div class="bg-real-white-100 border-b-2 border-r-2 border-slate-200 flex flex-col h-full place-content-end place-items-center px-3 py-10 rounded-br-2xl w-full z-10 md:col-span-2 md:pb-12">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 47 54" class="like w-3/12">
                            <ellipse cx="30.9" cy="37.4" fill="#A2CF66" opacity=".2" rx="16" ry="16.4"/>
                            <path fill="#A2CF66" d="M38.7 22.1a6.5 6.5 0 0 0 1.3-4c0-2.2-1.3-4.3-3.3-5.5-.5-.3-1-.5-1.7-.5H23l.3-6.2A5.4 5.4 0 0 0 18 .2a5.8 5.8 0 0 0-5.5 4.3L8 20.2H1.6c-.9 0-1.6.7-1.6 1.6v18.4c0 .9.7 1.6 1.6 1.6h30c.5 0 1 0 1.4-.3a6.5 6.5 0 0 0 3.6-7.8 6.5 6.5 0 0 0 1-5.8 6.5 6.5 0 0 0 1-5.8Zm-35.1 16V23.9h4v14.4h-4Zm31.8-17.8-1 1 .6 1.3c.2.4.4.9.4 1.4 0 .8-.4 1.6-1 2.1l-1.1 1 .7 1.3c.2.4.3.9.3 1.4 0 .8-.3 1.6-1 2.1l-1 1 .7 1.3a2.9 2.9 0 0 1-1.3 4H10.8V23.7l5-18.2a2.2 2.2 0 0 1 2-1.7c.4 0 .8.2 1 .4.6.4.9 1 .8 1.5l-.5 10H35a3 3 0 0 1 1.4 2.5c0 .8-.4 1.6-1 2.1Z"/>
                        </svg>
                        <p class="font-medium lg:text-base leading-4 lg:leading-5 mt-2 text-center text-slate-600">
              Permite ordens<br/>
              de troca </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-28">
            <div class="container flex flex-col mx-auto place-items-center px-4">
                <div class="flex-col mb-16 text-center lg:flex lg:max-w-2xl lg:place-items-center">
                    <h3>Nosso processo</h3>
                    <h2>
            O leilão ocorre<br/>
            em duas etapas </h2>
                    <p class="mt-4 my-8">
            O leilão funciona em duas etapas. Na primeira, são recebidas as
            ordens de compra e venda e é feito um cálculo dos preços ofertados e
            alocações (quantidades dos ativos que serão destinados a cada
            participante). Na segunda rodada, os preços já estão definidos e os
            participantes podem colocar novas ordens de compra, venda ou troca
            casada. </p>
                </div>
                <div class="flex flex-col gap-12 place-items-center w-full md:flex-row md:gap-8 md:justify-evenly lg:gap-12">
                    <div class="flex flex-col">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 402 147" class="mb-4">
                            <path stroke="#C8D1E1" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M2 140.86V128h398v16.92"/>
                            <path fill="#FCA311" d="M195.4 61V32.41a17.9 17.9 0 0 1-2.72 1.76c-.8.39-1.6.68-2.4.9l-.73-5.1c.88-.24 1.8-.66 2.76-1.26.96-.6 1.85-1.28 2.68-2.05a9.71 9.71 0 0 0 1.89-2.41h4.14V61h-5.61Zm12.36-29.01c-.75 0-1.39-.22-1.9-.66a2.32 2.32 0 0 1-.77-1.86c0-.58.15-1.07.46-1.46.32-.39.73-.7 1.22-.94a7 7 0 0 1 1.6-.54c.58-.12 1.13-.2 1.65-.24a.9.9 0 0 0-.31-.69c-.2-.17-.57-.26-1.11-.26-.41 0-.83.05-1.26.14-.42.09-.86.22-1.3.39l-.17-2.05a9.56 9.56 0 0 1 3.39-.65c1.05 0 1.88.27 2.49.8.6.53.91 1.32.91 2.38v2.47c0 .48.05.78.13.89.1.1.28.15.52.15h.37l-.17 2.13h-1.09c-.49 0-.9-.09-1.24-.26a2.06 2.06 0 0 1-.77-.69c-.29.3-.68.54-1.17.7-.49.17-.98.25-1.48.25Zm1-1.88a2.27 2.27 0 0 0 1.29-.4V28a5.1 5.1 0 0 0-1.56.37.95.95 0 0 0-.63.93c0 .27.08.48.24.62.17.13.4.2.66.2Z"/>
                            <path fill="#3553AA" d="M168.6 92V72.4h12.55v3.47h-8.88v4.17h6.9v3.48h-6.9v5h9.16V92h-12.82Zm19.6.28a3.9 3.9 0 0 1-2.14-.53 3.33 3.33 0 0 1-1.22-1.39 4.08 4.08 0 0 1-.4-1.75v-7.75h-1.98l.3-2.86h1.69v-3.08l3.47-.36V78H191v2.86h-3.08v6.32c0 .71.04 1.23.12 1.54.09.31.28.5.58.6.3.07.77.1 1.43.1h.95l-.31 2.86h-2.5Zm8.08 0a4.3 4.3 0 0 1-2.04-.49 3.76 3.76 0 0 1-1.47-1.44 4.44 4.44 0 0 1-.55-2.27c0-.8.19-1.47.55-2.03.37-.57.86-1.04 1.45-1.41a8.1 8.1 0 0 1 1.97-.9 13.58 13.58 0 0 1 3.9-.67c-.04-.8-.24-1.39-.62-1.75-.37-.37-1-.55-1.9-.55a6.4 6.4 0 0 0-1.83.27c-.6.17-1.26.43-2 .8l-.31-2.83a10.92 10.92 0 0 1 5.1-1.23c1.04 0 1.94.18 2.7.56.75.37 1.33.97 1.75 1.8.4.82.61 1.91.61 3.26v3.78c0 .7.03 1.21.1 1.53.06.3.19.5.36.59.18.08.44.12.77.12h.45l-.3 2.86h-1.27c-.52 0-.99-.07-1.4-.21a3.06 3.06 0 0 1-1.73-1.41c-.46.5-1.08.91-1.86 1.2-.78.28-1.59.42-2.43.42Zm1.46-2.66a3.64 3.64 0 0 0 2.38-1v-3.2a8.9 8.9 0 0 0-1.96.32c-.66.19-1.2.46-1.64.83a1.7 1.7 0 0 0-.66 1.37c0 .57.15 1 .45 1.27.3.27.78.41 1.43.41Zm9.46 9.16V78h2.8l.68 2.32-1.04-.36a8.17 8.17 0 0 1 2.1-1.58c.76-.4 1.68-.6 2.77-.6 1.37 0 2.53.33 3.46.99a6.18 6.18 0 0 1 2.11 2.65c.49 1.1.73 2.3.73 3.6a8.8 8.8 0 0 1-.73 3.62 6.18 6.18 0 0 1-2.11 2.65c-.93.66-2.09.99-3.46.99a6.67 6.67 0 0 1-2.66-.45 7.53 7.53 0 0 1-2.07-1.43l.9-.7v9.08h-3.48Zm6.78-9.36c1.04 0 1.84-.4 2.4-1.21a5.4 5.4 0 0 0 .88-3.18c0-1.3-.3-2.37-.87-3.18a2.77 2.77 0 0 0-2.41-1.22c-.8 0-1.46.19-1.97.56-.52.38-.9.9-1.14 1.56a6.53 6.53 0 0 0-.36 2.28c0 .87.12 1.63.36 2.3.25.65.62 1.16 1.14 1.53.5.38 1.17.56 1.97.56Zm12.27 2.86a4.3 4.3 0 0 1-2.04-.49 3.76 3.76 0 0 1-1.47-1.44 4.44 4.44 0 0 1-.55-2.27c0-.8.18-1.47.55-2.03.37-.57.86-1.04 1.45-1.41a8.1 8.1 0 0 1 1.96-.9 16.58 16.58 0 0 1 3.9-.67c-.03-.8-.23-1.39-.6-1.75-.38-.37-1.01-.55-1.91-.55a6.4 6.4 0 0 0-1.83.27c-.6.17-1.26.43-2 .8L223.4 79a10.92 10.92 0 0 1 5.1-1.23c1.04 0 1.94.18 2.7.56a3.8 3.8 0 0 1 1.74 1.8c.41.82.62 1.91.62 3.26v3.78c0 .7.03 1.21.1 1.53.06.3.18.5.36.59.18.08.44.12.77.12h.45l-.3 2.86h-1.27c-.52 0-.99-.07-1.4-.21a3.06 3.06 0 0 1-1.73-1.41c-.46.5-1.08.91-1.87 1.2-.77.28-1.58.42-2.42.42Zm1.46-2.66a3.64 3.64 0 0 0 2.38-1v-3.2a8.9 8.9 0 0 0-1.96.32c-.66.19-1.2.46-1.64.83a1.7 1.7 0 0 0-.66 1.37c0 .57.15 1 .45 1.27.3.27.77.41 1.43.41Z"/>
                        </svg>
                        <div class="flex flex-row gap-10 justify-around place-items-center w-full md:gap-8 lg:gap-20">
                            <div class="flex flex-col gap-4 place-content-center place-items-center w-32 md:w-auto">
                                <nuxt-img src="/preco.svg" width="80"/>
                                <h6 class="font-semibold text-center text-slate-600">
                  Preço<br/>e lote </h6>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 41" class="h-10 md:max-h-8 md:w-3">
                                <path fill="#C8D1E1" d="M2.38 40.5a1.8 1.8 0 0 0 1.25-.55l18.16-18.16c.7-.71.7-1.86 0-2.57L3.63 1.06a1.81 1.81 0 1 0-2.57 2.57L17.94 20.5 1.06 37.38a1.82 1.82 0 0 0 1.32 3.12Z"/>
                            </svg>
                            <div class="flex flex-col gap-4 place-content-center place-items-center w-32 md:w-auto">
                                <nuxt-img src="/resultados.svg" width="80"/>
                                <h6 class="font-semibold text-slate-600 text-center">
                  Divulgação<br/>dos resultados </h6>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row gap-4 w-24">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 37 40" class="rotate-90 md:rotate-0">
                            <path fill="#204387" fill-opacity=".2" d="M33.04 14.48a6.3 6.3 0 0 1 0 10.9L9.44 39.01A6.3 6.3 0 0 1 0 33.56V6.3A6.3 6.3 0 0 1 9.44.85l23.6 13.63Z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 37 40" class="rotate-90 md:rotate-0">
                            <path fill="#204387" fill-opacity=".2" d="M33.04 14.48a6.3 6.3 0 0 1 0 10.9L9.44 39.01A6.3 6.3 0 0 1 0 33.56V6.3A6.3 6.3 0 0 1 9.44.85l23.6 13.63Z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 37 40" class="rotate-90 md:rotate-0">
                            <path fill="#204387" fill-opacity=".2" d="M33.04 14.48a6.3 6.3 0 0 1 0 10.9L9.44 39.01A6.3 6.3 0 0 1 0 33.56V6.3A6.3 6.3 0 0 1 9.44.85l23.6 13.63Z"/>
                        </svg>
                    </div>
                    <div class="flex flex-col">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 402 147" class="mb-4">
                            <path stroke="#C8D1E1" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M2 140.86V128h398v16.92"/>
                            <path fill="#FCA311" d="m185.38 60.97 9.93-15.15a98.51 98.51 0 0 0 2.96-4.75c.79-1.37 1.38-2.6 1.77-3.7.38-1.1.58-2.18.58-3.22 0-1.69-.49-3.03-1.46-4.01a5.2 5.2 0 0 0-3.93-1.48c-1.8 0-3.43.41-4.9 1.24a18.4 18.4 0 0 0-4.05 3.06l-.71-5.91a18.27 18.27 0 0 1 4.67-2.72 15.6 15.6 0 0 1 5.89-1.06c2.24 0 4.1.46 5.62 1.38a8.6 8.6 0 0 1 3.4 3.64c.78 1.51 1.17 3.2 1.17 5.04 0 1.53-.21 3.02-.63 4.46a24.2 24.2 0 0 1-1.96 4.62 79.29 79.29 0 0 1-3.4 5.6l-5.07 7.66h12.43v5.3h-22.3Zm26.86-29.06c-.75 0-1.39-.22-1.91-.66a2.34 2.34 0 0 1-.77-1.87c0-.58.15-1.07.47-1.46.32-.4.72-.71 1.22-.95a7.1 7.1 0 0 1 1.61-.55c.58-.12 1.14-.2 1.66-.24a.9.9 0 0 0-.32-.69c-.2-.17-.57-.26-1.11-.26-.42 0-.84.05-1.27.14a8.1 8.1 0 0 0-1.31.4l-.17-2.07a9.6 9.6 0 0 1 3.41-.65c1.06 0 1.89.26 2.5.8.62.53.92 1.33.92 2.4v2.48c0 .48.05.78.14.9.1.1.27.14.51.14h.38l-.17 2.14h-1.1c-.5 0-.9-.08-1.25-.25a2.06 2.06 0 0 1-.77-.7 3 3 0 0 1-1.17.71c-.5.16-1 .24-1.5.24Zm1.01-1.88a2.29 2.29 0 0 0 1.3-.4V27.9c-.61.06-1.14.19-1.57.38a.95.95 0 0 0-.63.93c0 .28.08.48.24.62.17.13.4.2.66.2Z"/>
                            <path fill="#204387" d="M168.6 91V71.4h12.55v3.47h-8.88v4.17h6.9v3.48h-6.9v5h9.16V91h-12.82Zm19.6.28a3.9 3.9 0 0 1-2.14-.53 3.33 3.33 0 0 1-1.22-1.39 4.08 4.08 0 0 1-.4-1.75v-7.75h-1.98l.3-2.86h1.69v-3.08l3.47-.36V77H191v2.86h-3.08v6.32c0 .71.04 1.23.12 1.54.09.31.28.5.58.6.3.07.77.1 1.43.1h.95l-.31 2.86h-2.5Zm8.08 0a4.3 4.3 0 0 1-2.04-.49 3.76 3.76 0 0 1-1.47-1.44 4.44 4.44 0 0 1-.55-2.27c0-.8.19-1.47.55-2.03.37-.57.86-1.04 1.45-1.41a8.1 8.1 0 0 1 1.97-.9 13.58 13.58 0 0 1 3.9-.67c-.04-.8-.24-1.39-.62-1.75-.37-.37-1-.55-1.9-.55a6.4 6.4 0 0 0-1.83.27c-.6.17-1.26.43-2 .8l-.31-2.83a10.92 10.92 0 0 1 5.1-1.23c1.04 0 1.94.18 2.7.56.75.37 1.33.97 1.75 1.8.4.82.61 1.91.61 3.26v3.78c0 .7.03 1.21.1 1.53.06.3.19.5.36.59.18.08.44.12.77.12h.45l-.3 2.86h-1.27c-.52 0-.99-.07-1.4-.21a3.06 3.06 0 0 1-1.73-1.41c-.46.5-1.08.91-1.86 1.2-.78.28-1.59.42-2.43.42Zm1.46-2.66a3.64 3.64 0 0 0 2.38-1v-3.2a8.9 8.9 0 0 0-1.96.32c-.66.19-1.2.46-1.64.83a1.7 1.7 0 0 0-.66 1.37c0 .57.15 1 .45 1.27.3.27.78.41 1.43.41Zm9.46 9.16V77h2.8l.68 2.32-1.04-.36a8.17 8.17 0 0 1 2.1-1.58c.76-.4 1.68-.6 2.77-.6 1.37 0 2.53.33 3.46.99a6.18 6.18 0 0 1 2.11 2.65c.49 1.1.73 2.3.73 3.6a8.8 8.8 0 0 1-.73 3.62 6.18 6.18 0 0 1-2.11 2.65c-.93.66-2.09.99-3.46.99a6.67 6.67 0 0 1-2.66-.45 7.53 7.53 0 0 1-2.07-1.43l.9-.7v9.08h-3.48Zm6.78-9.36c1.04 0 1.84-.4 2.4-1.21a5.4 5.4 0 0 0 .88-3.18c0-1.3-.3-2.37-.87-3.18a2.77 2.77 0 0 0-2.41-1.22c-.8 0-1.46.19-1.97.56-.52.38-.9.9-1.14 1.56a6.53 6.53 0 0 0-.36 2.28c0 .87.12 1.63.36 2.3.25.65.62 1.16 1.14 1.53.5.38 1.17.56 1.97.56Zm12.27 2.86a4.3 4.3 0 0 1-2.04-.49 3.76 3.76 0 0 1-1.47-1.44 4.44 4.44 0 0 1-.55-2.27c0-.8.18-1.47.55-2.03.37-.57.86-1.04 1.45-1.41a8.1 8.1 0 0 1 1.96-.9 16.58 16.58 0 0 1 3.9-.67c-.03-.8-.23-1.39-.6-1.75-.38-.37-1.01-.55-1.91-.55a6.4 6.4 0 0 0-1.83.27c-.6.17-1.26.43-2 .8L223.4 78a10.92 10.92 0 0 1 5.1-1.23c1.04 0 1.94.18 2.7.56a3.8 3.8 0 0 1 1.74 1.8c.41.82.62 1.91.62 3.26v3.78c0 .7.03 1.21.1 1.53.06.3.18.5.36.59.18.08.44.12.77.12h.45l-.3 2.86h-1.27c-.52 0-.99-.07-1.4-.21a3.06 3.06 0 0 1-1.73-1.41c-.46.5-1.08.91-1.87 1.2-.77.28-1.58.42-2.42.42Zm1.46-2.66a3.64 3.64 0 0 0 2.38-1v-3.2a8.9 8.9 0 0 0-1.96.32c-.66.19-1.2.46-1.64.83a1.7 1.7 0 0 0-.66 1.37c0 .57.15 1 .45 1.27.3.27.77.41 1.43.41Z"/>
                        </svg>
                        <div class="flex flex-row gap-10 justify-around place-items-center w-full md:gap-8 lg:gap-20">
                            <div class="flex flex-col gap-4 place-content-center place-items-center w-32 md:w-auto">
                                <nuxt-img src="/recompra.svg" width="80"/>
                                <h6 class="font-semibold text-slate-600 text-center">
                  ATS e<br/>trocas </h6>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 41" class="h-10 md:max-h-8 md:w-3">
                                <path fill="#C8D1E1" d="M2.38 40.5a1.8 1.8 0 0 0 1.25-.55l18.16-18.16c.7-.71.7-1.86 0-2.57L3.63 1.06a1.81 1.81 0 1 0-2.57 2.57L17.94 20.5 1.06 37.38a1.82 1.82 0 0 0 1.32 3.12Z"/>
                            </svg>
                            <div class="flex flex-col gap-4 place-content-center place-items-center w-32 md:w-auto">
                                <nuxt-img src="/resultados.svg" width="80"/>
                                <h6 class="font-semibold text-center text-slate-600">
                  Divulgação<br/>dos resultados </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="container mx-auto px-4 py-28">
            <div class="mx-auto">
                <h2 class="text-center">
          Perguntas<br/>
          frequentes </h2>
            </div>
            <UAccordion :items="items" variant="link" size="xl" class="border-b border-gray-100 mx-auto py-6 rounded-none text-blue-900 w-full md:w-10/12">
                <template #faq1>
                    <div class="py-6 md:w-10/12 mx-auto">
                        <p>
              Não. A EXE Auctions possui algumas características de dark pools,
              mas não se encaixa nesse conceito por conta da inovação que traz a
              esse sistema de negociação e porque opera com parâmetros
              diferentes.<br/> </p>
                        <p class="pt-3">
              Dark pools são sistemas de negociação de ativos com um processo de
              formação de preços que não ocorre de forma transparente – são os
              algoritmos ou os próprios participantes que determinam os preços
              pelos quais desejam negociar os ativos – daí o nome, “dark”. Cada
              participante insere o preço e a quantidade do ativo que deseja
              comprar ou vender, mas, ao contrário das bolsas, onde é possível
              enxergar a fila de preço e quantidade, na dark pool nenhuma dessas
              informações está disponível. Para os grandes investidores, esse
              sistema é positivo justamente porque eles não desejam que suas
              ordens fiquem visíveis, o que poderia afetar as cotações dos
              ativos que querem comprar ou vender.<br/> </p>
                        <p class="pt-3">
              Na EXE Auctions, os participantes conseguem ver se há ofertas de
              compra ou de venda para determinado ativo, mas não visualizam a
              quantidade e nem o preço ofertado.<br/> </p>
                        <p class="pt-3">
              Enquanto nas dark pools o preço é definido pelo participante ou
              por algoritmo, na EXE Auctions ele é formado pela oferta e demanda
              do ativo. Outra diferença é que, enquanto na dark pool a transação
              é fechada para aquele que primeiro inseriu a ordem de compra ou de
              venda primeiro, na EXE Auctions há um conjunto de critérios para
              que o negócio seja fechado:preço, tamanho da ordem e, por último,
              o critério temporal. </p>
                    </div>
                </template>
                <template #faq2>
                    <p class="py-6 md:w-10/12 mx-auto text-left">
            Sim, estamos. O grande participante eh a peca principal do mercado,
            naturalmente o provedor de liquidez. Esses agentes precisam ter
            vantagem na negociacao, os lotes menores continuam levando toda a
            vantagem na disputa por preco, enquanto os maiores, quando empatados
            no preco, sao executados no pro rata do lote. </p>
                </template>
                <template #faq3>
                    <p class="py-6 md:w-10/12 mx-auto">
            Eh um conceito novo nas plataformas eletronicas, onde o participante
            tem a oportunidade de fazer a troca pelo mesmo valor financeiro.
            Isto eh, trocar 10 caixas de banana por 10 caixas de laranja,
            independente dos precos individuais. Com a garantia que o
            participante sempre executarah um valor proporcional a 1 x 1 caixa
            de fruta. </p>
                </template>
                <template #faq4>
                    <p class="py-6 md:w-10/12 mx-auto">
            Economicamente, simplesmente banir ativos relacionados a alta
            emissao e combustivel fossil nao eh a melhor forma de agregar valor
            e liquidez ao mercado, mas sugerimos uma politica de custos de
            execucao menores para ativos verdes. </p>
                </template>
            </UAccordion>
        </section>
    </main>
</template>
<style scoped>.exelogo {
    &:before {
      content: '';
      display: none;
      width: 0;
      height: calc(100% - 4rem);
      top: 2rem;
      right: 2rem;
      position: absolute;
      z-index: 0;
      border-radius: 16px;
      background-color: #fff;
      box-shadow: rgba(45, 154, 255, 0.1) 0px 0px 0px 5px,
        rgb(0 0 0 / 4%) 0px 0px 0px 2px;

      @media screen and (min-width: 768px) {
        width: 8.9rem;
        display: block;
      }
      @media screen and (min-width: 1024px) {
        width: 12.2rem;
        display: block;
      }
      @media screen and (min-width: 1280px) {
        width: 14.6rem;
        display: block;
      }
    }
  }

  .gridright {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .gridleft {
    display: grid;
    grid-template-columns: 1fr 0.6fr;
    gap: 8rem;
  }
  .like {
    max-width: 2.2rem;
  }
  .comparativo {
    filter: drop-shadow(0px 0.4rem 3rem hsl(244, 100%, 80%, 0.2))
      drop-shadow(0 0.2rem 0.5rem hsl(244, 100%, 90%, 0.3));
  }</style>
