import {validation1} from "./validation.js";

export function chessBoard(height, width, symbol) {
    let result = ``;
    const isValidate = validation1(height, width, symbol, arguments.length);
    if (isValidate === true) {
        let getLine = (line) => line.repeat(width / 2) + '\n';
        for (let i = 0; i < height; i++) {
            result += (i % 2) ? getLine((' ' + symbol[0])) : getLine((symbol[0] + ' '));
        }
        return result;
    } else return isValidate;
}

// console.log(chessBoard(4, 4, '$'));
// console.log(chessBoard(5, 20, '@'));