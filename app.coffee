http = require 'http'

app = {}
app.config = {}
app.config.port = 3000

parser = require('commander');
parser
  .option("-p, --port [value]", "Port to listen to [3000]", app.config.port)
  .parse(process.argv);
app.config.port = parser.port if (parser.port)

app.server = http.createServer (req, res) ->
  console.log new Date().toTimeString(), ":", req.url
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end()

module.exports = app