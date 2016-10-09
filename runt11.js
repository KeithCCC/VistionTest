'use strict'
const vision = require('@google-cloud/vision')({
  projectId: 'visiontest-145013',
  keyFilename: './VisionTest-c6d1b9e47665.json'
});

var fs = require('fs');
var path = require('path');
var mypath = process.argv[2];

var fileList = [];
fs.readdir(mypath, function (err, files) {
  if (err) throw err;
  files.forEach(function (file) {
    vision.detectText('./test1.jpg', function (err, text) {
      if (err) {
        console.log('err:' + err);
      }
      else {
        console.log('res:' + text);
      }
    });

  });


/*fs.readdir(mypath, function(err, list){
  if (err) throw err;
  var fileList = [];
  vision.detectText('./test1.jpg', function(err, text) {
    if (err) {
      console.log('err:' + err);
    }
    else {
      console.log('res:' + text);
    }
  });
})



// init with auth
//vision.init({auth: 'c6d1b9e4766516f7719cadeaac46d7a4f6ec340d'})
// construct parameters
const req = new vision.Request({
  image: new vision.Image('/test1.jpg'),
  features: [
    new vision.Feature('TEXT_DETECTION', 30),
    //new vision.Feature('LABEL_DETECTION', 10),
  ]
})
// send single request
vision.annotate(req).then((res) => {
  // handling response
  console.log(JSON.stringify(res.responses))
}, (e) => {
  console.log('Error: ', e)
})
*/
