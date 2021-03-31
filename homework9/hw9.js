// ~~~~~ task 1 ~~~~~ //
function getSolution(arr, sum) {
    let res = [];
    let i = 0;
    let copyArr;
    res.push(arr[0]);

    while (i < arr.length - 1) {
        copyArr = [...res];
        res.length = 0;
        for (let j = 0; j < copyArr.length; j++) {
            res.push(copyArr[j] + arr[i + 1]);
            res.push(copyArr[j] - arr[i + 1]);
        }
        i++;
    }
    return res.includes(sum) ? true : false;
}

console.log(getSolution([1, 3, 4, 6, 8], -2)); // true
console.log(getSolution([15, 2, 3], 10)); // true
console.log(getSolution([1, 5, 3, 2, 5], -2)); // false
console.log(getSolution([1, 3, 4, 6, 8], -8)); // true


// ~~~~~ task 2 ~~~~~ //
function countdown(duration) {
    let firstChar = /^-/.exec(duration) ? '-' : '+';
    let milliseconds = Math.abs(duration);
    let hours = Math.floor(milliseconds / 3600000);
    hours = hours < 10 ? '0' + hours : hours;
    let minutes = Math.floor(milliseconds % 3600000 / 60000);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let seconds = Math.floor(milliseconds % 60000 / 1000);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return firstChar + hours + ':' + minutes + ':' + seconds;
}

console.log(countdown(-154800000))  // return  '-43:00:00'
console.log(countdown(0)) // return  '+00:00:00'
console.log(countdown(61000))       // return  '+00:01:01'
console.log(countdown(360000000))   // return '+100:00:00'
