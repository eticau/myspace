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
        const currentLang = languageToggle.getAttribute('data-lang');
        const newLang = currentLang === 'en' ? 'es' : 'en';
        
        document.querySelectorAll('[data-en]').forEach(el => {
            el.textContent = newLang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-es');
        });
        
        languageToggle.setAttribute('data-lang', newLang);
        languageToggle.src = newLang === 'en' ? 'images/united_states_flag.png' : 'images/spain_flag.png';
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

    // Initialize and add the map using OpenStreetMap
    function initMap() {
        const map = L.map('map').setView([-34.61, -58.38], 13); // Coordenadas de Buenos Aires

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const marker = L.marker([-34.61, -58.38]).addTo(map);
    }

    initMap(); // Llama a la función para inicializar el mapa

    // Inicializa AOS (Animate On Scroll)
    AOS.init();
});
