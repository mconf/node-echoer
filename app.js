// This is a simple wrapper to run the app with 'node app.js'
require("coffee-script");
var port = 3000;

// Start the server
app = require('./app.coffee');
app.listen(port);
if (app.address() === null) {
  console.log('Could not bind to port', config.lb.port);
  console.log('Aborting.');
  process.exit(1);
}
console.log("*** Server listening on port", app.address().port);
