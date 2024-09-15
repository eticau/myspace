// Botón de tema oscuro/claro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '🌕' : '🌑';
});

// Botón troll
const trollButton = document.getElementById('troll-button');
let speed = 1; // Velocidad inicial del botón troll

// Movimiento automático del botón troll
function moveTrollButton() {
    let top = parseFloat(trollButton.style.top) || 50;
    let left = parseFloat(trollButton.style.left) || 50;

    // Actualiza la posición
    top += Math.random() * speed - speed / 2;
    left += Math.random() * speed - speed / 2;

    // Evita que el botón se salga de los límites
    if (top < 0) top = 0;
    if (left < 0) left = 0;
    if (top > window.innerHeight - trollButton.offsetHeight) top = window.innerHeight - trollButton.offsetHeight;
    if (left > window.innerWidth - trollButton.offsetWidth) left = window.innerWidth - trollButton.offsetWidth;

    // Aplica la nueva posición
    trollButton.style.top = `${top}px`;
    trollButton.style.left = `${left}px`;

    // Llama a la función en el siguiente frame
    requestAnimationFrame(moveTrollButton);
}

// Acelerar el botón cuando el mouse se acerca
trollButton.addEventListener('mouseover', () => {
    speed = 10; // Aumenta la velocidad al acercarse el mouse
});

trollButton.addEventListener('mouseout', () => {
    speed = 1; // Vuelve a la velocidad normal cuando el mouse se aleja
});

// Inicia el movimiento del botón troll
moveTrollButton();
