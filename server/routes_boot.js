// Controllers
var series = require('./controllers/calendar_controller');

module.exports = function(app){
    app.get('/calendar/:id', series.get)
};