var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.set('view engine','ejs');
app.set('views',path.resolve('./app/views'));
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

module.exports = app;   