var db = require('../db'),
    Calendar = db.models.Calendar;

exports.get_by_id = function(id, onsuccess, onfailure){
    Calendar
        .find(id)
        .success(function(calendar){
            onsuccess(calendar);
        })
        .failure(function(error){
            onfailure(error);
        });
};