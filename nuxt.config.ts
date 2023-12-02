// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
  ],
  colorMode: {
    classSuffix: ''
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Random Hiragana Katakana',
      meta: [
        {
          name: 'Random Hiragana Katakana',
          content: `Let's study hiragana and katakana with random spawn`
        }
      ]
    }
  }
})
