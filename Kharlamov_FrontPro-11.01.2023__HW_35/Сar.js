import Human from "./Human.js";
class Car {
    _owner;
    constructor(brand, model, yearBuilt, licensePlate) {
        this.carBrand = brand;
        this.carModel = model;
        this.yearBuilt = yearBuilt;
        this.licensePlate = licensePlate;
    }
    setOwner (human) {
        if (!(human instanceof Human)) {   // проверка на экземпляр класа Human
            console.log(`Error: is not instance class Human`)
        } else if (human.age < 18){
            console.log(`${human.name} too young!`)
        } else {
            this._owner = human;
        }
    }
    getInfo () {
        console.log('Car Brand: ' + this.carBrand + ',  Car Model: ' + this.carModel +
            ',  Year of car manufacture: ' + this.yearBuilt + ',  Сar license plate: ' + this.licensePlate)
        if (this._owner) {
            return this._owner.humanInfo();
        } else {
            console.log(`No owner`)
        }
    }
}
export default Car