const express = require('express');
const cors = require('cors')
var path = require('path');
var swaggerJSDoc = require('swagger-jsdoc');

const app = express();

// swagger definition
var swaggerDefinition = {
    info: {
      title: 'Node Swagger API',
      version: '1.0.1',
      description: 'Demonstrating how to desribe a RESTful API with Swagger',
    },
    host: 'localhost:4001',
    basePath: '/',
  };
  
  // options for the swagger docs
  var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./routes/*.js'],
  };
  
  // initialize swagger-jsdoc
  var swaggerSpec = swaggerJSDoc(options);

//middlewares
app.use(express.static('public'));

app.use(cors())

app.use(express.json());
app.use(express.urlencoded(
    {
        extended: false
    }
));

app.use(require('./routes/companies_index.js'));
app.use(require('./routes/products_index.js'));

app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

app.listen(4001);
console.log('Running...');
