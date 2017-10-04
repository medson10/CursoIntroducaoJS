function soma(array) {
    return array.reduce(function(total, elem) { return total += elem; })
}

// function soma(array) {
//     return array.reduce((total, elem) => { return (total += elem); });
// }

var a = [2, 3, 89, 8012, 893, 1092, 43877, 1082, 7943, 8912, 901, 7438];
console.log(soma(a));