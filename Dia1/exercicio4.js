function soma(array) {
    var sum = 0;
    array.forEach(function(e) {
        sum += e;
    })
    return sum;
}

var a = [2, 3, 89, 8012, 893, 1092, 43877, 1082, 7943, 8912, 901, 7438];

console.log(soma(a));