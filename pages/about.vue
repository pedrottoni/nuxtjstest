<script setup lang="ts">
  definePageMeta({
    layout: 'default',
    name: 'about',
    title: 'O que fazemos',
    navOrder: 4,
  })
  useHead({
    title: () => 'O que fazemos',
  })

  const items = [
    {
      label: 'A EXE Auctions é uma dark pool?',
      slot: 'faq1',
    },
    {
      label: 'Pergunta 2',
    },
    {
      label: 'Pergunta 3',
    },
    {
      label: 'Pergunta 4',
    },
  ]
</script>
<template>
  <main>
    <HeroPages
      title="Leilões financeiros ágeis e transparentes"
      subtitle="Leilões financeiros em alta velocidade, com segurança e formação de preços por oferta e demanda e pós definidos"
      img="https://placehold.co/600x440?text=IMG"
      buttom
    />
    <section
      class="container flex flex-col gap-8 mx-auto place-items-center px-4 py-32 md:flex-row md:justify-between"
    >
      <nuxt-img
        src="https://placehold.co/600x400?text=IMG"
        fit="cover"
        class="md:w-1/2"
      />
      <div class="title">
        <h3>O que fazemos</h3>
        <h2>Uma plataforma ágil e eficiente para grandes negociações</h2>
        <p class="mt-4 my-8">
          A EXE Auctions é uma plataforma de leilão criada para trazer mais
          eficiência e transparência na formação de preços em mercados com
          poucos participantes. Isso é possível graças ao seu modelo inovador,
          que combina as vantagens dos leilões e da negociação por sistemas
          eletrônicos. Uma alternativa aos dark-pools ou a calls, quando seus
          clientes necessitam gerar picos de liquidez para negociar grandes
          ordens de compra e venda de ativos financeiros, a EXE Auctions garante
          rapidez, eficiência na formação de preços e anonimato dos
          participantes.
        </p>
        <UButton
          to=""
          label="Comece agora"
          size="xl"
          class="!rounded-3xl blue mt-4 px-7 py-3"
        />
      </div>
    </section>
    <section class="bg-slate-100 py-32">
      <div
        class="container flex flex-col gap-8 mx-auto place-items-center px-4 md:flex-row md:justify-between"
      >
        <div class="title">
          <h3>Não definido</h3>
          <h2>Picos de Liquidez com hora marcada</h2>
          <p class="mt-4 my-8">
            Provemos para as corretoras a única plataforma de leilão duplo (com
            múltiplos compradores e vendedores) que alia rapidez, eficiência na
            formação de preços, anonimato e ausência de conflitos de interesse.
            A plataforma soluciona problemas de negociação de todos os mercados
            de commodities – aqui entendidos como mercados em que são negociados
            ativos fungíveis (cujas características são iguais). Em breve, a
            plataforma da EXE Auctions estará disponível para transações com
            títulos da dívida pública brasileira. Os traders da corretora
            acessam a plataforma e inserem suas ordens de compra e venda. A EXE
            Auctions envia o resultado das transações para as corr4toras, que
            são as responsáveis pela boletagem e pela liquidação das operações.
          </p>
          <UButton
            to=""
            label="Comece agora"
            size="xl"
            class="!rounded-3xl blue mt-4 px-7 py-3"
          />
        </div>
        <nuxt-img
          src="https://placehold.co/600x400?text=IMG"
          fit="cover"
          class="md:w-1/2"
        />
      </div>
    </section>
    <section class="container mx-auto px-4 py-32">
      <div class="mx-auto">
        <div class="title">
          <h3>Não definido</h3>
          <h2>Não definido</h2>
        </div>
      </div>
      <div
        class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]"
      >
        <div class="border-r-2">
          <div class="border-b-2 h-16 flex place-items-center">
            <p>Recursos</p>
          </div>
          <div class="h-24 flex place-items-center">
            <p>Pricing method defined by supply and demand at the moment</p>
          </div>
          <div class="h-24 flex place-items-center">
            <p>
              Trading process fast and allow cancelable orders is a hidden
              market
            </p>
          </div>
          <div class="h-24 flex place-items-center">
            <p>Accepts single and switch orders</p>
          </div>
        </div>
        <div class="border-r-2">
          <div
            class="border-b-2 h-16 flex place-items-center place-content-center"
          >
            <p>Calls</p>
          </div>
          <div class="h-24 flex place-items-center place-content-center">V</div>
          <div class="h-24 flex place-items-center place-content-center">X</div>
          <div class="h-24 flex place-items-center place-content-center">X</div>
        </div>
        <div class="border-r-2">
          <div
            class="border-b-2 h-16 flex place-items-center place-content-center"
          >
            ATS/Dark pools
          </div>
          <div class="h-24 flex place-items-center place-content-center">X</div>
          <div class="h-24 flex place-items-center place-content-center">V</div>
          <div class="h-24 flex place-items-center place-content-center">X</div>
        </div>
        <div class="border-r-2">
          <div
            class="border-b-2 h-16 flex place-items-center place-content-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="h-full w-full"
            >
              <path
                fill="#1F4386"
                d="M28.62 3.2H5.46v9.65h17.89v3.2H5.46v9.52h23.16v3.2H0V0h28.62v3.2ZM63.13 0v3.2h23.15v9.65H68.4v3.2h17.88v9.52H63.13v3.2h28.62V0H63.13ZM52.94 10.69 63.13 0l-7.21.1-6.45 6.95 3.47 3.64Z"
              />
              <path
                fill="#1F4386"
                d="M49.4 14.55 35.6 0h-7.02l13.6 14.64-13.35 14.13h7.12L49.4 14.55Zm13.1 13.76-9.52-10.1-3.68 3.84 6.41 6.72h7.22l-.41-.46h-.02Z"
              />
              <path
                fill="#58595B"
                d="M7.77 41.57c.72.68 1.08 1.68 1.08 3v6.44H7.52v-1.62a3.2 3.2 0 0 1-1.39 1.26c-.6.3-1.33.45-2.17.45a4.25 4.25 0 0 1-2.74-.82 2.68 2.68 0 0 1-1.02-2.2c0-.9.31-1.58.95-2.12.63-.54 1.64-.81 3.03-.81h3.28v-.63c0-.9-.25-1.58-.75-2.05-.5-.46-1.22-.7-2.18-.7A5.43 5.43 0 0 0 1.1 43l-.63-1.05a5.42 5.42 0 0 1 1.88-1.03 7.3 7.3 0 0 1 2.32-.37c1.34 0 2.38.34 3.1 1.02ZM6.2 49.46a3.3 3.3 0 0 0 1.26-1.57v-1.7H4.22c-1.77 0-2.65.62-2.65 1.86 0 .6.23 1.08.69 1.43.45.35 1.1.52 1.92.52.82 0 1.46-.18 2.02-.54Zm17-8.83v10.38h-1.34v-1.9a3.82 3.82 0 0 1-1.5 1.47c-.65.35-1.38.52-2.2.52a4.38 4.38 0 0 1-3.2-1.13c-.77-.76-1.16-1.86-1.16-3.32v-6.02h1.39v5.88c0 1.09.27 1.91.8 2.48.54.57 1.3.85 2.3.85 1.09 0 1.94-.33 2.57-1 .63-.66.94-1.58.94-2.77v-5.44h1.4Zm6.7 9.81a4.85 4.85 0 0 1-1.9-1.89 5.46 5.46 0 0 1-.69-2.73c0-1.01.23-1.92.7-2.72a4.85 4.85 0 0 1 1.89-1.88c.8-.44 1.71-.67 2.73-.67.9 0 1.69.18 2.39.53.7.35 1.25.86 1.66 1.53l-1.04.7c-.34-.5-.78-.9-1.3-1.15a3.84 3.84 0 0 0-1.7-.38c-.75 0-1.42.17-2.02.5-.6.34-1.06.81-1.39 1.43-.33.62-.5 1.32-.5 2.11 0 .8.17 1.51.5 2.12.33.62.8 1.09 1.4 1.42.59.34 1.26.5 2 .5.62 0 1.19-.12 1.71-.37s.96-.63 1.3-1.14l1.04.7c-.4.68-.96 1.19-1.67 1.54-.7.35-1.5.52-2.38.52a5.52 5.52 0 0 1-2.73-.67Zm16.2-.07a2.6 2.6 0 0 1-.98.55 3.9 3.9 0 0 1-1.2.18c-.97 0-1.72-.26-2.24-.78a3.04 3.04 0 0 1-.78-2.23V41.8h-1.85v-1.18h1.85v-2.27h1.39v2.27h3.14v1.18h-3.14V48c0 .62.15 1.09.46 1.41.3.32.75.48 1.32.48a2.29 2.29 0 0 0 1.54-.53l.49 1Zm3.76-12.3a.97.97 0 0 1-.3-.71c0-.28.1-.5.3-.7.2-.2.44-.29.73-.29a1 1 0 0 1 1.02.97 1 1 0 0 1-.3.73c-.2.2-.43.3-.72.3a.98.98 0 0 1-.73-.3Zm.02 2.56h1.4v10.38h-1.4V40.63Zm8.07 9.8a4.97 4.97 0 0 1-1.89-1.89 5.4 5.4 0 0 1-.68-2.72c0-1.01.23-1.92.68-2.72a4.87 4.87 0 0 1 1.89-1.88 5.4 5.4 0 0 1 2.69-.67c.99 0 1.89.23 2.68.67a4.8 4.8 0 0 1 1.88 1.88c.45.8.68 1.7.68 2.72 0 1.01-.23 1.92-.68 2.72a4.88 4.88 0 0 1-1.88 1.89c-.8.45-1.7.68-2.68.68-1 0-1.9-.23-2.7-.68Zm4.66-1.07a3.5 3.5 0 0 0 1.36-1.43c.33-.62.5-1.32.5-2.1 0-.8-.17-1.5-.5-2.12a3.49 3.49 0 0 0-1.36-1.43 3.89 3.89 0 0 0-1.97-.5 3.9 3.9 0 0 0-1.98.5 3.5 3.5 0 0 0-1.37 1.43c-.33.62-.5 1.32-.5 2.11 0 .8.17 1.5.5 2.11.33.62.79 1.1 1.37 1.43.58.34 1.24.5 1.98.5a3.9 3.9 0 0 0 1.97-.5Zm15.72-7.67c.76.75 1.15 1.85 1.15 3.3v6.02h-1.4v-5.88c0-1.08-.27-1.9-.8-2.47a3.04 3.04 0 0 0-2.3-.85c-1.11 0-1.99.34-2.64 1a3.77 3.77 0 0 0-.97 2.75v5.45h-1.4V40.63h1.34v1.92c.38-.64.9-1.13 1.58-1.47a5.02 5.02 0 0 1 2.35-.53c1.3 0 2.32.38 3.09 1.14Zm6.55 9.05a5.09 5.09 0 0 1-1.8-.92l.64-1.1c.43.34.97.62 1.62.84a6.7 6.7 0 0 0 2.04.32 3.9 3.9 0 0 0 2.1-.44c.45-.3.67-.71.67-1.26 0-.38-.12-.68-.37-.9a2.5 2.5 0 0 0-.94-.49 13.5 13.5 0 0 0-1.51-.32c-.84-.16-1.51-.32-2.02-.49a2.95 2.95 0 0 1-1.3-.83c-.37-.4-.55-.95-.55-1.64 0-.87.36-1.58 1.08-2.13a4.82 4.82 0 0 1 3-.83 7.53 7.53 0 0 1 3.66.97l-.61 1.12a5.18 5.18 0 0 0-3.04-.88c-.9 0-1.56.15-2.02.47-.45.32-.67.73-.67 1.24 0 .4.12.71.38.95.25.24.57.41.95.52.38.12.9.23 1.57.35.82.16 1.49.31 1.98.47.5.16.93.43 1.28.81.36.38.53.9.53 1.58 0 .9-.37 1.63-1.13 2.16-.75.53-1.8.8-3.13.8-.84 0-1.63-.12-2.4-.36v-.01Z"
              />
            </svg>
          </div>
          <div class="h-24 flex place-items-center place-content-center">V</div>
          <div class="h-24 flex place-items-center place-content-center">V</div>
          <div class="h-24 flex place-items-center place-content-center">V</div>
        </div>
      </div>
    </section>
    <section class="bg-slate-100 py-32">
      <div class="container flex flex-col mx-auto place-items-center px-4">
        <div
          class="flex-col mb-16 text-center lg:flex lg:max-w-2xl lg:place-items-center"
        >
          <h3>Nosso processo</h3>
          <h2>O leilão ocorre em duas etapas</h2>
          <p class="mt-4 my-8">
            O leilão funciona em duas etapas. Na primeira, são recebidas as
            ordens de compra e venda e é feito um cálculo dos preços ofertados e
            alocações (quantidades dos ativos que serão destinados a cada
            participante). Na segunda rodada, os preços já estão definidos e os
            participantes podem colocar novas ordens de compra, venda ou troca
            casada.
          </p>
        </div>
        <div
          class="flex flex-col gap-4 justify-around place-items-center w-full lg:flex-row"
        >
          <div
            class="gap-4 flex flex-col place-content-center place-items-center"
          >
            <nuxt-img src="/preco.svg" width="80" />
            <h6 class="text-center">Preço<br />e lote</h6>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 37 41"
            class="rotate-90 w-8 md:rotate-0"
          >
            <path
              fill="#C9CDD9"
              d="M33.5 15a6.3 6.3 0 0 1 0 11L10 39.6A6.3 6.3 0 0 1 .5 34V7c0-5 5.2-8 9.4-5.6L33.5 15Z"
            />
          </svg>
          <div
            class="gap-4 flex flex-col place-content-center place-items-center"
          >
            <nuxt-img src="/resultados.svg" width="80" />
            <h6 class="text-center">Divulgação<br />dos resultados</h6>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 37 41"
            class="rotate-90 w-8 md:rotate-0"
          >
            <path
              fill="#C9CDD9"
              d="M33.5 15a6.3 6.3 0 0 1 0 11L10 39.6A6.3 6.3 0 0 1 .5 34V7c0-5 5.2-8 9.4-5.6L33.5 15Z"
            />
          </svg>
          <div
            class="gap-4 flex flex-col place-content-center place-items-center"
          >
            <nuxt-img src="/recompra.svg" width="80" />
            <h6 class="text-center">ATS e<br />trocas</h6>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 37 41"
            class="rotate-90 w-8 md:rotate-0"
          >
            <path
              fill="#C9CDD9"
              d="M33.5 15a6.3 6.3 0 0 1 0 11L10 39.6A6.3 6.3 0 0 1 .5 34V7c0-5 5.2-8 9.4-5.6L33.5 15Z"
            />
          </svg>
          <div
            class="gap-4 flex flex-col place-content-center place-items-center"
          >
            <nuxt-img src="/resultados.svg" width="80" />
            <h6 class="text-center">Divulgação<br />dos resultados</h6>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto px-4 py-32">
      <div class="mx-auto">
        <h2 class="text-center">FAQ</h2>
      </div>
      <UAccordion
        :items="items"
        variant="link"
        size="xl"
        class="border-b border-gray-100 mx-auto py-6 rounded-none text-blue-900 w-full md:w-10/12"
      >
        <template #faq1>
          <p class="py-6 w-10/12 mx-auto">
            Não. A EXE Auctions possui algumas características de dark pools,
            mas não se encaixa nesse conceito por conta da inovação que traz a
            esse sistema de negociação e porque opera com parâmetros
            diferentes.<br />
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
            Na EXE Auctions, os participantes conseguem ver se há ofertas de
            compra ou de venda para determinado ativo, mas não visualizam a
            quantidade e nem o preço ofertado.<br />
            Enquanto nas dark pools o preço é definido pelo participante ou por
            algoritmo, na EXE Auctions ele é formado pela oferta e demanda do
            ativo. Outra diferença é que, enquanto na dark pool a transação é
            fechada para aquele que primeiro inseriu a ordem de compra ou de
            venda primeiro, na EXE Auctions há um conjunto de critérios para que
            o negócio seja fechado:preço, tamanho da ordem e, por último, o
            critério temporal.
          </p>
        </template>
      </UAccordion>
    </section>
  </main>
</template>
<style scoped></style>
