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

        it('should put classes in dl/dt/dd tag', function(){
            var html = siren.toHtml({
                class: ["aclass", "anotherclass"]
            });
            assert.equal(html, '<article><dl><dt>class</dt><dd>aclass, anotherclass</dd></dl></article>');
        });

        it('should put href in dl/dt/dd tag as  a tag', function(){
            var html = siren.toHtml({
                href: "http://x.y"
            });
            assert.equal(html, '<article><dl><dt>href</dt><dd><a href="http://x.y">http://x.y</a></dd></dl></article>');
        });

        it('should put custom properties in dl/dt/dd tag as  a tag', function(){
            var html = siren.toHtml({
                properties:{
                    x: 1,
                    y: 2
                }
            });
            assert.equal(html, '<article><dl><dt>x</dt><dd>1</dd><dt>y</dt><dd>2</dd></dl></article>');
        });

        it('should put action in section with dl/dt/dd and form', function(){
            var html = siren.toHtml({
                actions:[{
                    name: 'update',
                    title: 'Update',
                    method: 'POST',
                    href: 'posturl',
                    type: 'encoding',
                    fields: [
                        { name: 'n', type: 'text', value: 'v'}
                    ]
                }]
            });
            assert.equal(html,
            '<article><section><dl><dt>name</dt><dd>update</dd><dt>title</dt><dd>Update</dd><dt>method</dt><dd>POST</dd><dt>href</dt><dd><a href="posturl">posturl</a></dd><dt>type</dt><dd>encoding</dd></dl><form action="posturl" method="POST"><fieldset><input name="n" type="text" value="v"></input><label for="n">n</label></fieldset><input type="submit"></input></form></section></article>');
        });
/*
        it('should put related entitites in sections', function(){
            var html = siren.toHtml({
                    entitites: [
                        {
                            class: 
                        }
                    ]
                }
            });
            assert.equal(html, '<article></article>');
        });
*/
    });
}); 