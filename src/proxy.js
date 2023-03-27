const http = require('http')
const httpProxy = require('http-proxy')
   
exports.proxy = (target, onRequest) => {
  const proxy = httpProxy.createProxyServer()
  proxy.on('proxyRes', onRequest)

  const server = http.createServer(function(req, res) {
    proxy.web(req, res, { target })
  })

  return server
}
