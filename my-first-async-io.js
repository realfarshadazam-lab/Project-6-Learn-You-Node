// Fourth 4: MY FIRST ASYNC I/O!
// This program reads a file asynchronously
// and prints the number of newline characters (\n).
//
// process.argv[2] contains the file path.
//
// We use fs.readFile() because this lesson
// requires an asynchronous filesystem operation.
//
// Source:
// Node.js FS Documentation
// https://nodejs.org/api/fs.html

const fs = require('fs');

// Get file path from command-line arguments
const file = process.argv[2];

// Read the file asynchronously
fs.readFile(file, 'utf8', function (err, data) {
    // If there is an error, stop the program
    if (err) {
        return console.error(err);
    }

    // Count newline characters
    const lines = data.split('\n').length - 1;

    // Print result
    console.log(lines);
});