<script setup lang="ts">
  const items = [
    {
      label: 'A EXE Auctions é uma dark pool?',
      slot: 'faq1',
    },
    {
      label:
        'Como é essa história das quantidades? Vocês não estão dando vantagem para os grandes?',
      slot: 'faq2',
    },
    {
      label: 'O que é o leilão de troca?',
      slot: 'faq3',
    },
    {
      label: 'Vocês usam algum critério ESG?',
      slot: 'faq4',
    },
  ]
</script>
<template>
  <section id="perguntas" class="container mx-auto px-4 py-28">
    <div class="mx-auto">
      <h2 class="text-center">
        Perguntas<br />
        frequentes
      </h2>
    </div>
    <UAccordion
      :items="items"
      variant="link"
      size="xl"
      class="text-left border-b border-gray-100 mx-auto py-6 rounded-none text-blue-900 w-full md:w-10/12"
    >
      <template #faq1>
        <div class="py-6 md:w-10/12 mx-auto">
          <p>
            Em termos de velocidade de negociação e anonimato das ordens é
            comparável. No entanto, dark pools são ambientes nos quais a
            formação de preços é predeterminada. O preço final é baseado em uma
            referência de mercado para volumes mínimos menores ou simplesmente
            na opinião do agente que está intermediando a operação. <br />
          </p>
          <p class="pt-3">
            Na EXE Auctions, o preço é resultado da real interação entre os
            operadores, já considerando o lote mínimo maior. Ou seja, é o preço
            ótimo para aquele volume maior no específico instante de tempo da
            transação, e não uma estimativa gerada num momento anterior à
            negociação. <br />
          </p>
        </div>
      </template>
      <template #faq2>
        <p class="py-6 md:w-10/12 mx-auto text-left">
          Sim, estamos, mas apenas como critério de desempate. O grande
          participante é uma peça fundamental do mercado, o natural e maior
          provedor de liquidez. Todos os participantes se beneficiam quando
          esses agentes estão presentes na formação do preço. Uma forma de
          estimular e atrair grandes lotes é justamente lhes dando alguma
          vantagem na negociação. Os lotes menores continuam tendo a prioridade
          quando a disputa é por preço, mas quando, e somente quando, empatados
          no preço, o maior lote terá uma alocação proporcionalmente maior.
        </p>
      </template>
      <template #faq3>
        <p class="py-6 md:w-10/12 mx-auto">
          É um conceito novo nas plataformas eletrônicas, onde o participante
          tem a oportunidade de fazer a troca pelo mesmo valor financeiro. Isto
          é, por exemplo, trocar 100 lotes de NTN-B 30 por 100 lotes de NTN-B
          40, independente dos preços individuais. Com a garantia que o
          participante sempre executará um valor proporcional à 1 x 1 dos lotes
          mínimos.
        </p>
      </template>
      <template #faq4>
        <p class="py-6 md:w-10/12 mx-auto">
          Na nossa visão econômica, simplesmente banir a negociação de ativos
          relacionados aos combustíveis fósseis não parece ser a melhor forma de
          agregar valor à sociedade. Preferimos sugerir às nossas corretoras
          parceiras uma política de custos de transação menores para ativos
          verdes.
        </p>
      </template>
    </UAccordion>
  </section>
</template>
<style scoped></style>
