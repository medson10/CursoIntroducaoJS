function filtra(array) {
    return array.filter(function(i) {
        return i % 2 === 0;
    }).sort(function(a, b) {
        return a - b;
    });
}

var a = [39, 84, 12, 15, 89, 784, 781, 764, 3521, 908, 782];

console.log(filtra(a));