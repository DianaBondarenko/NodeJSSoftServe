// ~~~~~ task  2~~~~~ //
function damagedOrSunk(board, attacks) {
    const fullBoard = [].concat(...board);
    const boatNum = 3;
    const boardHeight = board.length;
    let scoring = {}
    let rez = {
        sunk: 0,
        damaged: 0,
        notTouched: 0,
        points: 0
    }
    let findBoats = (board, num) => board.filter(el => el == num);
    for (let i = 1; i <= boatNum; i++) {
        scoring['boat' + i] = (findBoats(fullBoard, i));
    }
    attacks.forEach(el => {
        let i = boardHeight - el[1];
        let j = el[0] - 1;
        let boat = board[i][j];
        let boatHits = 'boatHits' + boat;
        if (boat !== 0) {
            !Array.isArray(scoring[boatHits]) ? scoring[boatHits] = [] : null;
            scoring[boatHits].push(boat);
        }
    })
    for (let i = 0; i < boatNum; i++) {
        let boat = scoring['boat'+(i+1)];
        let boatHits = scoring['boatHits'+(i+1)];
        if (!boatHits) {
            rez.notTouched++;
            rez.points--;
        } else if (boat.length === boatHits.length) {
            rez.sunk++;
            rez.points++;
        } else {
            rez.damaged++;
            rez.points += 0.5;
        }
    }
    return rez;
}

const board = [[0, 0, 0, 2, 2, 0], [0, 3, 0, 0, 0, 0], [0, 3, 0, 1, 0, 0], [0, 3, 0, 1, 0, 0]];
const attacks = [[2, 1], [1, 3], [4, 2]];
console.log(damagedOrSunk(board, attacks));
