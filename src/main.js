const { logger } = require('./logger')
const { proxy } = require('./proxy')

exports.main = async () => {
  const server = await proxy('http://10.211.55.15:8080', logger)
  server.listen(443)
}