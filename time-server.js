// Tenth 10: TIME SERVER
// This program creates a TCP server.
// When someone connects, it sends the current date/time
// in the format YYYY-MM-DD hh:mm, then closes the connection.
//
// Source:
// Node.js Net Documentation
// https://nodejs.org/api/net.html

const net = require('net');

// Get port number from command-line argument
const port = process.argv[2];

// Adds a zero before numbers less than 10
function zeroFill(number) {
    return number < 10 ? '0' + number : number;
}

// Formats date as YYYY-MM-DD hh:mm
function getCurrentTime() {
    const date = new Date();

    return date.getFullYear() + '-' +
        zeroFill(date.getMonth() + 1) + '-' +
        zeroFill(date.getDate()) + ' ' +
        zeroFill(date.getHours()) + ':' +
        zeroFill(date.getMinutes());
}

// Create TCP server
const server = net.createServer(function (socket) {
    socket.end(getCurrentTime() + '\n');
});

// Start listening on provided port
server.listen(port);