// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  css: ['~/assets/css/main.css'],
  
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/image',
    '@vueuse/motion/nuxt'
  ],

  fonts: {
    families: [
      { name: 'Righteous', provider: 'google' },
      { name: 'Poppins', provider: 'google', weights: [300, 400, 500, 600, 700] }
    ]
  },

  colorMode: {
    preference: 'light'
  },

  ui: {
    theme: {
      colors: ['blue', 'slate']
    }
  },

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY || '',
    contactEmail: process.env.CONTACT_EMAIL || 'info@coquiessound.com'
  },

  app: {
    head: {
      title: 'Producciones Coquies Sound Power',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Alquiler de equipos de sonido, Turbo, iluminación y servicios de DJ profesionales para tus eventos.' 
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
