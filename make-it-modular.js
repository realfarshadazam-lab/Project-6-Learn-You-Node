// Sixth 6: MAKE IT MODULAR
// This main program uses our custom module.
// The module handles filtering, and this file prints the results.
//
// Source:
// Node.js Modules Documentation: https://nodejs.org/api/modules.html

const mymodule = require('./mymodule');

const directory = process.argv[2];
const extension = process.argv[3];

mymodule(directory, extension, function (err, files) {
    if (err) {
        return console.error('There was an error:', err);
    }

    files.forEach(function (file) {
        console.log(file);
    });
});