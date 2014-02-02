var restify = require('restify'),
    server = restify.createServer(),
    db = require('./db');

// Bootstrapping
require('./routes_boot')(server, db);

var port = process.env.PORT || 6666;

server.listen(port, function(){
    console.log('%s listening at %s', server.name, server.url);
});
