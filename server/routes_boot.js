module.exports = function(server, db){
    var fs = require('fs');

    // register all controllers
    var controllers = fs.readdirSync(__dirname + '/controllers/');
    controllers.forEach(function(controllername){
        var controller = require(__dirname + '/controllers/' + controllername);
        controller(server, db);
    });
};