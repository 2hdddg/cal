var express = require('express');

var app = express();

// Bootstrapping
require('./express_boot')(app);
require('./routes_boot')(app);

var port = process.env.PORT || 6666;

app.listen(port);
console.log("Server listening on port " + port);
