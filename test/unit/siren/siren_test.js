var assert = require("assert"),
    siren = require('../../../siren');

describe('Siren,', function(){

    describe('toHtml', function(){
        it('should be wrapped in an article tag', function(){
            var html = siren.toHtml({
            });
            assert.equal(html, '<article></article>');
        });

        it('should put title in dl/dt/dd tag', function(){
            var html = siren.toHtml({
                title: 'Atitle'
            });
            assert.equal(html, '<article><dl><dt>title</dt><dd>Atitle</dd></dl></article>');
        });

        it('should put class in dl/dt/dd tag', function(){
            var html = siren.toHtml({
                class: ["aclass"]
            });
            assert.equal(html, '<article><dl><dt>class</dt><dd>aclass</dd></dl></article>');
        });

        it('should put href in dl/dt/dd tag as  a tag', function(){
            var html = siren.toHtml({
                href: "http://x.y"
            });
            assert.equal(html, '<article><dl><dt>href</dt><dd><a href="http://x.y">http://x.y</a></dd></dl></article>');
        });

/*
        it('transforms subentities into ul list of sections', function(){
            var html = siren.toHtml({
                entities: [{
                    href: 'uritoself'
                }]
            });
            assert.equal(html, '<article><ul><li><section></section></li></ul></article>');
        });
*/
        /*
        it('transforms subentity rel to a ?', function(){
            var html = siren.toHtml({
                entities: [{
                    rel: ['reldefinition'],
                }]
            });
            assert.equal(html, '<article><ul><li><section></section></li></ul></article>');
        })
        */

    });
}); 