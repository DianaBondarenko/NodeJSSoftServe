// ~~~~~ task 1 ~~~~~ //
exports.validation1 = function (height, width, symbol, argLen) {
    if (argLen > 3 || argLen < 3) return  {
        status: 'failed',
        reason: 'Incorrect number of arguments. There must be 3 arguments.'
    }
    if (!Number.isInteger(height) || !Number.isInteger(width) || typeof symbol != 'string' || symbol.length < 1) return {
        status: 'failed',
        reason: 'Incorrect type of arguments. There must be 2 integer numbers and a symbol.'
    }
    if (height < 2 || width < 2 || height > 256 || width > 256) return {
        status: 'failed',
        reason: 'Incorrect value of arguments. Height and width must be numbers from 2 to 256.'
    }
    return true;
}

// ~~~~~ task 2 ~~~~~ //
exports.validation2 = function (env1, env2, argLen) {
    if (argLen > 2 || argLen < 2) return {
        status: 'failed',
        reason: 'Incorrect number of arguments. There must be 2 arguments.'
    }
    if (!(env1 instanceof Object) || !(env2 instanceof Object)) return {
        status: 'failed',
        reason: 'Incorrect type of arguments. There must be objects.'
    }
    if ((typeof env1.a !== 'number' || typeof env1.b !== 'number' || typeof env2.c !== 'number'
        || typeof env2.d !== 'number')
        || (isNaN(Number(env1.a))) ||(isNaN(Number(env1.b))) ||(isNaN(Number(env2.c))) ||(isNaN(Number(env2.d)))) return {
        status: 'failed',
        reason: 'Incorrect arguments\' data. Each side of envelopes must be a number.'
    }
    if (env1.a < 1 || env1.b < 1 || env2.c < 1 || env2.d < 1 ||
        env1.a > 1000000 || env1.b > 1000000 || env2.c > 1000000 || env2.d > 1000000) return {
        status: 'failed',
        reason: 'Incorrect value of arguments\' data. Each side of envelopes must be from 1 to 1000000.'
    }
    return true;
}
//
// // ~~~~~ task 3 ~~~~~ //
// export function validation3(array, argLen) {
//     if (argLen < 1 || argLen > 1 || array.length < 2 || !Array.isArray(array)) return {
//         status: 'failed',
//         reason: 'Incorrect number or type of arguments. There must be 1 array of at least 2 objects.'
//     }
//     if (array.some(el => !(el instanceof Object))) return {
//         status: 'failed',
//         reason: 'Incorrect type of arguments\' data. There must be array of objects.'
//     }
//     if (array.some(el => el.vertices.length > 3 || el.vertices.length < 3)) return {
//         status: 'failed',
//         reason: 'Incorrect value of arguments\' data. Triangle must have 3 vertices.'
//     }
//     if (array.some(el => !isTriangle(el))) return {
//         status: 'failed',
//         reason: 'Incorrect data. Such a triangle doesn\'t exist.'
//     }
//     function isTriangle(obj) {
//         let vertices = obj.vertices.toLowerCase().split('');
//         let sides = vertices.reduce((res, el) => [...res, obj[el]], []);
//         let [s1, s2, s3] = sides;
//         return s1 + s2 < s3 || s1 + s3 < s2 || s2 + s3 < s1 ? false : true;
//     }
//     return true;
// }
//
// ~~~~~ task 4 ~~~~~ //
exports.validation4 = function (number, argLen) {
    if (argLen > 1 || argLen < 1) return {
        status: 'failed',
        reason: 'Incorrect number of arguments. There must be 1 argument.'
    }
    if (Number.isInteger(number)) {
        if (Math.abs(number) < 10 || Math.abs(number) > 10 ** 20) return {
            status: 'failed',
            reason: 'Incorrect value of the argument. Number\'s length can be from 2 to 16.'
        }
    } else if (typeof number === 'string' && !isNaN(Number(number))){
        if (number.length < 2 || number.length > 20) return {
            status: 'failed',
            reason: 'Incorrect value of the argument. Number\'s length in string format must be from 2 to 20.'
        }
    } else return {
        status: 'failed',
        reason: 'Incorrect type of the argument. There must be an integer number or an integer number in string format.'
    }
    return true;
}

// ~~~~~ task 5 ~~~~~ //
exports.validation5 = function(context, argLen) {
    if (argLen > 1 || argLen < 1) return {
        status: 'failed',
        reason: 'Incorrect number of arguments. There must be 1 argument.'
    }
    if (!(context instanceof Object) || Array.isArray(context)) return {
        status: 'failed',
        reason: 'Incorrect type of argument. There must be an object.'
    }
    if (typeof context.min !== 'number' || typeof context.max !== 'number') return {
        status: 'failed',
        reason: 'Incorrect arguments\' data. Minimal and maximum must be numbers.'
    }
    if (context.min < 0 || context.max < 0 || context.min > 999999 || context.max > 999999)  return {
        status: 'failed',
        reason: 'Incorrect value of arguments\' data. Minimal and maximum must be from 0 to 999999.'
    }
    return true;
}

// ~~~~~ task 6 ~~~~~ //
exports.validation6 = function(n, m, argLen) {
    if (argLen > 2 || argLen < 2) return {
        status: 'failed',
        reason: 'Incorrect number of arguments. There must be 2 arguments.'
    }
    if (!Number.isInteger(n) || typeof m !== 'number') return {
        status: 'failed',
        reason: 'Incorrect type of arguments. There must be an integer number and a number.'
    }
    if (n < 1 || n > 1000000 || m < 1 || m > 1000000) return {
        status: 'failed',
        reason: 'Incorrect value of arguments. Length and minimal square must be from 1 to 1000000.'
    }
    return true;
}

// ~~~~~ task 7 ~~~~~ //
exports.validation7 = function(context,arLen) {
    if (arLen > 1 || arLen < 1) return {
        status: 'failed',
        reason: 'Incorrect number of arguments. There must be 1 argument.'
    }
    if (!(context instanceof Object) || Array.isArray(context)) return {
        status: 'failed',
        reason: 'Incorrect type of argument. There must be an object.'
    }
    if (!((Number.isInteger(context.min) && Number.isInteger(context.max)) || Number.isInteger(context.length))) return {
        status: 'failed',
        reason: 'Incorrect argument\'s values. Minimal and maximum or length must be numbers.'
    }
    if (!((context.min >= 1 && context.max >= 1  && context.min <= 1000000 && context.max <= 1000000)
        || (context.length >= 1 && context.length <= 1000000)))  return {
        status: 'failed',
        reason: 'Incorrect value of arguments\' data. Minimal and maximum or length must be from 1 to 1000000.'
    }
    return true;
}
