/*
Реалізувати рекурсивну функцію, яка зводить число в ступінь.
Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
Ступінь передається як другий аргумент у функцію pow (num, degree).
*/

function pow (num, degree) {
    if (degree === 1) {
        return num;
    }
    return num * pow(num, --degree)
}
console.log(pow(7,5))
console.log(7**5)



// тут я хотел что то придумать как использовать рекурсию, когда тренировался, и решил оставить.
// Задача функции как бы заполнить контейнер (cargoContainer) посылками которые имеют рандомный вес (randomWeightPackage),
// и общий вес посылок не должен превышать допустимый лимит (limitWeight).
// задумка так себе))


/*let cargoContainer = [];
function containerFilling (limitWeight, container) {
    let randomWeightPackage = Math.floor(Math.random() * 30);
    limitWeight -= randomWeightPackage;
    container.push(randomWeightPackage)
    if (limitWeight > 0){
        limitWeight -= containerFilling(limitWeight, container);
    }
    if (limitWeight < 0 && limitWeight !== 0) {
        container.pop();
    }
    return `Completed`;
}
containerFilling(200, cargoContainer);
console.log(cargoContainer);
console.log('Filled weight : ' + cargoContainer.reduce((a,b) => a + b,0));*/


