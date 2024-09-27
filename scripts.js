const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

// for intro motion
let mouseMoved = false;

const pointer = {
    x: .5 * window.innerWidth,
    y: .5 * window.innerHeight,
}
const params = {
    pointsNumber: 40,
    widthFactor: .3,
    mouseThreshold: .6,
    spring: .4,
    friction: .5
};

const trail = new Array(params.pointsNumber);
for (let i = 0; i < params.pointsNumber; i++) {
    trail[i] = {
        x: pointer.x,
        y: pointer.y,
        dx: 0,
        dy: 0,
    }
}

window.addEventListener("click", e => {
    updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("mousemove", e => {
    mouseMoved = true;
    updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("touchmove", e => {
    mouseMoved = true;
    updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
});

function updateMousePosition(eX, eY) {
    pointer.x = eX;
    pointer.y = eY;
}

setupCanvas();
update(0);
window.addEventListener("resize", setupCanvas);


function update(t) {

    // for intro motion
    if (!mouseMoved) {
        pointer.x = (.5 + .3 * Math.cos(.002 * t) * (Math.sin(.005 * t))) * window.innerWidth;
        pointer.y = (.5 + .2 * (Math.cos(.005 * t)) + .1 * Math.cos(.01 * t)) * window.innerHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    trail.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
        const spring = pIdx === 0 ? .4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
    });

    ctx.lineCap = "round";
	 ctx.beginPath();
    ctx.moveTo(trail[0].x, trail[0].y);

    for (let i = 1; i < trail.length - 1; i++) {
        const xc = .5 * (trail[i].x + trail[i + 1].x);
        const yc = .5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
    }
    ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
    ctx.stroke();
    
    window.requestAnimationFrame(update);
}

function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
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
