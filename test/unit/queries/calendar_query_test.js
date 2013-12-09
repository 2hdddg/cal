var assert = require("assert");

function db_fixture() {

    return {
        models: {
            Calendar: {
                find: sequelize_fixture()
            }
        }
    }
}

function sequelize_fixture(){
    var successCallback;
    var failureCallback;
    var mock = {
        success: function(callback){
            successCallback = callback;
            return mock;
        },
        failure: function(callback){
            failureCallback = callback;
            return mock;
        }
    };

    function find(id) {
        return mock;
    }

    find.set_success = function(v){
            successCallback(v);
    };
    find.set_failure = function(e){
            failureCallback(e);
    };
    return find;
}

var db = db_fixture();
var query = require('../../../server/queries/calendar_query')(db);

describe('Calendar query,', function(){
    describe('get_by_id', function(){
        it('calls success when calender found', function(done){
            query.get_by_id(1, function(calendar){
                assert.ok(calendar);
                done();
            });
            db.models.Calendar.find.set_success({});
        });
    });
});