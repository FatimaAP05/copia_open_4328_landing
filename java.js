const menuBTN = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBTN.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});