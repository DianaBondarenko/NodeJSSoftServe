import {validation7} from "./validation.js";

export function fibonacci(context) {
    const isValidate = validation7(context, arguments.length);
    if (isValidate === true) {
        let {min, max, length} = context;
        let fib = [1, 1];
        for (let i = 2; ; i++) {
            let number = fib[i - 1] + fib[i - 2];
            if ((max && number <= max) || (length && i < length)) fib.push(number);
            else break;
        }
        return min && max ? fib.slice(fib.findIndex(el => el >= min)) : fib;
    } else return isValidate;
}

// let ob = {
//     length: 20,
//     min: 6,
//     max: 2000
// }
// console.log(fibonacci(ob))