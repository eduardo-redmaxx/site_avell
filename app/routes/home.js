module.exports = function(app){

    var path = require("path");

    app.get('/', function(req, result){ 

        const pg = require('pg');

        const config = {
            host: 'localhost',
            user: 'postgres',     
            // password: 'MudarAgora',
            // database: 'db_agente_avell'            
            password: 'controle',
            database: 'site_avell'
        };

        const client = new pg.Client(config);

        client.connect(err => {
            if (err) throw err;
            else { queryDatabase(); }
        });

        function queryDatabase() {

            var query = "SELECT * FROM tb_agente_avell"; //where cod_catalogo = '"+req.params.cod_catalogo+"';";
            
            client.query(query)
                .then(res => {
                    const rows = res.rows;
        
                    rows.map(row => {
                        result.send(rows);
                        // result.render("./home/home", {consulta : res.rows});
                        // result.render("home/home", {consulta : getParamentro});
                    });                 
                    // process.exit();
                })
                .catch(err => {
                    console.log(err);
                });
        };    

    });
};    