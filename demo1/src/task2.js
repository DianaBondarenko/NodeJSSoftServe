import {validation2} from './validation.js';

export function envelopes(env1, env2) {
    let isValidate = validation2(env1, env2, arguments.length);
    if (isValidate === true) {
        if (env1.a > env2.c && env1.b > env2.d || env1.a > env2.d && env1.b > env2.c) return 2;
        if (env2.c > env1.a && env2.d > env1.b || env2.c > env1.b && env2.d > env1.a) return 1;
        if (hardCheck(env1,env2)) return 2;
        if (hardCheck(env2,env1)) return 1;
        return 0;
    } else return isValidate;
}

function hardCheck(env1, env2) {
    let {a,b} = env1;
    let {c,d} = env2;
    let diag1 = Math.sqrt(a**2 + b**2);
    if (diag1 < c || diag1 < d) return false;
    nerdamer.set('SOLUTIONS_AS_OBJECT', true);
    try {
        let solution = nerdamer.solveEquations([
            `${a**2} = (${a}-x)^2 + (${b}-y)^2`,
            `y * (${b}-y) = x * (${a}-x)`
        ]);
        let maxWidth = Math.sqrt(solution.x**2 + solution.y**2);
        let extraHeight = diag1 - a;
        let tg = Math.tan(Math.atan(maxWidth/extraHeight));
        let maxHeight = (diag1 - c) * tg;
        console.log(solution)
        return d < maxHeight;
    }
    catch (error) {
        return false;
    }
}

//
// const e1 = {
//     a: 656,
//     b: 273
// }
// const e2 = {
//     c: 698,
//     d: 9
// }
// console.log(envelopes(e1, e2))