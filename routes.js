var express = require('express');
var router = express.Router();

var product = require('./models/products');
product.register(router, '/products');

module.exports = router;