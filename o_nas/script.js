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

// Title Machine

let titleText = document.querySelector('.main .header h1');
const text = 'Kilka słów o naszej restauracji i produktach...';
let letterIndex = 0;

const titleMachine = () => {
    titleText.textContent += text[letterIndex]
    letterIndex++;

    if (letterIndex >= text.length) return

    setTimeout(titleMachine, 80);
}

setTimeout(titleMachine, 3000)

// Articles

if (window.matchMedia("screen and (orientation: landscape) and (min-width: 1024px)").matches) {
    window.sr = ScrollReveal();

    sr.reveal('.main img', {
        origin: 'left',
        distance: '200%',
        duration: 1000
    });

    sr.reveal('.main p', {
        origin: 'left',
        distance: '-200%',
        duration: 1500
    });

    sr.reveal('.main h2', {
        duration: 2000
    })
}