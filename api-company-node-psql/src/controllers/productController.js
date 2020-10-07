const {Pool} = require('pg');

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    port: '5432',
    database: 'company_control_api'
});

const getProducts = async (request, response) => {
    const query_response = await pool.query(
        'SELECT * FROM products');
    response.status(200).json(query_response.rows);
}

const getProductsByCompanyId = async (request, response) => {
    const id = request.params.id;
    const query_response = await pool.query(
        'SELECT * FROM products as P WHERE P.company_id = $1', [id]);
    
    response.status(200).json(query_response.rows);
}

const getProductById = async (request, response) => {
    const id = request.params.id;
    const query_response = await pool.query(
        'SELECT * FROM products as P WHERE P.id = $1', [id]);
    response.status(200).json(query_response.rows);
}

const deleteProductById = async (request, response) => {
    const id = request.params.id;
    const query_response = await pool.query(
        'DELETE FROM products as P WHERE P.id = $1', [id]);

    response.json('Deleted...');
}

const updateProductById = async (request, response) => {
    const id = request.params.id;
    const { name, company_id } = request.body;

    const query_response = await pool.query(
        'UPDATE products SET name = $2, company_id = $3 WHERE id = $1', [id, name, company_id]);

    response.json('Updated...');        
}

const addProduct = async (request, response) => {
    const { name, company_id } = request.body;
    const query_response = await pool.query(
        'INSERT INTO products (name, company_id) VALUES ($1, $2)', [name, company_id]);
        
    response.json({
        message: 'Added',
        body: {
            product: {name},
            company: {company_id},
        }
    });
}

module.exports = {
    getProducts, getProductsByCompanyId,
    getProductById, deleteProductById,
    updateProductById, addProduct
}
