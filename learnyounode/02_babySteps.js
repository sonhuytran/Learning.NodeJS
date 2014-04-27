/**
 * Created by Son-Huy on 26/04/2014.
 * Exercise 2 of 13 : c
 *
 * ## HINTS
 * You can access command-line arguments via the global process object.
 * The process object has an argv property which is an array containing the complete command-line. i.e. process.argv.
 *
 * To get started, write a program that simply contains:
 *      console.log(process.argv)
 * Run it with node myprogram.js and some numbers as arguments. e.g:
 * $ node myprogram.js 1 2 3
 * In which case the output would be an array looking something like:
 * [ 'node', '/path/to/your/program.js', '1', '2', '3' ]
 *
 * You'll need to think about how to loop through the number arguments so you can output just their sum.
 * The first element of the process.argv array is always 'node',
 * and the second element is always the path to your program.js file,
 * so you need to start at the 3rd element (index 2),
 * adding each item to the total until you reach the end of the array.
 *
 * Also be aware that all elements of process.argv are strings
 * and you may need to coerce them into numbers.
 * You can do this by prefixing the property with + or passing it to Number().
 * e.g. +process.argv[2] or Number(process.argv[2]).
 */

var assert = require('assert');

/**
 * Calculates the sum of numbers in 'array' from 'from' to 'to'
 * @param array the array containing the numbers to be summed (by default empty)
 * @param from index of the first element in array to be summed (by default 0)
 * @param to index of the last element in array to be summed (by default array.length - 1)
 */
function sum(array, from, to) {
    assert.notEqual(array, undefined, 'Undefined array');
    assert.notEqual(array, null, 'Null array');
    assert.ok(from >= 0, '\'from\' must be greater than or equal 0');
    assert.ok(to >= from, '\'to\' must be greater than or equal \'from\'');
    assert.ok(to < array.length, '\'to\' must be less than the length of \'array\'');

    var result = 0;

    for (var index = from; index <= to; index++) {
        result += Number(array[index]);
    }

    return result;
}

/**
 *
 */
(function main() {
    console.log(sum(process.argv, 2, process.argv.length - 1));
})();