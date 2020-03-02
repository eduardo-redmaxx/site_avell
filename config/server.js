var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine','ejs');
app.set('views','./app/views');
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

module.exports = app;   