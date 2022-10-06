//variables declaration
const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');
const shoeBG = document.querySelector('.shoeBackground');




//change size on click
function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

//change color on click
function changeColor(){
let animationEnd = true;
let prevColor = 'blue';
    if (!animationEnd) return;
let primary = this.getAttribute('primary');
let color = this.getAttribute('color');
let shoe = document.querySelector(`.shoe[color="${color}"]`);
let gradient = document.querySelector(`.gradient[color="${color}"]`);
let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);


    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary',primary);

    shoes.forEach(s => s.classList.remove('show'));
    shoe.classList.add('show');

    gradients.forEach(g => g.classList.remove('first','second'));
    gradient.classList.add('first');
    gradient.classList.remove('second');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = false;

    gradient.addEventListener('animationend',()=>{
        animationEnd = true;
    });
}

sizes.forEach(size => size.addEventListener('click',changeSize));
colors.forEach(c => c.addEventListener('click',changeColor));

