// Controllers
var series = require('../controllers/series');

module.exports = function(app){
    app.get('/series/:id', series.get)
};