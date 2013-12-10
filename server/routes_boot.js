module.exports = function(express, app, db){
    // Controllers are initialized with db
    var calendar = require('./controllers/calendar_controller')(db);

    app.use(express.bodyParser());

    // Setup express routes for:
    //   Calendar
    app.get('/calendar/:id', calendar.get);
    app.post('/calendar/:id', calendar.create);
};