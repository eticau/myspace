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
        const minDistance = 100; // Distancia mínima del cursor

        function getRandomPosition() {
            const top = Math.random() * (window.innerHeight - trollButton.offsetHeight);
            const left = Math.random() * (window.innerWidth - trollButton.offsetWidth);
            return { top, left };
        }

        function isFarEnough(position) {
            return Math.abs(event.clientY - position.top) > minDistance &&
                   Math.abs(event.clientX - position.left) > minDistance;
        }

        function animateTrollButton() {
            const { top, left } = getRandomPosition();

            if (isFarEnough({ top, left })) {
                trollButton.style.top = `${top}px`;
                trollButton.style.left = `${left}px`;
            } else {
                // Recalcular si la posición no es válida
                setTimeout(animateTrollButton, 100);
            }
        }

        animateTrollButton();
    }

    moveTrollButton();

    // Movimiento tipo salvapantallas de DVD
    function dvdScreenSaver() {
        const colors = ['#ff4081', '#e91e63', '#9c27b0', '#3f51b5', '#2196f3', '#4caf50', '#ffeb3b', '#ff9800'];
        let colorIndex = 0;

        function moveButton() {
            const randomX = Math.random() * (window.innerWidth - trollButton.offsetWidth);
            const randomY = Math.random() * (window.innerHeight - trollButton.offsetHeight);

            trollButton.style.left = `${randomX}px`;
            trollButton.style.top = `${randomY}px`;
            trollButton.style.backgroundColor = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;

            setTimeout(moveButton, 2000); // Cambia de posición y color cada 2 segundos
        }

        moveButton();
    }

    // Iniciar salvapantallas si el cursor está lejos
    document.addEventListener('mousemove', () => {
        trollButton.classList.remove('moving');
        dvdScreenSaver();
    });

    document.addEventListener('mouseleave', () => {
        trollButton.classList.add('moving');
    });
});
