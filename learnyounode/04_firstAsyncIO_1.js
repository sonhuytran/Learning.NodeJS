/**
 * Created by Son-Huy on 26/04/2014.
 */


var fs = require('fs');

if (process.argv.length > 2) {
    fs.readFile(process.argv[2], function(error, data) {
        console.log(data.toString().split('\n').length - 1);
    });
}