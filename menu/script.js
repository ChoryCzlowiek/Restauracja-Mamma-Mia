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

// Restaurant Menu

const menu_buttons = [...document.querySelectorAll('.menu_item')];
const menu_lists = [...document.querySelectorAll('.show_menu .menu_list')];
const exits = [...document.querySelectorAll('.exit')];

function showRestMenu() {
    const activeId = this.id;
    const activeMenu = menu_lists.find(active => active.classList.contains(activeId));
    activeMenu.classList.add('active_show_menu')
}

function hideRestMenu() {
    this.parentNode.classList.remove('active_show_menu');
}

menu_buttons.forEach(button => button.addEventListener('click', showRestMenu))
exits.forEach(exit => exit.addEventListener('click', hideRestMenu));