// Kai Thunberg Title: script.js. 12/10/2023


document.addEventListener('DOMContentLoaded', function () {
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var menuContainer = document.getElementById('menuContainer');

    hamburgerMenu.addEventListener('click', function () {
        document.body.classList.toggle('menu-open');
    });
});