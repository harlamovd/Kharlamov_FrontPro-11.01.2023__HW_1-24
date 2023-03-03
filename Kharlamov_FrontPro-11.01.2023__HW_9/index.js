/*
Все эти результаты можно было сделать в одном цикле, но так как тема циклы, я решил сделать в нескольких циклах,
объединил циклы там где это логично. Также объявление переменных должно быть в самом начале, но я их объявлял возле
соответствующего цикла, что бы было удобно проверять.
*/

// №1 - 2
let oneTask = [];
let secondTask = [];
for (let i = 10; i <= 20; i++)  {
    oneTask.push(i);
    secondTask.push(i*i);
}
console.log(`№1 10 to 20: ${oneTask}`);
console.log(`№2 square of numbers from 10 to 20: ${secondTask}`);

// №3
console.log(`№3 multiplication table by 7:`)
for (let i = 1; i <= 10; i++)  {
    console.log(`7 * ${i} = ${7 * i}`);
}

// №4 - 5
let fourthTask = new Number;
let fifthTask = 1; // тут нужно задать значение 1 так как умножение на 0 будет ноль, и не сработает цикл.
                        // я бы мог вначале перенести все значение в отдельный массив который потом перемножить, но это больше кода
for (let i = 1; i <= 35; i = i + 0.5)  {  // сделал щаг в 0.5 что бы работала проверка на целые числа
    if (Number.isInteger(i) && i <= 15) {
        fourthTask += i;
    } else if (Number.isInteger(i) && i >= 15) {
        fifthTask *= i;
    }
}
console.log(`№4 sum of even numbers from 1 to 15: ${fourthTask}`);
console.log(`№5 the product of even numbers from 15 to 35: ${fifthTask}`);

// №6 - 8
let sixthTask = new Number;
let seventhTask = new Number;
let eighthTask = [];
for (let i = 1; i <= 500; i++)  {
    sixthTask += i;
    if (i === 500) {
        sixthTask = sixthTask / 500;
    }
    if ((i % 2 === 0) && i >= 30 && i <= 80) {
        seventhTask += i;
    }
    if ((i % 3 === 0) && i >= 100 && i <= 200) {
        eighthTask.push(i);

    }
}
console.log(`№6 average: ${sixthTask}`);
console.log(`№7 sum of even numbers from 30 to 80: ${seventhTask}`);
console.log(`№8 numbers in the range from 100 to 200 are multiples of 3.: ${eighthTask}`);

// №9 - 11

let userNumber = +prompt(`Enter to natural number`);
let ninthTask = [];
let tenthTask = [];
let eleventhTask = new Number;
for (let i = 0; i <= userNumber; i++) {
    if (userNumber % i === 0) {
        ninthTask.push(i)
        if (i % 2 === 0) {
            tenthTask.push(i)
            eleventhTask +=i;
        }
    }
}
console.log(`№9 divisors : ${ninthTask}`)
console.log(`№10 even: ${tenthTask}`)
console.log(`№11 sum : ${eleventhTask}`)

// №12
console.log(`№12 multiplication table:`)
for (let i = 1; i <= 10; i++)  {
    for (let b = 1; b <= 10; b++) {
        console.log(`${i} * ${b} = ${i * b}`)
    }
}
let twelfthTask = '';
for (let i = 1; i <= 10; i++)  {
    for (let b = 1; b <= 10; b++) {
        twelfthTask += `${i * b} \t`;
    }
    console.log(twelfthTask)
    twelfthTask = ''
}




/*
Написати цикли, які зможуть:
 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
 2. Вивести квадрати чисел від 10 до 20.
 3. Вивести таблицю множення на 7.
 4. Знайти суму всіх цілих чисел від 1 до 15.
 5. Знайти добуток усіх цілих чисел від 15 до 35.
 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
10. Визначити кількість його парних дільників.
11. Знайти суму його парних дільників.
12. Надрукувати повну таблицю множення від 1 до10.
*/