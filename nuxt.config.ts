// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico" }
      ]
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui"]
})