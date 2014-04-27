/**
 * Created by Son-Huy on 27/04/2014.
 */

var http = require('http');
var bl = require('bl');

function sendRequest(url) {
    var blCallback = function(error, data) {
        if (error) {
            return console.error(error);
        }

        data = data.toString('utf8');
        console.log(data.length);
        console.log(data);
    };

    var httpGetCallback = function(response) {
        response.pipe(bl(blCallback));
    };

    http.get(url, httpGetCallback);
}

(function main() {
    sendRequest(process.argv[2]);
})();