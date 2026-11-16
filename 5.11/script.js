////////////////////////////////////////1//////////////////////////

/*
const http = require('http');

http.createServer((req, res) => {
    res.end('Hello from Node Server!');
}).listen(3000);
*/


///////////////////////////////////////2//////////////////////////
/*
const http = require('http');

http.createServer((req, res) => {
    switch (req.method) {
        case 'GET':
            res.end("You used method: GET");
            break;
        case 'POST':
            res.end("You used method: POST");
            break;
        case 'PUT':
            res.end("You used method: PUT");
            break;
        case 'DELETE':
            res.end("You used method: DELETE");
            break;
        case 'PATCH':
            res.end("You used method: PATCH");
            break;
        default:
            res.end("Not supported");
    }
}).listen(3000);
*/

////////////////////////////////////////3//////////////////////////

/*

const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.headers));
}).listen(3000);

*/

////////////////////////////////////////4//////////////////////////

/*

const { URL } = require('url');

const urlStr = 'http://localhost:3000/users/list?role=admin&active=true#top';

const myUrl = new URL(urlStr);

console.log('Hostname:', myUrl.hostname);
console.log('Pathname:', myUrl.pathname);
console.log('Protocol:', myUrl.protocol);
console.log('Query:', myUrl.search);
console.log('Hash:', myUrl.hash);

*/

/////////////////////////////////////////5//////////////////////////

/*
const { URL } = require('url');

const myUrl = new URL('https://site.com/products?id=15&type=book&lang=en');

const id = myUrl.searchParams.get('id');
const type = myUrl.searchParams.get('type');
const lang = myUrl.searchParams.get('lang');

console.log('ID:', id);
console.log('Type:', type);
console.log('Language:', lang);

*/

////////////////////////////////////////6//////////////////////////

const { URL } = require('url');

const myUrl = new URL('https://app.com/search?query=node&sort=asc');

myUrl.searchParams.set('sort', 'desc');
myUrl.searchParams.append('page', '3');
myUrl.searchParams.delete('query');

console.log('Updated URL:', myUrl.toString());
