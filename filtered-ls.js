// Fifth 5: FILTERED LS
// This program reads a directory asynchronously
// and prints only the files that match
// the given file extension.
//
// process.argv[2] = directory path
// process.argv[3] = file extension (without dot)
//
// We use fs.readdir() for asynchronous reading
// and path.extname() to check file extensions.
//
// Source:
// Node.js FS Documentation
// https://nodejs.org/api/fs.html
//
// Node.js Path Documentation
// https://nodejs.org/api/path.html

const fs = require('fs');
const path = require('path');

// Get directory and extension from command-line arguments
const directory = process.argv[2];
const extension = "." + process.argv[3];

// Read directory asynchronously
fs.readdir(directory, function (err, files) {
    if (err) {
        return console.error(err);
    }

    // Loop through files and print matching ones
    files.forEach(function (file) {
        if (path.extname(file) === extension) {
            console.log(file);
        }
    });
});