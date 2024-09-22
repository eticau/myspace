document.addEventListener('DOMContentLoaded', function () {
    // Manejo del cambio de tema
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.src = document.body.classList.contains('dark-mode') ? 'images/sun_icon.png' : 'images/moon_icon.png';
    });

    // Manejo del cambio de idioma
    const languageToggle = document.getElementById('language-toggle');
    languageToggle.addEventListener('click', () => {
        const isSpanish = languageToggle.dataset.lang === 'es';
        document.querySelectorAll('[data-en]').forEach(el => {
            el.textContent = isSpanish ? el.getAttribute('data-en') : el.getAttribute('data-es');
        });
        languageToggle.dataset.lang = isSpanish ? 'en' : 'es';
        languageToggle.src = isSpanish ? 'images/united_states_flag.png' : 'images/spain_flag.png';
    });

    // Initialize and add the map
    const map = L.map('map').setView([48.8584, 2.2945], 14); // Coordenadas de ejemplo

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    L.marker([48.8584, 2.2945]).addTo(map); // Marcador en la ubicación

    // Inicializa AOS (Animate On Scroll)
    AOS.init();
});
