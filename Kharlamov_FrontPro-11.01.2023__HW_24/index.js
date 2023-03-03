// Решил сделать через циклы, а не напрямую изменять.

// Вариант №1 - сделал коллекцию и ее перебрал (for of),
// получается что перекрашивается  ячейка с номером который соответствует номеру строки
// ввел счетчик за циклом что бы не перетирался.

const tableNode =  document.querySelectorAll("tr");
let i = 0;
for (let tr of tableNode) {
    for (let td of tr.children) {
        if (td === tr.children[i]) {
            td.style.background = 'red';
        }
    }
    i +=1;
}

//  Вариант №2 - тут решил попробовать перевести коллекцию в массив, что бы работать с  методами.
// forEach позволяет оперировать индексами, что облегчило задачу.
// тут я меняю цвет шрифта на белый, что бы не переписывать работы предыдущего цикла.


const tableNodeArr =  Array.from(tableNode);
tableNode.forEach((el, index) => {
    let childNode = Array.from(el.querySelectorAll("td"));
    childNode[index].style.color = 'white';
});

