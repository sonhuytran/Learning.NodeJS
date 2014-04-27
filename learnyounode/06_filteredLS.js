/**
 * Created by Son-Huy on 26/04/2014.
 */
var fs = require('fs');
var path = require('path');

/**
 * Reads the directory and filters the files by an extension
 * @param dir the directory to be read
 * @param ext the file extension used for filtering
 * @param callback
 */
module.exports = function(dir, ext, callback) {
    // Add the '.' character for easier filtering
    var extension = '.' + ext;

    // The callback passed to the fs.readdir function
    var readdirCallback = function(error, files) {
        if (error) {
            return callback(error);
        } else {
            // Array that contains the filtered files
            var filteredFiles = [];

            // Iterates the files, check its extension
            // and push to the result array
            files.forEach(function (file) {
                if (path.extname(file) === extension) {
                    filteredFiles.push(file);
                }
            });

            callback(null, filteredFiles);
        }
    };

    fs.readdir(dir, readdirCallback);
};