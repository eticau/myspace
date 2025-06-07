
// Pomodoro
// Variables DOM
const buttonPlay = document.getElementById('buttonPlay');
const playIcon = document.getElementById('playIcon');
const buttonReset = document.getElementById('buttonReset');
const timeLeftDOM = document.getElementById('timeLeft');
const labelSessionBreak = document.getElementById('labelSessionBreak');
const sessionLengthDOM = document.getElementById('sessionLength');
const breakLengthDOM = document.getElementById('breakLength');
const sessionDecrement = document.getElementById('sessionDecrement');
const sessionIncrement = document.getElementById('sessionIncrement');
const breakDecrement = document.getElementById('breakDecrement');
const breakIncrement = document.getElementById('breakIncrement');

/* Variables */
let timeLeft = 1500; // 25 minutos en segundos
let playIsClicked = true;
let isSession = false;
let breakLength = 5 * 60; // 5 minutos en segundos
let timeLength = 25 * 60; // 25 minutos en segundos

function convertSeconds(seconds) {
    return {
        minutes: Math.floor(seconds / 60),
        seconds: seconds % 60
    }
}

let interval;

buttonPlay.addEventListener('click', () => {
    if (playIsClicked) {
        if (interval) {
            clearInterval(interval);
        }
        interval = setInterval(handleTime, 1000); // Llama a handleTime cada segundo
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    } else {
        playIcon.classList.add('fa-play');
        playIcon.classList.remove('fa-pause');
        clearInterval(interval); // Detiene el temporizador
    }
    playIsClicked = !playIsClicked;
}); 

// Función para mostrar el cartel
function showBanner() {
    const notificationBanner = document.getElementById('notificationBanner');
    notificationBanner.style.display = 'block'; // Mostrar el cartel
    notificationBanner.style.opacity = 1; // Asegúrate de que sea visible

    // Ocultar el cartel después de 5 segundos
    setTimeout(() => {
        notificationBanner.style.opacity = 0; // Ocultar el cartel con una transición
        setTimeout(() => {
            notificationBanner.style.display = 'none'; // Remover de la vista
        }, 500); // Esperar el tiempo de transición antes de remover
    }, 5000); // Mostrar el cartel por 5 segundos
}

// Modificar la función handleTime
function handleTime() {
    // Si el tiempo llega a cero
    if (timeLeft <= 0) {
        // Mostrar el cartel
        showBanner();

        // Lógica del temporizador
        if (isSession) {
            labelSessionBreak.innerText = "Session";
            timeLeft = timeLength;
        } else {
            labelSessionBreak.innerText = "Break";
            timeLeft = breakLength;
            document.getElementById('beep').currentTime = 0;
            document.getElementById('beep').play();
        }
        isSession = !isSession;
    } else {
        // Si aún hay tiempo, continua decrementando
        timeLeft--;
        const minutesAndSeconds = convertSeconds(timeLeft);
        timeLeftDOM.innerText = `${('0' + minutesAndSeconds.minutes).slice(-2)}:${('0' + minutesAndSeconds.seconds).slice(-2)}`;
    }
}

// Handle reset button
buttonReset.addEventListener('click', () => {
    breakLength = 5 * 60;
    timeLength = 25 * 60;
    timeLeft = timeLength;
    breakLengthDOM.innerText = "5";
    sessionLengthDOM.innerText = "25";
    timeLeftDOM.innerText = "25:00";
    if (!playIsClicked) {
        buttonPlay.click();
    }
});

// Handle length button
function handleLengthButton(lengthValue, htmlElement, isAddition, isBreakLength) {
    let result = isAddition ? ++lengthValue : (lengthValue > 1 ? --lengthValue : 1);
    htmlElement.innerText = result;
    let resultSeconds = result * 60;

    if (!isBreakLength) {
        timeLength = resultSeconds;
        if (labelSessionBreak.innerText === 'SESSION') {
            timeLeftDOM.innerText = ('0' + result).slice(-2) + ":00";
            timeLeft = resultSeconds;
        }
    } else {
        breakLength = resultSeconds;
        if (labelSessionBreak.innerText === 'BREAK') {
            timeLeftDOM.innerText = ('0' + result).slice(-2) + ":00";
            timeLeft = resultSeconds;
        }
    }
}

sessionDecrement.addEventListener('click', () => {
    handleLengthButton(parseInt(sessionLengthDOM.innerText), sessionLengthDOM, false, false);
});
sessionIncrement.addEventListener('click', () => {
    handleLengthButton(parseInt(sessionLengthDOM.innerText), sessionLengthDOM, true, false);
});
breakDecrement.addEventListener('click', () => {
    handleLengthButton(parseInt(breakLengthDOM.innerText), breakLengthDOM, false, true);
});
breakIncrement.addEventListener('click', () => {
    handleLengthButton(parseInt(breakLengthDOM.innerText), breakLengthDOM, true, true);
});

// TextScramble


class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
  'My',
  'greatest',
  'skills',
  'are',
  'eating',
  'and',
  'sleeping'
]

const el = document.querySelector('.text3')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800)
  })
  counter = (counter + 1) % phrases.length
}

next()

// about me
// set up text to print, each item in array is new line
var aText = new Array(
"I really enjoy solving problems and making things",
 "that are nice and easy to use. I can't stop ",
  "learning new things; the more, the better. ",
  "I also love gaming, a hobby I've had since", 
  "I was a kid. Oh, and coffee;",
  " I'm passionate about coffee!"
 
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();

// ssss
const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2")
};

const texts = [
  "I'am",
  "Etienne",
  "Cautures",
  "Future Engineer",
  "Geek",
  "Tech Enthusiast",
  ":)"
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;
  
  let fraction = morph / morphTime;
  
  if (fraction > 1) {
    cooldown = cooldownTime;
    fraction = 1;
  }
  
  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
  
  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
  
  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;
  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";
  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);
  
  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;
  
  cooldown -= dt;
  
  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++;
    }
    doMorph();
  } else {
    doCooldown();
  }
}

animate();

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

