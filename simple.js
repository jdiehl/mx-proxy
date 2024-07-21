const http = require('http')
const httpProxy = require('http-proxy')

const proxy = httpProxy.createProxyServer()

const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Origin-Trial': 'Aq1HE33t8JZ4JIH4ji5fEZpgezjMIrENP1ENk/DuWAs8XeqySEtd+4WYXL4E2GRaTr1PTgIIYroJhFyKZFij/gUAAABJeyJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjgwODAiLCJmZWF0dXJlIjoiV2ViU1FMIiwiZXhwaXJ5IjoxNzE2OTQwNzk5fQ==' })
  proxy.web(req, res, { target: 'http://10.211.55.3:8080' })
})

server.listen(8080)
