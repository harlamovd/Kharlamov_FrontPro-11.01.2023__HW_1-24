const optionList = ['add', 'sub', 'mult', 'div'];
let optionUser;
let operandsUser;
let firstOperand;
let secondOperand;

for (;optionList.includes(optionUser) === false;) {
    optionUser = prompt('Please enter one option to calculate, (add, sub, mult, div)').trim().toLowerCase();
    if (optionList.includes(optionUser) === false) {
        alert(`Sorry, you did not enter any of the options. Try again`);
    }
}

for (;operandsUser !== null;) {
    operandsUser = prompt('2 number').split(',');
    if ((operandsUser.some((el) => isNaN(el))) === false) {
        firstOperand = +operandsUser[0]
        secondOperand = +operandsUser[1]
        break
    }
}
switch (optionUser) {
    case 'add':
        alert(`Operation result (${optionUser}):   ${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`);
        break
    case 'sub':
        alert(`Operation result (${optionUser}):   ${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`);
        break
    case 'mult':
        alert(`Operation result (${optionUser}):   ${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`);
        break
    case 'div':
        alert(`Operation result (${optionUser}):   ${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`);
        break
}

/*
Створити скрипт який повинен виконувати наступне:

1) питаємо у користувача, що він хоче зробити (add +, sub -, mult * , div / );
2) питаємо у користувача два числа через кому;
3) виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").

add
            додатково але не обовязково:

запитувати юзера (add, sub, mult, div) і ввипадку якщо він вів щось інше вивести алертом
"sorry, you did not enter any of the options"
й запитати його знову, й так поки юзер не введе add або sub або mult або div.
    */