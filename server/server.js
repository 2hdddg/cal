var express = require('express');

var app = express();

// Bootstrapping
require('./config/express')(app);
require('./config/routes.js')(app);

var port = process.env.PORT || 6666;
app.listen(port);
