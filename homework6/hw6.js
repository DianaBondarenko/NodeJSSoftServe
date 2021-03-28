// ~~~~~ task 1 ~~~~~ //
function ticTacToe(ticTacToeBoard) {
    const winIndexes = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    const board = ticTacToeBoard.reduce((res, el) => [...res, ...el], []);
    if (board.includes(0)) return -1;
    let winner = 0;
    winIndexes.forEach(combination => {
        let row = [];
        combination.forEach(winInd => row.push(board[winInd]));
        if (row.every(el => el === 1)) winner = 1;
        if (row.every(el => el === 2)) winner = 2;
    })
    return winner;
}

const board =
       [[1, 2, 1], 
        [1, 1, 2],
        [2, 1, 1]];
console.log(ticTacToe(board));


// ~~~~~ task 2~~~~~ //
function encodingLetter(letter) {
    if (letter === '') return '';
    const sentences = letter.split(/[\.!\?] /).map(el => el.match(/[\w']+/g));
    let message = '';
    for (let start = 0; start < sentences.length;) {
        let firstSent = sentences[start];
        let otherSent = sentences.slice(start+1);
        let wordIndexes = firstSent.map(word => word.includes('\'') ? word.length - 1 : word.length);
        let newPart = wordIndexes.map((el, i) => otherSent[i][el - 1]).join(' ');
        message += newPart[0].toUpperCase() + newPart.slice(1) + '.';
        if (otherSent.length > wordIndexes.length) {
            message += ' ';
            start += wordIndexes.length + 1;
        } else break;
    }
    return message;
}

const ex = 'Yesterday, we bumped into Laura. It had to happen, but you can\'t ' +
    'deny the timing couldn\'t be worse. The "mission" to try and seduce her was' +
    ' a complete failure last month. By the way, she still has the ring I gave her.' +
    ' Anyhow, it hasn\'t been a pleasurable experience to go through it.' +
    ' I wanted to feel done with it first.' + ' Yesterday, we bumped into Laura. It had to happen, but you can\'t ' +
    'deny the timing couldn\'t be worse. The "mission2" to try and seduce her was' +
    ' a complete failure last month. By the way, she still has the ring I gave her.' +
    ' Anyhow, it hasn\'t been a pleasurable experience to go through it.' +
    ' I wanted to feel done with it first.'
console.log(encodingLetter(ex));
