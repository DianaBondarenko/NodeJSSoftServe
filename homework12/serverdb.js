const http = require('http');
const url = require('url');
const fs = require('fs');
const pg = require('pg');
const {Pool} = require('pg')

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

    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'Users',
        password: 'admin',
        port: 5432
    })

    let promise = new Promise((resolve, reject) => {
        switch (pathName) {
            case '/reg/': {
                const {name, surname, login, password, email, dob, regtime} = query;

                if(login) {
                    pool.query(`SELECT * FROM users WHERE login='${login}' OR email ='${email}';`)
                        .then(res => {
                            let user = res.rows[0];
                            if (user) {
                                result = {status: 418, message: 'User already exists.'};
                                resolve();
                            } else {
                                console.log('creating new user');
                                pool.query(`INSERT INTO users (name, surname, login, password, email, dob, regtime) 
                                VALUES('${name}', '${surname}', '${login}', '${password}','${email}','${dob}','${regtime}');`)
                                    .then(res => {
                                        result = {status: 200, message: 'Account was created successfully.'};
                                        resolve();
                                    })
                                    .catch(er => {
                                        console.log('Error: ', er.message);
                                        result = {status: 418, message: er.message};
                                        resolve();
                                    })
                            }
                        })
                        // .then(() => {
                        //     pool.end();
                        // })
                }
                break;
            }

            case '/auth/': {
                const {login, password} = query;
                if (login) {
                    pool.query(`SELECT * FROM users WHERE login='${login}';`)
                        .then(res => {
                            let user = res.rows[0];
                            if (user) {
                                console.log('User data:', user);
                                result = user.password === password ? {status: 200, message: user} : {status: 418, message: 'Wrong password.'};
                                //result = user;
                            } else {
                                result = {status: 418, message: `User ${login} doesn't exist.`};
                            }
                            resolve(result);
                        })
                        .then(() => {
                            pool.end();
                        })
                        .catch(er => {
                            console.log(er);
                            result = {status: 418, message: er.message};
                            reject(result);
                        })
                }
                break;
            }
            default:
                result = {status: 404, message: 'Not found.'};
                resolve(result);
                break;
        }
    })
    
    promise.then(() => {
        console.log('Result:', JSON.stringify(result));
        res.write(JSON.stringify(result));
        res.end();
    })
    promise.catch(() => {
        console.log('Error');
    })
    
}).listen(8080);

console.log('Server on http://localhost:8080');

// /reg/?name=Diana&surname=Bondarenko&login=diana1111&password=password11&email=email11@gmail.com&dob=2001/07/08&regtime=2021/04/19 22:55
// /auth/?login=dianab&password=passw4dz
