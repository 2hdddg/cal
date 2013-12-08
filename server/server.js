var express = require('express');

var app = express();

// Bootstrapping
require('./config/express_config')(app);
require('./config/routes_config')(app);

var port = process.env.PORT || 6666;

app.listen(port);
console.log("Server listening on port " + port);
