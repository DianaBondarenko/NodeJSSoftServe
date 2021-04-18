export function checkName(string) {
    return typeof string === 'string' && /^[a-zA-z][a-z]{0,49}$/.test(string);
};

export function checkLogin(login) {
    return typeof login === 'string' && /^[a-z0-9]{1,50}$/i.test(login);
};

export function checkPassw(password) {
    return typeof password === 'string' && /^[a-z0-9]{6,50}$/i.test(password);
};

export function checkEmail(email) {
    const regExp = /^[A-Za-z0-9]+(_-\.!#\$%&'\*\+-\/=`{\|}~\?\^)*[A-Za-z0-9]+@[a-z0-9-]{2,}\.[a-z]{2,4}$/;
    return typeof email === 'string' && regExp.test(email);
};

export function checkDate(date) {
    const regExp = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
    return regExp.test(date);
}