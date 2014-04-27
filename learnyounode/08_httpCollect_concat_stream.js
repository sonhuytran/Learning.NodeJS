/**
 * Created by Son-Huy on 27/04/2014.
 */

var http = require('http');
var concat_stream = require('concat-stream');

function sendRequest(url) {
    var concatStreamCallback = function(data) {
        var responseData = data;
        console.log(responseData.length);
        console.log(responseData);
    };

    var responseOnError = function(error) {
        return console.error(error);
    };

    var httpGetCallback = function(response) {
        response.setEncoding('utf8');
        response.pipe(concat_stream(concatStreamCallback));
        response.on('error', responseOnError);
    };

    http.get(url, httpGetCallback);
}

(function main() {
    sendRequest(process.argv[2]);
})();