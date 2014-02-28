/**
 * requestHandlers.js
 */

/**
 * Handles "start" request
 */
var exec = require("child_process").exec;

function start() {
	console.log("Request handler 'start' was called.");	
	var content = "empty";
	
	exec("ls -lah", function(error, stdout, stderr) {
		content = stdout;
	});
	
	return content;
}

/**
 * Handlers "upload" request
 */
function upload() {
	console.log("Request handler 'upload' was called.");
	return "Hello Upload !!!";
}

// Exports series
exports.start = start;
exports.upload = upload;