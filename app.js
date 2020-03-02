const app = require('./config/server');
const db = require('./app/routes/queries.js')
const port = 3000

// app.get('/', (request, response) => {
//   response.json({ info: 'Node.js, Express, and Postgres API' })
// })

app.get('/', db.getUsers)
app.get('/:id', db.getUserById)
app.post('/', db.createUser)
// app.put('/users/:id', db.updateUser)
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