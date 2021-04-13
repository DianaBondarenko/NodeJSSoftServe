const { validation1 } = require('./validation.js')
exports.chessBoard = function (height, width, symbol) {
    const validation = validation1(height,width,symbol, arguments.length);
    console.log(validation);
    if (validation === true) {
        let result = ``;
        let getLine = (line) => line.repeat(width / 2) + '\n';
        for (let i = 0; i < height; i++) {
            result += (i % 2) ? getLine((' ' + symbol[0])) : getLine((symbol[0] + ' '));
        }
        return result;
    } else return validation;

}
