// № 1 ----------------
const arrFirstTask = ['ds',7,NaN,42,3,Boolean,34,true,'23',null,4,2,'Dima'];
function average (arr) {
    let result = [];
    for (let el of arr) {
        if (!isNaN(el) && (typeof el) !== "boolean" && (typeof el) !== "object") {
            result.push(el);
        }
    }
    return (result.reduce((sum, item) => sum + +item)) / result.length;
}
console.log(average(arrFirstTask).toFixed(2));


// № 2 я не стал создавать переменные под X, Y и znak, меньше кода.
let equation = prompt(`Enter a equation, space separator:  X znak Y  example (1 + 2)
znak options:   +,  -,  *,  /,  %,  ^` ).split(' ');
function doMath (x, znak, y) {
    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        case '^':
            return x ** y;
    }
}
alert(doMath(+equation[0], equation[1], +equation[2]));


// № 3 -------------
let user = prompt(`Enter the size of parent array: "X" and size child array "Y", after ":"
and enter array elements in the amount equal to "X * Y". 
Example - 2,3:1,2,3,4,5,6   and  2,2:1,Dima,Dnipro,4` ).split(':');
let lenParentArr = +user[0][0].split(',');
let lenChildsArr = +user[0][2].split(',');
let volume = user[1].split(',');

while (volume.length !== (lenParentArr * lenChildsArr)) {
    user = prompt(`Error, let's try again.
Enter the size of parent array: "X" and size child array "Y", after ":"
and enter array elements in the amount equal to "X * Y". 
Example - 2,3:1,2,3,4,5,6   and  2,2:1,Dima,Dnipro,4`).split(':');
    lenParentArr = +user[0][0].split(',');
    lenChildsArr = +user[0][2].split(',');
    volume = user[1].split(',');
}
function arrayCreation (x, y, value) {
    let oneArr = [];
    for (let i = 0; i < x; i++) {
        oneArr.push(value.splice(0,y));
    }
    return oneArr;
}

console.log(arrayCreation(lenParentArr, lenChildsArr, volume));


// № 4 ------------
let userStr = prompt(`Enter the string to change: `);
let userSymbols = prompt(`Enter the symbols to be removed. Comma separator: `).split(',');

function delSymbols (str, symbols) {
    let res = str.trim();
    for (el of symbols) {
        let delS = RegExp(el, 'gi');
        res = res.replace(delS,'');
    }
    return res;
}
console.log(delSymbols(userStr, userSymbols));


/*
Ця дз складається з чотирьох невеликих завдань, за реалізацію кожної з них можна отримати 25 балів:

  1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
  2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.
Обидва числа і знак виходять від користувача.
  3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів
задає користувач. Значення всіх елементів всіх масивів задає користувач.
  4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
  */
