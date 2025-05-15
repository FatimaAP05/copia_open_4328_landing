const menuBTN = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

var check=document.querySelector('.check');
check.checked = localStorage.getItem("idioma") === "es"; 

check.addEventListener('change', function() {
    let id = check.checked;
    localStorage.setItem("idioma", id ? "es" : "en");
    location.href = id ? "/es/index.html" : "/index.html";
});


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

