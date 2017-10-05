function insere() {
    h1.innerHTML = input.value;
}

var h1 = document.getElementById('h1');
var input = document.getElementById('input');

//Se estiver usando o evento oninput ta tag input no html
//não é necessario usar o window.addEventListener
window.addEventListener('keydown', insere);