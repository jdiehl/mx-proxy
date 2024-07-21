const http = require('http')

const server = http.createServer(function(req, res) {
  console.log(`${req.url}`)
  for (const key of Object.keys(req.headers)) {
    console.log(`  ${key}: ${req.headers[key]}`)
  }
  console.log()
  res.end(req.url)
})

server.listen(8080)
