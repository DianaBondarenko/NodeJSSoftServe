import {envelopes} from '../src/task2.js';

const assert = chai.assert;

export function test2() {
    describe('Task 2', () => {
        describe('Envelopes with right arguments', () => {
            it('Envelope1 with sides 15, 8, envelope2  with sides 34, 67', () => {
                assert.equal(envelopes({a: 15, b: 8}, {c: 34, d: 67}), 1)
            });
            it('Envelope1 with sides 15, 8, envelope2  with sides 34, 67', () => {
                assert.equal(envelopes({a: 15, b: 8}, {c: 30, d: 6}), 0)
            });
            it('Envelope1 with sides 656, 273, envelope2  with sides 698, 9', () => {
                assert.equal(envelopes({a: 656, b: 273}, {c: 698, d: 9}), 2)
            });
            it('Envelope1 with sides 656, 273, envelope2  with sides 698, 9', () => {
                assert.equal(envelopes({a: 656, b: 273}, {c: 661, d: 70}), 2)
            });
        });
        describe('Envelopes with wrong arguments', () => {
            it('Envelopes with numbers as arguments', () => {
                assert.deepEqual(envelopes(2, 7), {
                    status: 'failed',
                    reason: 'Incorrect type of arguments. There must be objects.'
                })
            });
            it('Envelopes without arguments', () => {
                assert.deepEqual(envelopes(), {
                    status: 'failed',
                    reason: 'Incorrect number of arguments. There must be 2 arguments.'
                })
            });
            it('Envelopes with wrong values', () => {
                assert.deepEqual(envelopes({a: '15', b: 8}, {c: 34, d: 67}), {
                    status: 'failed',
                    reason: 'Incorrect arguments\' data. Each side of envelopes must be a number.'
                })
            });
            it('Envelopes with wrong values', () => {
                assert.deepEqual(envelopes({a: 0, b: 8}, {c: 34, d: 67}), {
                    status: 'failed',
                    reason: 'Incorrect value of arguments\' data. Each side of envelopes must be from 1 to 1000000.'
                })
            });
        });
    })
}