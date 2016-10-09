'use strict'
const vision = require('@google-cloud/vision')({
  projectId: 'visiontest-145013',
  keyFilename: './VisionTest-c6d1b9e47665.json'
});

var fs = require('fs');
var path = require('path');
var mypath = process.argv[2];
var jp = require('jsonpath');
require('date-utils');
var dt = new Date();
var formatted = dt.toFormat("YYYYMMDDHH24MISS");
var fileList = [];
var obj;

// read all files in specified directory
fs.readdir(mypath, function (err, files) {
  if (err) {
    console.log("file name: " + file + " :" + err);
  }
/*
  console.log("Files list ");
  files.forEach(function (file) {
    console.log("File names: " + file);
  });*/

var options = {
  verbose: false
};

// for each jpg files in the specified directory, call vision api and return the very first description which contains the full OCR result.
files.forEach(function (file) {
  vision.detectText(path.join(mypath, file), options, function (err, text, response) {
    if (err) {
      console.log("Vison error: " + file + " :" + err);
    }
    else {
      /*console.log(text);*/
      //console.log(JSON.stringify(response, null, '\t'));
      //console.log(JSON.parse(response));
      /* console.log(JSON.stringify(response));*/
      /* console.log(response);*/

      /* JSON.parse(JSON.stringify(response), function (key, value){
               if (key === "description") {
               console.log(key + ":" + value);

               //process.exit(0);
           } 
       })*/
      //jsonobj = JSON.parse(JSON.stringify(response));
      //console.log(jsonobj);
      var output = jp.query(JSON.parse(JSON.stringify(response)), '$..textAnnotations[0].description');
     /* console.log(JSON.stringify(response));
      console.log(JSON.parse(JSON.stringify(response)));*/
      fs.writeFile("Out_"+ path.basename(file, '.jpg') + "_" + formatted + ".txt", JSON.stringify(output), function(err){
        console.log(err);
      });  
      console.log(JSON.stringify(output));

    }
  });

  });
});
