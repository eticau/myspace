document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const trollButton = document.getElementById('troll-button');
    let darkMode = false;
    
    // Cambio de tema
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkMode = !darkMode;
    });

    // Movimiento del botón troll
    trollButton.addEventListener('mouseover', () => {
        const randomTop = Math.floor(Math.random() * (window.innerHeight - trollButton.clientHeight));
        const randomLeft = Math.floor(Math.random() * (window.innerWidth - trollButton.clientWidth));
        trollButton.style.top = `${randomTop}px`;
        trollButton.style.left = `${randomLeft}px`;
    });
});
