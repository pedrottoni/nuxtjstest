export default defineAppConfig({
  ui: {
    gray: 'neutral',
    primary: 'pp',
    button: {
      rounded: 'rounded-3xl',
      variant: {
        link: 'px-0 py-0 2xs:px-0 py-0 xs:px-0 py-0 sm:px-0 py-0 md:px-0 py-0 lg:px-0 py-0 xl:px-0 py-0 hover:text-primary-900',
        ghost:
          'text-{color}-500 hover:text-primary-900 hover:bg-none disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500',
      },
    },
    card: {
      background: 'bg-transparent dark:bg-gray-900',
      divide: 'divide-none',
      ring: 'ring-none',
      shadow: 'shadow-0',
      rounded: 'rounded-3xl',
      body: {
        padding: 'px-0 p-0',
      },
      header: {
        padding: 'px-0',
      },
      footer: {
        padding: 'px-0 py-3',
      },
    },
  },
})
