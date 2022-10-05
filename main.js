//variables declaration
const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');


//change size on click
function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

//change color on click
function changeColor(){
let primary = this.getAttribute('primary');
let color = this.getAttribute('color');
let shoe = document.querySelector(`.shoe[color="${color}"]`);
let gradient = document.querySelector(`.gradient[color="${color}"]`);


    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary',primary);

    shoes.forEach(s => s.classList.remove('show'));
    shoe.classList.add('show');

    gradients.forEach(g => g.classList.remove('first'));
    gradient.classList.add('first');
}

sizes.forEach(size => size.addEventListener('click',changeSize));
colors.forEach(c => c.addEventListener('click',changeColor));

