export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'learning',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/main.css',
    'vue-select/dist/vue-select.css'
  ],

  // Loading Bar
  loading: {
    color: 'black',
    height: '5px',
    continuous: true
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "@/plugins/main.js",
    "@/plugins/vueselect.js"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/tailwindcss'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios',
    'vue-scrollto/nuxt'],
  bootstrapVue: {
    bootstrapCSS: true, // Or `css: false`
    bootstrapVueCSS: true // Or `bvCSS: false`
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
