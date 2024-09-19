document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita el envío por defecto del formulario

    // Parámetros para enviar el formulario con EmailJS
    const serviceID = 'default_service';
    const templateID = 'template_58y3vvk';  // Reemplaza con tu ID de plantilla de EmailJS

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            showThankYouModal();
        }, (err) => {
            document.getElementById('form-status').textContent = 'Failed to send message. Please try again.';
            document.getElementById('form-status').style.color = 'red';
        });

    // Opcional: Limpiar el formulario después de enviarlo
    this.reset();
});

// Función para mostrar el modal de agradecimiento
function showThankYouModal() {
    const modal = document.getElementById('thank-you-modal');
    const overlay = document.getElementById('thank-you-overlay');
    
    modal.style.display = 'block';
    overlay.style.display = 'block';

    // Cerrar el modal
    document.getElementById('close-thank-you').addEventListener('click', function() {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    });
}

// AOS Animations
AOS.init({
    duration: 1000, // Duración de las animaciones
    once: true // Animación solo se ejecuta una vez
});

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

// Efectos de desplazamiento personalizados
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', function() {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});
