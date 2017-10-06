const pessoas = [
    { nome: 'Jon', idade: 23, peso: 70 },
    { nome: 'Cersei', idade: 38, peso: 60 },
    { nome: 'Sansa', idade: 19, peso: 58 },
    { nome: 'Tyrion', idade: 35, peso: 34 },
    { nome: 'Jaime', idade: 40, peso: 78 },
    { nome: 'Daenerys', idade: 18, peso: 56 },
    { nome: 'Khal Drogo', idade: 30, peso: 90 }
]

const filtraMapeia = (array) => {
    return array.filter((pessoa) => pessoa.idade > 20).map((pessoa) => {
        return {
            nome: pessoa.nome,
            peso: pessoa.peso
        }
    })
}

console.log(filtraMapeia(pessoas));