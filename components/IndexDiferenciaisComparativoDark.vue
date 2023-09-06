<script setup>
  const { $gsap, $ScrollTrigger } = useNuxtApp()
  onMounted(() => {
    $gsap.to('.comparativo-sticky', {
      ease: 'power1.out',
      yPercent: 50,
      scrollTrigger: {
        start: 'top 60px',
        end: 'bottom 60px',
        scrub: true,
        pin: true,
        markers: false,
      },
    })
  })
</script>
<template>
    <section id="diferencial" class="overflow-hidden py-36 relative">
        <div class="relative z-10 container flex flex-col mx-auto px-4">
            <div class="flex-col mb-16 md:max-w-2xl md:mb-20 lg:max-w-2xl">
                <h3>Diferencial</h3>
                <h2 class="text-slate-50">
          A velocidade dos ATS com a eficiência dos mercados de balcão </h2>
                <h4 class="mb-6 sec3title text-slate-300 md:max-w-lg">
          Juntando o melhor dos dois mundos. Nossa solução elimina as
          desvantagens dos métodos atuais </h4>
            </div>
            <div class="border-b-2 border-opacity-50 border-primary-300 comparativo gap-0 grid grid-cols-3 grid-rows-7 h-96 overflow-scroll place-self-center relative rounded-lg text-slate-50 w-full md:border-2 md:border-opacity-10 md:border-primary-300 md:grid-cols-9 md:h-full md:overflow-hidden md:p-8 md:rounded-2xl">
                <div class="border-b-0 border-l-2 border-opacity-30 border-primary-300 border-r-2 border-t-2 col-span-3 hidden md:flex h-full md:border-0 md:pl-8 md:place-content-start md:py-0 md:rounded-tl-lg place-content-center place-items-center md:py-4 text-slate-50 w-full">
                    <h6 class="font-semibold text-center text-white md:text-lg">
            Atributos </h6>
                </div>
                <div class="border-2 border-opacity-30 border-primary-300 calls flex h-full place-content-center place-items-center place-self-start py-8 rounded-tl-lg self-start sticky text-slate-50 w-full z-10 md:border-b-0 md:border-l-r-0 md:border-r-0 md:border-t-0 md:col-span-2 md:rounded-t-none">
                    <h6 class="font-semibold text-center text-white md:text-lg">Calls</h6>
                </div>
                <div class="ats border-b-2 border-l-r-2 border-opacity-30 border-primary-300 border-r-2 border-t-2 flex h-full place-content-center place-items-center place-self-end py-8 text-slate-50 w-full z-10 md:border-b-0 md:border-l-t-0 md:border-r-0 md:border-t-0 md:col-span-2 md:rounded-t-none">
                    <h6 class="font-semibold text-center text-white md:text-lg">
            ATS/Dark pools </h6>
                </div>
                <div class="bgexe border-b-2 border-l-0 border-opacity-30 border-primary-300 border-r-2 border-t-2 border-t-r-2 flex h-full place-content-center place-items-center place-self-end rounded-tr-md w-full z-10 md:border-0 md:col-span-2 md:py-8 md:rounded-t-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 138 66" class="w-6/12">
                        <path fill="#f1f4f9" d="M43.2 4.7H8.7v14h26.7v4.7H8.7v14h34.5V42H.5V0h42.7v4.7ZM94.8 0v4.7h34.5v14h-26.7v4.7h26.7v14H94.8V42h42.7V0H94.8ZM79.6 15.6 94.8 0 84 .1l-9.6 10.2 5.2 5.3Zm-5.3 5.6L53.6 0H43.2l20.3 21.4-20 20.6h10.7l20-20.8Zm19.5 20.1L79.6 26.6l-5.5 5.6 9.6 9.8h10.8l-.6-.7Z"/>
                        <path fill="#f1f4f9" d="M11.9 52.4c1 1 1.6 2.4 1.6 4.3v9.2h-2v-2.4c-.5.8-1.2 1.4-2.1 1.8-1 .5-2 .7-3.2.7-1.8 0-3.1-.4-4.2-1.2C1 64 .5 63 .5 61.7s.5-2.3 1.4-3c1-.8 2.5-1.2 4.6-1.2h4.9v-.9c0-1.3-.4-2.2-1.1-3-.8-.6-1.9-.9-3.3-.9-1 0-2 .2-2.8.5-1 .3-1.7.7-2.3 1.2L.9 53c.8-.6 1.7-1 2.8-1.4C4.8 51 6 51 7.2 51c2 0 3.6.4 4.7 1.4ZM9.5 63.6c.8-.5 1.5-1.2 1.9-2.2V59H6.5c-2.6 0-4 .9-4 2.6 0 .9.4 1.6 1 2 .8.6 1.7.8 3 .8 1.2 0 2.2-.2 3-.8ZM35 51v15h-2v-2.7a5 5 0 0 1-2.3 2 7 7 0 0 1-3.3.8c-2 0-3.6-.5-4.8-1.6a6.5 6.5 0 0 1-1.7-4.8v-8.5h2v8.3a5 5 0 0 0 1.3 3.6c.8.8 2 1.2 3.4 1.2 1.7 0 3-.5 3.9-1.4 1-1 1.4-2.3 1.4-4v-7.7h2Zm10 14a7.1 7.1 0 0 1-2.8-2.6c-.7-1.2-1-2.5-1-4A7.1 7.1 0 0 1 45 52a8.5 8.5 0 0 1 7.6-.2c1 .5 1.9 1.2 2.5 2.2l-1.6 1a4.8 4.8 0 0 0-1.9-1.6 6 6 0 0 0-2.6-.6c-1 0-2 .2-3 .7-.9.5-1.6 1.2-2 2a6 6 0 0 0-.8 3 6 6 0 0 0 .7 3c.5 1 1.2 1.6 2.1 2.1 1 .5 2 .7 3 .7s1.8-.2 2.6-.5c.8-.4 1.4-1 2-1.6l1.5 1c-.6 1-1.4 1.7-2.5 2.2a8 8 0 0 1-3.6.7c-1.5 0-2.9-.3-4-1Zm24.3 0a4 4 0 0 1-1.4.7L66 66a5 5 0 0 1-3.4-1.1 4.2 4.2 0 0 1-1.2-3.2v-9h-2.7v-1.6h2.7v-3.3h2.1v3.3h4.7v1.7h-4.7v8.8c0 .9.3 1.5.7 2a3 3 0 0 0 2 .7c.4 0 .9 0 1.3-.2a3 3 0 0 0 1-.6l.7 1.5ZM75 47.4a1.3 1.3 0 0 1 0-2c.3-.3.6-.4 1-.4.5 0 .9.1 1.2.4.3.3.4.6.4 1s-.1.7-.4 1c-.3.3-.7.4-1.1.4-.5 0-.8-.1-1.1-.4Zm0 3.7h2.1v14.8h-2V51ZM87.1 65a7.3 7.3 0 0 1-3.8-6.5 7.1 7.1 0 0 1 3.9-6.5c1.1-.7 2.5-1 4-1a8 8 0 0 1 4 1 7 7 0 0 1 2.8 2.6 7 7 0 0 1 1 3.9 7.1 7.1 0 0 1-3.8 6.6 9 9 0 0 1-8-.1Zm7-1.5c.9-.5 1.6-1.1 2-2a6 6 0 0 0 .8-3 6 6 0 0 0-.8-3 5 5 0 0 0-2-2 6 6 0 0 0-3-.8 6 6 0 0 0-3 .7c-.8.5-1.5 1.2-2 2a6 6 0 0 0-.7 3 6 6 0 0 0 .7 3 5 5 0 0 0 2 2.1 6 6 0 0 0 3 .7 6 6 0 0 0 3-.7Zm23.6-10.9c1.1 1 1.7 2.6 1.7 4.7v8.6h-2.1v-8.4c0-1.6-.4-2.7-1.2-3.5-.8-.8-2-1.2-3.4-1.2-1.7 0-3 .4-4 1.4-1 1-1.5 2.2-1.5 3.9v7.8h-2V51h2v2.7c.5-.9 1.3-1.6 2.3-2 1-.6 2.2-.8 3.5-.8 2 0 3.5.5 4.7 1.6Zm9.8 12.9c-1.2-.4-2-.8-2.7-1.3l1-1.6c.6.5 1.4.9 2.4 1.2 1 .3 2 .4 3 .4 1.5 0 2.5-.2 3.2-.6.7-.4 1-1 1-1.8 0-.5-.2-1-.6-1.2-.3-.4-.8-.6-1.4-.8l-2.2-.4c-1.3-.2-2.3-.5-3-.7-.8-.2-1.5-.6-2-1.2-.6-.6-.8-1.3-.8-2.3 0-1.3.5-2.3 1.6-3 1-.9 2.6-1.2 4.5-1.2a12 12 0 0 1 5.5 1.3l-1 1.6a8 8 0 0 0-4.5-1.2c-1.3 0-2.3.2-3 .6-.7.5-1 1-1 1.8 0 .6.2 1 .5 1.4.4.3.9.6 1.5.7l2.3.5c1.3.2 2.2.5 3 .7.7.2 1.4.6 2 1.1.4.6.7 1.3.7 2.3 0 1.3-.6 2.3-1.7 3a8.3 8.3 0 0 1-4.7 1.2c-1.2 0-2.4-.2-3.6-.5Z"/>
                    </svg>
                </div>
                <div class="border-b-0 border-l-2 border-opacity-30 border-primary-300 border-r-2 border-t-0 col-span-3 flex h-full place-content-center place-items-center py-4 text-slate-50 w-full md:border-b-0 md:border-l-0 md:border-r-0 md:border-t-2 md:place-content-start md:px-8 md:py-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 55 48" class="h-full mr-3 w-8">
                        <circle cx="40" cy="32.9" r="15" fill="#66DAFF" fill-opacity=".6"/>
                        <path fill="#2D9AFF" d="m28.5 19.8 18-11v22H24v4.5h22.5c1.2 0 2.3-.4 3.2-1.3.9-.9 1.3-2 1.3-3.1V4.4c0-1.2-.4-2.2-1.3-3.1-1-.9-2-1.3-3.2-1.3h-36C9.2 0 8.2.4 7.3 1.3 6.4 2.2 6 3.2 6 4.4v11h4.5V8.8l18 11Zm0-4.4-18-11h36l-18 11Zm18-6.6V4.4 31 9Z"/>
                        <path fill="#2D9AFF" fill-rule="evenodd" d="M17.7 37.7c-2 .9-4.4 1.3-7.3 1.3-2.8 0-5.3-.4-7.3-1.3S0 35.7 0 34.3v-11c0-1.4 1.2-2.5 3.2-3.4 2-.9 4.4-1.3 7.2-1.3s5.3.4 7.3 1.3 3.1 2 3.1 3.4v11c0 1.4-1.1 2.5-3 3.4Zm-9.5-7.1a22.4 22.4 0 0 0 8.4-.8l1.4-.6v-2.6a11.3 11.3 0 0 1-3 1 20.5 20.5 0 0 1-6.9.3A20.7 20.7 0 0 1 3 26.6v2.6a11.2 11.2 0 0 0 3.2 1l2 .4ZM7.8 36a18 18 0 0 0 9.4-1.2c.5-.2.7-.4.8-.6v-2.1a11.3 11.3 0 0 1-3 1 20.5 20.5 0 0 1-6.9.3A20.7 20.7 0 0 1 3 32v2.1c0 .2.3.4.7.6l1.8.7 2.4.5Zm2.6-10.8a18.4 18.4 0 0 1-6.8-1.4c-.4-.2-.6-.3-.7-.5l.7-.5 1.9-.7a18 18 0 0 1 11.7.7l.7.5c-.1.2-.3.4-.7.5a18.2 18.2 0 0 1-6.8 1.4Z" clip-rule="evenodd"/>
                    </svg>
                    <h6 class="font-semibold mb-0 text-center text-white md:text-left">
            Modelo de precificação </h6>
                </div>
                <div class="border-2 border-opacity-30 border-primary-300 flex flex-col h-full md:border-b-0 md:border-r-0 md:border-t-2 md:col-span-2 place-content-end place-items-center px-3 py-4 md:py-8 text-slate-50 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 47 54" class="like w-3/12">
                        <ellipse cx="30.9" cy="37.4" fill="#A2CF66" opacity=".2" rx="16" ry="16.4"/>
                        <path fill="#A2CF66" d="M38.7 22.1a6.5 6.5 0 0 0 1.3-4c0-2.2-1.3-4.3-3.3-5.5-.5-.3-1-.5-1.7-.5H23l.3-6.2A5.4 5.4 0 0 0 18 .2a5.8 5.8 0 0 0-5.5 4.3L8 20.2H1.6c-.9 0-1.6.7-1.6 1.6v18.4c0 .9.7 1.6 1.6 1.6h30c.5 0 1 0 1.4-.3a6.5 6.5 0 0 0 3.6-7.8 6.5 6.5 0 0 0 1-5.8 6.5 6.5 0 0 0 1-5.8Zm-35.1 16V23.9h4v14.4h-4Zm31.8-17.8-1 1 .6 1.3c.2.4.4.9.4 1.4 0 .8-.4 1.6-1 2.1l-1.1 1 .7 1.3c.2.4.3.9.3 1.4 0 .8-.3 1.6-1 2.1l-1 1 .7 1.3a2.9 2.9 0 0 1-1.3 4H10.8V23.7l5-18.2a2.2 2.2 0 0 1 2-1.7c.4 0 .8.2 1 .4.6.4.9 1 .8 1.5l-.5 10H35a3 3 0 0 1 1.4 2.5c0 .8-.4 1.6-1 2.1Z"/>
                    </svg>
                    <p class="font-medium leading-4 mt-2 text-center text-white lg:leading-5 lg:text-base">
            Por oferta<br/>
            e demanda </p>
                </div>
                <div class="border-b-2 border-l-b-2 border-opacity-30 border-primary-300 border-r-0 border-t-2 flex flex-col h-full place-content-end place-items-center px-3 py-4 md:py-8 text-slate-50 w-full md:border-b-0 md:border-r-0 md:border-t-2 md:col-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 54" class="like w-3/12" fill="none">
                        <ellipse cx="30.9" cy="24.4" fill="#D03435" opacity=".2" rx="16" ry="16.4"/>
                        <path fill="#D03435" d="M38.7 19.7a6.5 6.5 0 0 1 1.3 4c0 2.2-1.3 4.3-3.3 5.5-.5.3-1 .5-1.7.5H23l.3 6.2a5.4 5.4 0 0 1-5.4 5.7 5.8 5.8 0 0 1-5.5-4.3L8 21.6H1.6C.7 21.6 0 20.9 0 20V1.6C0 .7.7 0 1.6 0h30c.5 0 1 0 1.4.3A6.5 6.5 0 0 1 36.6 8a6.5 6.5 0 0 1 1 5.8 6.5 6.5 0 0 1 1 5.8ZM3.6 3.7V18h4V3.6h-4Zm31.8 17.8-1-1 .6-1.3c.2-.4.4-.9.4-1.4 0-.8-.4-1.6-1-2.1l-1.1-1 .7-1.3c.2-.4.3-.9.3-1.4 0-.8-.3-1.6-1-2.1l-1-1 .7-1.3a2.9 2.9 0 0 0-1.3-4H10.8v14.5l5 18.2a2.2 2.2 0 0 0 2 1.7c.4 0 .8-.2 1-.4.6-.4.9-1 .8-1.5l-.5-10H35a3 3 0 0 0 1.4-2.5c0-.8-.4-1.6-1-2.1Z"/>
                    </svg>
                    <p class="font-medium leading-4 mt-2 text-center text-white lg:leading-5 lg:text-base">
            Predefinido<br/>
            pelo broker </p>
                </div>
                <div class="bg-opacity-20 bg-primary-400 border-2 border-opacity-30 border-primary-300 flex flex-col h-full place-content-end place-items-center px-3 py-4 w-full z-10 md:border-b-0 md:border-l-0 md:border-r-0 md:border-t-b-0 md:col-span-2 md:py-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 47 54" class="like w-3/12">
                        <ellipse cx="30.9" cy="37.4" fill="#A2CF66" opacity=".2" rx="16" ry="16.4"/>
                        <path fill="#A2CF66" d="M38.7 22.1a6.5 6.5 0 0 0 1.3-4c0-2.2-1.3-4.3-3.3-5.5-.5-.3-1-.5-1.7-.5H23l.3-6.2A5.4 5.4 0 0 0 18 .2a5.8 5.8 0 0 0-5.5 4.3L8 20.2H1.6c-.9 0-1.6.7-1.6 1.6v18.4c0 .9.7 1.6 1.6 1.6h30c.5 0 1 0 1.4-.3a6.5 6.5 0 0 0 3.6-7.8 6.5 6.5 0 0 0 1-5.8 6.5 6.5 0 0 0 1-5.8Zm-35.1 16V23.9h4v14.4h-4Zm31.8-17.8-1 1 .6 1.3c.2.4.4.9.4 1.4 0 .8-.4 1.6-1 2.1l-1.1 1 .7 1.3c.2.4.3.9.3 1.4 0 .8-.3 1.6-1 2.1l-1 1 .7 1.3a2.9 2.9 0 0 1-1.3 4H10.8V23.7l5-18.2a2.2 2.2 0 0 1 2-1.7c.4 0 .8.2 1 .4.6.4.9 1 .8 1.5l-.5 10H35a3 3 0 0 1 1.4 2.5c0 .8-.4 1.6-1 2.1Z"/>
                    </svg>
                    <p class="font-medium leading-4 mt-2 text-center text-slate-50 lg:leading-5 lg:text-base">
            Por oferta<br/>
            e demanda </p>
                </div>
                <div class="border-b-2 border-l-2 border-opacity-30 border-primary-300 border-r-2 col-span-3 flex h-full place-content-center place-items-center py-4 text-slate-50 w-full md:border-b-0 md:border-l-0 md:border-r-0 md:border-t-2 md:place-content-start md:px-8 md:py-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 55 48" class="h-full mr-3 w-8">
                        <circle cx="40" cy="33" r="15" fill="#66DAFF" fill-opacity=".6"/>
                        <path fill="#2D9AFF" d="M33 38.5c-5.2 0-9.7-1.8-13.3-5.5a18.4 18.4 0 0 1-5.5-13.5c0-5.3 1.8-9.7 5.5-13.4A18 18 0 0 1 33 .5c5.2 0 9.7 1.9 13.4 5.6 3.7 3.7 5.5 8.1 5.5 13.4 0 5.3-1.8 9.8-5.5 13.5A18.2 18.2 0 0 1 33 38.5Zm0-4.8c4 0 7.4-1.3 10.1-4.1 2.8-2.8 4.2-6.1 4.2-10.1s-1.4-7.3-4.2-10a13.6 13.6 0 0 0-10-4.3c-4 0-7.3 1.4-10 4.2a13.8 13.8 0 0 0-4.2 10.1c0 4 1.4 7.3 4.1 10 2.8 2.9 6.2 4.3 10 4.3Zm5.5-5.4 3.3-3.3-6.3-6.4V10h-4.8v10.5l7.8 7.8Zm-36.1-16V7.7h9.4v4.8H2.4ZM0 22v-5h11.8v5H0Zm2.4 9.5v-4.8h9.4v4.8H2.4Z"/>
                    </svg>
                    <h6 class="font-semibold mb-0 text-center text-slate-50 md:text-left">
            Processo de Negociação </h6>
                </div>
                <div class="border-b-2 border-l-2 border-opacity-30 border-primary-300 border-r-2 flex flex-col h-full md:border-b-0 md:border-r-0 md:border-t-2 md:col-span-2 md:py-8 place-content-end place-items-center px-3 py-4 text-slate-50 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 54" class="like w-3/12" fill="none">
                        <ellipse cx="30.9" cy="24.4" fill="#D03435" opacity=".2" rx="16" ry="16.4"/>
                        <path fill="#D03435" d="M38.7 19.7a6.5 6.5 0 0 1 1.3 4c0 2.2-1.3 4.3-3.3 5.5-.5.3-1 .5-1.7.5H23l.3 6.2a5.4 5.4 0 0 1-5.4 5.7 5.8 5.8 0 0 1-5.5-4.3L8 21.6H1.6C.7 21.6 0 20.9 0 20V1.6C0 .7.7 0 1.6 0h30c.5 0 1 0 1.4.3A6.5 6.5 0 0 1 36.6 8a6.5 6.5 0 0 1 1 5.8 6.5 6.5 0 0 1 1 5.8ZM3.6 3.7V18h4V3.6h-4Zm31.8 17.8-1-1 .6-1.3c.2-.4.4-.9.4-1.4 0-.8-.4-1.6-1-2.1l-1.1-1 .7-1.3c.2-.4.3-.9.3-1.4 0-.8-.3-1.6-1-2.1l-1-1 .7-1.3a2.9 2.9 0 0 0-1.3-4H10.8v14.5l5 18.2a2.2 2.2 0 0 0 2 1.7c.4 0 .8-.2 1-.4.6-.4.9-1 .8-1.5l-.5-10H35a3 3 0 0 0 1.4-2.5c0-.8-.4-1.6-1-2.1Z"/>
                    </svg>
                    <p class="font-medium leading-4 mt-2 text-center text-white lg:leading-5 lg:text-base">
            Lento e<br/>
            exposto </p>
                </div>
                <div class="border-b-2 border-l-b-2 border-opacity-30 border-primary-300 border-r-0 border-t-b-2 flex flex-col h-full md:border-b-0 md:border-r-0 md:border-t-2 md:col-span-2 md:py-8 place-content-end place-items-center px-3 py-4 text-slate-50 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 47 54" class="like w-3/12">
                        <ellipse cx="30.9" cy="37.4" fill="#A2CF66" opacity=".2" rx="16" ry="16.4"/>
                        <path fill="#A2CF66" d="M38.7 22.1a6.5 6.5 0 0 0 1.3-4c0-2.2-1.3-4.3-3.3-5.5-.5-.3-1-.5-1.7-.5H23l.3-6.2A5.4 5.4 0 0 0 18 .2a5.8 5.8 0 0 0-5.5 4.3L8 20.2H1.6c-.9 0-1.6.7-1.6 1.6v18.4c0 .9.7 1.6 1.6 1.6h30c.5 0 1 0 1.4-.3a6.5 6.5 0 0 0 3.6-7.8 6.5 6.5 0 0 0 1-5.8 6.5 6.5 0 0 0 1-5.8Zm-35.1 16V23.9h4v14.4h-4Zm31.8-17.8-1 1 .6 1.3c.2.4.4.9.4 1.4 0 .8-.4 1.6-1 2.1l-1.1 1 .7 1.3c.2.4.3.9.3 1.4 0 .8-.3 1.6-1 2.1l-1 1 .7 1.3a2.9 2.9 0 0 1-1.3 4H10.8V23.7l5-18.2a2.2 2.2 0 0 1 2-1.7c.4 0 .8.2 1 .4.6.4.9 1 .8 1.5l-.5 10H35a3 3 0 0 1 1.4 2.5c0 .8-.4 1.6-1 2.1Z"/>
                    </svg>
                    <p class="font-medium leading-4 mt-2 text-center text-white lg:leading-5 lg:text-base">
            Rápido com<br/>
            ordens seladas </p>
                </div>
                <div class="bg-opacity-20 bg-primary-400 border-b-2 border-l-2 border-opacity-30 border-primary-300 border-r-2 border-t-0 flex flex-col h-full md-row-span-2 md:border-b-0 md:border-l-0 md:border-r-0 md:border-t-2 md:col-span-2 md:py-8 place-content-end place-items-center px-3 py-4 w-full z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 47 54" class="like w-3/12">
                        <ellipse cx="30.9" cy="37.4" fill="#A2CF66" opacity=".2" rx="16" ry="16.4"/>
                        <path fill="#A2CF66" d="M38.7 22.1a6.5 6.5 0 0 0 1.3-4c0-2.2-1.3-4.3-3.3-5.5-.5-.3-1-.5-1.7-.5H23l.3-6.2A5.4 5.4 0 0 0 18 .2a5.8 5.8 0 0 0-5.5 4.3L8 20.2H1.6c-.9 0-1.6.7-1.6 1.6v18.4c0 .9.7 1.6 1.6 1.6h30c.5 0 1 0 1.4-.3a6.5 6.5 0 0 0 3.6-7.8 6.5 6.5 0 0 0 1-5.8 6.5 6.5 0 0 0 1-5.8Zm-35.1 16V23.9h4v14.4h-4Zm31.8-17.8-1 1 .6 1.3c.2.4.4.9.4 1.4 0 .8-.4 1.6-1 2.1l-1.1 1 .7 1.3c.2.4.3.9.3 1.4 0 .8-.3 1.6-1 2.1l-1 1 .7 1.3a2.9 2.9 0 0 1-1.3 4H10.8V23.7l5-18.2a2.2 2.2 0 0 1 2-1.7c.4 0 .8.2 1 .4.6.4.9 1 .8 1.5l-.5 10H35a3 3 0 0 1 1.4 2.5c0 .8-.4 1.6-1 2.1Z"/>
                    </svg>
                    <p class="font-medium leading-4 mt-2 text-center text-slate-50 lg:leading-5 lg:text-base">
            Rápido com<br/>
            ordens seladas </p>
                </div>
                <div class="border-b-2 border-l-2 border-opacity-30 border-primary-300 border-r-2 col-span-3 flex h-full place-content-center place-items-center py-4 text-slate-50 w-full md:border-b-0 md:border-l-0 md:border-r-0 md:border-t-2 md:pl-8 md:place-content-start md:pr-14 md:py-0 md:rounded-bl-lg">
                    <svg width="55" height="49" viewBox="0 0 55 49" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full mr-3 w-8">
                        <circle cx="40" cy="33.8984" r="15" fill="#66DAFF" fill-opacity="0.6"/>
                        <path d="M15 40.5L11.5 36.9375L17.9375 30.5H0V25.5H17.9375L11.5 19.0625L15 15.5L27.5 28L15 40.5ZM35 25.5L22.5 13L35 0.5L38.5 4.0625L32.0625 10.5H50V15.5H32.0625L38.5 21.9375L35 25.5Z" fill="#2D9AFF"/>
                    </svg>
                    <h6 class="font-semibold mb-0 text-center text-white md:text-left">
            Ordens de Troca </h6>
                </div>
                <div class="border-l-2 border-opacity-30 border-primary-300 border-r-2 border-t-b-2 flex flex-col h-full place-content-end place-items-center px-3 py-4 rounded-bl-lg text-slate-50 w-full md:border-b-0 md:border-r-0 md:border-t-2 md:col-span-2 md:py-8 md:rounded-bl-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 54" class="like w-3/12" fill="none">
                        <ellipse cx="30.9" cy="24.4" fill="#D03435" opacity=".2" rx="16" ry="16.4"/>
                        <path fill="#D03435" d="M38.7 19.7a6.5 6.5 0 0 1 1.3 4c0 2.2-1.3 4.3-3.3 5.5-.5.3-1 .5-1.7.5H23l.3 6.2a5.4 5.4 0 0 1-5.4 5.7 5.8 5.8 0 0 1-5.5-4.3L8 21.6H1.6C.7 21.6 0 20.9 0 20V1.6C0 .7.7 0 1.6 0h30c.5 0 1 0 1.4.3A6.5 6.5 0 0 1 36.6 8a6.5 6.5 0 0 1 1 5.8 6.5 6.5 0 0 1 1 5.8ZM3.6 3.7V18h4V3.6h-4Zm31.8 17.8-1-1 .6-1.3c.2-.4.4-.9.4-1.4 0-.8-.4-1.6-1-2.1l-1.1-1 .7-1.3c.2-.4.3-.9.3-1.4 0-.8-.3-1.6-1-2.1l-1-1 .7-1.3a2.9 2.9 0 0 0-1.3-4H10.8v14.5l5 18.2a2.2 2.2 0 0 0 2 1.7c.4 0 .8-.2 1-.4.6-.4.9-1 .8-1.5l-.5-10H35a3 3 0 0 0 1.4-2.5c0-.8-.4-1.6-1-2.1Z"/>
                    </svg>
                    <p class="font-medium leading-4 mt-2 text-center text-white lg:leading-5 lg:text-base">
            Não permite<br/>
            ordens de troca </p>
                </div>
                <div class="border-l-b-2 border-opacity-30 border-primary-300 border-r-0 border-t-b-2 flex flex-col h-full place-content-end place-items-center px-3 py-4 text-slate-50 w-full md:border-b-0 md:border-r-0 md:border-t-2 md:col-span-2 md:py-8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 54" class="like w-3/12" fill="none">
                        <ellipse cx="30.9" cy="24.4" fill="#D03435" opacity=".2" rx="16" ry="16.4"/>
                        <path fill="#D03435" d="M38.7 19.7a6.5 6.5 0 0 1 1.3 4c0 2.2-1.3 4.3-3.3 5.5-.5.3-1 .5-1.7.5H23l.3 6.2a5.4 5.4 0 0 1-5.4 5.7 5.8 5.8 0 0 1-5.5-4.3L8 21.6H1.6C.7 21.6 0 20.9 0 20V1.6C0 .7.7 0 1.6 0h30c.5 0 1 0 1.4.3A6.5 6.5 0 0 1 36.6 8a6.5 6.5 0 0 1 1 5.8 6.5 6.5 0 0 1 1 5.8ZM3.6 3.7V18h4V3.6h-4Zm31.8 17.8-1-1 .6-1.3c.2-.4.4-.9.4-1.4 0-.8-.4-1.6-1-2.1l-1.1-1 .7-1.3c.2-.4.3-.9.3-1.4 0-.8-.3-1.6-1-2.1l-1-1 .7-1.3a2.9 2.9 0 0 0-1.3-4H10.8v14.5l5 18.2a2.2 2.2 0 0 0 2 1.7c.4 0 .8-.2 1-.4.6-.4.9-1 .8-1.5l-.5-10H35a3 3 0 0 0 1.4-2.5c0-.8-.4-1.6-1-2.1Z"/>
                    </svg>
                    <p class="font-medium leading-4 mt-2 text-center text-white lg:leading-5 lg:text-base">
            Não permite<br/>
            ordens de troca </p>
                </div>
                <div class="bg-opacity-20 bg-primary-400 border-l-2 border-opacity-30 border-primary-300 border-r-2 border-t-0 flex flex-col h-full place-content-end place-items-center px-3 py-4 rounded-br-lg w-full z-10 md:border-b-0 md:border-l-0 md:border-r-0 md:border-t-2 md:col-span-2 md:py-8 md:rounded-b-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 47 54" class="like w-3/12">
                        <ellipse cx="30.9" cy="37.4" fill="#A2CF66" opacity=".2" rx="16" ry="16.4"/>
                        <path fill="#A2CF66" d="M38.7 22.1a6.5 6.5 0 0 0 1.3-4c0-2.2-1.3-4.3-3.3-5.5-.5-.3-1-.5-1.7-.5H23l.3-6.2A5.4 5.4 0 0 0 18 .2a5.8 5.8 0 0 0-5.5 4.3L8 20.2H1.6c-.9 0-1.6.7-1.6 1.6v18.4c0 .9.7 1.6 1.6 1.6h30c.5 0 1 0 1.4-.3a6.5 6.5 0 0 0 3.6-7.8 6.5 6.5 0 0 0 1-5.8 6.5 6.5 0 0 0 1-5.8Zm-35.1 16V23.9h4v14.4h-4Zm31.8-17.8-1 1 .6 1.3c.2.4.4.9.4 1.4 0 .8-.4 1.6-1 2.1l-1.1 1 .7 1.3c.2.4.3.9.3 1.4 0 .8-.3 1.6-1 2.1l-1 1 .7 1.3a2.9 2.9 0 0 1-1.3 4H10.8V23.7l5-18.2a2.2 2.2 0 0 1 2-1.7c.4 0 .8.2 1 .4.6.4.9 1 .8 1.5l-.5 10H35a3 3 0 0 1 1.4 2.5c0 .8-.4 1.6-1 2.1Z"/>
                    </svg>
                    <p class="font-medium leading-4 mt-2 text-center text-slate-50 lg:leading-5 lg:text-base">
            Permite ordens<br/>
            de troca </p>
                </div>
            </div>
            <!--     <div
        class="bg-transparent comparativo gap-0 grid grid-cols-3 grid-rows-7 hidden max-w-5xl md:bg-slate-50 md:border-8 md:border-slate-50 md:grid-cols-9 md:h-full md:p-10 md:rounded-2xl overflow-hidden place-self-center relative rounded-lg w-full"
      >
        <div
          class="bg-slate-100 border-b-0 border-l-2 border-r-2 border-slate-200 border-t-2 col-span-3 flex h-full place-content-center place-items-center py-4 w-full md:bg-slate-50 md:border-0 md:pl-8 md:place-content-start md:py-0 md:rounded-tl-lg"
        >
          <h6 class="font-semibold md:text-lg text-center text-slate-500">
            Atributos
          </h6>
        </div>
        <div
          class="bg-slate-100 border-b-0 border-l-2 border-r-2 border-secondary-10 border-t-2 flex h-full place-content-center place-items-end place-self-end py-8 rounded-t-lg w-full z-10 md:bg-slate-50 md:border-b-t-0 md:border-l-t-0 md:border-r-0 md:border-t-0 md:col-span-2 md:rounded-t-none"
        >
          <h6 class="font-semibold md:text-lg text-center text-slate-500">
            Calls
          </h6>
        </div>
        <div
          class="bg-slate-100 border-l-r-2 border-r-2 border-secondary-10 border-t-2 flex h-full md:bg-slate-50 md:border-t-0 md:col-span-2 md:rounded-t-none place-content-center place-items-end place-self-end py-8 rounded-t-lg w-full z-10"
        >
          <h6 class="font-semibold md:text-lg text-center text-slate-500">
            ATS/Dark pools
          </h6>
        </div>
        <div
          class="bgexe border-l-r-2 border-r-2 border-slate-300 border-t-r-2 flex h-full md:border-b-r-0 md:border-l-2 md:border-r-2 md:border-t-2 md:col-span-2 md:rounded-t-xl place-content-center place-items-end place-self-end py-8 rounded-tl-lg rounded-tr-md w-full z-10"
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
          class="bg-slate-100 border-b-0 border-l-2 border-r-2 border-slate-200 border-t-2 col-span-3 flex h-full place-content-center place-items-center py-4 w-full md:bg-slate-50 md:border-b-0 md:border-l-0 md:border-r-0 md:border-t-2 md:pl-8 md:place-content-start md:py-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 55 48"
            class="h-full mr-3 w-8"
          >
            <circle cx="40" cy="32.9" r="15" fill="#66DAFF" fill-opacity=".6" />
            <path
              fill="#2D9AFF"
              d="m28.5 19.8 18-11v22H24v4.5h22.5c1.2 0 2.3-.4 3.2-1.3.9-.9 1.3-2 1.3-3.1V4.4c0-1.2-.4-2.2-1.3-3.1-1-.9-2-1.3-3.2-1.3h-36C9.2 0 8.2.4 7.3 1.3 6.4 2.2 6 3.2 6 4.4v11h4.5V8.8l18 11Zm0-4.4-18-11h36l-18 11Zm18-6.6V4.4 31 9Z"
            />
            <path
              fill="#2D9AFF"
              fill-rule="evenodd"
              d="M17.7 37.7c-2 .9-4.4 1.3-7.3 1.3-2.8 0-5.3-.4-7.3-1.3S0 35.7 0 34.3v-11c0-1.4 1.2-2.5 3.2-3.4 2-.9 4.4-1.3 7.2-1.3s5.3.4 7.3 1.3 3.1 2 3.1 3.4v11c0 1.4-1.1 2.5-3 3.4Zm-9.5-7.1a22.4 22.4 0 0 0 8.4-.8l1.4-.6v-2.6a11.3 11.3 0 0 1-3 1 20.5 20.5 0 0 1-6.9.3A20.7 20.7 0 0 1 3 26.6v2.6a11.2 11.2 0 0 0 3.2 1l2 .4ZM7.8 36a18 18 0 0 0 9.4-1.2c.5-.2.7-.4.8-.6v-2.1a11.3 11.3 0 0 1-3 1 20.5 20.5 0 0 1-6.9.3A20.7 20.7 0 0 1 3 32v2.1c0 .2.3.4.7.6l1.8.7 2.4.5Zm2.6-10.8a18.4 18.4 0 0 1-6.8-1.4c-.4-.2-.6-.3-.7-.5l.7-.5 1.9-.7a18 18 0 0 1 11.7.7l.7.5c-.1.2-.3.4-.7.5a18.2 18.2 0 0 1-6.8 1.4Z"
              clip-rule="evenodd"
            />
          </svg>
          <h6
            class="font-semibold text-center text-slate-600 md:text-left mb-0"
          >
            Modelo de precificação
          </h6>
        </div>
        <div
          class="bg-slate-50 border-2 border-slate-200 flex flex-col h-full place-content-end place-items-center px-3 py-8 w-full md:border-b-0 md:border-l-b-0 md:border-r-0 md:border-t-2 md:col-span-2"
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
          class="bg-slate-50 border-b-2 border-l-b-2 border-r-2 border-slate-200 border-t-2 flex flex-col h-full place-content-end place-items-center px-3 py-8 w-full md:border-b-0 md:border-l-b-0 md:border-r-0 md:border-t-2 md:col-span-2"
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
          class="bg-real-white-100 border-b-2 border-r-2 border-slate-200 border-t-2 flex flex-col h-full place-content-end place-items-center px-3 py-8 w-full z-10 md:border-b-0 md:border-l-0 md:border-r-0 md:border-t-2 md:col-span-2"
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
          class="bg-slate-100 border-b-2 border-l-2 border-r-2 border-slate-200 col-span-3 flex h-full place-content-center place-items-center py-4 w-full md:bg-slate-50 md:border-b-0 md:border-l-0 md:border-r-0 md:border-t-2 md:pl-8 md:place-content-start md:py-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 55 48"
            class="h-full mr-3 w-8"
          >
            <circle cx="40" cy="33" r="15" fill="#66DAFF" fill-opacity=".6" />
            <path
              fill="#2D9AFF"
              d="M33 38.5c-5.2 0-9.7-1.8-13.3-5.5a18.4 18.4 0 0 1-5.5-13.5c0-5.3 1.8-9.7 5.5-13.4A18 18 0 0 1 33 .5c5.2 0 9.7 1.9 13.4 5.6 3.7 3.7 5.5 8.1 5.5 13.4 0 5.3-1.8 9.8-5.5 13.5A18.2 18.2 0 0 1 33 38.5Zm0-4.8c4 0 7.4-1.3 10.1-4.1 2.8-2.8 4.2-6.1 4.2-10.1s-1.4-7.3-4.2-10a13.6 13.6 0 0 0-10-4.3c-4 0-7.3 1.4-10 4.2a13.8 13.8 0 0 0-4.2 10.1c0 4 1.4 7.3 4.1 10 2.8 2.9 6.2 4.3 10 4.3Zm5.5-5.4 3.3-3.3-6.3-6.4V10h-4.8v10.5l7.8 7.8Zm-36.1-16V7.7h9.4v4.8H2.4ZM0 22v-5h11.8v5H0Zm2.4 9.5v-4.8h9.4v4.8H2.4Z"
            />
          </svg>
          <h6
            class="text-center font-semibold md:text-left text-slate-600 mb-0"
          >
            Processo de Negociação
          </h6>
        </div>
        <div
          class="bg-slate-50 border-b-2 border-l-2 border-r-2 border-slate-200 flex flex-col h-full place-content-end place-items-center px-3 py-8 w-full md:border-b-0 md:border-l-b-0 md:border-r-0 md:border-t-2 md:col-span-2"
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
          class="bg-slate-50 border-b-2 border-r-2 border-slate-200 flex flex-col h-full place-content-end place-items-center px-3 py-8 w-full md:border-b-0 md:border-l-b-0 md:border-r-0 md:border-t-2 md:col-span-2"
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
          class="bg-real-white-100 border-b-2 border-r-2 border-slate-200 flex flex-col h-full md-row-span-2 place-content-end place-items-center px-3 py-8 w-full z-10 md:border-b-0 md:border-l-0 md:border-r-0 md:border-t-2 md:col-span-2"
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
          class="bg-slate-100 border-b-2 border-l-2 border-r-2 border-slate-200 col-span-3 flex h-full place-content-center place-items-center py-4 w-full md:bg-slate-50 md:border-b-0 md:border-l-0 md:border-r-0 md:border-t-2 md:pl-8 md:place-content-start md:py-0 md:rounded-bl-lg"
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
              fill="#2D9AFF"
            />
          </svg>
          <h6
            class="text-center font-semibold md:text-left text-slate-600 mb-0"
          >
            Ordens de Troca
          </h6>
        </div>
        <div
          class="bg-slate-50 border-b-2 border-l-2 border-r-2 border-slate-200 border-t-b-2 flex flex-col h-full place-content-end place-items-center px-3 py-8 rounded-bl-lg w-full md:border-b-0 md:border-l-b-0 md:border-r-0 md:border-t-2 md:col-span-2 md:rounded-bl-none"
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
          class="bg-slate-50 border-b-2 border-r-2 border-slate-200 flex flex-col h-full place-content-end place-items-center px-3 py-8 w-full md:border-b-0 md:border-l-b-0 md:border-r-0 md:border-t-2 md:col-span-2"
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
          class="bg-real-white-100 border-b-2 border-l-b-2 border-r-2 border-slate-200 border-t-b-2 flex flex-col h-full place-content-end place-items-center px-3 py-8 rounded-br-lg w-full z-10 md:border-b-0 md:border-l-0 md:border-r-0 md:border-t-2 md:col-span-2"
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
      </div> -->
        </div>
        <NuxtImg src="xbg.svg" class="xbg absolute z-0"/>
    </section>
