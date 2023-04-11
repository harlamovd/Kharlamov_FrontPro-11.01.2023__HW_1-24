import Human from "./Human.js";
import Car from "./Сar.js";

// сделал два класса Human и Car. каждый клаз отдельным файлом как говорили на занятиях, и импортировал их.
// привожу пример работи методов класса. Я сделал проверку в Car на запись в _owner именно экземпляра класса Human,
// если это просто объект выдает ошибку. а так все по условию.
const student = new Human('Dima', 21);
const schoolboy = new Human('Vova', 16);
const teacher = {
    name: 'Oly',
    age: 31,
}

const ford = new Car('Ford', 'Fiesta', '2019', 'AE0102BC');
const renault = new Car('Renault', 'Duster', '2015', 'AE5821IA');
const bmw = new Car('BMW', 'X7', '2023', 'AE0001IA');

ford.setOwner(student);
ford.getInfo();

console.log('______________________')

renault.setOwner(schoolboy);
renault.getInfo();
console.log(renault._owner)

console.log('______________________')

bmw.setOwner(teacher);
bmw.getInfo();
console.log(bmw._owner)
