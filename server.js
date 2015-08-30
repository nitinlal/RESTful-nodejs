var express = require('express'),
    app = express(),
    port = 3000;


app.get('/', function(req, res){
	res.send('up and running');
});

app.listen(port);
console.log('listening on port' ,port);