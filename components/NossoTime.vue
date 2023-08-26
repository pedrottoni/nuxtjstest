<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'NossoTime',
  // 	},
  // })
</script>
<template>
    <section class="container flex flex-col mx-auto pb-40 pt-32 px-4">
        <div class="flex flex-col mb-8 w-12/12 md:max-w-2xl">
            <h3>Nosso time</h3>
            <h2>Depois de alguma<br/>experiência acumulada</h2>
            <p class="mt-4 my-8">
        Após anos operando, trabalhando para o aumento de liquidez e criação de novos mercados locais e internacionais, Guilherme Corsini e Adolpho Naves agregaram seus conhecimentos para criar um novo método de negociação e junto com Jack Cavalcanti e a Mervyn Lowe, ambos com larga experiência na criação e no desenvolvimento de startups, surgiu a EXE Auctions. </p>
        </div>
        <div class="gap-12 grid place-items-center w-full sm:grid-cols-2 lg:gap-4 lg:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] xl:gap-8">
            <UCard class="h-fit pb-2 pt-0 px-0 shadow-md shadow-slate-300 w-80 md:w-full">
                <template #header>
                    <nuxt-img src="guilherme_corsini.png" width="620"/>
                </template>
                <template #default>
                    <div class="border-gray-50 flex flex-col mt-6 pt-0 px-5">
                        <div>
                            <h5 class="flex flex-row gap-2 mb-2 place-items-center text-blue-500 lg:tracking-tight">
                Guilherme Corsini </h5>
                            <p>
                Oferecemos uma formação de preços eficiente para seus ativos
                financeiros, permitindo que você obtenha o melhor preço de
                mercado para o seu volume negociado.seu volume negociado.seu
                volume negociado.se </p>
                        </div>
                    </div>
                </template>
                <template #footer>
                    <div class="px-5">
                        <UButton to="about" label="Linkedin" variant="link" class="text-primary-500" trailing-icon="i-material-symbols-open-in-new"/>
                    </div>
                </template>
            </UCard>
            <UCard class="px-0 pt-0 pb-2 h-fit shadow-md shadow-slate-300 w-80 md:w-full">
                <template #header>
                    <nuxt-img src="guilherme_corsini.png" width="620"/>
                </template>
                <template #default>
                    <div class="border-gray-50 flex flex-col mt-6 pt-0 px-5">
                        <div>
                            <h5 class="flex flex-row gap-2 mb-2 place-items-center text-blue-500">
                Adolpho Naves </h5>
                            <p>
                Oferecemos uma formação de preços eficiente para seus ativos
                financeiros, permitindo que você obtenha o melhor preço de
                mercado para o seu volume negociado. </p>
                        </div>
                    </div>
                </template>
                <template #footer>
                    <div class="px-5">
                        <UButton to="about" label="Linkedin" variant="link" class="text-primary-500" trailing-icon="i-material-symbols-open-in-new"/>
                    </div>
                </template>
            </UCard>
            <UCard class="px-0 pt-0 pb-2 h-fit shadow-md shadow-slate-300 w-80 md:w-full">
                <template #header>
                    <nuxt-img src="jack.jpeg" width="620"/>
                </template>
                <template #default>
                    <div class="border-gray-50 flex flex-col mt-6 pt-0 px-5">
                        <div>
                            <h5 class="flex flex-row gap-2 mb-2 place-items-center text-blue-500">
                Jack Cavalca </h5>
                            <p>
                Empreendedor, Business Developer com profundo conhecimento de
                tecnologias digitais e seu poder disruptivo em negócios
                financeiros. Sócio da NÓS Innovators, Inseed – Gestora de fundos
                Venture Capital. </p>
                        </div>
                    </div>
                </template>
                <template #footer>
                    <div class="px-5">
                        <UButton to="about" label="Linkedin" variant="link" class="text-primary-500" trailing-icon="i-material-symbols-open-in-new"/>
                    </div>
                </template>
            </UCard>
            <UCard class="h-fit px-0 pt-0 pb-2 shadow-md shadow-slate-300 team_card w-80 md:w-full">
                <template #header>
                    <nuxt-img src="mervyn.jpeg" width="620"/>
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
                        <UButton to="about" label="Linkedin" variant="link" class="text-primary-500" trailing-icon="i-material-symbols-open-in-new"/>
                    </div>
                </template>
            </UCard>
        </div>
    </section>
</template>
<style scoped></style>
