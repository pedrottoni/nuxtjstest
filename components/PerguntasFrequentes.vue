<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'PerguntasFrequentes',
  // 	},
  // })
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
</script>

<template>
  <section class="container mx-auto px-4 py-28">
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
            ordens fiquem visíveis, o que poderia afetar as cotações dos ativos
            que querem comprar ou vender.<br />
          </p>
          <p class="pt-3">
            Na EXE Auctions, os participantes conseguem ver se há ofertas de
            compra ou de venda para determinado ativo, mas não visualizam a
            quantidade e nem o preço ofertado.<br />
          </p>
          <p class="pt-3">
            Enquanto nas dark pools o preço é definido pelo participante ou por
            algoritmo, na EXE Auctions ele é formado pela oferta e demanda do
            ativo. Outra diferença é que, enquanto na dark pool a transação é
            fechada para aquele que primeiro inseriu a ordem de compra ou de
            venda primeiro, na EXE Auctions há um conjunto de critérios para que
            o negócio seja fechado:preço, tamanho da ordem e, por último, o
            critério temporal.
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
          tem a oportunidade de fazer a troca pelo mesmo valor financeiro. Isto
          eh, trocar 10 caixas de banana por 10 caixas de laranja, independente
          dos precos individuais. Com a garantia que o participante sempre
          executarah um valor proporcional a 1 x 1 caixa de fruta.
        </p>
      </template>
      <template #faq4>
        <p class="py-6 md:w-10/12 mx-auto">
          Economicamente, simplesmente banir ativos relacionados a alta emissao
          e combustivel fossil nao eh a melhor forma de agregar valor e liquidez
          ao mercado, mas sugerimos uma politica de custos de execucao menores
          para ativos verdes.
        </p>
      </template>
    </UAccordion>
  </section>
</template>

<style scoped></style>
