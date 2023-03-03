function seyHello(name) {
    if (arguments.length > 1) {
        let helloAll = 'Hello guys';
        for ( let item of arguments) {
            helloAll += `, ${item}`;
        }
        return helloAll + '!';
    }
    return `Hello ${name}!`
}
alert(seyHello("Dima"));
alert(seyHello('Dima', 'Petro', 'Ivan', 'Olga'));


/*
Написати функцію яка буде мати один аргумент
function seyHello(name) { ... }

Й виводить алерт в випадку якщо викликали
seyHello('Petro');
Hello Petro!

А якщо
seyHello('Petro', 'Ivan', 'Olga');
Hello guys, Petro, Ivan, Olga!*/
