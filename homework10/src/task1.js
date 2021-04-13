exports.chessBoard = function (height, width, symbol) {
    let result = ``;
    let getLine = (line) => line.repeat(width / 2) + '\n';
    for (let i = 0; i < height; i++) {
        result += (i % 2) ? getLine((' ' + symbol[0])) : getLine((symbol[0] + ' '));
    }
    return result;
}