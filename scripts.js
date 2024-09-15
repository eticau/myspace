// Cambiar entre modo oscuro y claro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '🌕' : '🌑';
});

// Botón troll
const trollButton = document.getElementById('troll-button');

trollButton.addEventListener('mouseover', () => {
    // Generar una nueva posición aleatoria
    const newTop = Math.random() * (window.innerHeight - trollButton.offsetHeight);
    const newLeft = Math.random() * (window.innerWidth - trollButton.offsetWidth);

    // Mover el botón a la nueva posición
    trollButton.style.top = `${newTop}px`;
    trollButton.style.left = `${newLeft}px`;
});
