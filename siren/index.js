
var html = require('./html');

function entity(e){
    return html.tag('article', {
        inner: function(){
            var meta = metaProperties(e);
            //namedProperties(e, ['title', 'class', 'href']);
            //var properties = properties(e.properties);
            //var actions = actions(e.actions);
            return meta;
        },
        show_empty: true
    });
}

function metaProperties(e){
    return html.tag('dl', {
        inner: function(){
            var title = property(e, 'title');
            var clazz = property(e, 'class');
            var href = property(e, 'href', function(v){
                return html.tag('a', {
                    attrs: function(){
                        return html.attr({ href: v}, 'href');
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

function properties(o){
    return html.tag('dl', {
        inner: function(){
            var properties = '';
            for (var n in o){
                properties += property(o, p);
            }
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
    var actions = '';

    list.forEach(function(a){
        actions += action(a);
    })

    return actions;
}

function action(a){
    return
        namedProperties(['title', 'name', 'method', 'href', 'type']) +
        form(a)
}

function form(a){
    return html.tag('form', {
        attrs: function(){
            attributes += html.attr(a, 'href', 'action');
            attributes += html.attr(a, 'method', 'method');
        },
        inner: function(){
            return fields(a.fields);
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
                            return html.attr({ type: 'submit'}, 'type');
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
                return
                    html.attr(f, 'name') +
                    html.attr(f, 'type') +
                    html.attr(f, 'value');
            }
        }) +
        html.tag('label', {
            attrs: function(){
                html.attr(f, 'name', 'for');
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