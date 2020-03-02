// module.exports = function(app){

//     var path = require("path");
    
//     app.get('/', function(req, result){ 

//         const pg = require('pg').pool;

//         const config = {
//             host: 'localhost',
//             user: 'postgres',     
//             // password: 'MudarAgora',
//             // database: 'db_agente_avell'            
//             password: 'controle',
//             database: 'site_avell'
//         };

//         const client = new pg.Client(config);

//         client.connect(err => {
//             if (err) throw err;
//             else { queryDatabase(); }
//         });

//         function queryDatabase() {

//             var query = "SELECT * FROM tb_agente_odoo_teste";// where cod_catalogo = '"+req.params.cod_catalogo+"';";
            
//             client.query(query)
//                 .then(res => {
//                     const rows = res.rows;
                    
        
//                     rows.map(row => {
//                         result.send(rows);
//                         // result.render("./home/home", {consulta : res.rows});
//                         // result.render("home/home", {consulta : getParamentro});
//                     });                 
//                     // process.exit();
//                 })
//                 .catch(err => {
//                     console.log(err);
//                 });
//         };    

//     });

//     app.post('/api/inserir/:arquivo', function(req, result){ 

//         const pg = require('pg');

//         const config = {
//             host: 'localhost',
//             user: 'postgres',     
//             // password: 'MudarAgora',
//             // database: 'db_agente_avell'            
//             password: 'controle',
//             database: 'site_avell'
//         };

//         const client = new pg.Client(config);

//         client.connect(err => {
//             if (err) throw err;
//             else { queryDatabase_inserir(); }
//         });

//         function queryDatabase_inserir() {

//             const { age_serial_number, age_comp, age_prop, age_valor, age_data } = request.body

//             pool.query('INSERT INTO tb_teste_post(id,nome)VALUES(DEFAULT,$1)', [age_serial_number]); // [age_serial_number, age_comp, age_prop, age_valor, age_data]);


//             // var query = 'INSERT INTO users (name, email) VALUES ($1, $2)', [age_serial_number, age_comp, age_prop, age_valor, age_data];';
//             // var query = 'INSERT INTO tb_teste_post VALUES(DEFAULT,aa);';
//             // var query = 'INSERT INTO tb_teste_post(id, nome) VALUES("{"nome": "Eduardo Alves"}");';
            
//             client.query(query)
//                 .then(res => {
//                     const rows = res.rows;
        
//                     rows.map(row => {
//                         req.send(rows);
//                         // result.render("./home/home", {consulta : res.rows});
//                         // result.render("home/home", {consulta : getParamentro});
//                     });                 
//                     // process.exit();
//                 })
//                 .catch(err => {
//                     console.log(err);
//                 });
//         };    

//     });
// };    