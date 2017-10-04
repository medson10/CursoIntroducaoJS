function verifica(string, regex) {
    console.log(regex.test(string));
}

var rg = '45.983.891-X';
var formato = /^\d\d\.\d\d\d\.\d\d\d\-(\d|X)$/;

verifica(rg, formato);