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
  pool.query('SELECT * FROM tb_teste_post ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM tb_teste_post WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { id, nome } = request.body

  pool.query("INSERT INTO tb_teste_post (id, nome) VALUES ($1, $2)", [id, nome], (error, results) => {
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