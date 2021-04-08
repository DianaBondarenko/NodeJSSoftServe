import {findPalindrome} from '../src/task4.js';

const assert = chai.assert;

export function test4() {
    describe('Task 4', () => {
        describe('Search with right arguments', () => {
            it('Search palindrome in 456886974', () => {
                assert.strictEqual(findPalindrome(456886974), 6886);
            });
            it('Search palindrome in 9687869', () => {
                assert.strictEqual(findPalindrome(9687864), 68786);
            });
            it('Search palindrome in 22134565', () => {
                assert.strictEqual(findPalindrome(22134565), 565);
            });
            it('Search palindrome in 96827869', () => {
                assert.strictEqual(findPalindrome(96827869), 0);
            });
            it('Search palindrome in \'123456789987345678\'', () => {
                assert.strictEqual(findPalindrome('123456789987345678'), '789987');
            });
        });
        describe('Search with wrong arguments', () => {
            it('Search without arguments', () => {
                assert.deepEqual(findPalindrome(), {
                    status: 'failed',
                    reason: 'Incorrect number of arguments. There must be 1 argument.'
                })
            });
            it('Search with string as a parameter', () => {
                assert.deepEqual(findPalindrome('palindrome'), {
                    status: 'failed',
                    reason: 'Incorrect type of the argument. There must be an integer number or an integer number in string format.'
                })
            });
            it('Search in wrong number' , () => {
                assert.deepEqual(findPalindrome(8), {
                    status: 'failed',
                    reason: 'Incorrect value of the argument. Number\'s length can be from 2 to 16.'
                })
            });
            it('Search in wrong number in string format' , () => {
                assert.deepEqual(findPalindrome('123456789112345678921'), {
                    status: 'failed',
                    reason: 'Incorrect value of the argument. Number\'s length in string format must be from 2 to 20.'
                })
            });
        });
    })
}