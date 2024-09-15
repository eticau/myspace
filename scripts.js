document.addEventListener('DOMContentLoaded', function() {
    const trollBtn = document.querySelector('.troll-btn');
    let cursorPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Actualiza la posición del cursor
    document.addEventListener('mousemove', (e) => {
        cursorPos = { x: e.clientX, y: e.clientY };
    });

    // Cambia la posición del botón troll a una posición aleatoria 
    function moveTrollButton() {
        const buttonRect = trollBtn.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Generar posiciones aleatorias
        let newLeft = Math.random() * (windowWidth - buttonRect.width);
        let newTop = Math.random() * (windowHeight - buttonRect.height);

        // Asegurarse de que el botón no esté debajo del cursor
        while (isNearCursor(newLeft, newTop, buttonRect)) {
            newLeft = Math.random() * (windowWidth - buttonRect.width);
            newTop = Math.random() * (windowHeight - buttonRect.height);
        }

        trollBtn.style.left = `${newLeft}px`;
        trollBtn.style.top = `${newTop}px`;
    }

    // Verifica si la nueva posición está cerca del cursor
    function isNearCursor(left, top, rect) {
        const distX = Math.min(Math.abs(cursorPos.x - (left + rect.width)), Math.abs(cursorPos.x - left));
        const distY = Math.min(Math.abs(cursorPos.y - (top + rect.height)), Math.abs(cursorPos.y - top));
        return distX < rect.width && distY < rect.height;
    }

    // Movimiento continuo como salvapantallas de DVD
    function startDVDMove() {
        trollBtn.classList.remove('color-changing');
        trollBtn.classList.add('active');
        trollBtn.style.animation = 'dvd-move 10s linear infinite';
        trollBtn.addEventListener('animationiteration', moveTrollButton);
    }

    // Movimiento acelerado al acercarse el cursor
    function handleMouseMove() {
        trollBtn.classList.add('color-changing');
        trollBtn.classList.remove('active');
        trollBtn.style.animation = 'none'; // Detiene el movimiento del salvapantallas
        trollBtn.style.transition = 'top 0.2s linear, left 0.2s linear'; // Añade transición para el movimiento rápido
        moveTrollButton();
    }

    // Configuración inicial
    startDVDMove();

    // Configura el movimiento del botón cuando el cursor se acerca
    document.addEventListener('mousemove', (e) => {
        const buttonRect = trollBtn.getBoundingClientRect();
        if (e.clientX >= buttonRect.left &&
            e.clientX <= buttonRect.right &&
            e.clientY >= buttonRect.top &&
            e.clientY <= buttonRect.bottom) {
            handleMouseMove();
        }
    });

    // Restablece el botón cuando el cursor se aleja
    let timer;
    document.addEventListener('mousemove', () => {
        clearTimeout(timer);
        timer = setTimeout(startDVDMove, 1000);
    });
});
