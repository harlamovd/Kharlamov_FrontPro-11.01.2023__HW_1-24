/*
Функция removeElement проверяет на наличие указанного элемента для удаления, если такого нет выводит сообщение,
если такой есть удаляет его с массива, при этом сам массив изменяется, как написано в задании. Можно сделать
дубликат тогда функция не будет изменять массив.
Функцию я запустил отдельно в коде, чтобы в console.log("Edited arrayUser:  " + arrayUser) - вывести чисто значения arrayUser
и показать то, что он изменился.

*/

const arrayUser = [1, 2, 3, 4, 5, 6, 7];
console.log("Original arrayUser:  " + arrayUser);
function removeElement (array, item) {
    if (array.indexOf(item) === -1) {
        return "This element does not exist"
    }
    array.splice(array.indexOf(item),1);
    return array
}
removeElement(arrayUser, 5);
console.log("Edited arrayUser:  " + arrayUser);

/*
Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
*/
