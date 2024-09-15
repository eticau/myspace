// script.js

// Cambio de tema
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const themeIcon = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.textContent = '🌕'; // Ícono de sol para el modo oscuro
    } else {
        themeIcon.textContent = '🌑'; // Ícono de luna para el modo claro
    }
});

// Botón troll
const trollButton = document.getElementById('troll-button');

// Variables de posición aleatoria
let randomX = Math.floor(Math.random() * window.innerWidth);
let randomY = Math.floor(Math.random() * window.innerHeight);

// Mueve el botón troll a una posición aleatoria cuando el mouse se acerca
trollButton.addEventListener('mouseover', () => {
    randomX = Math.floor(Math.random() * (window.innerWidth - trollButton.offsetWidth));
    randomY = Math.floor(Math.random() * (window.innerHeight - trollButton.offsetHeight));
    trollButton.style.left = `${randomX}px`;
    trollButton.style.top = `${randomY}px`;
});

// Movimiento del botón troll cuando el mouse se aleja
document.addEventListener('mousemove', (event) => {
    if (!trollButton.matches(':hover')) {
        trollButton.style.transition = 'transform 0.3s ease, left 0.3s ease, top 0.3s ease';
        trollButton.style.left = `${Math.floor(Math.random() * (window.innerWidth - trollButton.offsetWidth))}px`;
        trollButton.style.top = `${Math.floor(Math.random() * (window.innerHeight - trollButton.offsetHeight))}px`;
        trollButton.style.transform = `scale(${Math.random() * (1.5 - 1) + 1})`;
    }
});

// Hacer que el botón troll salte a una posición más lejana al intentar hacer clic
trollButton.addEventListener('mousedown', () => {
    trollButton.style.left = `${Math.floor(Math.random() * (window.innerWidth - trollButton.offsetWidth))}px`;
    trollButton.style.top = `${Math.floor(Math.random() * (window.innerHeight - trollButton.offsetHeight))}px`;
});
