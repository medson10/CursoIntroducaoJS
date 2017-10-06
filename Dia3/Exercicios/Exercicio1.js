const raios = [1.8, 5.6, 2.4, 7, 9.1, 6.5, 10];

const calculaArea = (array) => {
    let circulos = [];
    for (raio of array) {
        circulos.push({ raio: raio, area: Math.PI * (raio ** 2) });
    }
    for (circulo of circulos) {
        console.log(circulo);
    }
}

calculaArea(raios);