module.exports = function(server, db){
    var query = require('../queries/calendar_query')(db),
        to_JSON = require('../serializers/calendar_serializer').to_JSON,
        siren = require('../../siren');

    function get(req, res, next){
        var id = req.params.id;

        query.get_by_id(id,
            function(calendar){
                res.send(to_JSON(calendar));
                next();
            },
            function(error){
                res.write(error.toString());
                res.end();
            });
    }

    function create(req, res, next){
        res.end();
    }

    // Register myself
    server.get('/calendar/:id', get);
    server.post('/calendar/:id', create);
};