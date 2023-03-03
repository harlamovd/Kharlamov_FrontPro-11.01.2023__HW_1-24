function closureFunction () {
    let sum = 0;
    return num => sum += num;
}
let counter = closureFunction();
console.log(counter(1))
console.log(counter(3))
console.log(counter(2))
console.log(counter(4))


/*
Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. сумуючи ці числа
Все це із замиканнями, наприклад:*/
