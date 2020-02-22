var express = require('express');
var path = require("path");

var app = express();

app.set('view engine','ejs');
app.set('views', path.resolve('./app/views'));

module.exports = app;   