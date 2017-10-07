class Animal {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}

const animal = new Animal("dog");
animal.name; // dog
animal.name = 'cat';
animal.name; // cat