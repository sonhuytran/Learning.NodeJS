/**
 * Created by Son-Huy TRAN on 27/04/2014.
 */

var http = require('http');
var bl = require('bl');

function HTMLResponse(url, onFinish) {
    var htmlResponse = this;

    http.get(url, function(response) {
        response.pipe(bl(function(error, data) {
            if (error) {
                return console.error(error);
            } else {
                htmlResponse.data = data.toString('utf8');
                onFinish();
            }
        }));
    });
}

(function main() {
    var args = process.argv.slice(2);
    var responses = [];
    var responseCount = 0;

    var htmlRequestOnFinish = function() {
        responseCount++;

        if (responseCount < args.length) {
            return;
        }

        for (var i = 0; i < args.length; i++) {
            console.log(responses[i].data);
        }
    };

    for (var i = 0; i < args.length; i++) {
        responses[i] = new HTMLResponse(args[i], htmlRequestOnFinish);
    }
})();