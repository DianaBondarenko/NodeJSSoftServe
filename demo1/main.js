import {chessBoard} from './src/task1.js';
import {envelopes} from './src/task2.js';
import {triangleSorting} from './src/task3.js';
import {findPalindrome} from './src/task4.js'
import {luckyTickets} from './src/task5.js';
import {numberSequence} from './src/task6.js';
import {fibonacci} from "./src/task7.js";

let inputForm = document.getElementById('inputForm');
let taskSelect = document.getElementById('taskSelect');
let calculateBtn = document.getElementById('calculateBtn');
let preview = document.getElementById('preview');

taskSelect.addEventListener('change', () => {
    let selInd = taskSelect.options.selectedIndex;
    preview.classList.remove('resultOutput');
    preview.innerText = '';
    let addBtn = document.getElementById('addTriangle');
    if (addBtn) addBtn.remove();
    let selTask = taskSelect[selInd].value;
    console.log(selTask);
    inputForm.innerHTML = chooseTask(selTask);
    if (selTask == 'task3') task3Btn();
})
calculateBtn.addEventListener('click', () => {
    let inputs = document.querySelectorAll('input');
    console.log(inputs);
    let task = taskSelect[taskSelect.options.selectedIndex].value;
    let res = calculateTask(task, inputs);
    console.log(res);
    preview.innerHTML = res;
    preview.classList.add('resultOutput');
})

// inputs depending on selected task
const task1 = `<input type="number" id="boardHeight" placeholder="Height">
        <input type="number" id="boardWidth" placeholder="Width">
        <input type="text" id="boardSymbol" placeholder="Symbol">`
const task2 = `<input type="number" id="env1Width" placeholder="First envelope's width">
        <input type="number" id="env1Height" placeholder="First envelope's height">
        <input type="number" id="env2Width" placeholder="Second envelope's width">
        <input type="number" id="env2Height" placeholder="Second envelope's height">`
const task3 = `<input type="text" placeholder="Vertices">
        <input type="number" placeholder="First side">
        <input type="number" placeholder="Second side">
        <input type="number" placeholder="Third side">`
const task3Btn = () => {
    let btn = `<a href="#" class="btn" id="addTriangle">Add triangle</a>`;
    inputForm.insertAdjacentHTML('afterend', btn);
    document.getElementById('addTriangle').addEventListener('click', () => {
        inputForm.insertAdjacentHTML('beforeend', `<br>${task3}`);
    });
}
const task4 = `<input type="number" id="number" placeholder="Number"> or 
    <input type="text" id="numberString" placeholder="Number">`
const task5 = `<input type="number" id="min" placeholder="Minimal number">
        <input type="number" id="max" placeholder="Maximal number">`
const task6 = `<input type="number" id="n" placeholder="Length">
        <input type="number" id="m" placeholder="Minimal square">`
const task7 = `<input type="number" id="min" placeholder="Minimum">
        <input type="number" id="max" placeholder="Maximum"> or 
        <input type="number" id="length" placeholder="Length">`

function chooseTask(task) {
    switch (task) {
        case 'task1':
            return task1;
        case 'task2':
            return task2;
        case 'task3':
            return task3;
        case 'task4':
            return task4;
        case 'task5':
            return task5;
        case 'task6':
            return task6;
        case 'task7':
            return task7;

    }
}

function calculateTask(task, inputs) {
    let inputValues = Array.from(inputs).map(el => el.value = el.type === 'number'? Number(el.value) : el.value);
    console.log(inputValues);
    switch (task) {
        case 'task1':
            let res1 = chessBoard(inputValues[0], inputValues[1], inputValues[2]);
            return `<pre>${correctOutput(res1)}</pre>`;
        case 'task2':
            let res2 = envelopes({a: inputValues[0], b: inputValues[1]},
                {c: inputValues[2], d: inputValues[3]});
            return correctOutput(res2);
        case 'task3':
            let triangles = [];
            for (let i = 0; i <= inputs.length - 4; i += 4) {
                triangles.push(createTriangle(inputValues[i], inputValues[i + 1], inputValues[i + 2], inputValues[i + 3]));
            }
            return correctOutput(triangleSorting(triangles));
        case 'task4':
            let value = inputValues[0] ? inputValues[0] : inputValues[1];
            return correctOutput(findPalindrome(value));
        case 'task5':
            return correctOutput(luckyTickets({min: inputValues[0], max: inputValues[1]}));
        case 'task6':
            return correctOutput(numberSequence(inputValues[0], inputValues[1]));
        case 'task7':
            return correctOutput(fibonacci({min: inputValues[0], max: inputValues[1], length: inputValues[2]}));
        default:
            return 'Please choose any task :)';
    }
}

function createTriangle(vertices, s1, s2, s3) {
    let [v1, v2, v3] = vertices.toLowerCase().split('');
    let tr = {vertices: vertices};
    [tr[v1], tr[v2], tr[v3]] = [s1, s2, s3];
    return tr;
}
function correctOutput(res) {
    if (res instanceof Object) return JSON.stringify(res);
    if (Array.isArray(res)) return res.map(el => JSON.stringify(el)); // array of objects
    return res;
}