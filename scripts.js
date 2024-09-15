// Scripts para el tema oscuro y el botón troll

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const trollButton = document.getElementById('troll-button');
    let darkMode = false;
    
    // Cambio de tema
    themeToggle.addEventListener('click', () => {
        darkMode = !darkMode;
        document.body.classList.toggle('dark-mode', darkMode);
        themeToggle.textContent = darkMode ? '🌕' : '🌑';
    });

    // Movimiento aleatorio del botón troll
    function moveTrollButton() {
        let top = parseFloat(trollButton.style.top) || 50;
        let left = parseFloat(trollButton.style.left) || 50;
        let mouseX = event.clientX;
        let mouseY = event.clientY;

        // Actualiza la posición evitando el cursor
        do {
            top += Math.random() * 100 - 50;
            left += Math.random() * 100 - 50;
        } while (Math.abs(mouseX - left) < 100 && Math.abs(mouseY - top) < 100);

        if (top < 0) top = 0;
        if (left < 0) left = 0;
        if (top > window.innerHeight - trollButton.offsetHeight) top = window.innerHeight - trollButton.offsetHeight;
        if (left > window.innerWidth - trollButton.offsetWidth) left = window.innerWidth - trollButton.offsetWidth;

        trollButton.style.top = `${top}px`;
        trollButton.style.left = `${left}px`;

        requestAnimationFrame(moveTrollButton);
    }

    moveTrollButton();
});
