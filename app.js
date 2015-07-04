var express = require('express');
var app = express();
var http = require('http');

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(3000);
