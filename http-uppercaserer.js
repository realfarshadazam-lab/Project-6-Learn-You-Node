// Twelve 12: HTTP UPPERCASERER
// This program creates an HTTP server
// that accepts POST requests only.
//
// It converts incoming POST body text to UPPERCASE
// and sends it back to the client.
//
// Source:
// Node.js HTTP Documentation
// https://nodejs.org/api/http.html
//
// through2-map Documentation
// https://www.npmjs.com/package/through2-map

const http = require('http');
const map = require('through2-map');

// Get port number from command-line arguments
const port = process.argv[2];

// Create HTTP server
const server = http.createServer(function (req, res) {
    // Only handle POST requests
    if (req.method !== 'POST') {
        return res.end();
    }

    // Convert incoming text to uppercase
    req
        .pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
        }))
        .pipe(res);
});

// Start listening on the given port
server.listen(port);