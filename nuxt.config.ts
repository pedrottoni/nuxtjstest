// import { fileURLToPath, URL } from 'node:url'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      title: 'EXE auctions',
      description: 'EXE auctions',
      author: 'Estúdio Oz',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Sobre', link: '/about' },
        { text: 'Time', link: '/team' },
        { text: 'Subscribe', link: '/subscribe' },
      ],
    },
    app: {
      baseURL: '/',
    },
  },
  modules: [
    '@pinegrow/nuxt-module',
    // 'nuxt-icon', // not using this because the format nuxt-icon uses is not same as UIcon of @nuxthq/ui
    '@nuxthq/ui',
    '@nuxt/devtools',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
  },
  pinegrow: {
    liveDesigner: {
      iconPreferredCase: 'unocss', // default value (can be removed), nuxtlabs/ui uses the unocss format for icon names
      devtoolsKey: 'devtools', // see plugins/devtools.client.ts
      tailwindcss: {
        configPath: 'tailwind.config.ts',
        cssPath: '@/assets/css/tailwind.css',
        // TODO: restartOnThemeUpdate is required at the moment to automatically restart nuxt dev server whenever theme is changed in Vue Designer's design panel (which is very slow at the moment)
        // restartOnThemeUpdate might not be required if the HMR issue with nuxt tailwind module is fixed - https://github.com/nuxt-modules/tailwindcss/issues/682
        // restartOnThemeUpdate: true,
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
  ui: {
    icons: 'all',
    // safelistColors: [
    //   'primary',
    //   'secondary',
    //   'tertiary',
    //   'success',
    //   'warning',
    //   'error',
    //   'info',
    // ],
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
