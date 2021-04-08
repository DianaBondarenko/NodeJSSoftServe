import {chessBoard} from '../src/task1.js';

const assert = chai.assert;

export function test1() {
    describe('Task 1', () => {
        describe('Board with right arguments', () => {
            it('Board with length 3, width 8, symbol #', () => {
                assert.equal(chessBoard(3, 8, '#'),
                    `# # # # \n # # # #\n# # # # \n`)
            });
        });
        describe('Board with wrong arguments', () => {
            it('Board with string arguments', () => {
                assert.deepEqual(chessBoard('3', '8', '#'), {
                    status: 'failed',
                    reason: 'Incorrect type of arguments. There must be 2 integer numbers and a symbol.'
                })
            });
            it('Board with 4 arguments', () => {
                assert.deepEqual(chessBoard(4, 8, '&', 9), {
                    status: 'failed',
                    reason: 'Incorrect number of arguments. There must be 3 arguments.'
                })
            });
            it('Board with wrong values', () => {
                assert.deepEqual(chessBoard(1, 257, '&'), {
                    status: 'failed',
                    reason: 'Incorrect value of arguments. Height and width must be numbers from 2 to 256.'
                })
            });
        });
    })
}