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
    const usersFile = './users.json';
    let usersArr = JSON.parse(fs.readFileSync(usersFile, 'utf8'));
    switch (pathName) {
        case '/reg/': {
            const {name, surname, login, password, email, dob} = query;
            if (usersArr.find(el=> el.login === login)) {
                result = {status: 418, message: `User ${login} already exists.`};
            }  else {
                usersArr.push(query);
                fs.writeFile(usersFile, JSON.stringify(usersArr), er => {
                    console.log(`Account ${login} was created`);
                });
                result = {status: 200, message: 'Account was created successfully.'};
            }
        }
            break;

        case '/auth/': {
            const {login, password} = query;
            let user = usersArr.find(el=> el.login === login);
            if (!user){
                result = {status: 418, message: `User ${login} doesn't exist.`};
            } else {
                result = (password === user.password) ? user : {status: 418, message: 'Wrong password.'};
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