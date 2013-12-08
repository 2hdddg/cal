var assert = require("assert"),
    db = require('../../../server/db'),
    Calendar = db.models.Calendar;

describe('Calendar model', function(){
    before(function(done){
        db.sequelize.sync({force: true})
            .success(function(){
                done();
            });
    });

    it('can be created', function(done){
        Calendar
            .create({ title: 'a title'})
            .success(function(created){
                assert.ok(created.id > 0);
                done();
            });
    })
})