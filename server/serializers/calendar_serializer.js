module.exports.to_JSON = function(calendar){
    return {
        class: ['calendar'],
        properties: {
            id: calendar.id
        },
        title: calendar.title,
        links:[
            {rel: ['self'], href: '/calendar/' + calendar.id}
        ]
    };
};