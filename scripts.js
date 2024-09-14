// Botón para cambiar entre modo oscuro y claro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Cambiar el ícono del botón
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '🌕';  // Cambia a un ícono de sol para el modo claro
    } else {
        themeToggle.textContent = '🌑';  // Cambia a un ícono de luna para el modo oscuro
    }
});

// Mostrar/ocultar el chatbot en función del desplazamiento
document.addEventListener('scroll', () => {
    const linksSection = document.getElementById('links');
    if (window.scrollY > 100) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});
