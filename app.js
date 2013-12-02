var express = require('express');
var http = require('http');

var application = express();

application.use(express.logger());

application.get('/', function(request, response){
    response.send('hello');
});

var port = 6667;

http.createServer(application).listen(port);

