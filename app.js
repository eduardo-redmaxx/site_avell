var path = require("path");
var app = require(path.resolve('./config/server'));
var home = require(path.resolve('./app/routes/home'))(app);

app.listen(3000, function(){
    console.log('Servidor On');
})