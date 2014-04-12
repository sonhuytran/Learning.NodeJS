// Include the Node HTTP library
var http = require('http');

// Include the express module
var express = require('express')

// Create an instant of Express
var app = express();

// Start the app
http.createServer(app).listen(3000, function () {
    console.log('Express app started');
});

// A route for the home page
app.get('/', function (resquest, response) {
    response.send('<h1>Welcome!</h1>');
});