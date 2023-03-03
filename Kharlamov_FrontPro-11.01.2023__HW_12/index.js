let a = [1,56,3,2,5,6];
console.log(a.reverse()      );
/*
function Product (title, price) {
    this.title = title;
    this.price = price;
    this.name = name;
}

let a = new Product();
console.log(a);

*/

/*
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(new Product('tel' + i, i) )
}
console.log(arr);

for ( let i = 0; i < arr.length; i++) {
    arr.at(i).price *= 0.1;
}

arr.forEach(el => el.price *= 0.1);

*/

















/*
/!*
Я решил сделать через три функции, каждая из которых возвращает обработанные данные.
Над функцией расписал их функционал. можно и без отдельных функций, но я решил практиковаться.
*!/
let users = [
    {
        "index": 0,
        "isActive": true,
        "balance": "$2,226.60",
        "name": "Eugenia Sawyer",
        "gender": "female",
        "phone": "+1 (840) 583-3207",
        "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
        "index": 1,
        "isActive": true,
        "balance": "$2,613.77",
        "name": "Pauline Gallegos",
        "gender": "female",
        "phone": "+1 (985) 593-3328",
        "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
        "index": 2,
        "isActive": false,
        "balance": "$3,976.41",
        "name": "Middleton Chaney",
        "gender": "male",
        "phone": "+1 (995) 591-2478",
        "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
        "index": 3,
        "isActive": true,
        "balance": "$1,934.58",
        "name": "Burns Poole",
        "gender": "male",
        "phone": "+1 (885) 559-3422",
        "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
        "index": 4,
        "isActive": true,
        "balance": "$3,261.65",
        "name": "Mcfadden Horne",
        "gender": "male",
        "phone": "+1 (942) 565-3988",
        "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
        "index": 5,
        "isActive": false,
        "balance": "$1,790.56",
        "name": "Suzette Lewis",
        "gender": "female",
        "phone": "+1 (837) 586-3283",
        "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
]
/!*Функция balanceTransformation служит для того, что бы преобразовать значения ключа "balance": "$2,226.60"
в тип Number убрав все лишние символы. Необходима для работы с балансом юзира
 *!/
function balanceTransformation (value) {
    let arr = value.replace(/\s/g,'').split('');
    let result = '';
    if (typeof value === "number") {
        return value;
    }
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]) || arr[i] === '.') {
            result += arr[i];
        }
    }
    return +result;
}
/!*Функция balanceUsers принимает наш массив users и проходиться по балансам всех пользователей и выдает их общую суму *!/
function balanceUsers(arr) {
    let balance = new Number;
    for ( let obj of  arr) {
        balance += balanceTransformation(obj["balance"]);
    }
    return balance;
}
/!*
Функция filterBalanceUsers принимает наш массив users, принимает суму больше которой будет отбирать пользователей,
и принимает ключ объекта, значения которых функция выдаст в массиве
.*!/
function filterBalanceUsers(arr, key = 'name', value = 3000) {
    let resSort = [];
    for (let el of arr) {
        if (balanceTransformation(el["balance"]) > value) {
            resSort.push(el[key]);
        }
    }
    return resSort;
}
console.log(`Filter result : ${filterBalanceUsers (users, "phone", 2000)}`);
console.log(`sum of users balances : ${balanceUsers (users).toFixed(2)}`);




/!*
Дан масив об'єктів. Вивести масив телефонних номерів користувачів, у яких баланс більше 2000 доларів. '
'І знайти суму всіх балансів користувачів
*!/
*/
