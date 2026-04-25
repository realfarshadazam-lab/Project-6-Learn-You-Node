// Seventh 7: HTTP CLIENT
// This program performs an HTTP GET request
// to a URL provided as a command-line argument.
//
// It prints each chunk of data received
// on a new line to the console.
//
// Source:
// Node.js HTTP Documentation
// https://nodejs.org/api/http.html

const http = require('http');

// Get URL from command-line arguments
const url = process.argv[2];

// Perform HTTP GET request
http.get(url, function (response) {
    // Convert Buffer data into readable text
    response.setEncoding('utf8');

    // Print each data chunk
    response.on('data', function (data) {
        console.log(data);
    });

    // Handle errors
    response.on('error', function (err) {
        console.error(err);
    });
});