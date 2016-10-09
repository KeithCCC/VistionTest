var fs = require('fs');
var jp = require('jsonpath');
var obj;

fs.readFile(process.argv[2], 'utf8', function (err, data) {
	if (err) throw err;
	obj = JSON.parse(data);
	console.log(jp.query(obj, '$..textAnnotations[0].description'));
});


//console.log(obj);
//console.log(jp.query(obj, '$..description'));

