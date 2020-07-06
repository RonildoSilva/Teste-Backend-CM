// ROUTES
const { Router, response } = require('express');

const router = Router();

const {
    getProducts, getProductsByCompanyId,
    getProductById, deleteProductById,
    updateProductById, addProduct
} = require('../controllers/productController.js');

/**
 * @swagger
 * /api/products:
 *   get:
 *     tags:
 *       - Product
 *     description: Returns all products
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of products
 *         schema:
 *           $ref: '#/definitions/Product'
 */
router.get('/products', getProducts);


/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     tags:
 *       - Product
 *     description: Returns a single product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Product's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single product
 *         schema:
 *           $ref: '#/definitions/Product'
 */
router.get('/product/:id', getProductById);


/**
 * @swagger
 * /api/products:
 *   get:
 *     tags:
 *       - Product
 *       - Company
 *     description: Returns all products from an especific Company
 *     produces:
 *       - application/json
 *      parameters:
 *       - name: id
 *         description: Company's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: An array of products
 *         schema:
 *           $ref: '#/definitions/Product'
 */
router.get('/products/:id', getProductsByCompanyId);


/**
 * @swagger
 * /api/product:
 *   post:
 *     tags:
 *       - Product
 *     description: Creates a new product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: product
 *         description: Product object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Product'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/product', addProduct);


/**
 * @swagger
 * /api/product/{id}:
 *   put:
 *     tags: Product
 *     description: Updates a single product
 *     produces: application/json
 *     parameters:
 *       name: product
 *       in: body
 *       description: Fields for the Product resource
 *       schema:
 *         type: array
 *         $ref: '#/definitions/Product'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/product/:id', updateProductById);


/**
 * @swagger
 * /api/puppies/{id}:
 *   delete:
 *     tags:
 *       - Product
 *     description: Deletes a single product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Product's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/product/:id', deleteProductById);


module.exports = router;