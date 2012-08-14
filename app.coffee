http = require 'http'

server = module.exports = http.createServer (req, res) ->
  console.log new Date().toTimeString(), ":", req.url
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end()
