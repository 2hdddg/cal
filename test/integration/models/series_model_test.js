var assert = require("assert"),
    db = require('../../../server/db'),
    Series = db.models.Series;

describe('Series model', function(){
    before(function(done){
        db.sequelize.sync({force: true})
            .success(function(){
                done();
            });
    });

    it('can be created', function(done){
        Series
            .create({ title: 'a title'})
            .success(function(series){
                assert.ok(series.id > 0);
                done();
            });
    })
})