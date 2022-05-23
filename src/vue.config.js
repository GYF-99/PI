const proxyObj = {}
proxyObj['/'] = {
  target: 'http://localhost:8085',
  changeOrigin: true,
  pathRewrite: {
    '^/': ''
  }
}
module.exports = {
  devServer: {
    host: 'localhost',
    port: 8081,
    proxy: proxyObj
  }
}
