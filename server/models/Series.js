module.exports = function(sequelize, DataTypes){
    var Series = sequelize.define('Series', {
        title: DataTypes.TEXT
    });

    return Series;
};