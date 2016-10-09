var fs = require('fs');
var path = require('path');

var json = '{"level1": [{"level2": [{"level3": "ja", "description":"description"}]}]}';
obj = JSON.parse(json);

for (var key in obj) { 
    console.log(key + ":" + obj[key]); 
}

var crawlJSON = function cwralJSON (data, callback) {
    for (var key in data) {
        callback (key, data[key]);
        if (typeof data[key] === "object") {
            crawlJSON(data[key], callback);
        }
    }
}

crawlJSON(obj, function(key, value) {
    if (key === "description") {
        console.log(key + ":" + value);
    } 
});

JSON.parse(JSON.stringify(json), function (key, value){
        if (key === "level3") {
        console.log(key + ":" + value);
    } 
})

var jp = require('jsonpath');

var names = jp.query(obj, '$..description');