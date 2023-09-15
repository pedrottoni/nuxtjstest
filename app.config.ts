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
      rounded: 'rounded-none',
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
    modal: {
      overlay: {
        base: 'fixed inset-0 transition-opacity',
        background: 'bg-indigo-950/40 backdrop-blur-3xl',
        transition: {
          enter: 'ease-out duration-300',
          enterFrom: 'opacity-0',
          enterTo: 'opacity-100',
          leave: 'ease-in duration-200',
          leaveFrom: 'opacity-100',
          leaveTo: 'opacity-0',
        },
      },
      container:
        'flex min-h-full items-center sm:items-center justify-center text-center',
      width: 'max-w-xs',
      ring: 'ring-2 ring-blue-500',
    },
  },
})
