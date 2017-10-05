function trocar() {
    if (flag === 0) {
        p.innerHTML = 'Sou o paragrafo modificado';
        flag = 1;
    } else {
        p.innerHTML = 'Sou o paragrafo original';
        flag = 0;
    }
}

var flag = 0;
var p = document.getElementById('paragrafo');