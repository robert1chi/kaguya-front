// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@nuxtjs/tailwindcss"],
  plugins: ["@/plugins/fontAwesome.ts"],
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  }
});
