const {validation6} = require('./validation.js');

exports.numberSequence = function(n, m) {
    const validation = validation6(n, m, arguments.length);
    if (validation === true) {
        let res = [];
        let num = Math.ceil(Math.sqrt(m));
        for (let i = 1; i <= n; i++, num++) {
            res.push(num);
        }
        return res.join();
    } else return validation;
}

//console.log(numberSequence(10,80))