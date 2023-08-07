<script setup lang="ts">
  import type { Script } from '@unhead/schema'
  import { isDark, toggleDark } from '~/composables/dark'

  type TurboScript = Script & { once: true }
  const config = useRuntimeConfig()
  const { title, description } = config.public
  const route = useRoute()

  if (isDark.value) {
    toggleDark()
  }

  useServerSeoMeta({
    title,
    ogTitle: title,
    description,
    ogDescription: description,
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  })

  useHead({
    title: computed(() => route.meta.title),
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - ${title}` : title
    },
    htmlAttrs: { lang: 'pt-BR', class: 'bg-white' },
    meta: [
      { property: 'keywords', content: route.meta.tags?.toString() },
      { property: 'author', content: 'Pinegrow' },
    ],
  })
</script>
<template>
  <Head>
    <Meta
      name="twitter:image"
      content="https://icons.vuetelescope.com/framework/nuxt.svg"
    />
    <Meta name="twitter:image:alt" content="Nuxt" />
    <Meta name="twitter:site" content="@pinegrow" />
    <Meta name="twitter:card" content="summary" />
    <Link rel="icon" type="image/x-icon" href="/favicon.ico" />
  </Head>
</template>
