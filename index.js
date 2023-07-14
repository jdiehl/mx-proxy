const config = require('./config')
const { main } = require('./src/main')

main(config).catch(err => console.error(err))
