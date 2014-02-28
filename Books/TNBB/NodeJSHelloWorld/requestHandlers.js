/**
 * requestHandlers.js
 */

/**
 * Handles "start" request
 */
function start() {
	console.log("Request handler 'start' was called.");
}

/**
 * Handlers "upload" request
 */
function upload() {
	console.log("Request handler 'upload' was called.");
}

// Exports series
exports.start = start;
exports.upload = upload;