</template>
<style scoped>
  section {
    background: linear-gradient(180deg, #182350 0%, #1d4381 100%),
      lightgray 50% / cover no-repeat;
  }
  .like {
    max-width: 2.2rem;
  }
  .comparativo {
    background-color: hsl(225, 54%, 28%);

    p {
      font-size: clamp(0.73rem, 1.2vw, 1rem);
      font-weight: 400;
    }
    h6 {
      font-size: clamp(0.8rem, 1.2vw, 1.1rem);
      font-weight: 500;
      margin-bottom: 0;
    }
  }

  .calls {
    background: hsl(225, 54%, 28%);
    position: sticky;
    top: 0;
    z-index: 20;
    @media screen and (max-width: 768px) {
      box-shadow: 1rem 0rem 1rem 1rem hsl(234, 43%, 23%);
    }
  }
  .ats {
    background: hsl(225, 54%, 28%);
    position: sticky;
    top: 0;
    z-index: 30;
    @media screen and (max-width: 768px) {
      box-shadow: 0rem 2rem 1rem -1rem hsl(234, 43%, 23%);
    }
  }
  .bgexe {
    background: hsl(232, 46%, 23%);
    position: sticky;
    top: 0;
    z-index: 20;
    @media screen and (max-width: 768px) {
      box-shadow: -1rem 0rem 1rem 1rem hsl(234, 43%, 23%);
    }
  }

  .xbg {
    top: -60px;
    width: 52rem;
    right: -20rem;
    opacity: 0.2;
    @media screen and (max-width: 768px) {
      right: -10rem;
    }
  }
</style>
