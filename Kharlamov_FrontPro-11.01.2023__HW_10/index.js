// № 1
let firstTask = '№ 1: ';
for (let i = 10; i <= 100; i = i + 0.5) {
    if (i >= 20 && i <=30) {
        firstTask += `${i} `;
    }
}
console.log(firstTask);

// № 2
let exchangeRate = 27;
console.log(`№ 2 Currency converter`)
for (let i = 10; i <= 100; i++) {
    if (i % 10 === 0) {
        console.log(`${i} USD = ${i * exchangeRate} UAH`);
    }
}
// № 3  -  Тут я решил сделать два варианта, первый проверяет на каждой етерацыи,
// второй проверяет прям в условии, пришлось округлять. Мне сложно в матиматеке быстро разбираться, занимает значительное время,
// построение кода, занимает только 5 % времени :)). Надеюсь я правельно понял смысл задачи.
let userNumberThird = +prompt(`№ 3 enter an integer`);
let thirdTaskOne = [];
let thirdTaskTwo = [];
for (let i = 1; i <= 100; i++) {
    if (Math.pow(i, 2) <= userNumberThird) {
        thirdTaskOne.push(i);
    }
    if (i === 100) {
        console.log("№ 3 (version 1) :"+ thirdTaskOne);
    }
}
for (let i = 1; i <= Math.floor(Math.sqrt(userNumberThird)); i++) {
    thirdTaskTwo.push(i);
    if (i === Math.floor(Math.sqrt(userNumberThird))) {
        console.log("№ 3 (version 2) :" + thirdTaskTwo);
    }
}

// № 4
let userNumberFourth = +prompt(`№ 4 enter an integer`);
let fourthTask;
for (let i = 2; i < userNumberFourth; i++) {
    if (userNumberFourth % i === 0) {
        console.log(`№ 4 : ${userNumberFourth} Not a prime number`);
        break
    } else if ((i+1) === userNumberFourth) {
        console.log(`№ 4 : ${userNumberFourth} prime number`);
    }
}

// № 5
let userNumberFifth = +prompt(`№ 5 enter number`);
for (let i = 0; true; i++) {
    if (3 ** i === userNumberFifth) {
        console.log(`№ 5 : ${userNumberFifth} = 3 ** ${i}`);
        break
    } else if (i**3 > userNumberFifth) {
        console.log(`№ 5 : It is forbidden`);
        break
    }
}

/*
Написати цикли, які роблять наступне:
    1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
    2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
    3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
    4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1,
    які не мають інших дільників крім 1 і себе).
    5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.
    (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
*/