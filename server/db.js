// Todo: rename to db instead ?
var Sequelize = require('sequelize');

var dbname = process.env['CAL_DB_NAME'],
    dbuser = process.env['CAL_DB_USER'],
    dbpassword = process.env['CAL_DB_PASS'];

// Todo: remove hardcoding!
var sequelize = new Sequelize(
    dbname,
    dbuser,
    dbpassword, {
        dialect: 'postgres'
    }
);

// load models
// Todo: read directory contents instead
var modelnames = [
    'Series'
];
var models = {};
modelnames.forEach(function(model) {
    models[model] = sequelize.import(__dirname + '/models/' + model);
});



module.exports.sequelize = sequelize;
module.exports.models = models;

