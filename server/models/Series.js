module.exports = function(sequelize, DataTypes){
    var Series = sequelize.define('Series', {
        name: DataTypes.STRING
    });

    return Series;
};