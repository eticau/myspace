document.addEventListener('DOMContentLoaded', function () {
    // Inicializa EmailJS con tu Public Key
    emailjs.init("3moVSUz7NDcZAn6QB");

    // Manejo del cambio de tema
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            themeToggle.src = document.body.classList.contains('dark-mode') ? 'images/sun_icon.png' : 'images/moon_icon.png';
        });
    }

    // Typed.js para el texto animado
    $("#typed").typed({
        strings: ["a web developer", "a geek", "a human being"],
        typeSpeed: 50,
        backDelay: 600,
        loop: true
    });

    // Manejo del envío del formulario
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Previene el comportamiento por defecto del formulario
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = contactForm.querySelector('textarea').value;

            emailjs.send("service_lixjepc", "template_4wrbzhu", {
                name: name,
                email: email,
                message: message
            }).then(function () {
                alert('Mensaje enviado con éxito!');
                contactForm.reset(); // Resetea el formulario
            }, function (error) {
                alert('Error al enviar el mensaje: ' + JSON.stringify(error));
            });
        });
    }
});
