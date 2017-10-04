function changeImage() {
    img.src = './nodejs.png';
}

function changeImage2() {
    img.src = "./js.png";
}

function changeImage3() {
    document.body.insertBefore(img2, img);
}

function changeImage4() {
    document.body.style.backgroundColor = '#000066';
}


var img = document.getElementById('image1');
var img2 = document.getElementById('image2');

window.addEventListener('keydown', changeImage4);
window.addEventListener('scroll', changeImage2);