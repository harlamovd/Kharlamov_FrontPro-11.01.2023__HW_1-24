// сделал так что бы работало как в задании, можно добавить методы добавление начинки,
// проверку на наличие начинки, и тд. Просто времени не хватает.


class Hamburger {
    constructor(size, stuffing) {
        this._price = size.price + stuffing.price
        this._calories = size.calories + stuffing.calories
    }
    static SIZE_SMALL = {
        price: 50,
        calories: 20,
    }
    static SIZE_BIG = {
        price: 100,
        calories: 40,
    }
    static STUFFING_CHEESE = {
        price: 10,
        calories: 20,
    }
    static STUFFING_SALAD = {
        price: 20,
        calories: 5,
    }
    static STUFFING_POTATO = {
        price: 15,
        calories: 10,
    }
    static TOPPING_SAUCE = {
        price: 15,
        calories: 0,
    }
    static TOPPING_MAYO = {
        price: 20,
        calories: 5,
    }
    addTopping = (topping) => {
        this._price += topping.price;
        this._calories += topping.calories;
    }
    calculatePrice = () => {
        return this._price
    };
    calculateCalories = () => {
        return this._calories
    };
}
// маленький гамбургер з начинкою з сиру
let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log('Calories: ' + hamburger.calculateCalories ());

// скільки коштує
console.log('Price: ' + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE)

// А скільки тепер коштує?
console.log('Price with sauce: ' + hamburger.calculatePrice())