var assert = require("assert"),
    db = require('../db_fixture')(),
    query = require('../../../server/queries/calendar_query')(db);

describe('Calendar query,', function(){
    describe('get_by_id', function(){
        it('calls success when calender found', function(done){
            query.get_by_id(1, function(calendar){
                assert.ok(calendar);
                done();
            });
            db.models.Calendar.find.set_success({});
        });
        it('calls error when calendar not found', function(done){
            query.get_by_id(1, function(calendar){
                assert.ok(false);
                done();
            }, function(error){
                assert.ok(true);
                done();
            });
            db.models.Calendar.find.set_success(null);
        });
    });
});