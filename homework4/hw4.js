// ~~~~~ task 1 ~~~~~ //
function meeting(str) {
    let friends = str.split(';').map(el => el.split(':'));
    let sorted = friends.sort((a, b) => {
        if (a[1] == b[1]) return a[0] > b[0] ? 1 : -1;
        return a[1] > b[1] ? 1 : -1;
    });
    let res = sorted.map(el => `(${el[1]}, ${el[0]})`).join(' ').toUpperCase();
    return res;
}

s = 'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill';
console.log(meeting(s));


// ~~~~~ task 2 ~~~~~ //
function findChair(rooms, number) {
    if (number == 0) return 'Game On';
    let sum = (arr) => arr.reduce((sum, el) => sum + el, 0);
    let result = rooms.reduce((res, room) => {
        if (sum(res) < number) {
            room[0].length >= room[1] ? res.push(0) : res.push(room[1] - room[0].length);
        }
        return res;
    }, [])
    if (sum(result) < number) return 'Not enough!';
    return result;
}

console.log(findChair([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5));
console.log(findChair([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 10));


// ~~~~~ task 3 ~~~~~ //
function closestPoints(points) {
    let distance = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    let res = [];
    let min = 1000;
    points.forEach((el, i) => {
        for (let j = i + 1; j < points.length; j++) {
            let dist = distance(...points[i], ...points[j]);
            if (dist < min) {
                min = dist;
                res = [points[i], points[j]];
            }
        }
    })
    return res;
}

const p = [[2, 2], [2, 8], [5, 5], [6, 3], [6, 7], [7, 4], [7, 9]];
console.log(closestPoints(p));
