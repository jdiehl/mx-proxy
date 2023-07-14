const { logger } = require('./logger')
const { proxy } = require('./proxy')

exports.main = async (config) => {
  const server = await proxy(config, logger)
  server.listen(443)
}