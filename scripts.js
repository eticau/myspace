// ── Init ──────────────────────────────────────────────────────────────────────
AOS.init();
emailjs.init("3moVSUz7NDcZAn6QB");

// ── Theme & Language (run immediately, no DOMContentLoaded needed) ────────────
const themeToggle    = document.getElementById('theme-toggle');
const languageToggle = document.getElementById('language-toggle');

const savedTheme = localStorage.getItem('theme') || 'light';
const savedLang  = localStorage.getItem('lang')  || 'en';

// Apply saved theme
document.body.classList.toggle('dark-mode', savedTheme === 'dark');
document.getElementById('theme-icon').src = savedTheme === 'dark'
    ? 'images/sun_icon.png' : 'images/moon_icon.png';

// Apply saved language
function updateLanguage(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = lang === 'en' ? el.dataset.en : el.dataset.es;
    });
    document.getElementById('language-icon').src = lang === 'en'
        ? 'images/united_states_flag.png' : 'images/argentina_flag.png';
    languageToggle.dataset.lang = lang;
}
updateLanguage(savedLang);

themeToggle.addEventListener('click', () => {
    const dark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    document.getElementById('theme-icon').src = dark
        ? 'images/sun_icon.png' : 'images/moon_icon.png';
});

languageToggle.addEventListener('click', () => {
    const newLang = languageToggle.dataset.lang === 'en' ? 'es' : 'en';
    localStorage.setItem('lang', newLang);
    updateLanguage(newLang);
});

// ── Header transparency on scroll ────────────────────────────────────────────
window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle(
        'transparent', window.scrollY <= window.innerHeight - 55
    );
});

// ── Typing animation ──────────────────────────────────────────────────────────
const scene = new Scene({
    "[data-typing='i']":          Scene.typing({ text: "I",              duration: 1   }),
    "[data-typing='mechanic']":   Scene.typing({ text: "'m Mechanic",    duration: 1.5 }),
    "[data-typing='engineer']":   Scene.typing({ text: "Engineer",       duration: 1.5 }),
    "[data-typing='with']":       Scene.typing({ text: "with",           duration: 1   }),
    "[data-typing='passion']":    Scene.typing({ text: "a Passion for",  duration: 2   }),
    "[data-typing='creating']":   Scene.typing({ text: "Creating",       duration: 1.5 }),
    "[data-typing='innovative']": Scene.typing({ text: "Innovative",     duration: 1.5 }),
    "[data-typing='solutions']":  Scene.typing({ text: "Solutions",      duration: 1.5 }),
}, { easing: "ease-in-out", selector: true });
scene.setPlaySpeed(1);
scene.setIterationCount(1);
scene.play();

// ── Canvas cursor trail ───────────────────────────────────────────────────────
const canvas = document.querySelector("canvas");
const ctx    = canvas.getContext('2d');
let mouseMoved = false;

const pointer = { x: .5 * window.innerWidth, y: .5 * window.innerHeight };
const params  = { pointsNumber: 40, widthFactor: .3, spring: .4, friction: .5 };
const trail   = Array.from({ length: params.pointsNumber }, () => ({ ...pointer, dx: 0, dy: 0 }));

function updateMousePosition(x, y) { pointer.x = x; pointer.y = y; }
window.addEventListener("mousemove", e => { mouseMoved = true; updateMousePosition(e.pageX, e.pageY); });
window.addEventListener("touchmove", e => { mouseMoved = true; updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY); });
window.addEventListener("click",     e => updateMousePosition(e.pageX, e.pageY));

function setupCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
setupCanvas();
window.addEventListener("resize", setupCanvas);

function update(t) {
    if (!mouseMoved) {
        pointer.x = (.5 + .3 * Math.cos(.002 * t) * Math.sin(.005 * t)) * window.innerWidth;
        pointer.y = (.5 + .2 *  Math.cos(.005 * t) + .1 * Math.cos(.01 * t)) * window.innerHeight;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    trail.forEach((p, i) => {
        const prev   = i === 0 ? pointer : trail[i - 1];
        const spring = i === 0 ? .4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring; p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;          p.dy *= params.friction;
        p.x  += p.dx;                     p.y  += p.dy;
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
    requestAnimationFrame(update);
}
update(0);

// ── Particles ─────────────────────────────────────────────────────────────────
particlesJS('particles-js', {
    particles: {
        number: { value: 100 },
        size:   { value: 3 },
        color:  { value: "#ffffff" },
        move:   { speed: 6, attract: { enable: true } },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: .5, width: 1 }
    },
    interactivity: {
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
        modes:  { repulse: { distance: 100 }, push: { particles_nb: 4 } }
    }
});

// ── Leaflet map ───────────────────────────────────────────────────────────────
const map    = L.map('map').setView([-32.96180, -60.65878], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19, attribution: '© OpenStreetMap'
}).addTo(map);
L.marker([-32.96180, -60.65878]).addTo(map)
 .bindPopup("<b>Hola!</b><br>Rosario, Argentina").openPopup();

// ── Contact form ──────────────────────────────────────────────────────────────
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.sendForm('service_lixjepc', 'template_4wrbzhu', this)
        .then(() => alert('Mensaje enviado correctamente'),
              err => alert('Error: ' + JSON.stringify(err)));
});
