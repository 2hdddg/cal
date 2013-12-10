function db_fixture() {
    return {
        models: {
            Calendar: mock_model()
        }
    };
}

function mock_model(){
    return {
        find: mock_function(),
        findOrCreate: mock_function(),
        create: mock_function(),
        findAndCountAll: mock_function(),
        findAll: mock_function(),
        all: mock_function(),
        count: mock_function(),
        max: mock_function(),
        min: mock_function()
    };
}

function mock_function(){
    var successCallback;
    var failureCallback;

    // Chained result from mocked function
    var chain = {
        success: function(callback){
            successCallback = callback;
            return chain;
        },
        // Name for error chaining on statics
        failure: function(callback){
            failureCallback = callback;
            return chain;
        },
        // Name for error chaining on instances
        error: function(callback){
            failureCallback = callback;
            return chain;
        }
    };

    function mocked() {
        return chain;
    }

    function reset(){
        successCallback = failureCallback = undefined;
    }

    // Used by test code to emulate a successful db operation
    mocked.set_success = function(v){
        successCallback(v);
        reset();
    };
    // Used by test code to emulate a failed db operation
    mocked.set_failure = function(e){
        failureCallback(e);
        reset();
    };
    return mocked;
}

module.exports = db_fixture;
