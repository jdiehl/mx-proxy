const http = require('http')
const httpProxy = require('http-proxy')

const proxy = httpProxy.createProxyServer()

const server = http.createServer(function(req, res) {
  console.log(req)
  throw 'x'
  proxy.web(req, res, {
    xfwd: true,
    changeOrigin: true,
    target: 'https://advent.mendixcloud.com/'
  })
})

server.listen(8080)
