var express = require('express'),
    app = express(),
    db = require('./db');

// Bootstrapping
require('./express_boot')(app);
require('./routes_boot')(express, app, db);

var port = process.env.PORT || 6666;

app.listen(port);
console.log("Server listening on port " + port);