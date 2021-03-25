// ~~~~~ task 1 ~~~~~ //
function ipsBetween(ipAddress1, ipAddress2) {
    let ip1 = ipAddress1.split('.');
    let ip2 = ipAddress2.split('.');
    let result = ip1.reduce((res, el, i) => res += (ip2[i] - ip1[i]) * Math.pow(256, 3 - i), 0);
    return result;
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50")) // 50
console.log(ipsBetween("10.0.0.0", "10.0.1.0")) // 256
console.log(ipsBetween("20.0.0.10", "20.0.1.0")) // 246
