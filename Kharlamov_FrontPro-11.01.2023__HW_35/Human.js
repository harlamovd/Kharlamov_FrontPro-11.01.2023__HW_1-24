class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    humanInfo() {
        console.log(`${this.name}, ${this.age} years old!`)
    }
}

export default Human