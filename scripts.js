document.addEventListener('DOMContentLoaded', function () {
    // Inicializa EmailJS con tu Public Key
    emailjs.init("3moVSUz7NDcZAn6QB");

    // Inicialización del mapa usando las coordenadas correctas
    const map = L.map('map').setView([-32.96180, -60.65878], 10); // Coordenadas de Rosario, Argentina

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Puedes agregar un marcador
    const marker = L.marker([-32.96180, -60.65878]).addTo(map);
    marker.bindPopup("<b>Hola!</b><br>Este es un marcador.").openPopup();

    // Manejo del cambio de tema
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.querySelector('img').src = document.body.classList.contains('dark-mode') ? 'images/sun_icon.png' : 'images/moon_icon.png';
    });

    // Manejo del cambio de idioma
    const languageToggle = document.getElementById('language-toggle');
    languageToggle.addEventListener('click', () => {
        const lang = languageToggle.getAttribute('data-lang');
        const newLang = lang === 'en' ? 'es' : 'en';
        languageToggle.setAttribute('data-lang', newLang);

        document.querySelectorAll('[data-en]').forEach(el => {
            el.textContent = newLang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-es');
        });

        languageToggle.querySelector('img').src = newLang === 'en' ? 'images/united_states_flag.png' : 'images/argentina_flag.png';
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

    // Cerrar modal al hacer clic fuera
    document.getElementById('thank-you-overlay').addEventListener('click', function () {
        document.getElementById('thank-you-modal').style.display = 'none';
        this.style.display = 'none';
    });

    // Inicializa AOS (Animate On Scroll)
    AOS.init();
});
