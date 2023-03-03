/*№ 1 Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.*/
function min (a,b) {
    return a < b ? a : b;
}
console.log('№ 1 : ' + min(10,5));

/*№ 2 Напишіть функцію pow(x, n), яка повертає число x в n степені.*/

function pow (x, n) {
    return x ** n;
}
console.log('№ 2 : ' + pow(2,6))


/*№ 3 Перепишіть функцію, використовуючи
1) '?'
2) '||' або '&&'
*/
function checkAge (age) {
    return age >= 18 || confirm('Батьки дозволили?');
    // return age >= 18 ? true : confirm('Батьки дозволили?');   // или так
}
console.log('№ 3 : ' + checkAge(18));
