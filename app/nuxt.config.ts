// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@inkline/nuxt',
    'nuxt-umami'
  ],
  inkline: {
    size: 'lg'
  },
  umami: {
    enable: true, // enable the module? true by default
    autoTrack: true,
    doNotTrack: false,
    cache: false,
    domains: 'smelo.pucwoll.com',
    websiteId: '59f9b0ef-2693-4bab-b179-dc64182642ae',
    scriptUrl: 'https://umami.pucwoll.com/umami.js'
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      title: 'Smelo',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
