const {Pool} = require('pg');

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    port: '5432',
    database: 'company_control_api'
});

const getCompanies = async (request, response) => {
    const query_response = await pool.query(
        'SELECT * FROM companies');
    response.status(200).json(query_response.rows);
}

const addCompany = async (request, response) => {
    const { name } = request.body;
    const query_response = await pool.query(
        'INSERT INTO companies (name) VALUES ($1)', [name]);
    response.json({
        message: 'Added',
        body: {
            company: {name}
        }
    });
}

const getCompanyById = async (request, response) => {
    const id = request.params.id;
    const query_response = await pool.query(
        'SELECT * FROM companies as C WHERE C.id = $1', [id]);
    response.json(query_response.rows);
}

const deleteCompanyById = async (request, response) => {
    const id = request.params.id;
    const query_response = await pool.query(
        'DELETE FROM companies as C WHERE C.id = $1', [id]);

    response.json('Deleted...');
}

const updateCompanyById = async (request, response) => {
    const id = request.params.id;
    const { name } = request.body;

    const query_response = await pool.query(
        'UPDATE companies SET name = $2 WHERE id = $1', [id, name]);

    response.json('Updated...');        
}

module.exports = {
    getCompanies, addCompany, 
    getCompanyById, deleteCompanyById,
    updateCompanyById
}