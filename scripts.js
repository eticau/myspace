const trollButton = document.getElementById('troll-button');
let speedX = 3, speedY = 3;
let positionX = Math.random() * window.innerWidth;
let positionY = Math.random() * window.innerHeight;
let isNearCursor = false; // Bandera para evitar el cambio de color constante

function moveTrollButton() {
    const buttonRect = trollButton.getBoundingClientRect();
    
    // Cambiar dirección y color si choca con los bordes
    if (buttonRect.left + buttonRect.width >= window.innerWidth || buttonRect.left <= 0) {
        speedX *= -1;
        changeButtonColor();
    }
    if (buttonRect.top + buttonRect.height >= window.innerHeight || buttonRect.top <= 0) {
        speedY *= -1;
        changeButtonColor();
    }

    // Mover el botón
    positionX += speedX;
    positionY += speedY;

    trollButton.style.left = `${positionX}px`;
    trollButton.style.top = `${positionY}px`;

    requestAnimationFrame(moveTrollButton);
}

// Función para cambiar el color del botón solo cuando rebota en los bordes
function changeButtonColor() {
    const colors = ['#ff4d4d', '#ff6f61', '#ffcc00', '#66ff66', '#0099ff', '#9966ff', '#ff33cc'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    trollButton.style.backgroundColor = randomColor;
}

// Función para cambiar la velocidad si el cursor se acerca
function checkCursorProximity(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const distance = Math.hypot(mouseX - positionX, mouseY - positionY);

    if (distance < 200 && !isNearCursor) {
        speedX = Math.sign(speedX) * 10;
        speedY = Math.sign(speedY) * 10;
        isNearCursor = true; // Cambia el estado solo cuando esté cerca
    } else if (distance >= 200 && isNearCursor) {
        speedX = Math.sign(speedX) * 3;
        speedY = Math.sign(speedY) * 3;
        isNearCursor = false; // Cambia el estado cuando ya no esté cerca
    }
}

// Escuchar el evento del mouse para detectar la proximidad
window.addEventListener('mousemove', checkCursorProximity);

// Iniciar el movimiento del botón troll
moveTrollButton();
