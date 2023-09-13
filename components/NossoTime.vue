<script setup lang="ts">
  const { $gsap, $ScrollTrigger } = useNuxtApp()

  onMounted(() => {
    $gsap.from('.team-card', {
      ease: 'power1.out',
      yPercent: 40,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.cards',
        start: 'top 75%',
        end: 'bottom 12%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse',
      },
    })
  })
</script>
<template>
    <section id="time" class="container flex flex-col mx-auto pb-40 pt-32 px-4">
        <div class="flex flex-col mb-8 w-12/12 md:max-w-xl">
            <h3>Nosso time</h3>
            <h2>Depois de alguma<br/>experiência acumulada</h2>
            <p class="mt-4 my-8">
        Após anos operando, trabalhando para o aumento de liquidez e criação de
        novos mercados locais e internacionais, Guilherme Corsini e Adolpho
        Naves agregaram seus conhecimentos para criar um novo método de
        negociação e junto com Jack Cavalcanti e a Mervyn Lowe, ambos com larga
        experiência na criação e no desenvolvimento de startups, surgiu a EXE
        Auctions. </p>
        </div>
        <div class="cards gap-11 grid lg:gap-4 lg:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] place-items-center sm:grid-cols-2 w-full xl:gap-8">
            <UCard class="h-fit pb-2 pt-0 px-0 shadow-md shadow-slate-300 team-card w-80 md:w-full lg:bg-real-white-100">
                <template #header>
                    <NuxtImg src="guilherme_corsini.jpg" width="263" height="266" alt="Foto do Guilherme Corsini"/>
                </template>
                <template #default>
                    <div class="border-gray-50 flex flex-col mt-6 pt-0 px-5">
                        <div>
                            <h5 class="flex flex-row gap-2 mb-2 place-items-center text-blue-500 lg:tracking-tight">
                Guilherme Corsini </h5>
                            <p>
                Após acumular vasta experiência como Trader, sendo exposto a
                diversos tipos de leilões e plataformas dos mercados domésticos
                e internacionais, criou o algoritmo de negociação eletrônica,
                base para a Exe Auctions. </p>
                        </div>
                    </div>
                </template>
                <template #footer>
                    <div class="px-5">
                        <UButton to="https://www.linkedin.com/in/guilherme-corsini/" label="Linkedin" variant="link" class="text-primary-500" trailing-icon="i-material-symbols-open-in-new" target="_blank"/>
                    </div>
                </template>
            </UCard>
            <UCard class="h-fit pb-2 pt-0 px-0 shadow-md shadow-slate-300 team-card w-80 md:w-full lg:bg-real-white-100">
                <template #header>
                    <NuxtImg src="guilherme_corsini.jpg" width="263" height="266" alt="Foto do Adolpho Naves"/>
                </template>
                <template #default>
                    <div class="border-gray-50 flex flex-col mt-6 pt-0 px-5">
                        <div>
                            <h5 class="flex flex-row gap-2 mb-2 place-items-center text-blue-500">
                Adolpho Naves </h5>
                            <p>
                Ha mais de 30 anos no mercado financeiro, desenvolveu mercados
                de títulos públicos e swaps. Junto com a B3, amplificou o
                mercado futuro de inflação. Traz para EXE toda sua experiência
                em promover mercados e agora com um modelo inovador. </p>
                        </div>
                    </div>
                </template>
                <template #footer>
                    <div class="px-5">
                        <UButton to="https://www.linkedin.com/in/adolpho-souza-naves-neto-7590b764" label="Linkedin" variant="link" class="text-primary-500" trailing-icon="i-material-symbols-open-in-new" target="_blank"/>
                    </div>
                </template>
            </UCard>
            <UCard class="h-fit pb-2 pt-0 px-0 shadow-md shadow-slate-300 team-card w-80 md:w-full lg:bg-real-white-100">
                <template #header>
                    <NuxtImg src="jack.jpeg" width="263" height="266" alt="Foto do Jack Cavalca"/>
                </template>
                <template #default>
                    <div class="border-gray-50 flex flex-col mt-6 pt-0 px-5">
                        <div>
                            <h5 class="flex flex-row gap-2 mb-2 place-items-center text-blue-500">
                Jack Cavalca </h5>
                            <p>
                Empreendedor, Business Developer com profundo conhecimento de
                tecnologias digitais e seu poder disruptivo em negócios
                financeiros. Sócio da NÓS Innovators, Inseed – Gestora de fundos
                Venture Capital. </p>
                        </div>
                    </div>
                </template>
                <template #footer>
                    <div class="px-5">
                        <UButton to="https://www.linkedin.com/in/jack-cavalcanti-63983113/" label="Linkedin" variant="link" class="text-primary-500" trailing-icon="i-material-symbols-open-in-new" target="_blank"/>
                    </div>
                </template>
            </UCard>
            <UCard class="h-fit pb-2 pt-0 px-0 shadow-md shadow-slate-300 team-card team_card w-80 md:w-full lg:bg-real-white-100">
                <template #header>
                    <NuxtImg src="mervyn.jpeg" width="263" height="266" alt="Foto do Mervyn Lowe"/>
                </template>
                <template #default>
                    <div class="border-gray-50 flex flex-col mt-6 px-5">
                        <div>
                            <h5 class="flex flex-row gap-2 mb-2 place-items-center text-blue-500">
                Mervyn Lowe </h5>
                            <p>
                Empreendedor serial, Business Developer, Investidor e gestor de
                hubs de inovação. Geriu o Hub InovaBra Habitat do Bradesco desde
                sua concepção e estruturou o IPT Open Hub. CEO da consultoria
                NÓS Innovator. </p>
                        </div>
                    </div>
                </template>
                <template #footer>
                    <div class="px-5">
                        <UButton to="https://www.linkedin.com/in/mervyn-lowe-2822962/" label="Linkedin" variant="link" class="text-primary-500" trailing-icon="i-material-symbols-open-in-new" target="_blank"/>
                    </div>
                </template>
            </UCard>
        </div>
    </section>
</template>
<style scoped>
  .team-card {
    border-radius: 0.6rem;
  }
</style>
