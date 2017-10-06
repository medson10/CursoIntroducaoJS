const palavras = 'Sou sou mas nao sou nao sendo eu mas sendo outro eu nao sou eu sou outro'.split(' ');

const agrupaOrdena = (array) => {
    let result = [];
    array.forEach((palavra) => {
        let index = result.findIndex((item) => {
            return item.palavra === palavra;
        });
        if (index !== -1) {
            result[index].ocorrencias += 1;
        } else {
            result.push({ palavra: palavra, ocorrencias: 1 });
        }
    })
    result.sort((a, b) => b.ocorrencias - a.ocorrencias);
    for (item of result) {
        console.log(item);
    }
}

agrupaOrdena(palavras);