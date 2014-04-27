/**
 * Created by Son-Huy on 27/04/2014.
 */

var http = require('http');

function sendRequest(url) {

    var responseData = '';

    var responseOnError = function(error) {
        console.error(error);
    };

    var responseOnData = function(data) {
        responseData += data;
    };

    var responseOnEnd = function() {
        console.log(responseData.length);
        console.log(responseData);
    };

    var httpGetCallback = function(response) {
        response.setEncoding('utf8');
        response.on('error', responseOnError);
        response.on('data', responseOnData);
        response.on('end', responseOnEnd);
    };

    http.get(url, httpGetCallback);
}

(function main() {
    sendRequest(process.argv[2]);
})();