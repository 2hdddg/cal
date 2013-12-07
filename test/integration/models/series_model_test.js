var assert = require("assert")
var Series = require('../../../server/models/series');

describe('Series model', function(){
    it('can be created', function(){
        Series
            .create({ title: 'a title'})
            .success(function(series){
                assert.ok(series.id > 0);
            });
    })
})