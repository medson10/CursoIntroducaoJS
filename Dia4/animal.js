class Animal {
    constructor(name) {
        this._name = name
    }

    getName() {
        return this._name
    }

    setName(name) {
        this._name = name
    }
}

const animal = new Animal('dog')
animal.getName() // dog
animal.setName('cat')
animal.getName() // cat

animal.name = 'cat';