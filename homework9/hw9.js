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
