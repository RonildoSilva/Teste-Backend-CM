const { Router, response } = require('express');

const router = Router();

const {
    getCompanies, addCompany, 
    getCompanyById, deleteCompanyById,
    updateCompanyById
} = require('../controllers/companyController.js')

/**
 * @swagger
 * /api/companies:
 *   get:
 *     tags:
 *       - Company
 *     description: Returns all companies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of companies
 *         schema:
 *           $ref: '#/definitions/Company'
 */
router.get('/companies', getCompanies);


/**
 * @swagger
 * /api/company/{id}:
 *   get:
 *     tags:
 *       - Company
 *     description: Returns a single company
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: company's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single company
 *         schema:
 *           $ref: '#/definitions/Company'
 */
router.get('/company/:id', getCompanyById);


/**
 * @swagger
 * /api/company:
 *   post:
 *     tags:
 *       - Company
 *     description: Creates a new company
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: company
 *         description: Company object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Company'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/company', addCompany);


/**
 * @swagger
 * /api/company/{id}:
 *   put:
 *     tags: Company
 *     description: Updates a single company
 *     produces: application/json
 *     parameters:
 *       name: company
 *       in: body
 *       description: Fields for the Company resource
 *       schema:
 *         type: array
 *         $ref: '#/definitions/Company'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/company/:id', updateCompanyById);

/**
 * @swagger
 * /api/company/{id}:
 *   delete:
 *     tags:
 *       - Company
 *     description: Deletes a single company
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Company's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/company/:id', deleteCompanyById);


module.exports = router;