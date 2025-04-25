const menuBTN = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');


menuBTN.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});


document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

