/**
 * Created by Son-Huy on 27/04/2014.
 */

var http = require('http');

function sendRequest(url) {
    var responseOnData = function(data) {
        console.log(data);
    };

    var responseOnError = function(message) {
        console.error(message);
    };

    var httpGetCallback = function(response) {
        response.setEncoding('utf8');
        response.on('error', responseOnError);
        response.on('data', responseOnData);
    };

    http.get(url, httpGetCallback);
}

(function main(){
    sendRequest(process.argv[2]);
})();