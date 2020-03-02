const Pool = require('pg').Pool
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',     
    // password: 'MudarAgora',
    // database: 'db_agente_avell'            
    password: 'controle',
    database: 'site_avell',
    port: 5432,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM tb_agente_odoo ORDER BY age_cod ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM tb_agente_odoo WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { age_cod, age_serial_number, age_comp, age_prop, age_valor, age_data } = request.body  

  pool.query("INSERT INTO tb_agente_odoo (age_cod, age_serial_number, age_comp, age_prop, age_valor, age_data) VALUES ($1, $2, $3, $4, $5, $6)", [age_cod, age_serial_number, age_comp, age_prop, age_valor, age_data], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('Cadastrado com sucesso')
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser
}