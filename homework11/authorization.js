const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
    });
    const query = url.parse(req.url, true).query;
    const {login, password} = query;
    console.log('Someone has just logged in');
    console.log(query);
    let result = {};
    const filePath = `./DB/${login}.txt`;
    if (fs.existsSync(filePath)) {
        let userData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        result = (password === userData.password) ? userData : {status: 418, message: 'Wrong password.'};
    } else {
        console.log(`User ${login} doesn't exist.`);
        result = {status: 418, message: `User ${login} doesn't exist.`};
    }
    res.write(JSON.stringify(result));
    res.end();
}).listen(8081);

console.log('Server on http://localhost:8081');

// /?login=di&password=bondi