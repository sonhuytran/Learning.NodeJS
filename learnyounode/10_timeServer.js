/**
 * Created by Son-Huy TRAN on 27/04/2014.
 */

var net = require('net');
var strftime = require('strftime');
var port = process.argv[2];

var server = net.createServer(function(socket) {
    var timeString = strftime('%Y-%m-%d %H:%M');
    socket.end(timeString);
});
server.listen(port);