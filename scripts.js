// Cambio de idioma
const languageToggle = document.getElementById('language-toggle');
const aboutText = document.getElementById('about-text');

const texts = {
    en: "I’m a passionate and curious mechanical engineering student from Rosario, Argentina. My journey is fueled by a constant desire to learn and grow, whether it's solving complex problems or exploring new hobbies. I thrive on creativity and a bit of craziness that helps me think outside the box. When I'm not immersed in my studies, you'll likely find me enjoying a cup of mate 🧉 or working on exciting personal projects. Through this page, I aim to share my work, interests, and experiences, hoping to connect with like-minded individuals. Feel free to reach out—I’d love to hear from you!",
    es: "Soy un estudiante de ingeniería mecánica apasionado y curioso de Rosario, Argentina. Mi viaje está impulsado por un deseo constante de aprender y crecer, ya sea resolviendo problemas complejos o explorando nuevos pasatiempos. Me esfuerzo por la creatividad y un poco de locura que me ayuda a pensar fuera de la caja. Cuando no estoy inmerso en mis estudios, probablemente me encuentres disfrutando de una taza de mate 🧉 o trabajando en emocionantes proyectos personales. A través de esta página, espero compartir mi trabajo, intereses y experiencias, con la esperanza de conectar con personas afines. ¡No dudes en ponerte en contacto, me encantaría saber de ti!"
};

let currentLanguage = 'en';

languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    aboutText.textContent = texts[currentLanguage];
    languageToggle.textContent = currentLanguage === 'en' ? 'EN | ES' : 'ES | EN';
});

// Cambio de tema
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌕' : '🌑';
});

// Movimiento del botón troll
const trollButton = document.getElementById('troll-button');
const buttonSize = 50; // Tamaño del botón

function moveButton() {
    const maxX = window.innerWidth - buttonSize;
    const maxY = window.innerHeight - buttonSize;

    let posX = Math.random() * maxX;
    let posY = Math.random() * maxY;

    trollButton.style.left = posX + 'px';
    trollButton.style.top = posY + 'px';
}

function animateButton() {
    setInterval(() => {
        moveButton();
    }, 1000); // Mueve el botón cada segundo
}

animateButton();
