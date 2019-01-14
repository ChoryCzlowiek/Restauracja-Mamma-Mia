// Menu

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const exitMenu = document.querySelector('.exit_menu');
const txtMenu = [...document.querySelectorAll('.nav ul li a')];


function showMenu() {
    this.classList.add('active_burger');
    menu.classList.add('active_menu');
    txtMenu.forEach(a => a.classList.add('active_menu_text'))
}

function hideMenu() {
    burger.classList.remove('active_burger');
    menu.classList.remove('active_menu');
    txtMenu.forEach(a => a.classList.remove('active_menu_text'))
}

burger.addEventListener('click', showMenu);
exitMenu.addEventListener('click', hideMenu);

// Arrows

const leftDivArrows = document.querySelector('.left_arrows');
const rightDivArrows = document.querySelector('.right_arrows');

function showDiv() {
    this.style.opacity = '1';
}

function hideDiv() {
    this.style.opacity = '0';
}

leftDivArrows.addEventListener('mouseover', showDiv)
leftDivArrows.addEventListener('mouseout', hideDiv)
rightDivArrows.addEventListener('mouseover', showDiv)
rightDivArrows.addEventListener('mouseout', hideDiv)


// Change Images

const images = ["images/galeria1.jpg", "images/galeria2.jpg", "images/galeria3.jpg", "images/galeria4.jpg", "images/galeria5.jpg"]
const leftArrows = document.querySelector('.left_arrows');
const rightArrows = document.querySelector('.right_arrows');
const circles = [...document.querySelectorAll('.circles span')];
const activeImg = document.querySelector('.gallery .image1 img');

let active = 0;

function changeCircle() {
    let activeCircle = circles.findIndex(active => active.classList.contains('active_circle'));
    circles[activeCircle].classList.remove('active_circle');
    circles[active].classList.add('active_circle')
}

function previousImage() {
    active--;
    if (active <= -1) {
        active = 4;
    }
    activeImg.src = images[active];
    changeCircle()
}

function nextImage() {
    active++;
    if (active >= images.length) {
        active = 0;
    }
    activeImg.src = images[active];
    changeCircle()
}


leftArrows.addEventListener('click', previousImage)
rightArrows.addEventListener('click', nextImage)