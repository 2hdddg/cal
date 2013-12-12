

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
    toHtml: toHtml
};