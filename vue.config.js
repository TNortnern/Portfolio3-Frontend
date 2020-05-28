module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
     pwa: {
        name: 'Portfolio',
        workboxOptions: {
          skipWaiting: true
        },
        iconPaths: {
          favicon32: 'favicon.ico',
          favicon16: 'favicon.ico',
          appleTouchIcon: 'favicon.ico',
          maskIcon: 'favicon.ico',
          msTileImage: 'favicon.ico'
        }
    }
}