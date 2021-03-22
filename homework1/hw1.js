// ~~~~~ task 1 ~~~~~ //
function onesInBinary(num) {
    if (num >= 0 && Number.isInteger(num)) {
        let binary = num.toString(2);
        let res = binary.split("").filter(num => (num) == 1).length;
        return res;
    } else {
        return ("Input must be a non-negative integer");
    }
}

console.log(onesInBinary(1234));


// ~~~~~ task 2 ~~~~~ //
function sortStr(str) {
    if (str !== "") {
        let arr = str.split(" ");
        return arr.sort((a, b) => a.match(/[1-9]/) - b.match(/[1-9]/)).join(" ");
    } else {
        return "";
    }
}

console.log(sortStr("is2 Thi1s T4est 3a"));
console.log(sortStr("4of Fo1r pe6ople g3ood th5e the2"));


// ~~~~~ task 3 ~~~~~ //
function numOfPlayers(list) {
    let teamA = 11;
    let teamB = 11;
    let yellow = [];
    let playersOff = [];
    for (let card of list) {
        if (teamA < 7 || teamB < 7) {
            break;
        }
        let team = card[0];
        let player = card[0] + card.match(/\d+/);
        let color = card[card.length - 1];
        if (!playersOff.includes(player)) {
            if (color === "R") {
                team === "A" ? teamA-- : teamB--;
                playersOff.push(player);
            } else {
                if (yellow.includes(player)) {
                    team === "A" ? teamA-- : teamB--;
                    playersOff.push(player);
                } else {
                    yellow.push(player);
                }
            }
        }
    }
    return [teamA, teamB]
}

console.log(numOfPlayers(["A4Y", "A4Y"]));
console.log(numOfPlayers(["A4Y", "A4R"]));
console.log(numOfPlayers(["A4Y", "A5R", "B5R", "A4Y", "B6Y"]));
console.log(numOfPlayers(["A4R", "A4R", "A4R"]));
console.log(numOfPlayers(["A4R", "A6R", "A8R", "A10R", "A11R"]));
