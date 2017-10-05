var js = document.getElementById('js');
var html = document.getElementById('html');
var css = document.getElementById('css');

function troca() {
    document.body.insertBefore(html, js);
}

function igual() {
    js.src = './html.png';
    html.src = './html.png';
    css.src = './html.png';
}

function pintaFundo() {
    document.body.style.backgroundColor = '#F00';
}

window.addEventListener('keydown', troca);
window.addEventListener('click', pintaFundo);
window.addEventListener('mousewheel', igual);