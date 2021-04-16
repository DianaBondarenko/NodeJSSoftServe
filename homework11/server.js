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
    const pathName = url.parse(req.url, true).pathname; // registration or authorization?
    console.log('Someone has just logged in');
    console.log('query ', query);
    let result = {};
    switch (pathName) {
        case '/reg/': {
            const {name, surname, login, password, email, dob} = query;
                const filePath = `./DB/${login}.txt`;
                if (fs.existsSync(filePath)) {
                    result = {status: 418, message: `User ${login} already exists.`};
                } else {
                    fs.appendFile(filePath, JSON.stringify(query), er => {
                        console.log(`File ${filePath} was created`);
                    });
                    result = {status: 200, message: 'Account was created successfully.'};
                }
        }
            break;

        case '/auth/': {
            const {login, password} = query;
            const filePath = `./DB/${login}.txt`;
            if (fs.existsSync(filePath)) {
                let userData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                result = (password === userData.password) ? userData : {status: 418, message: 'Wrong password.'};
            } else {
                console.log(`User ${login} doesn't exist.`);
                result = {status: 418, message: `User ${login} doesn't exist.`};
            }
        }
        break;
    }
    console.log(JSON.stringify(result));
    res.write(JSON.stringify(result));
    res.end();
}).listen(8080);

console.log('Server on http://localhost:8080');

// /reg/?name=Diana&surname=Bondarenko&login=di&password=passw4hw&email=dibon@gmail.com&dob=2001/07/08
// /auth/?login=di&password=passw4hw