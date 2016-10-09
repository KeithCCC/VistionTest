
var objtxt1 = '{"level1data1": "yes", "level1data2": "no"}';
console.log(objtxt1);
var obj1 = JSON.parse(objtxt1);

var objtxtComp = '{"level1": [{"level2": [{"level3": "ja", "description":"description"}]}]}';
console.log(objtxtComp);
var obj2 = JSON.parse(objtxtComp, function (key, value){
   // console.log(key+":"+value);
});

obj3 = JSON.parse(objtxtComp);

var diveJSON = function diveJSON(data, callback) {
    for (var key in data) {
        callback(key, data[key]);
        if (typeof data[key] == "object") {
            diveJSON(data[key], callback);
        }
    }
}

diveJSON(obj3, function(key, value){
    console.log("JSON.parse :" + key + ":" + value)
});
console.log(JSON.stringify(obj3, null, "\t"));
console.log(obj3.level1.level2);


var bar = eval("obj3.level1.level2");
console.log(bar);


function getprop(json, path) {
    var tokens = path.split(".");
    var obj = json;
    for (var i = 0; i < tokends.length; i++){
        obj = obj[tokens[i]];
        console.log("getprop obj : " + obj);
    }
    return obj;
}

var fields = ["level1", "level2.level3"];

for(var i = 0; i <obj3.length;i++) {
    var value = getprop(obj3, fields[i]);
    console.log(fields[i] + "=" + value);
}