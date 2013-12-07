var assert = require("assert"),
    Series = require('../../../server/db').models.Series;

describe('Series model', function(){
    it('can be created', function(){
        Series
            .create({ title: 'a title'})
            .success(function(series){
                assert.ok(series.id > 0);
            });
    })
})