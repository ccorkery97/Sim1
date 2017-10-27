const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive')
require('dotenv').config()
const controller = require('./controller');

const app = express();
app.use(bodyParser.json() );
app.use( cors() );

massive (process.env.CONNECTION_STRING).then (dbInstance => app.set('db', dbInstance))

// app.put('/api/products1', controller.update1);
// app.put('/api/products2', controller.update2);
// app.put('/api/products3', controller.update3);
// app.put('/api/products4', controller.update4);
app.get('/api/products', controller.select);





const port = process.env.port || 3000;
app.listen(port, () => {console.log(`Server listening on port ${port}.`)})