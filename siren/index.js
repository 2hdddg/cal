
var html = require('./html');

function entity(e){
    return html.tag('article', {
        inner: function(){
            var m = meta(e);
            var c = custom(e.properties);
            var a = actions(e.actions);
            return m + c + a;
        },
        show_empty: true
    });
}

function meta(e){
    return html.tag('dl', {
        inner: function(){
            var title = property(e, 'title');
            var clazz = property(e, 'class');
            var href = property(e, 'href', function(v){
                return html.tag('a', {
                    attrs: function(){
                        var href = html.attr({ href: v}, 'href');
                        return [href];
                    },
                    inner: function(){
                        return v;
                    }
                });
            });

            return title + clazz + href;
        }
    });
}

function custom(o){
    return html.tag('dl', {
        inner: function(){
            var properties = '';
            for (var n in o){
                properties += property(o, n);
            }
            return properties;
        }
    });
}

function property(e, name, format){
    if (!name || !e[name]){
        return ''
    }

    format = format || function(v){
        return v;
    };

    var dt = html.tag('dt', {
        inner: function(){
            return name;
    }});

    var dd = html.tag('dd', {
        inner: function(){
            return format(e[name]);
        }
    });

    return dt + dd;
}

function actions(list){
    if (!list || !list.length){
        return '';
    }

    var actions = '';

    list.forEach(function(a){
        actions += action(a);
    })

    return actions;
}

function action(a){
    var name = property(a, 'name');
    var title = property(a, 'title');
    var method = property(a, 'method');
    var href = property(a, 'href', function(v){
        return html.tag('a', {
            attrs: function(){
                var href = html.attr({ href: v}, 'href');
                return [href];
            },
            inner: function(){
                return v;
            }
        });
    });
    var type = property(a, 'type');

    var properties = html.tag('dl', {
        inner: function(){
            return name + title + method + href + type;
        }
    });

    return html.tag('section', {
        inner: function(){
            return properties + form(a);
        }
    });
}

function form(a){
    return html.tag('form', {
        attrs: function(){
            var href = html.attr(a, 'href', 'action');
            var method = html.attr(a, 'method', 'method');

            return [href, method];
        },
        inner: function(){
            return fields(a.fields);
        }
    });
}

function fields(list){
    if (!list || !list.length){
        return '';
    }
    var fieldset = html.tag('fieldset', {
        inner: function(){
            var inputs = '';
            list.forEach(function(f){
                inputs += field(f);
            });
            return inputs;
        }
    });

    var submit = html.tag('input', {
        attrs: function(){
            var type = html.attr({ type: 'submit'}, 'type');
            return [type];
        }
    });

    return fieldset + submit;
}

function field(f){
    var input = html.tag('input', {
        attrs: function(){
            return [
                html.attr(f, 'name'),
                html.attr(f, 'type'),
                html.attr(f, 'value')];
        }
    });
    var label = html.tag('label', {
        attrs: function(){
            return [html.attr(f, 'name', 'for')];
        },
        inner: function(){
            return f.name || '';
        }
    });

    return input + label;
}

module.exports = {
    toHtml: entity
}
