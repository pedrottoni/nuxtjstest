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
                    <h6 class="mt-2">
            Formação de <br/>
            preços eficiente </h6>
                </template>
                <template #default>
                    <p>
            Oferecemos uma formação de preços por oferta de demanda para ativos
            financeiros intercambiáveis por outros do mesmo tipo. ("commodity") </p>
                </template>
                <template #footer>
                    <UButton to="https://pinegrow.com/docs/vue/support/" external target="_blank" variant="link" class="text-primary-500" trailing-icon="i-material-symbols-open-in-new">Saiba mais</UButton>
                </template>
            </UCard>
            <UCard>
                <template #header>
                    <nuxt-img src="/comhora.svg"/>
                    <h6 class="mt-2">
            Com hora<br/>
            marcada </h6>
                </template>
                <template #default>
                    <p>
            Entendemos que alguns processos de negociação as vezes sao muito
            rápidos e outras muito lento. Nosso pico de liquidez agendado é a
            melhor solução no mercado. </p>
                </template>
                <template #footer>
                    <UButton to="https://pinegrow.com/docs/vue/support/" external target="_blank" variant="link" class="text-primary-500" trailing-icon="i-material-symbols-open-in-new">Saiba mais</UButton>
                </template>
            </UCard>
            <UCard>
                <template #header>
                    <nuxt-img src="/anonimato.svg"/>
                    <h6 class="mt-2">
            Anonimato<br/>
            garantido </h6>
                </template>
                <template #default>
                    <p>
            As únicas informações compartilhadas com o resto do mercado sao: se
            existia compra, venda ou nao; o preço final e a quantidade total. </p>
                </template>
                <template #footer>
                    <UButton to="https://pinegrow.com/docs/vue/support/" external target="_blank" variant="link" class="text-primary-500" trailing-icon="i-material-symbols-open-in-new">Saiba mais</UButton>
                </template>
            </UCard>
            <UCard>
                <template #header>
                    <nuxt-img src="/conflitos.svg"/>
                    <h6 class="mt-2">
            Sem<br/>
            conflitos </h6>
                </template>
                <template #default>
                    <p>
            Anulamos conflitos de interesse entre os participantes. Garantindo a
            preferencia para os clientes com volumes maiores. </p>
                </template>
                <template #footer>
                    <UButton to="https://pinegrow.com/docs/vue/support/" external target="_blank" variant="link" class="text-primary-500" trailing-icon="i-material-symbols-open-in-new">Saiba mais</UButton>
                </template>
            </UCard>
        </div>
    </div>
</template>
<style scoped></style>
