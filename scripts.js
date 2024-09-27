document.addEventListener('DOMContentLoaded', function () {
    const spline1WebURL = "https://prod.spline.design/qmlxheMFgqBtMZfa/scene.splinecode";
    const spline2WebURL = "https://prod.spline.design/CQww0MEQ2qTO63gp/scene.splinecode";

    const spline1iOSURL = "https://build.spline.design/Qv93ieky7C9vfdCz62FU/scene.splineswift";
    const spline2iOSURL = "https://build.spline.design/jblHEs5Hno6WF5GCcvat/scene.splineswift";

    const spline1AndroidURL = "https://build.spline.design/Qv93ieky7C9vfdCz62FU/scene.splinecontent";
    const spline2AndroidURL = "https://build.spline.design/jblHEs5Hno6WF5GCcvat/scene.splinecontent";

    function detectPlatform() {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android/i.test(userAgent)) {
            return "android";
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "ios";
        } else {
            return "web";
        }
    }

    function loadSplineViewers() {
        const platform = detectPlatform();
        
        const splineViewer1 = document.getElementById('spline-viewer-1');
        const splineViewer2 = document.getElementById('spline-viewer-2');
        
        if (platform === "android") {
            splineViewer1.setAttribute("url", spline1AndroidURL);
            splineViewer2.setAttribute("url", spline2AndroidURL);
        } else if (platform === "ios") {
            splineViewer1.setAttribute("url", spline1iOSURL);
            splineViewer2.setAttribute("url", spline2iOSURL);
        } else {
            splineViewer1.setAttribute("url", spline1WebURL);
            splineViewer2.setAttribute("url", spline2WebURL);
        }
    }

    loadSplineViewers();


(function() {
  // Inicializa EmailJS con la Public Key
  emailjs.init("3moVSUz7NDcZAn6QB");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Evita que el formulario se envíe de manera tradicional

  // Envía los datos del formulario usando EmailJS
  emailjs.sendForm('service_lixjepc', 'template_4wrbzhu', this)
    .then(function() {
      alert('Mensaje enviado correctamente');
    }, function(error) {
      alert('Error al enviar el mensaje: ' + JSON.stringify(error));
    });
});
particlesJS('particles-js', {
    particles: {
        number: { value: 100 },
        size: { value: 3 },
        color: { value: "#00bfa6" },
        move: { 
            speed: 6, 
            attract: { enable: true } 
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#000000",
            opacity: 0.5,
            width: 1
        }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' }
        },
        modes: {
            repulse: { distance: 100 },
            push: { particles_nb: 4 }
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Inicializa EmailJS con tu Public Key
    emailjs.init("3moVSUz7NDcZAn6QB");

    // Inicialización del mapa usando las coordenadas correctas
    const map = L.map('map').setView([-32.96180, -60.65878], 10); // Coordenadas de Rosario, Argentina

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Puedes agregar un marcador
    const marker = L.marker([-32.96180, -60.65878]).addTo(map);
    marker.bindPopup("<b>Hola!</b><br>Este es un marcador.").openPopup();

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const languageToggle = document.getElementById('language-toggle');

    // Guardar en localStorage las preferencias de tema e idioma
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLang = localStorage.getItem('lang') || 'en';

    // Aplicar tema guardado
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    themeToggle.querySelector('img').src = savedTheme === 'dark' ? 'images/sun_icon.png' : 'images/moon_icon.png';

    // Aplicar idioma guardado
    updateLanguage(savedLang);
    languageToggle.setAttribute('data-lang', savedLang);
    languageToggle.querySelector('img').src = savedLang === 'en' ? 'images/united_states_flag.png' : 'images/argentina_flag.png';

    // Cambiar tema
    themeToggle.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        themeToggle.querySelector('img').src = isDarkMode ? 'images/sun_icon.png' : 'images/moon_icon.png';
    });

    // Cambiar idioma
    languageToggle.addEventListener('click', () => {
        const currentLang = languageToggle.getAttribute('data-lang');
        const newLang = currentLang === 'en' ? 'es' : 'en';
        updateLanguage(newLang);
        localStorage.setItem('lang', newLang);
        languageToggle.setAttribute('data-lang', newLang);
        languageToggle.querySelector('img').src = newLang === 'en' ? 'images/united_states_flag.png' : 'images/argentina_flag.png';
    });

    // Función para actualizar el idioma
    function updateLanguage(lang) {
        document.querySelectorAll('[data-en]').forEach(el => {
            el.textContent = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-es');
        });
    }
});

    
  document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const languageToggle = document.getElementById('language-toggle');

    // Aplicar las preferencias guardadas
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
        themeToggle.querySelector('img').src = savedTheme === 'dark' ? 'images/sun_icon.png' : 'images/moon_icon.png';
    }

    const savedLang = localStorage.getItem('lang') || 'en';
    languageToggle.setAttribute('data-lang', savedLang);
    updateLanguage(savedLang);

    // Guardar la preferencia de tema
    themeToggle.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        themeToggle.querySelector('img').src = isDarkMode ? 'images/sun_icon.png' : 'images/moon_icon.png';
    });

    // Guardar la preferencia de idioma
    languageToggle.addEventListener('click', () => {
        const lang = languageToggle.getAttribute('data-lang');
        const newLang = lang === 'en' ? 'es' : 'en';
        localStorage.setItem('lang', newLang);
        languageToggle.setAttribute('data-lang', newLang);
        updateLanguage(newLang);
    });

    function updateLanguage(lang) {
        document.querySelectorAll('[data-en]').forEach(el => {
            el.textContent = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-es');
        });
        languageToggle.querySelector('img').src = lang === 'en' ? 'images/united_states_flag.png' : 'images/argentina_flag.png';
    }
});


    // Inicializa AOS (Animate On Scroll)
    AOS.init();
});
