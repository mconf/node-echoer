// This is a simple wrapper to run the app with 'node app.js'
require("coffee-script");

// Start the server
app = require('./app.coffee');
app.server.listen(app.config.port);
if (app.server.address() === null) {
  console.log('Could not bind to port', app.config.port);
  console.log('Aborting.');
  process.exit(1);
}
console.log("*** Server listening on port", app.server.address().port);
