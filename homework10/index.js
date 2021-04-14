const http = require('http');//HTTP-module
const url = require('url');//url parser module
const { chessBoard } = require('./src/task1');
const { envelopes } = require('./src/task2');
const { findPalindrome } = require('./src/task4');
const { luckyTickets } = require('./src/task5');
const { numberSequence } = require('./src/task6');
const { fibonacci } = require('./src/task7');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/html' });
    res.write('<h2>Result:</h2>');
    const query = url.parse(req.url, true).query;
    const {task} = query;
    switch (task) {
        case '1':
            const { height, width, symbol } = query;
            const result1 = chessBoard(Number(height), Number(width), symbol);
            res.write(`<pre>${correctOutput(result1)}</pre>`);
            break;
        case '2':
            const { a, b, c, d } = query;
            const result2 = envelopes({a: Number(a), b: Number(b)}, {c: Number(c), d: Number(d)});
            res.write(`Envelope ${correctOutput(result2)}`);
            break;
        case '4':
            const { number } = query;
            const result4 = findPalindrome(number);
            res.write(`${correctOutput(result4)}`);
            break;
        case '5':
            const { minimal, maximal } = query;
            const result5 = luckyTickets({ min: Number(minimal), max: Number(maximal)});
            res.write(`${correctOutput(result5)}`);
            break;
        case '6':
            const { n, m } = query;
            const result6 = numberSequence(Number(n), Number(m));
            res.write(`${correctOutput(result6)}`);
            break;
        case '7':
            const { min, max, length } = query;
            const result7 = fibonacci({min: Number(min), max: Number(max), length: Number(length)});
            res.write(`${correctOutput(result7)}`);
            break;
        default:
            res.write('Something went wrong');
    }
    res.end();
    function correctOutput(res) {
        if (res instanceof Object) return JSON.stringify(res);
        if (Array.isArray(res)) return res.map(el => JSON.stringify(el)); // array of objects
        return res;
    }
    console.log('Someone has just logged in');
    console.log(query);
}).listen(8080);
console.log('Server on http://localhost:8080');

// /?task=1&height=5&width=10&symbol=%
// /?task=2&a=4&b=10&c=11&d=43
// /?task=4&number=45669889624
// /?task=5&min=100001&max=102222
// /?task=6&n=17&m=102
// /?task=7&min=17&max=102&length=15
