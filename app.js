const path = require('path');
const app = require(path.resolve('./config/server'));
const db = require(path.resolve('./app/routes/queries.js'))
const port = 3000

// app.get('/', (request, response) => {
//   response.json({ info: 'Node.js, Express, and Postgres API' })
// })

app.get('/api', db.getDados)
app.get('/api/catalogo', db.getDadosCatalogo)
app.get('/api/agente', db.getDadosAgente)
app.get('/api/:id', db.getDadosById)
app.get('/api/catalogo/:id', db.getDadosCatalogoById)
app.get('/api/agente/:id', db.getDadosAgenteById)
app.post('/api/agente', db.createAgente)
app.post('/api/catalogo', db.createCatalogo)
// app.delete('/users/:id', db.deleteUser)

app.listen(3000, function(){
    console.log('Servidor On');
})

// var path = require("path");
// var app = require(path.resolve('./config/server'));
// var home = require(path.resolve('./app/routes/home'))(app);

// app.listen(3000, function(){
//     console.log('Servidor On');
// })