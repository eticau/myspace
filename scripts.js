// Cambio de tema claro/oscuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '🌕';
    } else {
        themeToggle.textContent = '🌑';
    }
});

// Barra de Progreso de Desplazamiento
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    document.getElementById('progress-bar').style.width = scrolled + '%';
});
