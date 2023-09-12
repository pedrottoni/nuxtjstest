<script setup></script>
<template>
  <section
    class="flex flex-col heroindexsection overflow-hidden pt-32 px-4 relative"
  >
    <div class="absolute backgroundelements z-0">
      <SVGHeroIndexX class="elements opacity-40" />
    </div>
    <div class="absolute backgroundelements overlays z-0">
      <SVGIndexCharts class="elements relative top-0 hidden" />
      <SVGHeroIndexDots class="elements relative top-0 hidden" />
      <NuxtImg
        src="/chart.png"
        class="elements charts relative top-0"
        width="1507px"
        height="1024px"
        alt=""
      />
    </div>
    <div class="justify-around place-items-center relative text-center z-1">
      <h1 class="leading-tight mb-2 text-white">Um novo</h1>
      <h1 class="text-tertiary">tipo de leilão</h1>
      <h4 class="!font-light mb-6 mt-10 text-white">
        Com regras de negócio modernas e diferenciadas,<br
          class="hidden sm:block"
        />
        Criamos uma solução revolucionária.
      </h4>
      <UButton
        to="#vamos"
        size="xl"
        class="btnsolid mb-14 mt-4 px-7 py-3 relative rounded-md z-20"
        label="Comece agora"
      >
      </UButton>
      <div class="indexbg flex justify-center">
        <SVGHeroIndex class="bgblocks absolute z-10" />
        <NuxtImg src="/indexBg.png" width="720px" height="436px" alt="" />
      </div>
    </div>
  </section>
</template>
<style scoped>
  .heroindexsection {
    background: linear-gradient(180deg, #182350 0%, #1d4381 100%),
      lightgray 50% / cover no-repeat;
    overflow: visible;

    .backgroundelements {
      bottom: 0px;
      left: 50%;
    }

    .indexbg {
      position: relative;
      width: clamp(300px, 80vw, 720px);
      bottom: -2.4rem;
      margin: 0 auto;
    }
    .bgblocks {
      bottom: clamp(2rem, 1vw, 8rem);
      left: -18%;
      width: clamp(20rem, 106vw, 62rem);
      overflow: initial;
    }
    .elements {
      height: clamp(64rem, 80vw, 65rem);
      margin: 0 -50%;
    }
    .charts {
      max-width: max-content;
    }
    .overlays {
      mix-blend-mode: overlay;
    }
    h4 {
      font-size: 1.4rem;
      line-height: 2.3rem;
    }
  }
  .btnsolid {
    background: hsl(37.28deg 97.51% 52.75%);

    &:hover {
      background: hsl(30, 90%, 50%);
    }
  }
</style>
