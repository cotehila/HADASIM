////////////////////////////////1//////////////////////////////

/*
const http = require('http');

http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url} ${req.httpVersion}`);
    res.end('Hello, TEHILA!');
}).listen(3000);
*/

///////////////////////////////2//////////////////////////////

/*
const http = require('http');

http.createServer((req, res) => {
    console.log(req.method, req.headers);
    if (req.method === 'POST' && req.headers['content-type'] === 'application/json') {
        res.end("JSON accepted");
    }else{
        res.end("Unsupported request");
    }
    
}).listen(3000);

*/

////////////////////////////////3//////////////////////////////

const http = require('http');

http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/hello') {
        res.end("Hello from GET");
    }else if (req.method === 'POST' && req.url === '/hello') {
        res.end("Hello from POST");
    }else {
        res.end("Not supported");
    }
    
}).listen(3000);
