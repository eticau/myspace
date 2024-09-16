// Cambio de idioma
const languageToggle = document.getElementById('language-toggle');
const aboutText = document.getElementById('about-text');

const texts = {
    en: "I’m a passionate and curious mechanical engineering student from Rosario, Argentina. My journey is fueled by a constant desire to learn and grow, whether it's solving complex problems or exploring new hobbies. I thrive on creativity and a bit of craziness that helps me think outside the box. When I'm not immersed in my studies, you'll likely find me enjoying a cup of mate 🧉 or working on exciting personal projects. Through this page, I aim to share my work, interests, and experiences, hoping to connect with like-minded individuals. Feel free to reach out—I’d love to hear from you!",
    es: "Soy un estudiante de ingeniería mecánica apasionado y curioso de Rosario, Argentina. Mi viaje está impulsado por un deseo constante de aprender y crecer, ya sea resolviendo problemas complejos o explorando nuevos pasatiempos. Me nutro de la creatividad y un poco de locura que me ayuda a pensar fuera de la caja. Cuando no estoy inmerso en mis estudios, probablemente me encuentres disfrutando de un mate 🧉 o trabajando en proyectos personales emocionantes. A través de esta página, quiero compartir mi trabajo, intereses y experiencias, con la esperanza de conectarme con personas afines. ¡No dudes en contactarme, me encantaría saber de ti!"
};

let currentLanguage = 'en';

languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    aboutText.textContent = texts[currentLanguage];
    languageToggle.textContent = currentLanguage === 'en' ? 'EN | ES' : 'ES | EN';
});

// Cambio de tema (modo claro/oscuro)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '🌞' : '🌑';
});

// Funcionalidad del botón troll
const trollButton = document.getElementById('troll-button');
let trollInterval;
let speedX = 2, speedY = 2;
let posX = 0, posY = 0;

function moveTrollButton() {
    const trollRect = trollButton.getBoundingClientRect();
    const maxX = window.innerWidth - trollRect.width;
    const maxY = window.innerHeight - trollRect.height;

    posX += speedX;
    posY += speedY;

    if (posX < 0 || posX > maxX) speedX *= -1;
    if (posY < 0 || posY > maxY) speedY *= -1;

    trollButton.style.left = `${posX}px`;
    trollButton.style.top = `${posY}px`;
}

trollButton.addEventListener('mouseover', () => {
    if (!trollInterval) {
        trollInterval = setInterval(moveTrollButton, 10);
    }
});

trollButton.addEventListener('click', () => {
    clearInterval(trollInterval);
    trollInterval = null;
});
