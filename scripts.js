console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: true
      }
    })
    .to("img", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(
      ".section.hero",
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    );
});

document.addEventListener('DOMContentLoaded', function () {
    // Inicializa EmailJS con tu Public Key
    emailjs.init("3moVSUz7NDcZAn6QB");

    // Manejo del cambio de tema
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.src = document.body.classList.contains('dark-mode') ? 'images/sun_icon.png' : 'images/moon_icon.png';
    });

    // Manejo del cambio de idioma
    const languageToggle = document.getElementById('language-toggle');
    languageToggle.addEventListener('click', () => {
        document.querySelectorAll('[data-en]').forEach(el => {
            el.textContent = document.body.classList.contains('dark-mode') ? el.getAttribute('data-es') : el.getAttribute('data-en');
        });
        languageToggle.src = document.body.classList.contains('dark-mode') ? 'images/spain_flag.png' : 'images/united_states_flag.png';
    });

    // Manejo del envío del formulario
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario

        const formData = new FormData(contactForm);
        emailjs.sendForm('service_lixjepc', 'template_4wrbzhu', formData)
            .then(response => {
                document.getElementById('form-status').textContent = "Message sent successfully!";
                document.getElementById('thank-you-modal').style.display = 'block';
                document.getElementById('thank-you-overlay').style.display = 'block';
                contactForm.reset();
            }, error => {
                document.getElementById('form-status').textContent = "Failed to send message. Please try again.";
            });
    });

    // Cierra el modal de agradecimiento
    document.getElementById('close-thank-you').addEventListener('click', function () {
        document.getElementById('thank-you-modal').style.display = 'none';
        document.getElementById('thank-you-overlay').style.display = 'none';
    });

    // Inicializa AOS (Animate On Scroll)
    AOS.init();
});
