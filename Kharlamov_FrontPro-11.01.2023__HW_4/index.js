// Вариант №1 - по условиям ДЗ, выходя из того что пользователь передает только три числа, не больше не меньше.
// также, определение большего и меньшего числа сделал через if так как было сказана на занятии.

let userNumbers = prompt(`Enter three numbers separated by a comma (example - 1,2,3)`);
let convertNumbers = userNumbers.split(',');
let minNumber;
let maxNumber;

if (+convertNumbers[0] < +convertNumbers[1] && +convertNumbers[0] < +convertNumbers[2]) {
    minNumber = +convertNumbers[0];
} else if (+convertNumbers[1] < +convertNumbers[0] && +convertNumbers[1] < +convertNumbers[2]) {
    minNumber = +convertNumbers[1];
} else {
    minNumber = +convertNumbers[2];
}

if (+convertNumbers[0] > +convertNumbers[1] && +convertNumbers[0] > +convertNumbers[2]) {
    maxNumber = +convertNumbers[0];
} else if (+convertNumbers[1] > +convertNumbers[0] && +convertNumbers[1] > +convertNumbers[2]) {
    maxNumber = +convertNumbers[1];
} else {
    maxNumber = +convertNumbers[2];
}

alert(`Your numbers: ${userNumbers} :
First number is ${convertNumbers[0]}, last number is ${convertNumbers.at(-1)}.
${convertNumbers.join(' + ')} = ${+convertNumbers[0] + +convertNumbers[1] + +convertNumbers[2]}
min is ${minNumber}, max is ${maxNumber}`);

let testNumbers = prompt(`Please enter one of the numbers which you entered before?`);
if (convertNumbers.indexOf(testNumbers) === -1) {
    alert(`Sorry, you did not enter this number!`);
} else {
    alert(convertNumbers.indexOf(testNumbers) + 1);
}

// Вариант №2 - сделал другой вариант после прочтения техдокументации, в этом варианте не имеет значение количество
// переданных пользователем чисел. Погуглил как можно получить тот или иной результат.

/*
let userNumbers = prompt(`Enter numbers separated by a comma (example - 1,2,3 ...)`);
let convertNumbers = userNumbers.split(',').map(el => +el);  // спомошью map перебрал масив изменив тип елементов на Number,
                                                                      // так легче потом работать
alert(`Your numbers: ${userNumbers} :
First number is ${convertNumbers[0]}, last number is ${convertNumbers.at(-1)}.
${convertNumbers.join(' + ')} = ${convertNumbers.reduce((sum, el) => sum + el)}
min is ${Math.min(...convertNumbers)} , max is ${Math.max(...convertNumbers)}`)
    // Вначале я сортировал массив, и брал первый элемент как минимальный и последний как максимальный,
    // а потом нашел Math.min, при этом пришлось перебрать массив и сделать элементы Number

let testNumbers = prompt(`Please enter one of the numbers which you entered before?`);
if (convertNumbers.indexOf(+testNumbers) === -1) {
    alert(`Sorry, you did not enter this number!`)
} else {
    alert(`Number in order : ${convertNumbers.indexOf(+testNumbers) + 1}`);
}
*/
