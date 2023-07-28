<script setup lang="ts">
  // definePageMeta({
  // 	layout: 'default',
  // 	title: 'Team',
  // })
  useHead({
    title: () => 'Team',
  })
</script>
<template>
  <main>
    <HeroPages
      title="Nosso time"
      subtitle="Com uma intuicao de que existiria uma maneira de fazer melhor: nosso time embarcou nessa jornada de ser o melhor do leiloes duplos"
      img="https://placehold.co/600x440?text=IMG"
    />
    <section
      class="container flex flex-col mx-auto place-items-center px-4 py-32 md:py-40"
    >
      <div
        class="flex-col mb-8 place-items-center text-center w-12/12 lg:flex lg:w-6/12"
      >
        <h3>Nossa missão</h3>
        <h2>O melhor de dois mundos</h2>
        <p class="mt-4 my-8">
          Após anos desenvolvendo uma solução que combina o melhor dos dois
          sistemas, surgiu a EXE Auctions. Corsini se uniu a Adolpho Naves, que
          aportou os seus conhecimentos de broker, a Jack Cavalcanti e a Mervyn
          Lowe, ambos com larga experiência na criação e no desenvolvimento de
          startups
        </p>
      </div>
      <div
        class="grid sm:grid-cols-1 lg:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] w-full gap-4"
      >
        <UCard class="h-fit p-0 shadow-md shadow-slate-300">
          <template #header>
            <nuxt-img src="https://placehold.co/600x400?text=IMG" fit="cover" />
          </template>
          <template #default>
            <div class="border-gray-50 flex flex-col mt-8 pt-4 px-4">
              <div>
                <h5
                  class="flex flex-row gap-2 mb-1 place-items-center text-gray-500"
                >
                  Guilherme Corsini
                </h5>
                <p>
                  Oferecemos uma formação de preços eficiente para seus ativos
                  financeiros, permitindo que você obtenha o melhor preço de
                  mercado para o seu volume negociado.
                </p>
              </div>
            </div>
          </template>
          <template #footer>
            <div class="px-4">
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
        <UCard class="h-fit p-0 shadow-md shadow-slate-300">
          <template #header>
            <nuxt-img src="https://placehold.co/600x400?text=IMG" fit="cover" />
          </template>
          <template #default>
            <div class="border-gray-50 flex flex-col mt-8 pt-4 px-4">
              <div>
                <h5
                  class="flex flex-row gap-2 mb-1 place-items-center text-gray-500"
                >
                  Adolpho Naves
                </h5>
                <p>
                  Oferecemos uma formação de preços eficiente para seus ativos
                  financeiros, permitindo que você obtenha o melhor preço de
                  mercado para o seu volume negociado.
                </p>
              </div>
            </div>
          </template>
          <template #footer>
            <div class="px-4">
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
        <UCard class="h-fit p-0 shadow-md shadow-slate-300">
          <template #header>
            <nuxt-img src="https://placehold.co/600x400?text=IMG" fit="cover" />
          </template>
          <template #default>
            <div class="border-gray-50 flex flex-col mt-8 pt-4 px-4">
              <div>
                <h5
                  class="flex flex-row gap-2 mb-1 place-items-center text-gray-500"
                >
                  Jack Cavalca
                </h5>
                <p>
                  Oferecemos uma formação de preços eficiente para seus ativos
                  financeiros, permitindo que você obtenha o melhor preço de
                  mercado para o seu volume negociado.
                </p>
              </div>
            </div>
          </template>
          <template #footer>
            <div class="px-4">
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
        <UCard class="h-fit p-0 shadow-md shadow-slate-300">
          <template #header>
            <nuxt-img src="https://placehold.co/600x400?text=IMG" fit="cover" />
          </template>
          <template #default>
            <div class="border-gray-50 flex flex-col mt-8 pt-4 px-4">
              <div>
                <h5
                  class="flex flex-row gap-2 mb-1 place-items-center text-gray-500"
                >
                  Mervyn Lowe
                </h5>
                <p>
                  Oferecemos uma formação de preços eficiente para seus ativos
                  financeiros, permitindo que você obtenha o melhor preço de
                  mercado para o seu volume negociado.
                </p>
              </div>
            </div>
          </template>
          <template #footer>
            <div class="px-4">
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
  </main>
</template>
<style scoped></style>
