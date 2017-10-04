function maisVelha(array) {
    var maiorIdade = 0;
    var i = 0;
    array.forEach(function(p, index) {
        if (p.idade > maiorIdade) {
            maiorIdade = p.idade;
            i = index;
        }
    })

    return array[i];
}

var pessoas = [{ idade: 10 }, { idade: 55 }, { idade: 27 }, { idade: 31 }, { idade: 20 }, { idade: 90 }, { idade: 80 }];
console.log(maisVelha(pessoas));