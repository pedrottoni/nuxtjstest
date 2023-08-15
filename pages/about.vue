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
      title: 'Solução ágil e eficiente',
      value: 'tab1',
      disabled: 'false',
    },
    {
      title: 'Plataforma de leilão duplo',
      value: 'tab2',
      disabled: 'false',
    },
    {
      title: 'Mercados de commodities',
      value: 'tab3',
      disabled: 'false',
    },
    {
      title: 'Funcionamento da plataforma',
      value: 'tab4',
      disabled: 'false',
    },
  ])
</script>
<template>
  <main class="overflow-hidden">
    <HeroPages
      title="Leilões financeiros ágeis e transparentes"
      subtitle="Leilões financeiros em alta velocidade, com segurança e formação de preços por oferta e demanda e pós definidos"
      img="about.svg"
      buttom
      estilo="absolute w-1/2 aboutimg"
    />
    <section
      class="container flex flex-col gap-8 mx-auto place-items-center px-4 py-32 md:flex-row md:justify-between"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 751 500"
        class="md:w-1/2"
      >
        <path
          fill="#F5F5F5"
          d="M605.9 94.7a24 24 0 1 1-47.5 7 24 24 0 0 1 47.5-7Z"
        />
        <path
          fill="#EBEBEB"
          d="M600.2 95.5a18.3 18.3 0 1 1-36.1 5.4 18.3 18.3 0 0 1 36.1-5.4Z"
        />
        <path
          fill="#E0E0E0"
          d="M600.1 95a11 11 0 0 1-.8-2.2 18.8 18.8 0 0 0-12.1-11.5 18 18 0 0 0-23 17.8v2.2c-.4-.7-.6-1.4-.6-2.2-.2-2 0-4.2.5-6.2a18.5 18.5 0 0 1 30.2-9.1l3 3.2a17 17 0 0 1 2.6 5.7c.2.7.3 1.5.2 2.2Z"
        />
        <path
          fill="#E0E0E0"
          d="m585.8 108.6.5 3.2-2.9.4-.4-3c-2.6.3-5.1-.1-7.4-1.2l1-3.7c1.8.9 3.8 1.3 5.8 1.2l-.8-4.7c-3.2-.3-6.9-.8-7.5-4.8-.5-3 1.3-5.9 5.6-7l-.5-3.2 2.8-.5.5 3.1c2-.2 4.1 0 6 .8l-.8 3.7a12 12 0 0 0-4.6-.8l.8 4.8c3.2.2 6.8.7 7.5 4.7.4 3-1.3 5.8-5.6 7Zm-4.8-12-.7-4c-1.4.6-1.9 1.5-1.7 2.4.1 1 1 1.5 2.4 1.7Zm5.9 6c-.2-1-1-1.4-2.4-1.6l.6 3.9c1.4-.5 2-1.3 1.8-2.2Z"
        />
        <path
          fill="#F5F5F5"
          d="M531.1 99a41.6 41.6 0 1 1-82.4 12.1 41.6 41.6 0 0 1 82.4-12.2Z"
        />
        <path
          fill="#EBEBEB"
          d="M521.3 100.3a31.7 31.7 0 1 1-62.8 9.3 31.7 31.7 0 0 1 62.8-9.3Z"
        />
        <path
          fill="#E0E0E0"
          d="M521.2 99.4c-.2 0-.6-1.3-1.4-3.7a33.8 33.8 0 0 0-10-14.2 32.1 32.1 0 0 0-20.3-7 30.7 30.7 0 0 0-26.2 15.3 33 33 0 0 0-4.6 16.8c0 2.4.2 3.8 0 3.9-.1 0-.6-1.3-.9-3.9a31.8 31.8 0 0 1 26.3-34 34.9 34.9 0 0 1 15.3.9 31.9 31.9 0 0 1 21.3 22c.6 2.4.6 3.9.5 3.9Z"
        />
        <path
          fill="#E0E0E0"
          d="m496.2 123.1.8 5.5-4.8.8-.9-5.3a23 23 0 0 1-12.7-2l1.7-6.4a20 20 0 0 0 10 2l-1.3-8.2c-5.6-.4-12-1.3-13.1-8.2-.8-5.2 2.2-10.2 9.8-12.3l-.9-5.4 4.9-.8.8 5.3c3.6-.4 7.1.1 10.4 1.4l-1.4 6.4c-2.5-1-5.2-1.5-7.9-1.4l1.4 8.3c5.6.4 11.8 1.3 13 8.1.7 5.1-2.3 10.1-9.8 12.2Zm-8.4-20.7-1-7c-2.6 1-3.4 2.6-3 4.2.2 1.7 1.8 2.4 4 2.8Zm10.3 10.4c-.3-1.7-1.8-2.4-4-2.8l1 6.7c2.4-1 3.3-2.4 3-4Z"
        />
        <path
          fill="#F5F5F5"
          d="M162.9 240.8a24 24 0 1 1-47.5 7 24 24 0 0 1 47.5-7Z"
        />
        <path
          fill="#EBEBEB"
          d="M157.2 241.6a18.3 18.3 0 1 1-36.2 5.3 18.3 18.3 0 0 1 36.2-5.3Z"
        />
        <path
          fill="#E0E0E0"
          d="m157.1 241-.8-2.1a19.4 19.4 0 0 0-5.7-8.2A18.2 18.2 0 0 0 136 227a17.8 17.8 0 0 0-14 12.3c-.7 2-1 4-1 6v2.2c-.3-.7-.5-1.5-.5-2.2a17 17 0 0 1 2.2-10.3 19 19 0 0 1 16-9.6 19.2 19.2 0 0 1 8.3 1.8 18.3 18.3 0 0 1 9.8 11.7c.2.7.3 1.5.2 2.2Z"
        />
        <path
          fill="#E0E0E0"
          d="m142.7 254.7.5 3.2-2.8.4-.5-3c-2.5.3-5-.1-7.3-1.2l1-3.7c1.8 1 3.8 1.3 5.8 1.2l-.8-4.7c-3.2-.3-6.9-.8-7.5-4.8-.5-3 1.3-5.9 5.6-7l-.5-3.2 2.8-.4.5 3c2-.2 4.1 0 6 .8l-.8 3.7a12 12 0 0 0-4.6-.8l.8 4.8c3.2.2 6.8.7 7.5 4.7.4 2.9-1.3 5.8-5.7 7Zm-4.8-12-.6-4c-1.4.6-1.9 1.5-1.7 2.4.1 1 1 1.5 2.3 1.7Zm6 6c-.2-1-1.1-1.4-2.4-1.6l.6 3.9c1.4-.5 1.9-1.4 1.8-2.3Z"
        />
        <path
          fill="#F5F5F5"
          d="M121.8 188a15.6 15.6 0 1 1-16.8-26.4 15.6 15.6 0 0 1 16.8 26.3Z"
        />
        <path
          fill="#EBEBEB"
          d="M119.8 184.8a11.9 11.9 0 1 1-12.8-20.1 11.9 11.9 0 0 1 12.8 20.1Z"
        />
        <path
          fill="#E0E0E0"
          d="m120 184.6 1-1a11.7 11.7 0 0 0-2.1-18.8 10.2 10.2 0 0 0-7-1.6c-1.4.2-2.6.5-3.8 1l-1.4.6 1.2-.9a11 11 0 0 1 6.7-1.4 12 12 0 0 1 9 5.3 13 13 0 0 1 1.7 3.5 12.1 12.1 0 0 1-1.3 9.4 11 11 0 0 1-4 3.9Z"
        />
        <path
          fill="#E0E0E0"
          d="m108.2 179.7-1.8 1-1-1.5 1.7-1c-.9-1.5-1.3-3-1.3-4.7l2.5-.4c0 1.3.2 2.6.8 3.7l2.6-1.7c-.7-2-1.4-4.3.9-5.7 1.6-1 3.8-.8 5.7 1.5l1.7-1.2 1 1.6-1.7 1.1a8 8 0 0 1 1.1 3.8l-2.4.4c0-1-.3-2-.8-2.9l-2.6 1.8c.7 2 1.4 4.2-.8 5.6-1.6 1-3.8.8-5.6-1.4Zm5.8-6 2.2-1.5c-.7-.7-1.4-.7-1.9-.4-.5.3-.5 1-.3 1.8Zm-2 5c.5-.3.5-1 .3-1.8l-2.1 1.4c.7.7 1.3.8 1.8.4Z"
        />
        <path
          fill="#F5F5F5"
          d="M540.5 59.1a15.6 15.6 0 1 1-16.7-26.3A15.6 15.6 0 0 1 540.5 59Z"
        />
        <path
          fill="#EBEBEB"
          d="M538.5 56a11.9 11.9 0 1 1-12.8-20.1A11.9 11.9 0 0 1 538.5 56Z"
        />
        <path
          fill="#E0E0E0"
          d="m538.8 55.8 1-1a12.5 12.5 0 0 0 3.7-10.3 11.2 11.2 0 0 0-1.9-5 12.2 12.2 0 0 0-3.9-3.6 11.3 11.3 0 0 0-7.1-1.4c-1.3 0-2.6.4-3.8 1l-1.3.5s.3-.4 1.2-.9a11.4 11.4 0 0 1 9.9-.7l1.5.8a12.5 12.5 0 0 1 6 7.3 10.7 10.7 0 0 1 .4 3.6 12.1 12.1 0 0 1-1.8 5.9 11 11 0 0 1-3.9 3.8Z"
        />
        <path
          fill="#E0E0E0"
          d="M526.9 50.9 525 52l-1-1.5 1.7-1.1c-.9-1.5-1.3-3-1.3-4.7l2.4-.4c0 1.3.3 2.6.9 3.7l2.6-1.7c-.7-2-1.4-4.3.8-5.7 1.7-1 3.9-.8 5.7 1.5l1.8-1.1 1 1.6-1.7 1c.7 1.2 1 2.5 1.1 3.8l-2.4.5c0-1-.3-2-.8-3l-2.6 1.8c.7 2 1.4 4.3-.8 5.7-1.6 1-3.8.7-5.6-1.5Zm5.8-6 2.2-1.5c-.7-.7-1.4-.7-1.9-.4-.5.4-.5 1-.3 1.9Zm-2 5c.5-.3.5-1 .3-1.7l-2.1 1.3c.7.7 1.3.8 1.8.5Z"
        />
        <path
          fill="#263238"
          d="M710.8 470.4c0 .1-150.1.2-335.3.2-185.1 0-335.3-.1-335.3-.2 0-.2 150.1-.3 335.3-.3 185.2 0 335.3.1 335.3.3Z"
        />
        <path
          fill="#263238"
          d="M669.5 134.6H288.8a11.9 11.9 0 0 0-11.9 12v268.8a11.9 11.9 0 0 0 11.9 12h146.1s9.3 28.7-19.5 43.5H552s-32.5-11.1-24.2-43.6h141.7a11.9 11.9 0 0 0 11.9-11.9V146.5a11.9 11.9 0 0 0-11.9-11.9Z"
        />
        <path
          fill="#455A64"
          d="M484.2 399c5.2 7.4-2.9 15.5-10.3 10.3-.3-.1-.5-.4-.6-.6-5.2-7.4 2.9-15.5 10.3-10.3l.6.6Z"
        />
        <path
          fill="#fff"
          d="M293.1 139.6h372a9.7 9.7 0 0 1 9.8 9.7V378H283.5V149.3a9.7 9.7 0 0 1 9.6-9.7Z"
        />
        <path
          fill="#7777F8"
          d="M329.4 193.4h-12.8v143.4h12.8V193.4Zm24.8 48.7h-12.8v94.7h12.8V242Zm24.8-30.9h-12.8v126.3H379V211.2Zm24.8-12.2H391v137.8h12.8V199Zm24.8 46h-12.9v91.8h12.9V245Zm24.8 18h-12.9v73.8h12.9V263Zm24.7-54.9h-12.8v128.7h12.8V208Zm24.9 23.2h-13v105.5h13V231.3Zm24.7-18.5H515v124h12.8v-124Zm24.8 39.5h-12.9v84.5h12.9v-84.5Zm49.5-44.2h-13v128.7h13V208Zm52.6 82.9h-12.9v44h12.9v-44Zm-25.7-38.7H616v84.5h12.8v-84.5Zm-51.6-16.1h-12.9v100.6h12.9V236.2Z"
        />
        <path
          fill="#263238"
          d="M658.1 211.7a8 8 0 0 1-1-.2l-3.3-.7-5.4-.8a85.1 85.1 0 0 0-52.4 10.6c-9.4 5.3-18 12-25.2 20a192.6 192.6 0 0 0-21.3 30.6c-6.8 11.3-13.8 23.4-23.9 33.8-5 5.4-11 9.9-17.6 13.2a34.8 34.8 0 0 1-22.4 3 47 47 0 0 1-20-10.6 93.4 93.4 0 0 1-14.9-16.2c-8.6-11.6-14.7-24.1-21.3-35.5a151.2 151.2 0 0 0-21.2-30.5 57.8 57.8 0 0 0-27.5-16 54.9 54.9 0 0 0-26.4.8 59.4 59.4 0 0 0-27.6 17.3l-2.2 2.4a7 7 0 0 1-.8.8l.7-.9 2-2.6a59 59 0 0 1 27.6-17.8 53.2 53.2 0 0 1 55 15.2c8.2 8.4 15 19.2 21.6 30.6 6.5 11.4 12.7 23.9 21.3 35.3a92.6 92.6 0 0 0 14.6 16 45.6 45.6 0 0 0 19.4 10.2 33.5 33.5 0 0 0 21.5-2.8 61.4 61.4 0 0 0 17.2-12.9c10-10.2 17-22.3 23.8-33.5 6.9-11.2 13.5-22 21.5-30.7 7.4-8 16-14.8 25.6-20.1a88.5 88.5 0 0 1 45.6-10.9 61.9 61.9 0 0 1 12.7 1.8l3.3.8 1 .3ZM302.5 346.8c-.3 0-.5-41-.5-91.3 0-50.4.2-91.3.5-91.3s.5 40.8.5 91.3c0 50.4-.2 91.3-.5 91.3Zm352 0c0 .3-77 .5-172 .5s-172-.2-172-.5 77-.6 172-.6 172 .3 172 .6ZM335 358c0 .3-4.3.6-9.6.6s-9.5-.3-9.5-.6c0-.2 4.2-.5 9.5-.5s9.5.3 9.5.6Zm31.5.6c0 .3-5.1.5-11.4.5a61 61 0 0 1-11.4-.5c0-.3 5.1-.5 11.4-.5 6.3 0 11.4.2 11.4.5Zm27 0c0 .3-5.1.5-11.4.5a61 61 0 0 1-11.4-.5c0-.3 5.1-.5 11.4-.5 6.3 0 11.4.2 11.4.5Zm26.9 0c0 .3-5 .5-11.4.5a61 61 0 0 1-11.4-.5c0-.3 5.1-.5 11.4-.5 6.3 0 11.4.2 11.4.5Zm27 0c0 .3-5.1.5-11.4.5a61 61 0 0 1-11.4-.5c0-.3 5.1-.5 11.4-.5 6.3 0 11.4.2 11.4.5Zm26.9 0c0 .3-5 .5-11.4.5-6.2 0-11.3-.2-11.3-.5s5-.5 11.3-.5c6.3 0 11.4.2 11.4.5Zm27 0c0 .3-5.1.5-11.4.5-6.3 0-11.4-.2-11.4-.5s5.1-.5 11.4-.5c6.3 0 11.4.2 11.4.5Zm26.9 0c0 .3-5 .5-11.4.5-6.2 0-11.3-.2-11.3-.5s5-.5 11.3-.5c6.3 0 11.4.2 11.4.5Zm27 0c0 .3-5.1.5-11.4.5a61 61 0 0 1-11.4-.5c0-.3 5.1-.5 11.4-.5 6.3 0 11.4.2 11.4.5Zm26.9 0c0 .3-5 .5-11.4.5a61 61 0 0 1-11.3-.5c0-.3 5-.5 11.4-.5a62 62 0 0 1 11.3.5Zm25.1 0c0 .3-5.1.6-11.4.6-6.3 0-11.4-.3-11.4-.6s5.1-.5 11.4-.5c6.3 0 11.4.2 11.4.5Zm25.1 0c0 .3-5.1.6-11.4.6-6.3 0-11.4-.3-11.4-.6s5-.5 11.4-.5c6.3 0 11.4.3 11.4.5Zm25 0c0 .3-5 .6-11.3.6a62 62 0 0 1-11.4-.6c0-.2 5-.5 11.4-.5a75 75 0 0 1 11.3.5Z"
        />
        <path
          fill="#263238"
          d="M433.5 260.2c0-.3 1.6.3 2 2.4a5 5 0 0 1-.3 3.8 3 3 0 0 1-1.9 1.5 3 3 0 0 1-2.6-.3 4.4 4.4 0 0 1-1.7-6c.3-.5.7-1 1.3-1.4a3 3 0 0 1 2.4-.6c.6.2.8.5.8.5 0 .1-1.3-.4-2.6.9a4 4 0 0 0-1.1 2.6 3.2 3.2 0 0 0 1.6 2.8 1.9 1.9 0 0 0 2.1-.1l.5-.6a5 5 0 0 0 .6-2.9c-.2-1.8-1.2-2.5-1.1-2.6ZM602.4 213s.5-.2 1.2 0c1 .4 1.8 1 2.3 2a5.7 5.7 0 0 1 .5 4.5 4.7 4.7 0 0 1-4.4 3.5 3.7 3.7 0 0 1-2.8-1.4 6 6 0 0 1-1.2-2.5 5.7 5.7 0 0 1 .8-4.5c1.6-2.2 3.5-2.1 3.4-2 .1.2-1.5.5-2.6 2.5a5 5 0 0 0-.3 3.6c.4 1.3 1.4 2.8 2.8 2.8a3.5 3.5 0 0 0 3-2.5 5 5 0 0 0-2.7-6Z"
        />
        <path fill="#fff" d="M456.8 66.8H199.2v200.5h257.6V66.8Z" />
        <path
          fill="#263238"
          d="m456.8 267.3-.3-200.5.3.3H199.2l.3-.3v200.5l-.3-.3 257.7.3-257.7.2h-.2v-201h258v.2l-.3 200.6Z"
        />
        <path
          fill="#263238"
          d="M253.4 93.2h-41.7v2.3h41.8v-2.3Zm-21 5.4h-20.7v2.3h20.7v-2.3ZM243 238.5h-7.5v2.2h7.6v-2.2Zm19.3 11.6h-9.7v2.2h9.7v-2.2Zm33.6 0h-9.7v2.2h9.7v-2.2Zm33.6 0H320v2.2h9.6v-2.2Zm33.7 0h-9.7v2.2h9.7v-2.2Zm33.6 0H387v2.2h9.7v-2.2Zm33.6 0h-9.6v2.2h9.6v-2.2ZM243 209.4h-7.5v2.2h7.6v-2.2Zm0-54.7h-7.5v2.2h7.6v-2.2Zm0-27.5h-7.5v2.2h7.6v-2.2Zm.5 54.8h-7.6v2.2h7.6v-2.1Zm186.7 58.7h-12.4l-33.6.1H246.8v-93.2l.1-27.6v-10 10l.1 27.5.1 93.1-.3-.2h137.5l33.5.1h11.5l.9.2Z"
        />
        <path
          fill="#263238"
          d="M432.3 183.2s-39.9.2-89 .2c-49.2 0-89-.1-89-.3 0 0 39.8-.2 89-.2 49.1 0 89 .1 89 .3Zm0-27.4c0 .1-39.9.3-89 .3-49.2 0-89-.2-89-.3 0-.2 39.8-.3 89-.3 49.1 0 89 .2 89 .3Zm0-27.5c0 .1-39.9.3-89 .3-49.2 0-89-.2-89-.3 0-.2 39.8-.3 89-.3 49.1 0 89 .2 89 .3Zm0 82.2c0 .2-39.9.3-89 .3-49.2 0-89-.2-89-.3 0-.1 39.8-.3 89-.3 49.1 0 89 .2 89 .3Z"
        />
        <path
          fill="#455A64"
          d="M256.2 234.8v-24.3l15-23.5 10.4 7.9 21-32.8 12.5 8.8 17.3-30.2 14 11.5 21.1-40 22.7 44.7 18.3-22.4 21.6-6.2v106.5h-174Z"
        />
        <path
          fill="#263238"
          d="M432.3 119.7h-22.5.1L392.1 143h-44.6.2L329 174l-18.4 30.5-.2.4-.2-.3-24.1-33.2h.3l-21.9 34.3-6.1 9.5a259.6 259.6 0 0 1-2.2 3.3l.5-.9 1.6-2.5 6-9.5 21.8-34.4.1-.3.2.3 24.2 33h-.4l18.3-30.4 18.7-31.2.1-.1H392l-.2.1 18-23.1h22.5Z"
        />
        <path
          fill="#263238"
          d="M293.5 179.2a1.7 1.7 0 1 1-1.7-1.6 1.7 1.7 0 0 1 1.7 1.6Zm51.4-29.2a1.7 1.7 0 1 1-1.7-1.6 1.7 1.7 0 0 1 1.5 1l.2.6Zm38.1-5.5c1 0 1.8-.7 1.8-1.7 0-.9-.8-1.6-1.7-1.6-1 0-1.7.7-1.7 1.7 0 .9.7 1.6 1.7 1.6ZM210 75a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm5.7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm5.8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm235.1 7.9c0 .1-57.6.2-128.6.2L199.5 83c0-.2 57.6-.3 128.6-.3s128.5.1 128.5.3Z"
        />
        <path
          fill="#fff"
          d="M197.2 172.5c0-2.2 1.3-3.6 3.2-3.6 1.8 0 3.1 1.4 3.1 3.6 0 2.1-1.3 3.5-3.1 3.5-1.9 0-3.2-1.4-3.2-3.5Zm4.5 0c0-1.4-.5-2-1.3-2s-1.3.6-1.3 2c0 1.3.5 2 1.3 2s1.3-.7 1.3-2Zm6.2-3.4h2.2l-8.7 12.8h-2.1l8.6-12.8Zm-2 9.4c0-2.2 1.2-3.5 3-3.5 1.9 0 3.2 1.3 3.2 3.5s-1.3 3.6-3.1 3.6c-1.9 0-3.2-1.4-3.2-3.6Zm4.4 0c0-1.3-.5-2-1.3-2s-1.4.7-1.4 2 .6 2 1.4 2c.7 0 1.3-.6 1.3-2Z"
        />
      </svg>
      <div class="title md:w-1/2">
        <h3>O que fazemos</h3>
        <h2>Uma plataforma ágil e eficiente para grandes negociações</h2>
        <p class="mt-4 my-8">
          A EXE Auctions é uma plataforma de leilão criada para trazer mais
          eficiência e transparência na formação de preços em mercados com
          poucos participantes. Isso é possível graças ao seu modelo inovador,
          que combina as vantagens dos leilões e da negociação por sistemas
          eletrônicos.
        </p>
        <UButton
          to=""
          label="Comece agora"
          size="xl"
          class="!rounded-3xl blue mt-4 px-7 py-3"
        />
      </div>
    </section>
    <section class="bg-slate-100 py-32">
      <div
        class="container flex gap-8 mx-auto place-items-center px-4 md:flex-col md:justify-between"
      >
        <div class="title">
          <h3>definir linha</h3>
        </div>
        <h2 class="mb-20">definir título</h2>
        <TabBar :tabs="tabs" active="tab1">
          <template #content="{ active }">
            <template v-if="active == 'tab1'">
              <NuxtImg src="about.svg" class="w-1/2'" />
              <p>
                A EXE Auctions é uma plataforma de leilão criada para trazer
                mais eficiência e transparência na formação de preços em
                mercados com poucos participantes. Isso é possível graças ao seu
                modelo inovador, que combina as vantagens dos leilões e da
                negociação por sistemas eletrônicos.
              </p>
            </template>
          </template>
        </TabBar>
      </div>
    </section>
    <section class="bg-slate-100 py-32">
      <div
        class="container flex flex-col gap-8 mx-auto place-items-center px-4 md:flex-row md:justify-between"
      >
        <div class="title md:w-1/2">
          <h3>Não definido</h3>
          <h2>Picos de Liquidez com hora marcada</h2>
          <p class="mt-4 my-8">
            Provemos para as corretoras a única plataforma de leilão duplo (com
            múltiplos compradores e vendedores) que alia rapidez, eficiência na
            formação de preços, anonimato e ausência de conflitos de interesse.
            A plataforma soluciona problemas de negociação de todos os mercados
            de commodities – aqui entendidos como mercados em que são negociados
            ativos fungíveis (cujas características são iguais). Em breve, a
            plataforma da EXE Auctions estará disponível para transações com
            títulos da dívida pública brasileira. Os traders da corretora
            acessam a plataforma e inserem suas ordens de compra e venda. A EXE
            Auctions envia o resultado das transações para as corr4toras, que
            são as responsáveis pela boletagem e pela liquidação das operações.
          </p>
          <UButton
            to=""
            label="Comece agora"
            size="xl"
            class="!rounded-3xl blue mt-4 px-7 py-3"
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 896 762"
          class="md:w-1/2"
        >
          <g filter="url(#a)">
            <path
              fill="#F1F4F9"
              d="m569.2 619.8-15.5-6.5-10.7-77.9H401.2L389.6 613l-13.9 6.9a3.3 3.3 0 0 0 1.5 6.3h190.7a3.3 3.3 0 0 0 1.3-6.4Z"
            />
            <path
              fill="#C9CDD9"
              d="M821.3 545.8H124.4a13.8 13.8 0 0 1-13.8-13.8v-98.3h724.5V532a13.8 13.8 0 0 1-13.8 13.8Z"
            />
            <path
              fill="#848FA5"
              d="M835.8 480.1H110V59.6A16.7 16.7 0 0 1 126.6 43h692.6a16.7 16.7 0 0 1 16.6 16.6v420.5Z"
            />
            <path
              fill="#FBFCFD"
              d="M792.5 449.6H153.4a12.9 12.9 0 0 1-12.9-12.8V86.4a12.8 12.8 0 0 1 12.9-12.9h639a12.8 12.8 0 0 1 13 12.9v350.4a12.8 12.8 0 0 1-13 12.8Z"
            />
            <path
              fill="#ADB3BF"
              d="M593.4 627H360.6c-.2 0-.3-.2-.4-.4a3 3 0 0 1-.2-1.1c0-.4 0-.8.2-1 0-.3.2-.5.4-.5h232.8c.2 0 .3.2.4.4l.2 1.1c0 .4 0 .8-.2 1 0 .3-.2.5-.4.5Z"
            />
            <path
              fill="#2D9AFF"
              d="M732.4 406h-519a1.6 1.6 0 0 1-1.6-1.5V155.7a1.6 1.6 0 0 1 3.2 0v247.1h517.4a1.6 1.6 0 0 1 0 3.3Z"
            />
            <path
              fill="#BAC6F2"
              d="M324.3 388.2H277a4.8 4.8 0 0 1-4.8-4.8v-65a4.8 4.8 0 0 1 4.8-5h47.2a4.8 4.8 0 0 1 4.8 5v65a4.8 4.8 0 0 1-4.8 4.8Zm86.1 0h-47.2a4.8 4.8 0 0 1-4.8-4.8V256.6a4.8 4.8 0 0 1 4.8-4.8h47.2a4.8 4.8 0 0 1 4.8 4.8v126.8a4.8 4.8 0 0 1-4.8 4.8Zm86.1 0h-47.2a4.8 4.8 0 0 1-4.9-4.8v-65a4.8 4.8 0 0 1 4.9-5h47.2a4.8 4.8 0 0 1 4.8 5v65a4.8 4.8 0 0 1-4.8 4.8Zm86.1 0h-47.2a4.7 4.7 0 0 1-4.9-4.6V232a4.7 4.7 0 0 1 4.9-4.6h47.2a4.7 4.7 0 0 1 4.8 4.6v151.6a4.7 4.7 0 0 1-4.8 4.6Zm86.1 0h-47.2a4.8 4.8 0 0 1-4.9-4.8v-195a4.8 4.8 0 0 1 4.9-4.9h47.2a4.8 4.8 0 0 1 4.8 4.9v195a4.8 4.8 0 0 1-4.8 4.8Z"
            />
            <path
              fill="#2D9AFF"
              d="M300.7 294a9.7 9.7 0 1 0 0-19.5 9.7 9.7 0 0 0 0 19.5Zm86.1-63.4a9.7 9.7 0 1 0 0-19.4 9.7 9.7 0 0 0 0 19.4Zm86.1 63.4a9.7 9.7 0 1 0 0-19.5 9.7 9.7 0 0 0 0 19.5Zm86.1-94.2a9.7 9.7 0 1 0 0-19.5 9.7 9.7 0 0 0 0 19.5Zm86-35.8a9.7 9.7 0 1 0 0-19.4 9.7 9.7 0 0 0 0 19.4Z"
            />
            <path
              fill="#2D9AFF"
              d="m473 286.4-86.2-64.6-85.1 63.8-2-2.6 87-65.3 86 64.4 85.3-93.4.4-.2 86-34.7 1.3 3-85.8 34.6-86.8 95Z"
            />
          </g>
          <g filter="url(#b)">
            <path
              fill="#848FA5"
              d="M248.9 227H105a42.6 42.6 0 0 0-42.6 42.6v13a2 2 0 0 0-2.5 1.9v10a2 2 0 0 0 2.5 2v15a2 2 0 0 0-2.5 2v25a2 2 0 0 0 2.5 1.9v9.1a2 2 0 0 0-2.5 2v25a2 2 0 0 0 2.5 1.9v264a42.6 42.6 0 0 0 42.6 42.5h143.8a42.6 42.6 0 0 0 42.5-42.6V269.6A42.6 42.6 0 0 0 249 227Zm33.5 415.3A33.6 33.6 0 0 1 249 676H105a33.6 33.6 0 0 1-33.6-33.6V269.6A33.6 33.6 0 0 1 105 236h143.8a33.6 33.6 0 0 1 33.5 33.6v372.7Z"
            />
            <path
              fill="#C9CDD9"
              d="M248.9 680.9H105a38.6 38.6 0 0 1-38.6-38.6V269.6A38.6 38.6 0 0 1 105 231h143.8a38.6 38.6 0 0 1 38.5 38.6v372.7A38.6 38.6 0 0 1 249 681Z"
            />
            <path
              fill="url(#c)"
              d="M252.4 674.9H101.5a26 26 0 0 1-26-26V263a26 26 0 0 1 26-26h19.7a4.3 4.3 0 0 1 4.3 4.3 12.7 12.7 0 0 0 12.7 12.7h75.6a12.7 12.7 0 0 0 12.7-12.7 4.3 4.3 0 0 1 4.3-4.3h21.6a26 26 0 0 1 26 26v385.9a26 26 0 0 1-26 26Z"
            />
            <path
              fill="#60697A"
              d="M122.2 478.3c1 1 1.5 2.4 1.5 4.3v9.2h-1.9v-2.3a5 5 0 0 1-2 1.8 7 7 0 0 1-3 .6c-1.7 0-3-.4-4-1.2-1-.8-1.5-1.8-1.5-3.1s.5-2.3 1.4-3c.9-.8 2.3-1.2 4.3-1.2h4.7v-.9c0-1.3-.3-2.2-1-3a5 5 0 0 0-3.2-.9 8 8 0 0 0-2.7.5c-.8.3-1.6.7-2.2 1.2l-1-1.5a8 8 0 0 1 2.8-1.4c1-.4 2.2-.5 3.3-.5 2 0 3.4.4 4.5 1.4Zm-2.3 11.3c.8-.6 1.4-1.3 1.8-2.3V485h-4.6c-2.6 0-3.8.9-3.8 2.6 0 1 .3 1.6 1 2 .6.6 1.5.8 2.7.8 1.2 0 2.1-.2 3-.7Zm24.4-12.6v14.8h-1.9V489c-.5.9-1.2 1.6-2.2 2-.9.6-2 .8-3.1.8-2 0-3.5-.5-4.6-1.6-1.1-1-1.7-2.7-1.7-4.8V477h2v8.3c0 1.6.4 2.8 1.2 3.6.8.8 1.9 1.2 3.3 1.2 1.5 0 2.8-.5 3.7-1.4.9-1 1.3-2.3 1.3-4V477h2Zm9.7 14a7 7 0 0 1-2.8-2.7 8 8 0 0 1 0-7.8 7 7 0 0 1 2.8-2.7 8 8 0 0 1 3.9-1c1.3 0 2.4.3 3.4.8s1.8 1.2 2.4 2.2l-1.5 1a4.6 4.6 0 0 0-1.9-1.6c-.7-.4-1.5-.6-2.4-.6-1 0-2 .2-2.9.7a5 5 0 0 0-2 2c-.5 1-.7 2-.7 3 0 1.2.2 2.2.7 3.1a5 5 0 0 0 2 2c.9.5 1.8.7 2.9.7a5 5 0 0 0 4.3-2.1l1.5 1c-.6 1-1.4 1.7-2.4 2.2-1 .5-2.1.7-3.4.7a8 8 0 0 1-4-1Zm23.2-.1c-.3.3-.8.6-1.4.7-.5.2-1.1.3-1.7.3-1.4 0-2.5-.4-3.2-1.1-.8-.8-1.1-1.8-1.1-3.2v-9H167V477h2.7v-3.3h2v3.3h4.5v1.7h-4.5v8.8c0 .9.2 1.5.6 2 .5.5 1 .7 2 .7.3 0 .7 0 1.1-.2a2 2 0 0 0 1-.6l.7 1.5Zm5.4-17.6c-.2-.3-.4-.6-.4-1s.2-.7.4-1c.3-.3.7-.4 1-.4.5 0 .8.1 1.1.4.3.3.4.6.4 1s0 .7-.4 1c-.3.3-.6.4-1 .4s-.8-.1-1-.4Zm0 3.7h2v14.8h-2V477Zm11.7 14a9 9 0 0 1-2.8-2.7 8 8 0 0 1 0-7.8 7 7 0 0 1 2.8-2.7 7.8 7.8 0 0 1 7.7 0 7 7 0 0 1 2.7 2.7 8 8 0 0 1 0 7.8 7 7 0 0 1-2.7 2.6c-1.2.7-2.5 1-3.9 1s-2.7-.3-3.8-1Zm6.6-1.6a5 5 0 0 0 2-2c.5-.9.7-2 .7-3 0-1.2-.2-2.2-.7-3a5 5 0 0 0-2-2c-.8-.6-1.7-.8-2.8-.8a5.3 5.3 0 0 0-4.8 2.7c-.5 1-.7 2-.7 3 0 1.2.2 2.2.7 3a5 5 0 0 0 2 2.1c.8.5 1.8.7 2.8.7 1 0 2-.2 2.8-.7Zm22.6-10.9c1.1 1 1.7 2.6 1.7 4.7v8.6h-2v-8.4c0-1.6-.4-2.7-1.2-3.5-.8-.8-1.8-1.2-3.3-1.2a5 5 0 0 0-3.8 1.4c-.9 1-1.4 2.2-1.4 3.9v7.8h-2V477h2v2.7c.5-.9 1.3-1.6 2.2-2.1 1-.5 2.1-.7 3.4-.7a6 6 0 0 1 4.4 1.6Zm9.5 12.9c-1.2-.4-2-.8-2.6-1.3l.9-1.6c.6.5 1.4.9 2.3 1.2 1 .3 2 .5 3 .5a6 6 0 0 0 3-.7c.6-.4 1-1 1-1.8 0-.5-.3-1-.6-1.2a3 3 0 0 0-1.4-.7 8 8 0 0 0-2.1-.5l-3-.7a3.6 3.6 0 0 1-2.6-3.5c0-1.3.5-2.3 1.6-3a7 7 0 0 1 4.3-1.2 11 11 0 0 1 5.2 1.3l-.9 1.6a7.5 7.5 0 0 0-4.3-1.2 5 5 0 0 0-3 .6c-.6.5-.9 1-.9 1.8 0 .6.2 1 .6 1.4.3.3.8.6 1.3.7l2.3.5 2.8.7c.7.2 1.4.6 1.9 1.1.5.6.7 1.3.7 2.3 0 1.3-.5 2.3-1.6 3-1 .8-2.6 1.2-4.5 1.2-1.2 0-2.3-.2-3.4-.5Z"
            />
            <path
              fill="#204387"
              d="M152.3 431.9h-33.2v13.7h25.6v4.6h-25.6v13.6h33.2v4.6h-41v-41h41v4.5Zm49.6-4.6v4.6H235v13.7h-25.6v4.6H235v13.6h-33v4.6h41v-41h-41Zm-14.6 15.3 14.6-15.3-10.4.1-9.2 10 5 5.2Zm-5.1 5.4-19.9-20.7h-10l19.5 20.9-19.2 20.2h10.2l19.4-20.3Zm18.8 19.7-13.7-14.4-5.3 5.5 9.2 9.6h10.4l-.6-.7Z"
            />
            <path
              fill="#FBFCFD"
              d="M183.5 245.7h-18a2 2 0 0 1 0-4h18a2 2 0 0 1 0 4Zm12.5-.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            />
          </g>
          <defs>
            <filter
              id="a"
              width="845.8"
              height="704"
              x="50"
              y="0"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="17" />
              <feGaussianBlur stdDeviation="30" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                values="0 0 0 0 0.423529 0 0 0 0 0.388235 0 0 0 0 1 0 0 0 0.2 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_43_4"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_43_4"
                result="shape"
              />
            </filter>
            <filter
              id="b"
              width="351.4"
              height="577.9"
              x="0"
              y="184"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="17" />
              <feGaussianBlur stdDeviation="30" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                values="0 0 0 0 0.423529 0 0 0 0 0.388235 0 0 0 0 1 0 0 0 0.2 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_43_4"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_43_4"
                result="shape"
              />
            </filter>
            <radialGradient
              id="c"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(0 218.949 -101.476 0 177 456)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#fff" />
              <stop offset="1" stop-color="#fff" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
    <section
      class="container flex flex-col place-items-center mx-auto px-4 py-32"
    >
      <div class="mx-auto w-full mb-12">
        <div class="title">
          <h3>Não definido</h3>
          <h2>Não definido</h2>
        </div>
      </div>
      <div
        class="bg-transparent comparativo gap-0 grid grid-cols-3 grid-rows-7 max-w-5xl overflow-hidden place-items-center relative rounded-2xl w-full md:grid-cols-9 md:h-full"
      >
        <div
          class="border-slate-200 hidden place-items-end place-self-end py-8 w-full md:col-span-3 md:flex"
        ></div>
        <div
          class="bg-slate-100 border-2 border-secondary-10 flex h-full place-content-center place-items-end place-self-end py-8 rounded-t-2xl w-full z-10 md:col-span-2"
        >
          <h6 class="font-semibold md:text-lg text-center text-slate-500">
            Calls
          </h6>
        </div>
        <div
          class="bg-slate-100 border-b-2 border-r-2 border-secondary-10 border-t-2 flex h-full place-content-center place-items-end place-self-end py-8 rounded-t-2xl w-full z-10 md:col-span-2"
        >
          <h6 class="font-semibold md:text-lg text-center text-slate-500">
            ATS/Dark pools
          </h6>
        </div>
        <div
          class="bg-primary-500 border-l-r-2 border-r-2 border-slate-300 border-t-r-2 flex h-full place-content-center place-items-end place-self-end py-8 rounded-t-2xl w-full z-10 md:col-span-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 138 66"
            class="w-5/12"
          >
            <path
              fill="#f1f4f9"
              d="M43.2 4.7H8.7v14h26.7v4.7H8.7v14h34.5V42H.5V0h42.7v4.7ZM94.8 0v4.7h34.5v14h-26.7v4.7h26.7v14H94.8V42h42.7V0H94.8ZM79.6 15.6 94.8 0 84 .1l-9.6 10.2 5.2 5.3Zm-5.3 5.6L53.6 0H43.2l20.3 21.4-20 20.6h10.7l20-20.8Zm19.5 20.1L79.6 26.6l-5.5 5.6 9.6 9.8h10.8l-.6-.7Z"
            />
            <path
              fill="#f1f4f9"
              d="M11.9 52.4c1 1 1.6 2.4 1.6 4.3v9.2h-2v-2.4c-.5.8-1.2 1.4-2.1 1.8-1 .5-2 .7-3.2.7-1.8 0-3.1-.4-4.2-1.2C1 64 .5 63 .5 61.7s.5-2.3 1.4-3c1-.8 2.5-1.2 4.6-1.2h4.9v-.9c0-1.3-.4-2.2-1.1-3-.8-.6-1.9-.9-3.3-.9-1 0-2 .2-2.8.5-1 .3-1.7.7-2.3 1.2L.9 53c.8-.6 1.7-1 2.8-1.4C4.8 51 6 51 7.2 51c2 0 3.6.4 4.7 1.4ZM9.5 63.6c.8-.5 1.5-1.2 1.9-2.2V59H6.5c-2.6 0-4 .9-4 2.6 0 .9.4 1.6 1 2 .8.6 1.7.8 3 .8 1.2 0 2.2-.2 3-.8ZM35 51v15h-2v-2.7a5 5 0 0 1-2.3 2 7 7 0 0 1-3.3.8c-2 0-3.6-.5-4.8-1.6a6.5 6.5 0 0 1-1.7-4.8v-8.5h2v8.3a5 5 0 0 0 1.3 3.6c.8.8 2 1.2 3.4 1.2 1.7 0 3-.5 3.9-1.4 1-1 1.4-2.3 1.4-4v-7.7h2Zm10 14a7.1 7.1 0 0 1-2.8-2.6c-.7-1.2-1-2.5-1-4A7.1 7.1 0 0 1 45 52a8.5 8.5 0 0 1 7.6-.2c1 .5 1.9 1.2 2.5 2.2l-1.6 1a4.8 4.8 0 0 0-1.9-1.6 6 6 0 0 0-2.6-.6c-1 0-2 .2-3 .7-.9.5-1.6 1.2-2 2a6 6 0 0 0-.8 3 6 6 0 0 0 .7 3c.5 1 1.2 1.6 2.1 2.1 1 .5 2 .7 3 .7s1.8-.2 2.6-.5c.8-.4 1.4-1 2-1.6l1.5 1c-.6 1-1.4 1.7-2.5 2.2a8 8 0 0 1-3.6.7c-1.5 0-2.9-.3-4-1Zm24.3 0a4 4 0 0 1-1.4.7L66 66a5 5 0 0 1-3.4-1.1 4.2 4.2 0 0 1-1.2-3.2v-9h-2.7v-1.6h2.7v-3.3h2.1v3.3h4.7v1.7h-4.7v8.8c0 .9.3 1.5.7 2a3 3 0 0 0 2 .7c.4 0 .9 0 1.3-.2a3 3 0 0 0 1-.6l.7 1.5ZM75 47.4a1.3 1.3 0 0 1 0-2c.3-.3.6-.4 1-.4.5 0 .9.1 1.2.4.3.3.4.6.4 1s-.1.7-.4 1c-.3.3-.7.4-1.1.4-.5 0-.8-.1-1.1-.4Zm0 3.7h2.1v14.8h-2V51ZM87.1 65a7.3 7.3 0 0 1-3.8-6.5 7.1 7.1 0 0 1 3.9-6.5c1.1-.7 2.5-1 4-1a8 8 0 0 1 4 1 7 7 0 0 1 2.8 2.6 7 7 0 0 1 1 3.9 7.1 7.1 0 0 1-3.8 6.6 9 9 0 0 1-8-.1Zm7-1.5c.9-.5 1.6-1.1 2-2a6 6 0 0 0 .8-3 6 6 0 0 0-.8-3 5 5 0 0 0-2-2 6 6 0 0 0-3-.8 6 6 0 0 0-3 .7c-.8.5-1.5 1.2-2 2a6 6 0 0 0-.7 3 6 6 0 0 0 .7 3 5 5 0 0 0 2 2.1 6 6 0 0 0 3 .7 6 6 0 0 0 3-.7Zm23.6-10.9c1.1 1 1.7 2.6 1.7 4.7v8.6h-2.1v-8.4c0-1.6-.4-2.7-1.2-3.5-.8-.8-2-1.2-3.4-1.2-1.7 0-3 .4-4 1.4-1 1-1.5 2.2-1.5 3.9v7.8h-2V51h2v2.7c.5-.9 1.3-1.6 2.3-2 1-.6 2.2-.8 3.5-.8 2 0 3.5.5 4.7 1.6Zm9.8 12.9c-1.2-.4-2-.8-2.7-1.3l1-1.6c.6.5 1.4.9 2.4 1.2 1 .3 2 .4 3 .4 1.5 0 2.5-.2 3.2-.6.7-.4 1-1 1-1.8 0-.5-.2-1-.6-1.2-.3-.4-.8-.6-1.4-.8l-2.2-.4c-1.3-.2-2.3-.5-3-.7-.8-.2-1.5-.6-2-1.2-.6-.6-.8-1.3-.8-2.3 0-1.3.5-2.3 1.6-3 1-.9 2.6-1.2 4.5-1.2a12 12 0 0 1 5.5 1.3l-1 1.6a8 8 0 0 0-4.5-1.2c-1.3 0-2.3.2-3 .6-.7.5-1 1-1 1.8 0 .6.2 1 .5 1.4.4.3.9.6 1.5.7l2.3.5c1.3.2 2.2.5 3 .7.7.2 1.4.6 2 1.1.4.6.7 1.3.7 2.3 0 1.3-.6 2.3-1.7 3a8.3 8.3 0 0 1-4.7 1.2c-1.2 0-2.4-.2-3.6-.5Z"
            />
          </svg>
        </div>
        <div
          class="bg-slate-100 border-2 border-slate-200 col-span-3 flex h-full mt-8 place-content-center place-items-center w-full md:mt-0 md:pl-8 md:place-content-start md:rounded-tl-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 55 48"
            class="h-full mr-3 w-8"
          >
            <circle cx="40" cy="32.9" r="15" fill="#66DAFF" fill-opacity=".6" />
            <path
              fill="#7777F8"
              d="m28.5 19.8 18-11v22H24v4.5h22.5c1.2 0 2.3-.4 3.2-1.3.9-.9 1.3-2 1.3-3.1V4.4c0-1.2-.4-2.2-1.3-3.1-1-.9-2-1.3-3.2-1.3h-36C9.2 0 8.2.4 7.3 1.3 6.4 2.2 6 3.2 6 4.4v11h4.5V8.8l18 11Zm0-4.4-18-11h36l-18 11Zm18-6.6V4.4 31 9Z"
            />
            <path
              fill="#7777F8"
              fill-rule="evenodd"
              d="M17.7 37.7c-2 .9-4.4 1.3-7.3 1.3-2.8 0-5.3-.4-7.3-1.3S0 35.7 0 34.3v-11c0-1.4 1.2-2.5 3.2-3.4 2-.9 4.4-1.3 7.2-1.3s5.3.4 7.3 1.3 3.1 2 3.1 3.4v11c0 1.4-1.1 2.5-3 3.4Zm-9.5-7.1a22.4 22.4 0 0 0 8.4-.8l1.4-.6v-2.6a11.3 11.3 0 0 1-3 1 20.5 20.5 0 0 1-6.9.3A20.7 20.7 0 0 1 3 26.6v2.6a11.2 11.2 0 0 0 3.2 1l2 .4ZM7.8 36a18 18 0 0 0 9.4-1.2c.5-.2.7-.4.8-.6v-2.1a11.3 11.3 0 0 1-3 1 20.5 20.5 0 0 1-6.9.3A20.7 20.7 0 0 1 3 32v2.1c0 .2.3.4.7.6l1.8.7 2.4.5Zm2.6-10.8a18.4 18.4 0 0 1-6.8-1.4c-.4-.2-.6-.3-.7-.5l.7-.5 1.9-.7a18 18 0 0 1 11.7.7l.7.5c-.1.2-.3.4-.7.5a18.2 18.2 0 0 1-6.8 1.4Z"
              clip-rule="evenodd"
            />
          </svg>
          <h6 class="font-semibold text-center text-slate-600 md:text-left">
            Modelo de precificação
          </h6>
        </div>
        <div
          class="bg-slate-50 border-b-2 border-l-2 border-r-2 border-slate-200 flex flex-col h-full place-content-end place-items-center px-3 py-10 w-full md:col-span-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 47 54"
            class="like w-3/12"
          >
            <ellipse
              cx="30.9"
              cy="37.4"
              fill="#A2CF66"
              opacity=".2"
              rx="16"
              ry="16.4"
            />
            <path
              fill="#A2CF66"
              d="M38.7 22.1a6.5 6.5 0 0 0 1.3-4c0-2.2-1.3-4.3-3.3-5.5-.5-.3-1-.5-1.7-.5H23l.3-6.2A5.4 5.4 0 0 0 18 .2a5.8 5.8 0 0 0-5.5 4.3L8 20.2H1.6c-.9 0-1.6.7-1.6 1.6v18.4c0 .9.7 1.6 1.6 1.6h30c.5 0 1 0 1.4-.3a6.5 6.5 0 0 0 3.6-7.8 6.5 6.5 0 0 0 1-5.8 6.5 6.5 0 0 0 1-5.8Zm-35.1 16V23.9h4v14.4h-4Zm31.8-17.8-1 1 .6 1.3c.2.4.4.9.4 1.4 0 .8-.4 1.6-1 2.1l-1.1 1 .7 1.3c.2.4.3.9.3 1.4 0 .8-.3 1.6-1 2.1l-1 1 .7 1.3a2.9 2.9 0 0 1-1.3 4H10.8V23.7l5-18.2a2.2 2.2 0 0 1 2-1.7c.4 0 .8.2 1 .4.6.4.9 1 .8 1.5l-.5 10H35a3 3 0 0 1 1.4 2.5c0 .8-.4 1.6-1 2.1Z"
            />
          </svg>
          <p
            class="font-medium lg:text-base leading-4 lg:leading-5 mt-2 text-center text-slate-600"
          >
            Por oferta<br />
            e demanda
          </p>
        </div>
        <div
          class="bg-slate-50 border-b-2 border-r-2 border-slate-200 flex flex-col h-full md:col-span-2 place-content-end place-items-center px-3 py-10 w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 47 54"
            class="like w-3/12"
            fill="none"
          >
            <ellipse
              cx="30.9"
              cy="24.4"
              fill="#D03435"
              opacity=".2"
              rx="16"
              ry="16.4"
            />
            <path
              fill="#D03435"
              d="M38.7 19.7a6.5 6.5 0 0 1 1.3 4c0 2.2-1.3 4.3-3.3 5.5-.5.3-1 .5-1.7.5H23l.3 6.2a5.4 5.4 0 0 1-5.4 5.7 5.8 5.8 0 0 1-5.5-4.3L8 21.6H1.6C.7 21.6 0 20.9 0 20V1.6C0 .7.7 0 1.6 0h30c.5 0 1 0 1.4.3A6.5 6.5 0 0 1 36.6 8a6.5 6.5 0 0 1 1 5.8 6.5 6.5 0 0 1 1 5.8ZM3.6 3.7V18h4V3.6h-4Zm31.8 17.8-1-1 .6-1.3c.2-.4.4-.9.4-1.4 0-.8-.4-1.6-1-2.1l-1.1-1 .7-1.3c.2-.4.3-.9.3-1.4 0-.8-.3-1.6-1-2.1l-1-1 .7-1.3a2.9 2.9 0 0 0-1.3-4H10.8v14.5l5 18.2a2.2 2.2 0 0 0 2 1.7c.4 0 .8-.2 1-.4.6-.4.9-1 .8-1.5l-.5-10H35a3 3 0 0 0 1.4-2.5c0-.8-.4-1.6-1-2.1Z"
            />
          </svg>
          <p
            class="font-medium lg:text-base leading-4 lg:leading-5 mt-2 text-center text-slate-600"
          >
            Predefinido<br />
            pelo broker
          </p>
        </div>
        <div
          class="bg-real-white-100 border-b-2 border-r-2 border-slate-200 flex flex-col h-full place-content-end place-items-center px-3 py-10 w-full z-10 md:col-span-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 47 54"
            class="like w-3/12"
          >
            <ellipse
              cx="30.9"
              cy="37.4"
              fill="#A2CF66"
              opacity=".2"
              rx="16"
              ry="16.4"
            />
            <path
              fill="#A2CF66"
              d="M38.7 22.1a6.5 6.5 0 0 0 1.3-4c0-2.2-1.3-4.3-3.3-5.5-.5-.3-1-.5-1.7-.5H23l.3-6.2A5.4 5.4 0 0 0 18 .2a5.8 5.8 0 0 0-5.5 4.3L8 20.2H1.6c-.9 0-1.6.7-1.6 1.6v18.4c0 .9.7 1.6 1.6 1.6h30c.5 0 1 0 1.4-.3a6.5 6.5 0 0 0 3.6-7.8 6.5 6.5 0 0 0 1-5.8 6.5 6.5 0 0 0 1-5.8Zm-35.1 16V23.9h4v14.4h-4Zm31.8-17.8-1 1 .6 1.3c.2.4.4.9.4 1.4 0 .8-.4 1.6-1 2.1l-1.1 1 .7 1.3c.2.4.3.9.3 1.4 0 .8-.3 1.6-1 2.1l-1 1 .7 1.3a2.9 2.9 0 0 1-1.3 4H10.8V23.7l5-18.2a2.2 2.2 0 0 1 2-1.7c.4 0 .8.2 1 .4.6.4.9 1 .8 1.5l-.5 10H35a3 3 0 0 1 1.4 2.5c0 .8-.4 1.6-1 2.1Z"
            />
          </svg>
          <p
            class="font-medium lg:text-base leading-4 lg:leading-5 mt-2 text-center text-slate-600"
          >
            Por oferta<br />
            e demanda
          </p>
        </div>
        <div
          class="bg-slate-100 border-2 border-slate-200 col-span-3 flex h-full mt-8 place-content-center place-items-center w-full md:border-b-2 md:border-r-0 md:border-t-0 md:mt-0 md:pl-8 md:place-content-start"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 55 48"
            class="h-full mr-3 w-8"
          >
            <circle cx="40" cy="33" r="15" fill="#66DAFF" fill-opacity=".6" />
            <path
              fill="#7777F8"
              d="M33 38.5c-5.2 0-9.7-1.8-13.3-5.5a18.4 18.4 0 0 1-5.5-13.5c0-5.3 1.8-9.7 5.5-13.4A18 18 0 0 1 33 .5c5.2 0 9.7 1.9 13.4 5.6 3.7 3.7 5.5 8.1 5.5 13.4 0 5.3-1.8 9.8-5.5 13.5A18.2 18.2 0 0 1 33 38.5Zm0-4.8c4 0 7.4-1.3 10.1-4.1 2.8-2.8 4.2-6.1 4.2-10.1s-1.4-7.3-4.2-10a13.6 13.6 0 0 0-10-4.3c-4 0-7.3 1.4-10 4.2a13.8 13.8 0 0 0-4.2 10.1c0 4 1.4 7.3 4.1 10 2.8 2.9 6.2 4.3 10 4.3Zm5.5-5.4 3.3-3.3-6.3-6.4V10h-4.8v10.5l7.8 7.8Zm-36.1-16V7.7h9.4v4.8H2.4ZM0 22v-5h11.8v5H0Zm2.4 9.5v-4.8h9.4v4.8H2.4Z"
            />
          </svg>
          <h6 class="text-center font-semibold md:text-left text-slate-600">
            Processo de Negociação
          </h6>
        </div>
        <div
          class="bg-slate-50 border-b-2 border-l-2 border-r-2 border-slate-200 flex flex-col h-full place-content-end place-items-center px-3 py-10 w-full md:col-span-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 47 54"
            class="like w-3/12"
            fill="none"
          >
            <ellipse
              cx="30.9"
              cy="24.4"
              fill="#D03435"
              opacity=".2"
              rx="16"
              ry="16.4"
            />
            <path
              fill="#D03435"
              d="M38.7 19.7a6.5 6.5 0 0 1 1.3 4c0 2.2-1.3 4.3-3.3 5.5-.5.3-1 .5-1.7.5H23l.3 6.2a5.4 5.4 0 0 1-5.4 5.7 5.8 5.8 0 0 1-5.5-4.3L8 21.6H1.6C.7 21.6 0 20.9 0 20V1.6C0 .7.7 0 1.6 0h30c.5 0 1 0 1.4.3A6.5 6.5 0 0 1 36.6 8a6.5 6.5 0 0 1 1 5.8 6.5 6.5 0 0 1 1 5.8ZM3.6 3.7V18h4V3.6h-4Zm31.8 17.8-1-1 .6-1.3c.2-.4.4-.9.4-1.4 0-.8-.4-1.6-1-2.1l-1.1-1 .7-1.3c.2-.4.3-.9.3-1.4 0-.8-.3-1.6-1-2.1l-1-1 .7-1.3a2.9 2.9 0 0 0-1.3-4H10.8v14.5l5 18.2a2.2 2.2 0 0 0 2 1.7c.4 0 .8-.2 1-.4.6-.4.9-1 .8-1.5l-.5-10H35a3 3 0 0 0 1.4-2.5c0-.8-.4-1.6-1-2.1Z"
            />
          </svg>
          <p
            class="font-medium lg:text-base leading-4 lg:leading-5 mt-2 text-center text-slate-600"
          >
            Lento e<br />
            exposto
          </p>
        </div>
        <div
          class="bg-slate-50 border-b-2 border-r-2 border-slate-200 flex flex-col h-full md:col-span-2 place-content-end place-items-center px-3 py-10 w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 47 54"
            class="like w-3/12"
          >
            <ellipse
              cx="30.9"
              cy="37.4"
              fill="#A2CF66"
              opacity=".2"
              rx="16"
              ry="16.4"
            />
            <path
              fill="#A2CF66"
              d="M38.7 22.1a6.5 6.5 0 0 0 1.3-4c0-2.2-1.3-4.3-3.3-5.5-.5-.3-1-.5-1.7-.5H23l.3-6.2A5.4 5.4 0 0 0 18 .2a5.8 5.8 0 0 0-5.5 4.3L8 20.2H1.6c-.9 0-1.6.7-1.6 1.6v18.4c0 .9.7 1.6 1.6 1.6h30c.5 0 1 0 1.4-.3a6.5 6.5 0 0 0 3.6-7.8 6.5 6.5 0 0 0 1-5.8 6.5 6.5 0 0 0 1-5.8Zm-35.1 16V23.9h4v14.4h-4Zm31.8-17.8-1 1 .6 1.3c.2.4.4.9.4 1.4 0 .8-.4 1.6-1 2.1l-1.1 1 .7 1.3c.2.4.3.9.3 1.4 0 .8-.3 1.6-1 2.1l-1 1 .7 1.3a2.9 2.9 0 0 1-1.3 4H10.8V23.7l5-18.2a2.2 2.2 0 0 1 2-1.7c.4 0 .8.2 1 .4.6.4.9 1 .8 1.5l-.5 10H35a3 3 0 0 1 1.4 2.5c0 .8-.4 1.6-1 2.1Z"
            />
          </svg>
          <p
            class="font-medium lg:text-base leading-4 lg:leading-5 mt-2 text-center text-slate-600"
          >
            Rápido com<br />
            ordens seladas
          </p>
        </div>
        <div
          class="bg-real-white-100 border-b-2 border-r-2 border-slate-200 flex flex-col h-full md-row-span-2 place-content-end place-items-center px-3 py-10 w-full z-10 md:col-span-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 47 54"
            class="like w-3/12"
          >
            <ellipse
              cx="30.9"
              cy="37.4"
              fill="#A2CF66"
              opacity=".2"
              rx="16"
              ry="16.4"
            />
            <path
              fill="#A2CF66"
              d="M38.7 22.1a6.5 6.5 0 0 0 1.3-4c0-2.2-1.3-4.3-3.3-5.5-.5-.3-1-.5-1.7-.5H23l.3-6.2A5.4 5.4 0 0 0 18 .2a5.8 5.8 0 0 0-5.5 4.3L8 20.2H1.6c-.9 0-1.6.7-1.6 1.6v18.4c0 .9.7 1.6 1.6 1.6h30c.5 0 1 0 1.4-.3a6.5 6.5 0 0 0 3.6-7.8 6.5 6.5 0 0 0 1-5.8 6.5 6.5 0 0 0 1-5.8Zm-35.1 16V23.9h4v14.4h-4Zm31.8-17.8-1 1 .6 1.3c.2.4.4.9.4 1.4 0 .8-.4 1.6-1 2.1l-1.1 1 .7 1.3c.2.4.3.9.3 1.4 0 .8-.3 1.6-1 2.1l-1 1 .7 1.3a2.9 2.9 0 0 1-1.3 4H10.8V23.7l5-18.2a2.2 2.2 0 0 1 2-1.7c.4 0 .8.2 1 .4.6.4.9 1 .8 1.5l-.5 10H35a3 3 0 0 1 1.4 2.5c0 .8-.4 1.6-1 2.1Z"
            />
          </svg>
          <p
            class="font-medium lg:text-base leading-4 lg:leading-5 mt-2 text-center text-slate-600"
          >
            Rápido com<br />
            ordens seladas
          </p>
        </div>
        <div
          class="bg-slate-100 border-2 border-slate-200 col-span-3 flex h-full place-content-center place-items-center pt-8 w-full md:border-b-r-0 md:border-r-0 md:border-t-0 md:pl-8 md:place-content-start md:pt-0 md:rounded-bl-2xl"
        >
          <svg
            width="55"
            height="49"
            viewBox="0 0 55 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-full mr-3 w-8"
          >
            <circle
              cx="40"
              cy="33.8984"
              r="15"
              fill="#66DAFF"
              fill-opacity="0.6"
            />
            <path
              d="M15 40.5L11.5 36.9375L17.9375 30.5H0V25.5H17.9375L11.5 19.0625L15 15.5L27.5 28L15 40.5ZM35 25.5L22.5 13L35 0.5L38.5 4.0625L32.0625 10.5H50V15.5H32.0625L38.5 21.9375L35 25.5Z"
              fill="#7777F8"
            />
          </svg>
          <h6 class="text-center font-semibold md:text-left text-slate-600">
            Ordens de Troca
          </h6>
        </div>
        <div
          class="bg-slate-50 border-b-2 border-l-2 border-r-2 border-slate-200 border-t-b-2 flex flex-col h-full place-content-end place-items-center px-3 py-10 rounded-bl-2xl w-full md:col-span-2 md:pb-12 md:rounded-bl-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 47 54"
            class="like w-3/12"
            fill="none"
          >
            <ellipse
              cx="30.9"
              cy="24.4"
              fill="#D03435"
              opacity=".2"
              rx="16"
              ry="16.4"
            />
            <path
              fill="#D03435"
              d="M38.7 19.7a6.5 6.5 0 0 1 1.3 4c0 2.2-1.3 4.3-3.3 5.5-.5.3-1 .5-1.7.5H23l.3 6.2a5.4 5.4 0 0 1-5.4 5.7 5.8 5.8 0 0 1-5.5-4.3L8 21.6H1.6C.7 21.6 0 20.9 0 20V1.6C0 .7.7 0 1.6 0h30c.5 0 1 0 1.4.3A6.5 6.5 0 0 1 36.6 8a6.5 6.5 0 0 1 1 5.8 6.5 6.5 0 0 1 1 5.8ZM3.6 3.7V18h4V3.6h-4Zm31.8 17.8-1-1 .6-1.3c.2-.4.4-.9.4-1.4 0-.8-.4-1.6-1-2.1l-1.1-1 .7-1.3c.2-.4.3-.9.3-1.4 0-.8-.3-1.6-1-2.1l-1-1 .7-1.3a2.9 2.9 0 0 0-1.3-4H10.8v14.5l5 18.2a2.2 2.2 0 0 0 2 1.7c.4 0 .8-.2 1-.4.6-.4.9-1 .8-1.5l-.5-10H35a3 3 0 0 0 1.4-2.5c0-.8-.4-1.6-1-2.1Z"
            />
          </svg>
          <p
            class="font-medium lg:text-base leading-4 lg:leading-5 mt-2 text-center text-slate-600"
          >
            Não permite<br />
            ordens de troca
          </p>
        </div>
        <div
          class="bg-slate-50 border-b-2 border-r-2 border-slate-200 flex flex-col h-full md:col-span-2 md:pb-12 place-content-end place-items-center px-3 py-10 w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 47 54"
            class="like w-3/12"
            fill="none"
          >
            <ellipse
              cx="30.9"
              cy="24.4"
              fill="#D03435"
              opacity=".2"
              rx="16"
              ry="16.4"
            />
            <path
              fill="#D03435"
              d="M38.7 19.7a6.5 6.5 0 0 1 1.3 4c0 2.2-1.3 4.3-3.3 5.5-.5.3-1 .5-1.7.5H23l.3 6.2a5.4 5.4 0 0 1-5.4 5.7 5.8 5.8 0 0 1-5.5-4.3L8 21.6H1.6C.7 21.6 0 20.9 0 20V1.6C0 .7.7 0 1.6 0h30c.5 0 1 0 1.4.3A6.5 6.5 0 0 1 36.6 8a6.5 6.5 0 0 1 1 5.8 6.5 6.5 0 0 1 1 5.8ZM3.6 3.7V18h4V3.6h-4Zm31.8 17.8-1-1 .6-1.3c.2-.4.4-.9.4-1.4 0-.8-.4-1.6-1-2.1l-1.1-1 .7-1.3c.2-.4.3-.9.3-1.4 0-.8-.3-1.6-1-2.1l-1-1 .7-1.3a2.9 2.9 0 0 0-1.3-4H10.8v14.5l5 18.2a2.2 2.2 0 0 0 2 1.7c.4 0 .8-.2 1-.4.6-.4.9-1 .8-1.5l-.5-10H35a3 3 0 0 0 1.4-2.5c0-.8-.4-1.6-1-2.1Z"
            />
          </svg>
          <p
            class="font-medium lg:text-base leading-4 lg:leading-5 mt-2 text-center text-slate-600"
          >
            Não permite<br />
            ordens de troca
          </p>
        </div>
        <div
          class="bg-real-white-100 border-b-2 border-r-2 border-slate-200 flex flex-col h-full place-content-end place-items-center px-3 py-10 rounded-br-2xl w-full z-10 md:col-span-2 md:pb-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 47 54"
            class="like w-3/12"
          >
            <ellipse
              cx="30.9"
              cy="37.4"
              fill="#A2CF66"
              opacity=".2"
              rx="16"
              ry="16.4"
            />
            <path
              fill="#A2CF66"
              d="M38.7 22.1a6.5 6.5 0 0 0 1.3-4c0-2.2-1.3-4.3-3.3-5.5-.5-.3-1-.5-1.7-.5H23l.3-6.2A5.4 5.4 0 0 0 18 .2a5.8 5.8 0 0 0-5.5 4.3L8 20.2H1.6c-.9 0-1.6.7-1.6 1.6v18.4c0 .9.7 1.6 1.6 1.6h30c.5 0 1 0 1.4-.3a6.5 6.5 0 0 0 3.6-7.8 6.5 6.5 0 0 0 1-5.8 6.5 6.5 0 0 0 1-5.8Zm-35.1 16V23.9h4v14.4h-4Zm31.8-17.8-1 1 .6 1.3c.2.4.4.9.4 1.4 0 .8-.4 1.6-1 2.1l-1.1 1 .7 1.3c.2.4.3.9.3 1.4 0 .8-.3 1.6-1 2.1l-1 1 .7 1.3a2.9 2.9 0 0 1-1.3 4H10.8V23.7l5-18.2a2.2 2.2 0 0 1 2-1.7c.4 0 .8.2 1 .4.6.4.9 1 .8 1.5l-.5 10H35a3 3 0 0 1 1.4 2.5c0 .8-.4 1.6-1 2.1Z"
            />
          </svg>
          <p
            class="font-medium lg:text-base leading-4 lg:leading-5 mt-2 text-center text-slate-600"
          >
            Permite ordens<br />
            de troca
          </p>
        </div>
      </div>
    </section>
    <section class="bg-slate-100 py-32">
      <div class="container flex flex-col mx-auto place-items-center px-4">
        <div
          class="flex-col mb-16 text-center lg:flex lg:max-w-2xl lg:place-items-center"
        >
          <h3>Nosso processo</h3>
          <h2>O leilão ocorre em duas etapas</h2>
          <p class="mt-4 my-8">
            O leilão funciona em duas etapas. Na primeira, são recebidas as
            ordens de compra e venda e é feito um cálculo dos preços ofertados e
            alocações (quantidades dos ativos que serão destinados a cada
            participante). Na segunda rodada, os preços já estão definidos e os
            participantes podem colocar novas ordens de compra, venda ou troca
            casada.
          </p>
        </div>
        <div
          class="flex flex-col gap-4 justify-around place-items-center w-full lg:flex-row"
        >
          <div
            class="gap-4 flex flex-col place-content-center place-items-center"
          >
            <nuxt-img src="/preco.svg" width="80" />
            <h6 class="text-center">Preço<br />e lote</h6>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 37 41"
            class="rotate-90 w-8 md:rotate-0"
          >
            <path
              fill="#C9CDD9"
              d="M33.5 15a6.3 6.3 0 0 1 0 11L10 39.6A6.3 6.3 0 0 1 .5 34V7c0-5 5.2-8 9.4-5.6L33.5 15Z"
            />
          </svg>
          <div
            class="gap-4 flex flex-col place-content-center place-items-center"
          >
            <nuxt-img src="/resultados.svg" width="80" />
            <h6 class="text-center">Divulgação<br />dos resultados</h6>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 37 41"
            class="rotate-90 w-8 md:rotate-0"
          >
            <path
              fill="#C9CDD9"
              d="M33.5 15a6.3 6.3 0 0 1 0 11L10 39.6A6.3 6.3 0 0 1 .5 34V7c0-5 5.2-8 9.4-5.6L33.5 15Z"
            />
          </svg>
          <div
            class="gap-4 flex flex-col place-content-center place-items-center"
          >
            <nuxt-img src="/recompra.svg" width="80" />
            <h6 class="text-center">ATS e<br />trocas</h6>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 37 41"
            class="rotate-90 w-8 md:rotate-0"
          >
            <path
              fill="#C9CDD9"
              d="M33.5 15a6.3 6.3 0 0 1 0 11L10 39.6A6.3 6.3 0 0 1 .5 34V7c0-5 5.2-8 9.4-5.6L33.5 15Z"
            />
          </svg>
          <div
            class="gap-4 flex flex-col place-content-center place-items-center"
          >
            <nuxt-img src="/resultados.svg" width="80" />
            <h6 class="text-center">Divulgação<br />dos resultados</h6>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto px-4 py-32">
      <div class="mx-auto">
        <h2 class="text-center">FAQ</h2>
      </div>
      <UAccordion
        :items="items"
        variant="link"
        size="xl"
        class="border-b border-gray-100 mx-auto py-6 rounded-none text-blue-900 w-full md:w-10/12"
      >
        <template #faq1>
          <div class="py-6 md:w-10/12 mx-auto">
            <p>
              Não. A EXE Auctions possui algumas características de dark pools,
              mas não se encaixa nesse conceito por conta da inovação que traz a
              esse sistema de negociação e porque opera com parâmetros
              diferentes.<br />
            </p>
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
              ativos que querem comprar ou vender.<br />
            </p>
            <p class="pt-3">
              Na EXE Auctions, os participantes conseguem ver se há ofertas de
              compra ou de venda para determinado ativo, mas não visualizam a
              quantidade e nem o preço ofertado.<br />
            </p>
            <p class="pt-3">
              Enquanto nas dark pools o preço é definido pelo participante ou
              por algoritmo, na EXE Auctions ele é formado pela oferta e demanda
              do ativo. Outra diferença é que, enquanto na dark pool a transação
              é fechada para aquele que primeiro inseriu a ordem de compra ou de
              venda primeiro, na EXE Auctions há um conjunto de critérios para
              que o negócio seja fechado:preço, tamanho da ordem e, por último,
              o critério temporal.
            </p>
          </div>
        </template>
        <template #faq2>
          <p class="py-6 md:w-10/12 mx-auto text-left">
            Sim, estamos. O grande participante eh a peca principal do mercado,
            naturalmente o provedor de liquidez. Esses agentes precisam ter
            vantagem na negociacao, os lotes menores continuam levando toda a
            vantagem na disputa por preco, enquanto os maiores, quando empatados
            no preco, sao executados no pro rata do lote.
          </p>
        </template>
        <template #faq3>
          <p class="py-6 md:w-10/12 mx-auto">
            Eh um conceito novo nas plataformas eletronicas, onde o participante
            tem a oportunidade de fazer a troca pelo mesmo valor financeiro.
            Isto eh, trocar 10 caixas de banana por 10 caixas de laranja,
            independente dos precos individuais. Com a garantia que o
            participante sempre executarah um valor proporcional a 1 x 1 caixa
            de fruta.
          </p>
        </template>
        <template #faq4>
          <p class="py-6 md:w-10/12 mx-auto">
            Economicamente, simplesmente banir ativos relacionados a alta
            emissao e combustivel fossil nao eh a melhor forma de agregar valor
            e liquidez ao mercado, mas sugerimos uma politica de custos de
            execucao menores para ativos verdes.
          </p>
        </template>
      </UAccordion>
    </section>
  </main>
</template>
<style scoped>
  .exelogo {
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
  .like {
    max-width: 2.2rem;
  }
  .comparativo {
    filter: drop-shadow(0px 0.4rem 3rem hsl(244, 100%, 80%, 0.2))
      drop-shadow(0 0.2rem 0.5rem hsl(244, 100%, 90%, 0.3));
  }
</style>
