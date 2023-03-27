function logHeaders(prefix, headers) {
  for (const key of Object.keys(headers)) {
    console.log(`${prefix}${key}: ${headers[key]}`)
  }
}

exports.logger = (proxyRes, req, res) => {
  if (req.url === '/xas/') {
    console.log(`${req.method} ${req.url} -> (${res.statusCode})`)
    logHeaders(' > ', req.headers)
    logHeaders(' < ', proxyRes.headers)
    console.log()
  }
}
