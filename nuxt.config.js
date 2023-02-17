export default {
  srcDir: 'client',
  outDir: 'dist',
  components: true,
  buildModules: [ '@nuxt/typescript-build' ],
  build: {
    transpile: [ 'drawflow' ]
  },
  modules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [
      '~/assets/scss/_variables.scss'
    ]
  }
}
