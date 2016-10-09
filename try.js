

var fs = require('fs');
var path = require('path');
var mypath = process.argv[2];

var fileList = [];
fs.readdir(mypath, function(err, files){
    if (err) throw err;
    files.forEach(function (file) {
        console.log(file);
    });
    //console.log(fileList);
});
