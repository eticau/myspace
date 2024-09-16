// Tema oscuro y claro
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Botón troll que se mueve como salvapantallas
const trollButton = document.getElementById('troll-button');
let speedX = 3, speedY = 3;
let positionX = Math.random() * window.innerWidth;
let positionY = Math.random() * window.innerHeight;
let mouseX = 0, mouseY = 0;

// Detectar la posición del cursor una sola vez
window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function moveTrollButton() {
    const buttonRect = trollButton.getBoundingClientRect();
    
    // Cambiar dirección si choca con los bordes
    if (buttonRect.left + buttonRect.width >= window.innerWidth || buttonRect.left <= 0) speedX *= -1;
    if (buttonRect.top + buttonRect.height >= window.innerHeight || buttonRect.top <= 0) speedY *= -1;

    // Mover el botón
    positionX += speedX;
    positionY += speedY;

    trollButton.style.left = `${positionX}px`;
    trollButton.style.top = `${positionY}px`;

    // Acelerar si el cursor se acerca
    const distance = Math.hypot(mouseX - positionX, mouseY - positionY);

    if (distance < 200) {
        speedX = Math.sign(speedX) * 10;
        speedY = Math.sign(speedY) * 10;
    } else {
        speedX = Math.sign(speedX) * 3;
        speedY = Math.sign(speedY) * 3;
    }

    // Limitar la frecuencia de actualización para mejorar el rendimiento
    setTimeout(() => {
        requestAnimationFrame(moveTrollButton);
    }, 16); // Aproximadamente 60 FPS
}

// Iniciar el movimiento del botón troll
moveTrollButton();
