// import { fileURLToPath, URL } from 'node:url'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      title: `Vue Designer`,
      description: 'Vue Designer Nuxt Tailwind CSS - Quick start template',
      author: 'Pinegrow',
      nav: [
        { text: 'Home', link: '/' },
        { text: `Quick Start`, link: '/quick-start' },
        { text: 'Subscribe', link: '/subscribe' },
      ],
    },
    app: {
      baseURL: '/',
    },
  },
  modules: [
    '@pinegrow/nuxt-module',
    'nuxt-icon',
    '@nuxt/devtools',
    '@nuxt/content',
    '@vueuse/nuxt',
  ],
  pinegrow: {
    liveDesigner: {
      iconPreferredCase: 'iconify', // nuxt-icon uses iconfiy format for icon names
      devtoolsKey: 'devtools', // see plugins/devtools.client.ts
      tailwindcss: {
        configPath: 'tailwind.config.ts',
        cssPath: '@/assets/css/tailwind.css',
      },
      // plugins: [
      //   {
      //     name: 'My Awesome Lib 3.0',
      //     key: 'my-awesome-lib',
      //     pluginPath: fileURLToPath(
      //       new URL('./my-awesome-lib/web-types.json', import.meta.url),
      //     ),
      //   },
      // ],
    },
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    markdown: {
      anchorLinks: false,
      rehypePlugins: [
        [
          'rehype-external-links',
          {
            target: '_blank',
            rel: ['noopener'],
            test: (node: any) => /^https?:\/\//.test(node.properties.href),
          },
        ],
      ],
    },
    highlight: {
      theme: 'dracula-soft',
    },
  },
})
