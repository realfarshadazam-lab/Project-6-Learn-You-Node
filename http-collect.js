// Eight 8: HTTP COLLECT
// This program performs an HTTP GET request
// and collects ALL data from the response.
//
// Then it prints:
// 1. Total number of characters
// 2. Full complete response text
//
// Source:
// Node.js HTTP Documentation
// https://nodejs.org/api/http.html

const http = require('http');

// Get URL from command-line arguments
const url = process.argv[2];

// Perform HTTP GET request
http.get(url, function (response) {
    let fullData = "";

    // Convert Buffer data to string
    response.setEncoding('utf8');

    // Collect all chunks of data
    response.on('data', function (chunk) {
        fullData += chunk;
    });

    // When finished, print results
    response.on('end', function () {
        console.log(fullData.length);
        console.log(fullData);
    });

    // Handle errors
    response.on('error', function (err) {
        console.error(err);
    });
});