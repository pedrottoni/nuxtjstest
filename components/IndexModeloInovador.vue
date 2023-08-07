<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'ModeloInovador',
  // 	},
  // })
</script>
<template>
    <section class="container mx-auto pb-32 pt-28 px-4 md:pb-32">
        <div class="mb-16 md:max-w-xl">
            <h3>Modelo inovador</h3>
            <h2>Uma experiência radicalmente aprimorada</h2>
        </div>
        <div class="gap-6 lg:gap-10 xl:gap-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
            <UCard>
                <template #header>
                    <nuxt-img src="/formacao.svg" class="pt-4"/>
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
                    <UButton to="about" variant="link" class="text-primary-500" trailing-icon="i-material-symbols-open-in-new">Saiba mais</UButton>
                </template>
            </UCard>
            <UCard>
                <template #header>
                    <nuxt-img src="/comhora.svg" class="pt-4"/>
                    <h6 class="mt-2">
            Via hora<br/>
            marcada </h6>
                </template>
                <template #default>
                    <p>
            Alguns processos de negociação as vezes sao muito rápidos e outras
            muito lentos. Nosso pico de liquidez por agendado é a melhor solução
            no mercado. </p>
                </template>
                <template #footer>
                    <UButton to="about" variant="link" class="text-primary-500" trailing-icon="i-material-symbols-open-in-new">Saiba mais</UButton>
                </template>
            </UCard>
            <UCard>
                <template #header>
                    <nuxt-img src="/anonimato.svg" class="pt-4"/>
                    <h6 class="mt-2">
            Anonimato<br/>
            garantido </h6>
                </template>
                <template #default>
                    <p>
            As únicas informações compartilhadas com o resto do mercado são: se
            existia compra, venda ou não; o preço final e a quantidade total. </p>
                </template>
                <template #footer>
                    <UButton to="about" variant="link" class="text-primary-500" trailing-icon="i-material-symbols-open-in-new">Saiba mais</UButton>
                </template>
            </UCard>
            <UCard>
                <template #header>
                    <nuxt-img src="/conflitos.svg" class="pt-4"/>
                    <h6 class="mt-2">
            Sem<br/>
            conflitos </h6>
                </template>
                <template #default>
                    <p class="maxw">
            Anulamos conflitos de interesse entre os participantes. Garantindo a
            preferencia para os clientes com volumes maiores. </p>
                </template>
                <template #footer>
                    <UButton to="about" variant="link" class="text-primary-500" trailing-icon="i-material-symbols-open-in-new">Saiba mais</UButton>
                </template>
            </UCard>
        </div>
    </section>
</template>
<style scoped>
  .maxw {
    max-width: 14rem;
  }
</style>
