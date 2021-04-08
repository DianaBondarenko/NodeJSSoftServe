import {numberSequence} from '../src/task6.js';
const assert = chai.assert;
export function test6() {
    describe('Task 6', () => {
        describe('Sequences with right arguments', () => {
            it('Sequence of 5 numbers with 30 as a minimal square', () => {
                assert.equal(numberSequence(5, 30), '6,7,8,9,10')
            });
            it('Sequence of 8 numbers with 144.6 as a minimal square', () => {
                assert.equal(numberSequence(8, 144.6), '13,14,15,16,17,18,19,20')
            })
        });
        describe('Sequences with wrong arguments', () => {
            it('Sequence with nulls as arguments', () => {
                assert.deepEqual(numberSequence(0, 0), {
                    status: 'failed',
                    reason: 'Incorrect value of arguments. Length and minimal square must be from 1 to 1000000.'
                })
            });
            it('Sequence without arguments', () => {
                assert.deepEqual(numberSequence(), {
                    status: 'failed',
                    reason: 'Incorrect number of arguments. There must be 2 arguments.'
                })
            });
            it('Sequence with strings as arguments', () => {
                assert.deepEqual(numberSequence('str', 'sq'), {
                    status: 'failed',
                    reason: 'Incorrect type of arguments. There must be an integer number and a number.'
                })
            })
        });
    })
}