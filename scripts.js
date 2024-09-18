// Modo oscuro y claro con iconos de sol/luna
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeIcon.src = document.body.classList.contains('dark-mode') ? 'images/sun_icon.png' : 'images/moon_icon.png';
});

// Cambio de idioma con banderas
const languageToggle = document.getElementById('language-toggle');
const languageIcon = document.getElementById('language-icon');
const elementsToTranslate = document.querySelectorAll('[data-en], [data-es]');

// Cargar idioma por defecto
window.addEventListener('DOMContentLoaded', () => {
    elementsToTranslate.forEach(el => {
        el.textContent = el.getAttribute('data-en');
    });
});

languageToggle.addEventListener('click', () => {
    const currentLang = languageToggle.getAttribute('data-lang');
    const newLang = currentLang === 'en' ? 'es' : 'en';
    
    languageToggle.setAttribute('data-lang', newLang);
    languageIcon.src = newLang === 'en' ? 'images/united_states_flag.png' : 'images/argentina_flag.png';

    elementsToTranslate.forEach(el => {
        el.textContent = el.getAttribute(`data-${newLang}`);
    });
});

// Botón troll que se mueve
const trollButton = document.getElementById('troll-button');
let speedX = 3, speedY = 3;
let positionX = Math.random() * window.innerWidth;
let positionY = Math.random() * window.innerHeight;
let mouseX = 0, mouseY = 0;

// Detectar la posición del cursor
window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function moveTrollButton() {
    const buttonRect = trollButton.getBoundingClientRect();
    
    if (buttonRect.left + buttonRect.width >= window.innerWidth || buttonRect.left <= 0) speedX *= -1;
    if (buttonRect.top + buttonRect.height >= window.innerHeight || buttonRect.top <= 0) speedY *= -1;

    positionX += speedX;
    positionY += speedY;

    trollButton.style.left = `${positionX}px`;
    trollButton.style.top = `${positionY}px`;

    const distance = Math.hypot(mouseX - positionX, mouseY - positionY);

    if (distance < 200) {
        speedX = Math.sign(speedX) * 10;
        speedY = Math.sign(speedY) * 10;
    } else {
        speedX = Math.sign(speedX) * 3;
        speedY = Math.sign(speedY) * 3;
    }

    setTimeout(() => {
        requestAnimationFrame(moveTrollButton);
    }, 16);
}

moveTrollButton();
