'use strict';

var port = process.env.PORT || 8080;

var http = require('http');
var express = require('express');

var bodyParser = require('body-parser');
var swaggerize = require('swaggerize-express');
var swaggerUi = require('swaggerize-ui');
var path = require('path');

var app = express();

var server = http.createServer(app);

/*
app.use(bodyParser.json());

app.use(swaggerize({
    api: path.resolve('./config/api.json'), // third change
    handlers: path.resolve('./handlers'),
    docspath: '/swagger' // fourth change
}));

// change four
app.use('/docs', swaggerUi({
    docs: '/swagger'
}));
*/

// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {
    res.send('Hello World... !');
});

// accept POST request on the homepage
app.post('/', function (req, res) {
    res.send('Got a POST request');
});

// accept PUT request at /user
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});

// accept DELETE request at /user
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});


server.listen(port, function () { // fifth change
    //app.setHost(undefined); // sixth and final change
});

/*
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
*/
