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

// Contact Button

const btn = document.querySelector('.contact button');

function activeButton() {
    btn.classList.add('active_button');
    btn.textContent = 'MammaMia';
}

function unactiveButton() {
    btn.classList.remove('active_button');
    btn.textContent = 'Wyślij';
}

btn.addEventListener('mouseover', activeButton)
btn.addEventListener('mouseout', unactiveButton)