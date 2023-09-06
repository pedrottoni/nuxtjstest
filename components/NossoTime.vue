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
      <h2>Depois de alguma<br />experiência acumulada</h2>
      <p class="mt-4 my-8">
        Após anos operando, trabalhando para o aumento de liquidez e criação de
        novos mercados locais e internacionais, Guilherme Corsini e Adolpho
        Naves agregaram seus conhecimentos para criar um novo método de
        negociação e junto com Jack Cavalcanti e a Mervyn Lowe, ambos com larga
        experiência na criação e no desenvolvimento de startups, surgiu a EXE
        Auctions.
      </p>
    </div>
    <div
      class="cards gap-12 grid place-items-center w-full sm:grid-cols-2 lg:gap-4 lg:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] xl:gap-8"
    >
      <UCard
        class="team-card h-fit pb-2 pt-0 px-0 shadow-md shadow-slate-300 w-80 md:w-full"
      >
        <template #header>
          <nuxt-img src="guilherme_corsini.jpg" width="620" />
        </template>
        <template #default>
          <div class="border-gray-50 flex flex-col mt-6 pt-0 px-5">
            <div>
              <h5
                class="flex flex-row gap-2 mb-2 place-items-center text-blue-500 lg:tracking-tight"
              >
                Guilherme Corsini
              </h5>
              <p>
                Atuando como Trader e Market-Maker, trabalhou para refinar as
                expectativas de inflação do mercado brasileiro e para aumentar a
                liquidez dos títulos soberanos nas plataformas eletrônicas
                internacionais.
              </p>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="px-5">
            <UButton
              to="about"
              label="Linkedin"
              variant="link"
              class="text-primary-500"
              trailing-icon="i-material-symbols-open-in-new"
            />
          </div>
        </template>
      </UCard>
      <UCard
        class="team-card h-fit pb-2 pt-0 px-0 shadow-md shadow-slate-300 w-80 md:w-full"
      >
        <template #header>
          <nuxt-img src="guilherme_corsini.jpg" width="620" />
        </template>
        <template #default>
          <div class="border-gray-50 flex flex-col mt-6 pt-0 px-5">
            <div>
              <h5
                class="flex flex-row gap-2 mb-2 place-items-center text-blue-500"
              >
                Adolpho Naves
              </h5>
              <p>
                Empreendedor, Business Developer com profundo conhecimento de
                tecnologias digitais e seu poder disruptivo em negócios
                financeiros. Sócio da NÓS Innovators, Inseed – Gestora de fundos
                Venture Capital.
              </p>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="px-5">
            <UButton
              to="about"
              label="Linkedin"
              variant="link"
              class="text-primary-500"
              trailing-icon="i-material-symbols-open-in-new"
            />
          </div>
        </template>
      </UCard>
      <UCard
        class="team-card h-fit pb-2 pt-0 px-0 shadow-md shadow-slate-300 w-80 md:w-full"
      >
        <template #header>
          <nuxt-img src="jack.jpeg" width="620" />
        </template>
        <template #default>
          <div class="border-gray-50 flex flex-col mt-6 pt-0 px-5">
            <div>
              <h5
                class="flex flex-row gap-2 mb-2 place-items-center text-blue-500"
              >
                Jack Cavalca
              </h5>
              <p>
                Empreendedor, Business Developer com profundo conhecimento de
                tecnologias digitais e seu poder disruptivo em negócios
                financeiros. Sócio da NÓS Innovators, Inseed – Gestora de fundos
                Venture Capital.
              </p>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="px-5">
            <UButton
              to="about"
              label="Linkedin"
              variant="link"
              class="text-primary-500"
              trailing-icon="i-material-symbols-open-in-new"
            />
          </div>
        </template>
      </UCard>
      <UCard
        class="team-card h-fit pb-2 pt-0 px-0 shadow-md shadow-slate-300 team_card w-80 md:w-full"
      >
        <template #header>
          <nuxt-img src="mervyn.jpeg" width="620" />
        </template>
        <template #default>
          <div class="border-gray-50 flex flex-col mt-6 px-5">
            <div>
              <h5
                class="flex flex-row gap-2 mb-2 place-items-center text-blue-500"
              >
                Mervyn Lowe
              </h5>
              <p>
                Empreendedor serial, Business Developer, Investidor e gestor de
                hubs de inovação. Geriu o Hub InovaBra Habitat do Bradesco desde
                sua concepção e estruturou o IPT Open Hub. CEO da consultoria
                NÓS Innovator.
              </p>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="px-5">
            <UButton
              to="about"
              label="Linkedin"
              variant="link"
              class="text-primary-500"
              trailing-icon="i-material-symbols-open-in-new"
            />
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
