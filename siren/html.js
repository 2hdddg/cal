function tag(name, options){
    function default_attrs(){
        return '';
    }
    function default_inner(){
        return '';
    }
    options = options || {};
    var attrs_generator = options.attrs || default_attrs;
    var inner_generator = options.inner || default_inner;
    var show_empty = options.show_empty || false;

    var attrs = attrs_generator();
    var inner = inner_generator();

    if (!show_empty && !attrs && !inner){
        return '';
    }

    if (attrs && attrs.length){
        attrs = ' ' + attrs.join(' ');
    }
    else{
        attrs = '';
    }

    return '<' +  name + attrs + '>' + inner + '</' + name + '>';
}

function attr(o, key, name){
    name = name || key;
    var value = o[key];
    if (value){
        return name + '="' + value + '"';
    }
    return '';
}

module.exports = {
    tag: tag,
    attr: attr
};