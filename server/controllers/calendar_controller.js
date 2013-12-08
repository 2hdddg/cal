var query = require('../queries/calendar_query');
var to_JSON = require('../serializers/calendar_serializer').to_JSON;

exports.get = function(req, res){
    var id = req.params.id;

    query.get_by_id(id,
        function(calendar){
            if (calendar){
                res.write(JSON.stringify(to_JSON(calendar)));
                res.end();
            }
            else{
                res.write('Didnt find calender:' + id);
                res.end();
            }
        },
        function(errors){
            res.write('error');
            res.end();
        });
}