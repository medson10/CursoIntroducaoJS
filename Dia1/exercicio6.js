function filtra(array) {
    var filtered = array.filter(function(i) {
        return i % 2 === 0;
    })
    filtered.sort(function(a, b) {
        return a - b;
    });
    return filtered;
}

var a = [39, 84, 12, 15, 89, 784, 781, 764, 3521, 908, 782];