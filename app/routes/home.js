module.exports = function(app){

    app.get('/', function(req, result){

        const pg = require('pg');

        const config = {
            host: 'localhost',
            user: 'postgres',     
            password: 'MudarAgora',
            database: 'db_agente_avell'
        };

        const client = new pg.Client(config);

        client.connect(err => {
            if (err) throw err;
            else { queryDatabase(); }
        });

        function queryDatabase() {
  
            // console.log(`Running query to PostgreSQL server: ${config.host}`);
        
            const query = 'SELECT * FROM tb_agente_avell;';
        
            client.query(query)
                .then(res => {
                    const rows = res.rows;
        
                    rows.map(row => {
                        // result.send(rows);
                        result.render("home/home", {consulta : rows});
                    });
                    
                    process.exit();
                })
                .catch(err => {
                    console.log(err);
                });
        };
    });
};    