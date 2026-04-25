// Third 3: MY FIRST I/O!
// This program reads a file synchronously
// and prints the number of newline characters (\n).
//
// process.argv[2] contains the file path.
//
// We use fs.readFileSync() because this lesson
// specifically requires a synchronous filesystem operation.
//
// Source:
// Node.js FS Documentation
// https://nodejs.org/api/fs.html

const fs = require('fs');

// Read the file path from command-line arguments
const file = process.argv[2];

// Read file contents synchronously
const contents = fs.readFileSync(file).toString();

// Split by newline character and subtract 1
const lines = contents.split('\n').length - 1;

// Print the number of newlines
console.log(lines);