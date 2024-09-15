// Botón de tema oscuro/claro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '🌕' : '🌑';
});

// Botón troll
const trollButton = document.getElementById('troll-button');
let speed = 1;

function moveTrollButton() {
    let top = parseFloat(trollButton.style.top) || 50;
    let left = parseFloat(trollButton.style.left) || 50;

    top += Math.random() * speed - speed / 2;
    left += Math.random() * speed - speed / 2;

    if (top < 0) top = 0;
    if (left < 0) left = 0;
    if (top > window.innerHeight - trollButton.offsetHeight) top = window.innerHeight - trollButton.offsetHeight;
    if (left > window.innerWidth - trollButton.offsetWidth) left = window.innerWidth - trollButton.offsetWidth;

    trollButton.style.top = `${top}px`;
    trollButton.style.left = `${left}px`;

    requestAnimationFrame(moveTrollButton);
}

trollButton.addEventListener('mouseover', () => {
    speed = 10;
});

trollButton.addEventListener('mouseout', () => {
    speed = 1;
});

moveTrollButton();
