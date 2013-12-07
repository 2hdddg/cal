// Todo: rename to db instead ?
var Sequelize = require('sequelize');

// Todo: remove hardcoding!
var sequelize = new Sequelize(
    'dbname',
    'username',
    'password', {
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
