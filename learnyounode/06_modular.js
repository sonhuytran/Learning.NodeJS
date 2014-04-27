/**
 * Created by Son-Huy on 26/04/2014.
 */

var ls = require('./06_filteredLS');

var dir = process.argv[2];
var ext = process.argv[3];

var callback = function(error, files) {
    if (error) {
        throw error;
    }

    files.forEach(function (file) {
        console.log(file);
    });
};

ls(dir, ext, callback);