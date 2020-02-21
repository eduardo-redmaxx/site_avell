var app = require('./config/server');
var home = require('./app/routes/home')(app);

app.listen(3000, function(){
    console.log('Servidor On');
})