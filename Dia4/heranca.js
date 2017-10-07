class Animal {
    constructor(name) {
        this._name = name;
    }

    speak() {
        console.log(`${this._name} makes a noise`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this._name} barks`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this._name} meows`);
    }
}

// const dog = new Dog('Rex');
// dog.speak(); // Rex barks

// const cat = new Cat('Napoleon');
// cat.speak(); // Napoleonmeows

let string = `nome`;
console.log(string);