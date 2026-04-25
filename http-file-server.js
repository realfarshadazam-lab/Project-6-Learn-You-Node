// Eleven 11: HTTP FILE SERVER
// This program creates an HTTP server
// that serves the same text file for every request.
//
// It uses fs.createReadStream() to stream
// the file contents directly to the response.
//
// Source:
// Node.js HTTP Documentation
// https://nodejs.org/api/http.html
//
// Node.js FS Documentation
// https://nodejs.org/api/fs.html

const http = require('http');
const fs = require('fs');

// Get port number and file path from command-line arguments
const port = process.argv[2];
const file = process.argv[3];

// Create HTTP server
const server = http.createServer(function (request, response) {
    // Stream file contents to response
    fs.createReadStream(file).pipe(response);
});

// Start server
server.listen(port);