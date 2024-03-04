// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      appName: 'Ndolan.'
    }
  },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  plugins: [
    '~/plugins/aos.client.js'
  ],

  css: ['~/assets/css/global.css']
})
