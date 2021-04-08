import {luckyTickets} from '../src/task5.js';

const assert = chai.assert;

export function test5() {
    describe('Task 5', () => {
        describe('Counting lucky tickets with right arguments', () => {
            it('Count from 100001 to 210001', () => {
                assert.deepEqual(luckyTickets({min:101001,max: 101020}),{luckyCountEasy: 3,
                    luckyCountHard: 2, winner: 'Easy method'});
            });
            it('Count from 1000 to 1020', () => {
                assert.deepEqual(luckyTickets({min:1000,max: 1020}),{luckyCountEasy: 2,
                    luckyCountHard: 1, winner: 'Easy method'});
            });
        });
        describe('Counting lucky tickets with wrong arguments', () => {
            it('Count without arguments', () => {
                assert.deepEqual(luckyTickets(), {
                    status: 'failed',
                    reason: 'Incorrect number of arguments. There must be 1 argument.'
                })
            });
            it('Counting with number as a parameter', () => {
                assert.deepEqual(luckyTickets(850046), {
                    status: 'failed',
                    reason: 'Incorrect type of argument. There must be an object.'
                })
            });
            it('Counting with string values in the object' , () => {
                assert.deepEqual(luckyTickets({min:'101001',max: 101020}), {
                    status: 'failed',
                    reason: 'Incorrect arguments\' data. Minimal and maximum must be numbers.'
                })
            });
            it('Counting with negative values in the object' , () => {
                assert.deepEqual(luckyTickets({min:-101001,max: 101020}), {
                    status: 'failed',
                    reason: 'Incorrect value of arguments\' data. Minimal and maximum must be from 0 to 999999.'
                })
            });
        });
    })
}