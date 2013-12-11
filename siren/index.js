
function propertiesToHtml(properties){
    if (!properties || Object.keys(properties).length === 0){
        return '';
    }

    var html = "<dl>";
    for (var p in properties){
        html += "<dt>" + p + "</dt><dd>" + properties[p] + "</dd>";
    }
    html += "</dl>";

    return html;
}

function subEntityToHtml(entity){
    if (!entity || Object.keys(entity).length === 0){
        return '';
    }
    var html = "<section></section>";

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

    // try to find self url
    // underscore please!
    var selfUrl;
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

    if (selfUrl){
        return '<h1><a href="' + selfUrl + '">' + o.title + '</a></h1>';
    }
    else{
        return '<h1>' + o.title + '</h1>';
    }
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