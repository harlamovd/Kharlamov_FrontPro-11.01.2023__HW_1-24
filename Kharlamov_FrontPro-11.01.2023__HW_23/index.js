let data = {
    Риба: {
        форель: {},
        лосось: {}
    },

    Дерево: {
        яблуня: {},
        магнолія: {}
    }
}

const divEl = document.querySelector('div');
for (let key in data) {
    let ul = document.createElement('ul');
    ul.innerHTML = key;
    let childUl = ul.cloneNode(false);
    ul.append(childUl);
    for (let el in data[key]) {
        let li = document.createElement('li');
        li.innerHTML = el;
        childUl.append(li);
    }
    divEl.append(ul);
}








































// методов обращения к узлам много, я так понял главные это querySelectorAll, querySelector,
// getElements и по классу или id. Также есть десятки разных комбинаций для обращения к узлу.
// Я практиковался и написал больше пяти для каждого, их можно и больше написать,
// но и так большинство это говнокодинг.
// я не присваивал узлы в переменные так как не работаю с ними а сразу выводил в консоль.


/*
console.log(`_____До DOM вузла <div>?_______`)

console.log (document.body.firstElementChild);
console.log (document.body.children[0]);
console.log (document.body.childNodes[1]);
console.log (document.querySelector("div"));
console.log (document.querySelector("body > div"));
console.log (document.querySelector("ul").previousElementSibling);
console.log (document.documentElement.children[1].children[0]);
console.log (document.getElementsByTagName('div')[0]);
console.log (document.querySelector("ul").previousElementSibling);


console.log(`_____До DOM вузла <ul>?_______`)

console.log (document.body.children[1]);
console.log (document.documentElement.children[1].children[1]);
console.log (document.querySelector('ul'));
console.log (document.querySelector("body > ul >:first-child").parentNode);
console.log (document.getElementsByTagName('ul')[0]);
console.log (document.querySelectorAll("li")[1].closest('ul'));
console.log (document.querySelector("div").nextElementSibling)


console.log(`_____До другого <li> (Петро)?_______`)

console.log (document.body.children[1].children[1]);
console.log (document.querySelectorAll("li")[1]);
console.log (document.querySelector("body > ul >:last-child"));
console.log (document.querySelector("ul >:last-child"));
console.log (document.querySelector("ul :last-child"));
console.log (document.documentElement.children[1].children[1].children[1]);
console.log (document.getElementsByTagName('li')[1]);
console.log (document.querySelector('li:nth-child(2)'));
*/
