let userArr = prompt(`Enter numbers separated by commas`).split(',').map((el) => +el);
console.log(userArr + ' :  original Array')
userArr.sort((a, b) => a - b);
console.log(userArr + ' :  sort Array')
userArr.splice(1,3);
console.log(userArr + ' :  clipped Array')

/*
Створити масив, довжину та елементи якого задає користувач.
    Відсортувати масив за зростанням.
    Видалити елементи з масиву з 2 по 4 (включно!).
У міру змін виводити вміст масиву на сторінку.
*/