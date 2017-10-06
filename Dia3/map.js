let persons = [{ name: 'Jon', age: 28, height: 1.8 }, { name: 'Zola', age: 27, height: 1.7 }, { name: 'Rob', age: 30, height: 1.8 }, { name: 'Cersei', age: 40, height: 1.7 }, { name: 'Sansa', age: 25, height: 1.7 }, { name: 'Hound', age: 48, height: 1.8 }]
let personsMapped = persons.map((a) => {
    return {
        name: a.name,
        age: a.age
    }
})
console.log(personsMapped);