var assert = require("assert"),
    siren = require('../../../siren');

describe('Siren,', function(){

    describe('toHtml', function(){
        it('should be wrapped in an article tag', function(){
            var html = siren.toHtml({
            });
            assert.equal(html, '<article></article>');
        });

        it('should wrap entity title in h1 tag', function(){
            var html = siren.toHtml({
                title: 'Atitle'
            });
            assert.equal(html, '<article><h1>Atitle</h1></article>');
        });

        it('should wrap entity title in h1 tag with self link as a tag', function(){
            var html = siren.toHtml({
                title: 'Atitle',
                links: [
                    { rel: ["self"], href: "ref"}
                ]
            });
            assert.equal(html, '<article><h1><a href="ref">Atitle</a></h1></article>');
        });

        it('should set entity class as class on article tag if present', function(){
            var html = siren.toHtml({
                class: ["aclass"]
            });
            assert.equal(html, '<article class="aclass"></article>');
        });

        it('should set entity classes on article tag if more than one', function(){
            var html = siren.toHtml({
                class: ["aclass", "anotherclass" ]
            });
            assert.equal(html, '<article class="aclass anotherclass"></article>');
        });

        it('should set entity classes on article tag if more than one', function(){
            var html = siren.toHtml({
                class: ["aclass", "anotherclass" ]
            });
            assert.equal(html, '<article class="aclass anotherclass"></article>');
        });

        it('transforms entities into ul list of sections', function(){
            var html = siren.toHtml({
                entities: [{
                    rel: ['reldefinition'],
                    href: 'uritoself'
                }]
            });
            assert.equal(html, '<article><ul><li><section></section></li></ul></article>');
        })
    });
}); 