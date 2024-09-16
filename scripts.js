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

        function setPosition() {
            const { top, left } = getRandomPosition();

            if (isFarEnough({ top, left })) {
                trollButton.style.top = `${top}px`;
                trollButton.style.left = `${left}px`;
            } else {
                // Recalcular si la posición no es válida
                setTimeout(setPosition, 100);
            }
        }

        setPosition();
        trollButton.style.animation = 'rainbow 2s infinite'; // Agrega animación de color arcoíris
    }

    moveTrollButton();

    // Movimiento tipo salvapantallas de DVD
    function dvdScreenSaver() {
        trollButton.classList.add('moving');
    }

    // Iniciar salvapantallas si el cursor está lejos
    document.addEventListener('mousemove', () => {
        trollButton.classList.remove('moving');
        moveTrollButton();
    });

    document.addEventListener('mouseleave', () => {
        dvdScreenSaver();
    });
});
