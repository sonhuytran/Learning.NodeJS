/**
 * Created by Huy on 01/08/2014.
 */
// Import libraries
var http = require('http');
var port = 8118;

var request_handler = function(request, response) {
    var content = 'Hey, thanks for calling!'
    var content_length = content.length;
    var header = {
        'Content-Type': 'text/plain',
        'Content-Length': content_length
    };

    response.writeHead(200, header);
    response.end(content);
};

var server = http.createServer(request_handler);
server.listen(port);