// Lesson 6 module file: mymodule.js
// This module reads a directory and filters files by extension.
// It does NOT print anything. It sends results back using a callback.
//
// Sources:
// Node.js FS Documentation: https://nodejs.org/api/fs.html
// Node.js Path Documentation: https://nodejs.org/api/path.html

const fs = require('fs');
const path = require('path');

module.exports = function (directory, extension, callback) {
    fs.readdir(directory, function (err, files) {
        if (err) {
            return callback(err);
        }

        const filteredFiles = files.filter(function (file) {
            return path.extname(file) === "." + extension;
        });

        callback(null, filteredFiles);
    });
};