module.exports = function(db){
    var query = require('../queries/calendar_query')(db),
        to_JSON = require('../serializers/calendar_serializer').to_JSON,
        siren = require('../../siren');

    function response(res, sirenJson){
        res.format({
            html: function(){
                res.write(siren.toHtml(sirenJson));
            },
            json: function(){
                res.write(JSON.stringify(sirenJson));
            }
        });
        res.end();
    }

    function get(req, res){
        var id = req.params.id;

        query.get_by_id(id,
            function(calendar){
                response(res, to_JSON(calendar));
            },
            function(error){
                res.write(error.toString());
                res.end();
            });
    }

    function create(req, res){
        res.end();
    }

    return {
        get: get,
        create: create,
    };
};