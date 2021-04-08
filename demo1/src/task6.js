import {validation6} from "./validation.js";

export function numberSequence(n, m) {
    const isValidate = validation6(n, m, arguments.length);
    if (isValidate === true) {
        let res = [];
        let num = Math.ceil(Math.sqrt(m));
        for (let i = 1; i <= n; i++, num++) {
            res.push(num);
        }
        return res.join();
    } else return isValidate;
}

//console.log(numberSequence(10,80))