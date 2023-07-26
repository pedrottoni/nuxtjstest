<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'ModeloInovador',
  // 	},
  // })
</script>
<template>
    <div class="container mx-auto pb-32 md:pb-40 pt-24 px-4">
        <div class="mb-16 md:max-w-2xl md:w-9/12 sm:w-9/12">
            <h3>Modelo inovador</h3>
            <h2>A velocidade dos ATS com a eficiência dos mercados de balcão</h2>
        </div>
        <div class="gap-6 lg:gap-16 xl:gap-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
            <UCard>
                <template #header>
                    <nuxt-img src="/formacao.svg"/>
                    <h6>
            Formação de <br/>
            preços eficiente </h6>
                </template>
                <template #default>
                    <p>
            Oferecemos uma formação de preços eficiente para seus ativos
            financeiros, permitindo que você obtenha o melhor preço de mercado
            para o seu volume negociado </p>
                </template>
                <template #footer>
                    <NuxtLink class="flex place-items-center gap-1">Saiba mais
                        <UIcon name="i-material-symbols-open-in-new-rounded"/>
                    </NuxtLink>
                </template>
            </UCard>
            <UCard>
                <template #header>
                    <nuxt-img src="/comhora.svg"/>
                    <h6>
            Com hora<br/>
            marcada </h6>
                </template>
                <template #default>
                    <p>
            Negocie com rapidez e eficiência, sem brigar com tempo em
            negociações muito rápidas ou muito lentas, permitindo que você
            aproveite as melhores oportunidades de mercado </p>
                </template>
                <template #footer>
                    <NuxtLink class="flex place-items-center gap-1">Saiba mais
                        <UIcon name="i-material-symbols-open-in-new-rounded"/>
                    </NuxtLink>
                </template>
            </UCard>
            <UCard>
                <template #header>
                    <nuxt-img src="/anonimato.svg"/>
                    <h6>
            Anonimato<br/>
            garantido </h6>
                </template>
                <template #default>
                    <p>
            Suas negociações são realizadas com total sigilo e anonimato,
            garantindo que suas informações permaneçam seguras e protegidas
            enquanto todos veem o total negociado no mercado </p>
                </template>
                <template #footer>
                    <NuxtLink class="flex place-items-center gap-1">Saiba mais
                        <UIcon name="i-material-symbols-open-in-new-rounded"/>
                    </NuxtLink>
                </template>
            </UCard>
            <UCard>
                <template #header>
                    <nuxt-img src="/conflitos.svg"/>
                    <h6>
            Sem<br/>
            conflitos </h6>
                </template>
                <template #default>
                    <p>
            Anulamos atritos e conflitos de interesse entre os participantes,
            garantindo que as negociações sejam realizadas só no limite definido
            por tempo de chegada. </p>
                </template>
                <template #footer>
                    <NuxtLink class="flex place-items-center gap-1">Saiba mais
                        <UIcon name="i-material-symbols-open-in-new-rounded"/>
                    </NuxtLink>
                </template>
            </UCard>
        </div>
    </div>
</template>
<style scoped></style>
