var express = require('express'),
    app = express(),
    port = 3000
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost/rest_test');
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

app.use('/api' , require('./routes'));

app.listen(port);
console.log('listening on port' ,port);