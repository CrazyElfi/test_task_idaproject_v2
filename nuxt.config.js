export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  router: {
    base: '/nuxt-gh-pages/'
    // base: '/'
  },
  target: 'static',
  head: {
    title: 'test_task_idaproject_v2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap'
      }
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/main.sass',
    '~/assets/sass/media.sass'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Simple usage
    // '@nuxtjs/stylelint-module'

    // With options
    // ['@nuxtjs/stylelint-module', { /* module options */ }]
  ],
  // stylelint: {
  //   configFile: '.stylelintrc'
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
