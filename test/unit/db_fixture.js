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
        successCallback = failureCallback = undefined;
    };
    find.set_failure = function(e){
        failureCallback(e);
        successCallback = failureCallback = undefined;
    };
    return find;
}

module.exports = db_fixture;
