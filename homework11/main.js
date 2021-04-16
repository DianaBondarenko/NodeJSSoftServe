import {checkName, checkLogin, checkPassw, checkEmail, checkDate} from './validation.js'

const regForm = document.getElementById('regForm');
const authForm = document.getElementById('authForm');

regForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputs = Array.from(document.querySelectorAll('#regForm input')).map(el => el.value);
    let [name, surname, login, password, email, dob] = inputs;
    if (checkName(name) && checkName(surname) && checkLogin(login) && checkPassw(password) && checkEmail(email) && checkDate(dob)) {
        sendRequest(`http://localhost:8080/reg/?name=${name}&surname=${surname}&login=${login}&password=${password}&email=${email}&dob=${dob}`);
    } else alert('Incorrect data!');
})
authForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputs = Array.from(document.querySelectorAll('#authForm input')).map(el => el.value);
    let [login, password] = inputs;
    if (checkLogin(login) && checkPassw(password)) {
        sendRequest(`http://localhost:8080/auth/?login=${login}&password=${password}`);
    } else alert('Incorrect data!');
})
function sendRequest(url) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        alert(xhr.responseText);
    }
    xhr.send();
}
