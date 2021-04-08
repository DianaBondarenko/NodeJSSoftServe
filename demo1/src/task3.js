import {validation3} from "./validation.js";

export function triangleSorting(triangles) {
    const isValidate = validation3(triangles, arguments.length);  // add ignoring extra values!!
    if (isValidate === true) {
        function triangleArea(obj) {
            let vertices = obj.vertices.toLowerCase().split('');
            let sides = vertices.reduce((res, el) => [...res, obj[el]], []);
            let [s1, s2, s3] = sides;
            const p = (s1 + s2 + s3) / 2;
            return Math.sqrt(p * (p - s1) * (p - s2) * (p - s3)).toFixed(5);
        }
        return triangles.sort((a, b) => triangleArea(b) - triangleArea(a));
    } else return isValidate;
}

// let tr1 = {
//     vertices: 'ABC',
//     a: 10,
//     b: 20,
//     c: 22.36
// }
// let tr2 = {
//     vertices: 'DEF',
//     a: 15,
//     b: 23,
//     c: 24.36
// }
// let tr3 = {
//     vertices: 'GHK',
//     a: 11,
//     b: 10,
//     c: 14.36
// }
//
//
// console.log(triangleSorting([tr1, tr2,tr3]))