/**
 * Created by Son-Huy on 26/04/2014.
 */
//LEARN YOU THE NODE.JS FOR MUCH WIN!
//─────────────────────────────────────
//MY FIRST ASYNC I/O!
//    Exercise 4 of 13
//
//Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.
//
//    The full path to the file to read will be provided as the first command-line argument.
//
//-------------------------------------------------------------------------------
//
//# HINTS
//
//The solution to this problem is almost the same as the previous problem except you must now do it the Node.js way: asynchronous.
//
//    Instead of fs.readFileSync() you will want to use fs.readFile() and instead of using the return value of this method you need to collect the value from a callback function that you pass in as the second argument.
//
//    Remember that idiomatic Node.js callbacks normally have the signature:
//
//    function callback (err, data) { /* ... */ }
//
//so you can check if an error occurred by checking whether the first argument is truthy. If there is no error, you should have your Buffer object as the second
//argument. As with readFileSync(), you can supply 'utf8' as the second argument and put the callback as the third argument and you will get a String instead of
//a Buffer.
//
//    Documentation on the fs module can be found by pointing your browser here:
//    file://C:\Users\Son-Huy\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\fs.html

var fs = require('fs');

/**
 * Program's main class
 * @constructor
 */
var FirstAsyncIO = function() {
};

/**
 * Reads file asynchronously and
 * outputs number of new line characters
 * in its content.
 * @param filePath path to the file to read
 */
FirstAsyncIO.prototype.readFileAsync = function(filePath) {
    /**
     * Callback function when finish reading file
     * @param error
     * @param data
     */
    var readFileOnFinished = function(error, data) {
        if (error) {
            throw error;
        }

        // Calculates numbers of new line character
        var result = data.toString().split('\n').length - 1;
        console.log(result);
    };

    // Read file asynchronously
    fs.readFile(filePath, readFileOnFinished);
};

/**
 * main function
 */
FirstAsyncIO.main = function() {
    if (process.argv.length > 2) {
        var program = new FirstAsyncIO();
        program.readFileAsync(process.argv[2]);
    }
};

/**
 * Calls the main function
 */
if (require.main === module) {
    FirstAsyncIO.main();
}