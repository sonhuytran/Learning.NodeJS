// Import libraries
var http = require('http');

var server = http.createServer(function (request, response) {
    console.log('Hey, I got a request to: ' + request);
    response.end('Hey, thanks for calling!');
});

server.listen(8118);