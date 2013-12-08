module.exports = function(db){
    var query = require('../queries/calendar_query')(db);
    var to_JSON = require('../serializers/calendar_serializer').to_JSON;

    function get(req, res){
        var id = req.params.id;

        query.get_by_id(id,
            function(calendar){
                res.write(JSON.stringify(to_JSON(calendar)));
                res.end();
            },
            function(error){
                res.write(error);
                res.end();
            });
    }

    return {
        get: get
    };
};