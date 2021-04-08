import {validation5} from "./validation.js";

export function luckyTickets(context) {
    const isValidate = validation5(context, arguments.length);
    if (isValidate === true) {
        const res = {
            luckyCountEasy: 0,
            luckyCountHard: 0,
            winner: null
        }
        let countSum = arr => arr.reduce((sum, el) => sum += el, 0);
        function splitNum(num) {
            let res = num.toString().split('').map(el => Number(el));
            let n = 6 - res.length;
            return n > 0 ? new Array(n).fill(0, 0, n).concat(res) : res;
        }

        for (let num = context.min; num <= context.max; num++) {
            let digits = splitNum(num);
            if (isLuckyEasy(digits)) res.luckyCountEasy++;
            if (isLuckyHard(digits)) res.luckyCountHard++;
        }

        function isLuckyEasy(digits) {
            let [n1, n2, n3, n4, n5, n6] = digits;
            return n1 + n2 + n3 === n4 + n5 + n6 ? true : false;
        }
        function isLuckyHard(digits) {
            let odd = digits.filter(el => el % 2 !== 0);
            let even = digits.filter(el => el % 2 === 0);
            return countSum(odd) === countSum(even) ? true : false;
        }

        if (res.luckyCountEasy === res.luckyCountHard) res.winner = 'Draw';
        else res.winner = res.luckyCountEasy > res.luckyCountHard ? 'Easy method' : 'Hard method';
        return res;
    } else return isValidate;
}

//
// let ob = {
//     min: 111111,
//     max: 112211
// }
// console.log(luckyTickets(ob))
