const Pool = require('pg').Pool
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',     
    password: 'MudarAgora',
    database: 'db_agente_avell',            
    port: 5432,
})

const getDados = (request, response) => {
  pool.query("SELECT * FROM tb_catalogo_odoo_teste ORDER BY cat_cod ASC", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getDadosCatalogo = (request, response) => {
  pool.query("SELECT * FROM tb_catalogo_odoo_teste ORDER BY cat_cod ASC", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getDadosAgente = (request, response) => {
  pool.query("SELECT * FROM tb_agente_odoo_teste ORDER BY age_cod ASC", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getDadosById = (request, response) => {
  pool.query("SELECT DISTINCT a.cat_serial_number AS SERIAL_NUMBER, a.cat_comp as COMP_CATALOGO, a.cat_prop as PROP_CATALOGO, a.cat_valor as VAL_CATALOGO "+
             "     , b.age_comp as COMP_AGENTE , case when a.cat_comp_id = b.age_comp_id then a.cat_prop ELSE '' END as PROP_AGENTE "+
             "     , case when a.cat_comp_id = b.age_comp_id then a.cat_valor ELSE '' END as VAL_AGENTE "+
             "     , case when a.cat_comp_id = b.age_comp_id then 'S' ELSE 'N' END AS STATUS "+
             "  FROM tb_catalogo_odoo_teste a "+
             "  LEFT JOIN tb_agente_odoo_teste b  "+
             "    ON b.age_serial_number = a.cat_serial_number "+
             "   AND b.age_comp_id = a.cat_comp_id "+
             " WHERE a.cat_serial_number = $1", [request.params.id], (error, results) => {
    if (error) {
      throw error

    }
    response.status(200).json(results.rows)
  })
}

const getDadosCatalogoById = (request, response) => {
  pool.query("SELECT * FROM tb_catalogo_odoo_teste WHERE cat_serial_number = $1", [request.params.id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getDadosAgenteById = (request, response) => {
  pool.query('SELECT * FROM tb_agente_odoo_teste WHERE age_serial_number = $1', [request.params.id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createAgente = (request, response) => {
  const { age_serial_number, age_comp, age_comp_id, age_data } = request.body  

  pool.query("INSERT INTO tb_agente_odoo_teste (age_serial_number, age_comp, age_comp_id, age_data) VALUES ($1, $2, $3, $4)", [age_serial_number, age_comp, age_comp_id, age_data], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('Agente exportado com sucesso')
  })
}

const createCatalogo = (request, response) => {
  const { cat_serial_number, cat_comp, cat_comp_id, cat_prop, cat_valor, cat_data } = request.body  

  pool.query("INSERT INTO tb_catalogo_odoo_teste (cat_serial_number, cat_comp, cat_comp_id, cat_prop, cat_valor, cat_data) VALUES ($1, $2, $3, $4, $5, $6)", [cat_serial_number, cat_comp, cat_comp_id, cat_prop, cat_valor, cat_data], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('Catalogo exportado com sucesso')
  })
}

module.exports = {
  getDados,
  getDadosCatalogo,
  getDadosAgente,
  getDadosById,
  getDadosCatalogoById,
  getDadosAgenteById,
  createAgente,
  createCatalogo
}