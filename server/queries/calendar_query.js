module.exports = function(db){
    var Calendar = db.models.Calendar;

    function get_by_id(id, onsuccess, onfailure){
        Calendar
            .find(id)
            .success(function(calendar){
                if (calendar){
                    onsuccess(calendar);
                }
                else{
                    onfailure('could not find calendar');
                }
            })
            .failure(function(error){
                onfailure(error);
            });
    }

    return {
        get_by_id: get_by_id
    };
}
