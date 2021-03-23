// ~~~~~ task 1 ~~~~~ //
// pop()
function pop(arr) {
    if (arr.length == 0) return undefined;
    const last = arr[arr.length - 1];
    arr.length--;
    return last;
}

const arr = [15, 78, 65, 87, 75]
console.log(pop(arr));


// ~~~~~ task 12 ~~~~~ //
// push()
function push(arr, ...args) {
    let i = arr.length;
    for (let arg of args) {
        arr[i] = arg;
        i++;
    }
    return arr.length;
}

console.log(push(arr, 5, 45));
console.log(arr);


// ~~~~~ task 3 ~~~~~ //
// shift()
function shift(arr) {
    if (arr.length == 0) return undefined;
    const first = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length--;
    return first;
}

console.log(shift(arr));
console.log(arr);


// ~~~~~ task 4 ~~~~~ //
// unshift()
function unshift(arr, ...args) {
    let argsLength = args.length;
    for (let i = arr.length + argsLength - 1; i >= 0; i--) {
        if (i < argsLength) {
            arr[i] = args[i];
        } else {
            arr[i] = arr[i - argsLength];
        }
    }
    return arr.length;
}

console.log(unshift(arr, 109, 236));
console.log(arr);


// ~~~~~ task 5 ~~~~~ //
// concat()
function concat(arr, ...arguments) {
    return [...arr, ...arguments];
}
console.log(concat(arr, 340, 505));


// ~~~~~ task 5 ~~~~~ //
// map() -> reduce()
const fruits = ['Яблоко', 'Банан', 'Ананас'];

fruits.reduce((res, elem)=> {
    res.push(elem[0]);
    return res;
}, [])


// ~~~~~ task 5 ~~~~~ //
// filter() -> reduce()
fruits.reduce((res, elem)=>{
    if (elem[0].toLowerCase()=='а') {
        res.push(elem);

    }
    return res;
}, [])


// ~~~~~ task 6 ~~~~~ //
// forEach() -> reduce()
fruits.reduce((res, elem, index)=>{
    res.push(`${index+1}: ${elem};`)
    return res;
},[])