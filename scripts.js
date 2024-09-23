// Modo oscuro y claro
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Cambio de idioma
const languageToggle = document.querySelector('.language-toggle');
let currentLanguage = 'en';

languageToggle.addEventListener('click', () => {
    if (currentLanguage === 'en') {
        document.querySelector('.about-me h2').textContent = 'Sobre mí';
        document.querySelector('.about-me p').textContent = 'Soy un desarrollador apasionado por la tecnología y el diseño.';
        currentLanguage = 'es';
    } else {
        document.querySelector('.about-me h2').textContent = 'About Me';
        document.querySelector('.about-me p').textContent = 'I am a developer passionate about technology and design.';
        currentLanguage = 'en';
    }
});

// Manejo del formulario de contacto
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Aquí podrías manejar el envío del formulario a un servidor
    formStatus.textContent = 'Enviando...';

    // Simulación de envío
    setTimeout(() => {
        formStatus.textContent = 'Gracias por tu mensaje!';
        contactForm.reset();
        showThankYouModal();
    }, 2000);
});

// Mostrar modal de agradecimiento
function showThankYouModal() {
    const modal = document.getElementById('thank-you-modal');
    const overlay = document.getElementById('thank-you-overlay');

    modal.style.display = 'block';
    overlay.style.display = 'block';

    const closeButton = modal.querySelector('button');
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    });
}

// Cerrar modal al hacer clic fuera
const overlay = document.getElementById('thank-you-overlay');
overlay.addEventListener('click', () => {
    const modal = document.getElementById('thank-you-modal');
    modal.style.display = 'none';
    overlay.style.display = 'none';
});
