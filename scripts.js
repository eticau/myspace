/*
https://github.com/daybrush/scenejs
*/

import Scene from "scenejs";
const scene = new Scene({
  ".container": {}
}, {
  selector: true,
});
const item = scene.getItem(".container");


function move(startTime, endTime, left, top, rotate, scale) {
  item.set({
    [`${startTime}, ${endTime}`]: Scene.kineticFrame({
      left: `${left}px`,
      top: `${top}px`
    }).set({
      transform: {
        rotate: `${rotate}deg`,
        scale,
      }
    }),
  });
}



move(0, 0, 90, 115, 0, 5);
move(1, 1, 90, 115, 0, 2);
move(2, 3, 0, 115, 0, 1);
move(4, 4.5, -100, 0, -90, 2);
move(5.5, 6, -52, -18, -90, 1.6);
move(7, 7.5, 30, 45, 0, 2);
move(8.5, 9,  10, 30, 0, 3);
move(10, 10.5, 28, 0, 0, 2.2);
move(11.5, 12, 50, -35, 0, 1.65);
move(13, 13.5, 35, -70, 0, 2);
move(14.5, 18, 0, 0, 0, 1);


/*
typing
https://github.com/daybrush/scenejs-effects
*/
scene.set({
  "[data-typing='i']": Scene.typing({ text: "I ", duration: 1}),
  "[data-typing='frontend']": {
    1: Scene.typing({ text: "'m Front-End", duration: 1}),
  },
  "[data-typing='engineer']": {
    1.5: Scene.typing({ text: "Engineer", duration: 1}),
  },
  "[data-typing='with']": {
    3.3: Scene.typing({ text: "with", duration: 0.5}),
  },
  "[data-typing='javascript']": {
    4.5: Scene.typing({ text: "JavaScript", duration: 1}),
  },
  "[data-typing='typescript']": {
    6: Scene.typing({ text: "TypeScript", duration: 1}),
  },
  "[data-typing='css']": {
    7.5: Scene.typing({ text: "CSS", duration: 0.7}),
  },
  "[data-typing='nodejs']": {
    9: Scene.typing({ text: "Node.js", duration: 1}),
  },
  "[data-typing='animation']": {
    10.5: Scene.typing({ text: "Animation", duration: 1}),
  },
  "[data-typing='scenejs']": {
    12: Scene.typing({ text: "Scene.js", duration: 1}),
  },
});

scene.setPlaySpeed(1);
scene.setEasing("ease-in-out");
scene.setIterationCount("infinite");
scene.play();
// Cambiar fondo del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > window.innerHeight - 55) {
        header.classList.remove('transparent');
    } else {
        header.classList.add('transparent');
    }
});

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
        color: { value: "#ffffff" },
        move: { 
            speed: 6, 
            attract: { enable: true } 
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
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
