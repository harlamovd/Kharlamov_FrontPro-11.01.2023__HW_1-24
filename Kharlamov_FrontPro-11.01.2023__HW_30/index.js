const arrHomeWork = ['1','2',['1.1','1.2','1.3'],'3'];
const arrMy = [
    '1',
    '2',
    [
        '1:2',
        '2:2',
        '3:2',
        '4:2',
        [
            '1:3',
            '2:3',
            [
                '1:4',
                '2:4',
                '3:4',
                '5:4'
            ],
            '3:3'
        ],
        '5:2'
    ],
    '3',
    '4'
];

//Вариант №1
// Вот и практическое применение Рекурсии)) такой способ позволяет работать с любой глубиной вложенности.
// Вначале я просто решил сделать по принципу метода map, перебрать массив и изменить элементы добавив теги,
// а потом просто переводить в строку методом join(' ').
// сама функция не возвращает узел, она возвращает строку с HTML разметкой, которую можно потом вставить как узел.
// можно сделать что бы функция создавала узел, если надо. я не делал что бы удобней демонстрацию сделать.

function generateList (arr) {
    let res = [];
    for (let el of arr) {
        if (Array.isArray(el)){
            res.push(`<li> ${generateList(el)} </li>`)
        } else if (arr.indexOf(el) === 0) {
            res.push(`<ul> <li> ${el} </li>`);
        } else if (arr.indexOf(el) === arr.length -1) {
            res.push(`<li> ${el} </li> </ul>`);
        } else {
            res.push(`<li> ${el} </li>`);
        }
    }
    return res.join(' ');
}
//Вариант №2
// походу реализации первого варианта, я подумал зачем мне переделывать элементы массива а потом еще массив переделывать
// в стоку, если я сразу могу конкатенировать результат обработки в строку, и тогда не нужен будет join(' ').
// я решил сделать второй вариант, первый не удалял, он тоже имеет право на жизнь)))
function generateListTwo (arr) {
    let res = '';
    for (let el of arr) {
        if (Array.isArray(el)){
            res += `<li> ${generateListTwo(el)} </li> `;
        } else if (arr.indexOf(el) === 0) {
            res += `<ul> <li> ${el} </li> `;
        } else if (arr.indexOf(el) === arr.length -1) {
            res += ` <li> ${el} </li> </ul>`;
        } else {
            res += `<li> ${el} </li> `;
        }
    }
    return res;
}

//Вариант №3
// на следующий день я дорадотал функцию, облегчив ее и обновил ГИТ.
function generateListThree (arr) {
    let res = '';
    for (let el of arr) {
        if (Array.isArray(el)){
            res += `<li> ${generateListTwo(el)} </li> `;
        } else {
            res += `<li> ${el} </li> `;
        }
    }
    return `<ul> ${res} </ul>`;
}
//Вариант №4
// этот вариант также на следующий день слделал, тут через метот работаю reduce, в оболочке функции,
// так как необходима Рекурсия, для перебора бесконечно вложеного массива. Но

function generateListFour(arr) {
    const res = arr.reduce((ul, el) => {
        if (Array.isArray(el)) {
            return `${ul} ${generateListFour(el)}`;
        } else {
            return `${ul} <li> ${el} </li>`;
        }
    }, '');
    return `<ul> ${res} </ul>`;
}
document.querySelector('#arrHomeWork_one').insertAdjacentHTML('beforeend', generateList(arrHomeWork));
document.querySelector('#arrHomeWork_two').insertAdjacentHTML('beforeend', generateListTwo(arrHomeWork));
document.querySelector('#arrMy_one').insertAdjacentHTML('beforeend', generateList(arrMy));
document.querySelector('#arrMy_two').insertAdjacentHTML('beforeend', generateListTwo(arrMy));
document.querySelector('#arrMy_three').insertAdjacentHTML('beforeend', generateListThree(arrMy));
document.querySelector('#arrMy_four').insertAdjacentHTML('beforeend', generateListFour(arrMy));
