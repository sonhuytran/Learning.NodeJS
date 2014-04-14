// Include the Node HTTP library
var http = require('http');

// Include the express module
var express = require('express')

// Create an instant of Express
var app = express();

// Set the view engine
app.set('view engine', 'jade');
// Where to find the view files
app.set('views', './views');

// Mark the public dir as a static dir
app.use(express.static('./public'));

// Start the app
http.createServer(app).listen(3000, function () {
    console.log('Express app started');
});

// A route for the home page
app.get('/', function (resquest, response) {
    response.render('index');
})
// A route for the hello page
.get('/say-hello', function (request, response) {
    response.render('hello');
})
// A route for the test page
.get('/test', function (request, response) {
    response.send('This is a test');
});