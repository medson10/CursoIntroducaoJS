function filtra(array) {
    array.forEach(function(elem, index) {
        if (elem % 2) {
            array.splice(index, 1);
        }
    })
    array.sort(function(a, b) {
        return a - b;
    });
    return array;

}

var a = [39, 84, 12, 15, 89, 784, 781, 764, 3521, 908, 782];

console.log(filtra(a));