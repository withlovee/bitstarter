var express = require('express');
var sys=require("sys"), fs=require("fs");
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var text = fs.readFileSync('index.html','utf8').toString();
  //var buffer = new Buffer(text, "utf-8");

  response.send(text);
});

var port = process.env.PORT || 8080;
//var port = 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
