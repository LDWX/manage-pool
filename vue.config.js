module.exports = {
  configureWebpack: config => {
    config.devServer = {
      hot: true,
      inline: true,
      proxy: {
        "/": {
          target: "http://localhost:3000",
          ws: false
        }
      }
    }
  }
}