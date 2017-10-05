function remover() {
    var element = document.getElementById(input.value);
    if (input.value !== 'input') {
        element.parentNode.removeChild(element);
    }
    input.value = '';
}

var input = document.getElementById('input');