// Lesson 13: HTTP JSON API SERVER
// This program creates an HTTP server with two JSON API endpoints.
//
// /api/parsetime returns hour, minute, and second.
// /api/unixtime returns Unix time in milliseconds.
//
// Sources:
// Node.js HTTP Documentation: https://nodejs.org/api/http.html
// Node.js URL Documentation: https://nodejs.org/api/url.html
// MDN JSON.stringify(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

const http = require('http');

const port = process.argv[2];

function parseTime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}

function unixTime(time) {
    return {
        unixtime: time.getTime()
    };
}

const server = http.createServer(function (req, res) {
    const parsedUrl = new URL(req.url, 'http://localhost');
    const time = new Date(parsedUrl.searchParams.get('iso'));

    let result;

    if (parsedUrl.pathname === '/api/parsetime') {
        result = parseTime(time);
    } else if (parsedUrl.pathname === '/api/unixtime') {
        result = unixTime(time);
    }

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(port);