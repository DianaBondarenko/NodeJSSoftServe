import {triangleSorting} from '../src/task3.js';

const assert = chai.assert;

export function test3() {
    describe('Task 3', () => {
        describe('Sorting of triangles with right arguments', () => {
            it('Triangles with right sides', () => {
                assert.deepEqual(triangleSorting([{vertices: 'ABC', a: 12, b: 13, c: 14.62}, {
                        vertices: 'DEF',
                        d: 45,
                        e: 46,
                        f: 55
                    }]),
                    [{vertices: 'DEF', d: 45, e: 46, f: 55}, {vertices: 'ABC', a: 12, b: 13, c: 14.62}]);
            });
        });
        // add ignoring extra values
        describe('Sorting of triangles with wrong arguments', () => {
            it('Sorting with wrong number of objects inside the array', () => {
                assert.deepEqual(triangleSorting([{vertices: 'ABC', a: 12, b: 13, c: 14.62}]), {
                    status: 'failed',
                    reason: 'Incorrect number or type of arguments. There must be 1 array of at least 2 objects.'
                })
            });
            it('Sorting with string as a parameter', () => {
                assert.deepEqual(triangleSorting('triangle'), {
                    status: 'failed',
                    reason: 'Incorrect number or type of arguments. There must be 1 array of at least 2 objects.'
                })
            });
            it('Sorting with wrong type of array\'s elements', () => {
                assert.deepEqual(triangleSorting([5, 8, 9]), {
                    status: 'failed',
                    reason: 'Incorrect type of arguments\' data. There must be array of objects.'
                })
            });
            it('Sorting triangles with wrong number of vertices', () => {
                assert.deepEqual(triangleSorting([{vertices: 'ABCD', a: 12, b: 13, c: 14}, {
                    vertices: 'DEF',
                    d: 45,
                    e: 46,
                    f: 55
                }]), {
                    status: 'failed',
                    reason: 'Incorrect value of arguments\' data. Triangle must have 3 vertices.'
                })
            });
            it('Sorting of non-existing triangles', () => {
                assert.deepEqual(triangleSorting([{vertices: 'ABC', a: 12, b: 13, c: 62}, {
                    vertices: 'DEF',
                    d: 45,
                    e: 46,
                    f: 55
                }]), {
                    status: 'failed',
                    reason: 'Incorrect data. Such a triangle doesn\'t exist.'
                })
            });
        });
    })
}