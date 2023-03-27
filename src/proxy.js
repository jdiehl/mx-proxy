const https = require('https')
const httpProxy = require('http-proxy')
const pem = require('pem')
   
const certProps = {
  days: 1, // Validity in days
  selfSigned: true,
};

async function createCredentials() {
  return new Promise((resolve, reject) => {
    pem.createCertificate(certProps, (error, keys) => {
      if (error) return reject(error)
      resolve({ key: keys.serviceKey, cert: keys.certificate })
    });
  })
}

exports.proxy = async (target, onRequest) => {
  const proxy = httpProxy.createProxyServer()
  proxy.on('proxyRes', onRequest)

  const credentials = await createCredentials()

  const server = https.createServer(credentials, (req, res) => {
    proxy.web(req, res, { target })
  })

  return server
}
