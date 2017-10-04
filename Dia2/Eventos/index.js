function changeParagraph() {
    var p = document.getElementById('paragrafo1');
    if (flag === 0) {
        p.innerHTML = "Segundo dia de curso de Javascript";
        flag = 1;
    } else {
        p.innerHTML = "Primeiro dia de curso de Javascript";
        flag = 0;
    }

}

var flag = 0;