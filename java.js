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

document
  .getElementById("InscripSec")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = document.querySelector('form[name="frm"]');
    form.addEventListener("submit", (event) => {
      const fname = form.elements["fname"].value;
      const femail = form.elements["femail"].value;

      if (!fname || !femail) {
        event.preventDefault();
        alert("Porfavor, complete todos los campos");
      } else if (!validateEmail(femail)) {
        event.preventDefault();
        alert("Porfavor, inserte un correo valido");
      } else {
        alert("Gracias por ayudarnos a crecer!");
      }
    });

    //crear función validateEmail
    function validateEmail(femail) {
      const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]/;
      return re.test(String(femail).toLowerCase());
    }
  });
