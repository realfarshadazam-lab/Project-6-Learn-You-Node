// Ninth 9: JUGGLING ASYNC
// This program performs HTTP GET requests
// for 3 URLs and prints the full response
// in the SAME ORDER as the URLs given.
//
// Even if one finishes earlier,
// we must preserve the original order.
//
// Source:
// Node.js HTTP Documentation
// https://nodejs.org/api/http.html

const http = require('http');

const results = [];
let completed = 0;

// Function to collect data from each URL
function getData(index) {
    http.get(process.argv[index + 2], function (response) {
        let fullData = "";

        response.setEncoding('utf8');

        response.on('data', function (chunk) {
            fullData += chunk;
        });

        response.on('end', function () {
            results[index] = fullData;
            completed++;

            // When all 3 are finished, print in order
            if (completed === 3) {
                for (let i = 0; i < 3; i++) {
                    console.log(results[i]);
                }
            }
        });
    });
}

// Start all 3 requests
for (let i = 0; i < 3; i++) {
    getData(i);
}