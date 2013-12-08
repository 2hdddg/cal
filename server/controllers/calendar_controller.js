var calendarQuery = require('../queries/calendar_query');

exports.get = function(req, res){
    var calendarId = req.params.id;

    calendarQuery.get_by_id(calendarId,
        function(calendar){
            if (calendar){
                res.write('Found it!');
                res.end();
            }
            else{
                res.write('Didnt find calender:' + calendarId);
                res.end();
            }
        },
        function(errors){
            res.write('error');
            res.end();
        });
}