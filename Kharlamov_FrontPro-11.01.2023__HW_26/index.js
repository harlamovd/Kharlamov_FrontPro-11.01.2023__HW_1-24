// Напишіть код, щоб вставити <li>2</li><li>3</li> між двома <li>.

// Вариант №1
document.querySelector('#one').insertAdjacentHTML(
    'afterend', '<li id="two">2</li><li id="three">3</li>'
);

// Вариант №2
/*
let liTwo = document.createElement('li');
let liThree = document.createElement('li');
liTwo.id = 'two';
liTwo.innerHTML = '2';
liThree.id = 'three';
liThree.innerHTML = '3';
document.querySelector('#one').after(liTwo, liThree);
*/
