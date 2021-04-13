const http = require('http');//HTTP-module
const url = require('url');//url parser module
const { chessBoard } = require('./src/task1');
const { envelopes } = require('./src/task2');

//Создать сервер
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/html' });
    const query = url.parse(req.url, true).query;
    const {task} = query;
    res.write('<h2>Result:</h2>');  //task2
    switch (task) {
        case '1':
            const { height, width, symbol } = query;
            res.write(`<pre>${chessBoard(height, width, symbol)}</pre>`);
            //console.log(`${chessBoard(height, width, symbol)}`);
            break;
        case '2':
            const { a, b, c, d } = query;
            res.write(`Envelope ${envelopes({a: a, b: b}, {c: c, d: d})}`);
            //console.log(`${envelopes({a: a, b: b}, {c: c, d: d})}`);
            break;
    }
    res.end();
    console.log('Someone has just logged in');
    console.log(query);
}).listen(8080);
console.log('Server on http://localhost:8080');

// /?task=1&height=5&width=10&symbol=%
// /?task=2&a=4&b=10&c=11&d=43