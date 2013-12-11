
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
        html += "<li>" + subEntityToHtml(e) + "</li>";
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

function toHtml(sirenJson){
    var html = "<article" + classesToAttribute(sirenJson) + ">" +
        propertiesToHtml(sirenJson.properties) +
        subEntitiesToHtml(sirenJson.entities) +
    "</article>";

    return html;
}

module.exports = {
    toHtml: toHtml
};