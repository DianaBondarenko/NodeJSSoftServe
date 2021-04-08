import {fibonacci} from '../src/task7.js';

const assert = chai.assert;

export function test7() {
    describe('Task 7', () => {
        describe('Fibonacci sequence with right arguments', () => {
            it('Fibonacci sequence from 6 to 1000', () => {
                assert.deepEqual(fibonacci({min:6, max:1000}),[8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]);
            });
            it('Fibonacci sequence with length 11', () => {
                assert.deepEqual(fibonacci({length:11}),[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
            });
            it('Fibonacci sequence with min, max, length', () => {
                assert.deepEqual(fibonacci({min:6, max:1000, length:11}),[8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]);
            });
        });
        describe('Fibonacci sequence with wrong arguments', () => {
            it('Count with 2 arguments', () => {
                assert.deepEqual(fibonacci({},{}), {
                    status: 'failed',
                    reason: 'Incorrect number of arguments. There must be 1 argument.'
                })
            });
            it('Fibonacci sequence with array as a parameter', () => {
                assert.deepEqual(fibonacci([14,800]), {
                    status: 'failed',
                    reason: 'Incorrect type of argument. There must be an object.'
                })
            });
            it('Fibonacci with string values in the object' , () => {
                assert.deepEqual(fibonacci({min:'101001',max: 101020}), {
                    status: 'failed',
                    reason: 'Incorrect argument\'s values. Minimal and maximum or length must be numbers.'
                })
            });
            it('Fibonacci with too big values in the object' , () => {
                assert.deepEqual(fibonacci({min:3,max: 2000000}), {
                    status: 'failed',
                    reason: 'Incorrect value of arguments\' data. Minimal and maximum or length must be from 1 to 1000000.'
                })
            });
        });
    })
}