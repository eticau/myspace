// Cambia el tema de la página
document.getElementById('theme-toggle').addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const themeButton = document.getElementById('theme-toggle');
    if (body.classList.contains('dark-mode')) {
        themeButton.textContent = '🌕'; // Cambia el ícono para el modo oscuro
    } else {
        themeButton.textContent = '🌑'; // Cambia el ícono para el modo claro
    }
});

// Mueve el botón troll de manera más suave y aleatoria
const trollButton = document.getElementById('troll-button');

function moveTrollButton() {
    const maxX = window.innerWidth - trollButton.offsetWidth;
    const maxY = window.innerHeight - trollButton.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    trollButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

trollButton.addEventListener('click', () => {
    moveTrollButton();
});

// Mueve el botón troll de manera aleatoria cuando la página se carga
window.onload = function() {
    setInterval(moveTrollButton, 2000);
};
