
// the actual Product Resource
var restful = require('node-restful');
var mongoose = restful.mongoose;

var productSchema = new mongoose.Schema({
	name : String,
	sku : String,
	price : Number
});

/*
notice restful:

a) create a model, which takes in a schema
b) sets the allowed methods
*/
module.exports = restful
                       .model('product', productSchema)
                       .methods(['get' ,'put' , 'post', 'delete']);
