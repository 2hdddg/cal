
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
            //return fields(a.fields);
        }
    });
}

function fields(list){
    return html.tag('fieldset', {
        inner: function(){
            var fields = '';
            list.forEach(function(f){
                fields += field(f);
            });
            if (fields){
                fields +=
                    tag('input', {
                        attrs: function(){
                            var type = html.attr({ type: 'submit'}, 'type');
                            return [type];
                        }
                    });
            }
        }
    });
}

function field(f){
    return
        html.tag('input', {
            attrs: function(){
                return [
                    html.attr(f, 'name'),
                    html.attr(f, 'type'),
                    html.attr(f, 'value')];
            }
        }) +
        html.tag('label', {
            attrs: function(){
                return [html.attr(f, 'name', 'for')];
            }
        });
}

module.exports = {
    toHtml: entity
}

/*
function getProperties(e){
    return [

    ];
}


function propertyToHtml(name, value){
    return "<dt>" + name + "</dt><dd>" + value + "</dd>";
}

function propertiesToHtml(properties){
    if (!properties || Object.keys(properties).length === 0){
        return '';
    }

    var html = "<dl>";
    for (var p in properties){
        html += propertyToHtml(p, properties[p]);
    }
    html += "</dl>";

    return html;
}

function subEntityToHtml(entity){
    if (!entity || Object.keys(entity).length === 0){
        return '';
    }

    var html = "<section" + classesToAttribute(entity) + ">" +
        titleToh1(entity) +
        propertiesToHtml(entity.properties) +
    "</section>";

    return html;
}

function subEntitiesToHtml(entities){
    if (!entities || !entities.length){
        return '';
    }

    var html = "<ul>";
    entities.forEach(function(e){
        html += "<li" + classesToAttribute(e) + ">" + 
            subEntityToHtml(e) + "</li>";
    });

    html += "</ul>";

    return html;
}

function classesToAttribute(o){
    if (!o || !o.class || !o.class.length){
        return '';
    }

    return ' class="' + o.class.join(' ') + '"'
}

function titleToh1(o){
    if (!o || !o.title || !o.title.length){
        return '';
    }

    var selfUrl = getSelfUrl(o);

    if (selfUrl){
        return '<h1><a href="' + selfUrl + '">' + o.title + '</a></h1>';
    }
    else{
        return '<h1>' + o.title + '</h1>';
    }
}

function getSelfUrl(o){
    // try to find self url
    var selfUrl;

    // href is used to represent self on subentites expressed
    // as embedded link
    if (o.href){
        return o.href;
    }

    // Main entity or subentitities expressed as embedded 
    // representation has self url in links section with
    // rel set to "self"
    // underscore please!
    if (o.links && o.links.length > 0){
        o.links.forEach(function(l){
            if (l.rel && l.rel.length && l.href){
                l.rel.forEach(function(r){
                    if (r === 'self'){
                        selfUrl = l.href;
                    }
                })
            }
        });
    }
    return selfUrl;
}

function toHtml(sirenJson){
    var html = "<article" + classesToAttribute(sirenJson) + ">" +
        titleToh1(sirenJson) +
        propertiesToHtml(sirenJson.properties) +
        subEntitiesToHtml(sirenJson.entities) +
    "</article>";

    return html;
}

module.exports = {
    toHtml: toHtml,
    toHtmlX: toHtmlX
};
*/