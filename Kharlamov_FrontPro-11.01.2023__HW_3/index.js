// Варитант №1

let firstNumber = prompt('Enter a number to calculate the average. First number:');
let secondNumber = prompt('Enter a number to calculate the average. Second number:');
let thirdNumber = prompt('Enter a number to calculate the average. Third number:');

alert (`Average = ${(+firstNumber + +secondNumber + +thirdNumber) / 3}`);

// Вариант №2. погуглил как округлить знаки после запятой, что бы смотрибельно было.

/*
let firstNumber = prompt('Enter a number to calculate the average. First number:');
let secondNumber = prompt('Enter a number to calculate the average. Second number:');
let thirdNumber = prompt('Enter a number to calculate the average. Third number:');

alert (`Average = ${((+firstNumber + +secondNumber + +thirdNumber) / 3).toFixed(2)}`);
*/
