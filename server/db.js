var Sequelize = require('sequelize');

var dbname = process.env['CAL_DB_NAME'],
    dbuser = process.env['CAL_DB_USER'],
    dbpassword = process.env['CAL_DB_PASS'];

var sequelize = new Sequelize(
    dbname,
    dbuser,
    dbpassword, {
        dialect: 'postgres'
    }
);

// Initialize model definitions
var models = {
    Calendar: sequelize.import(__dirname + '/models/calendar_model')
};

module.exports.sequelize = sequelize;
module.exports.models = models;