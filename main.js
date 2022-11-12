/* Menus */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
/* Carrito */
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', () => {
    if (!aside.classList.contains('inactive')) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
});

hamburgerMenu.addEventListener('click', () => {
    if (!aside.classList.contains('inactive')) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
});

menuCarritoIcon.addEventListener('click', () => {
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    } else if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive');
})