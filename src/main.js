const { logger } = require('./logger')
const { proxy } = require('./proxy')

exports.main = async () => {
  const server = proxy('http://10.211.55.15:8080', logger)
  server.listen(8080)
}