var db = require('../db'),
    Calendar = db.models.Calendar;

function get_by_id(id){
    Calendar.find(id);
}