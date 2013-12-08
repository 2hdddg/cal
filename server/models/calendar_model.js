module.exports = function(sequelize, DataTypes){
    var Calendar = sequelize.define('Calendar', {
        title: DataTypes.TEXT
    });

    return Calendar;
};