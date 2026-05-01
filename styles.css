/* =============================================================
   scripts.js — Etienne Cautures personal site
   ============================================================= */

/* ─── AOS Init ───────────────────────────────────────────── */
AOS.init();

/* ─── Theme & Language (single initialisation) ───────────── */
(function initPreferences() {
  const themeToggle    = document.getElementById('theme-toggle');
  const languageToggle = document.getElementById('language-toggle');

  const savedTheme = localStorage.getItem('theme') || 'light';
  const savedLang  = localStorage.getItem('lang')  || 'en';

  // Apply saved theme
  document.body.classList.toggle('dark-mode', savedTheme === 'dark');
  themeToggle.querySelector('img').src = savedTheme === 'dark'
    ? 'images/sun_icon.png'
    : 'images/moon_icon.png';

  // Apply saved language
  applyLanguage(savedLang);
  languageToggle.setAttribute('data-lang', savedLang);

  // Toggle theme on click
  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.querySelector('img').src = isDark
      ? 'images/sun_icon.png'
      : 'images/moon_icon.png';
  });

  // Toggle language on click
  languageToggle.addEventListener('click', () => {
    const current = languageToggle.getAttribute('data-lang');
    const next    = current === 'en' ? 'es' : 'en';
    applyLanguage(next);
    localStorage.setItem('lang', next);
    languageToggle.setAttribute('data-lang', next);
  });

  function applyLanguage(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = lang === 'en'
        ? el.getAttribute('data-en')
        : el.getAttribute('data-es');
    });
    languageToggle.querySelector('img').src = lang === 'en'
      ? 'images/united_states_flag.png'
      : 'images/argentina_flag.png';
  }
})();

/* ─── Header transparency on scroll ─────────────────────── */
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('transparent', window.scrollY <= window.innerHeight - 55);
});

/* ─── Morphing text animation ────────────────────────────── */
const morphElts = {
  text1: document.getElementById('text1'),
  text2: document.getElementById('text2'),
};

const morphTexts   = ["I'm", 'Etienne', 'Cautures', 'Future Engineer', 'Geek', 'Tech Enthusiast', ':)'];
const MORPH_TIME   = 1;
const COOLDOWN_TIME = 0.25;

let morphIndex    = morphTexts.length - 1;
let morphTime_    = new Date();
let morph         = 0;
let cooldown      = COOLDOWN_TIME;

morphElts.text1.textContent = morphTexts[morphIndex % morphTexts.length];
morphElts.text2.textContent = morphTexts[(morphIndex + 1) % morphTexts.length];

function doMorph() {
  morph    -= cooldown;
  cooldown  = 0;

  let fraction = morph / MORPH_TIME;
  if (fraction > 1) {
    cooldown = COOLDOWN_TIME;
    fraction = 1;
  }
  setMorphFraction(fraction);
}

function setMorphFraction(fraction) {
  morphElts.text2.style.filter  = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  morphElts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  morphElts.text1.style.filter  = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  morphElts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  morphElts.text1.textContent = morphTexts[morphIndex % morphTexts.length];
  morphElts.text2.textContent = morphTexts[(morphIndex + 1) % morphTexts.length];
}

function doCooldown() {
  morph = 0;
  morphElts.text2.style.filter  = '';
  morphElts.text2.style.opacity = '100%';
  morphElts.text1.style.filter  = '';
  morphElts.text1.style.opacity = '0%';
}

function animateMorph() {
  requestAnimationFrame(animateMorph);

  const now               = new Date();
  const shouldIncrement   = cooldown > 0;
  const dt                = (now - morphTime_) / 1000;
  morphTime_              = now;
  cooldown               -= dt;

  if (cooldown <= 0) {
    if (shouldIncrement) morphIndex++;
    doMorph();
  } else {
    doCooldown();
  }
}

animateMorph();

/* ─── Text Scramble ──────────────────────────────────────── */
class TextScramble {
  constructor(el) {
    this.el     = el;
    this.chars  = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length  = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => (this.resolve = resolve));

    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from  = oldText[i] || '';
      const to    = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end   = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output   = '';
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const scrambleEl     = document.querySelector('.text3');
const scrambleFx     = new TextScramble(scrambleEl);
const scramblePhrases = ['My', 'greatest', 'skills', 'are', 'eating', 'and', 'sleeping'];
let   scrambleIndex   = 0;

function nextScramble() {
  scrambleFx.setText(scramblePhrases[scrambleIndex]).then(() => {
    setTimeout(nextScramble, 800);
  });
  scrambleIndex = (scrambleIndex + 1) % scramblePhrases.length;
}

nextScramble();

/* ─── Typewriter ─────────────────────────────────────────── */
const typeLines = [
  'I really enjoy solving problems and making things',
  "that are nice and easy to use. I can't stop ",
  'learning new things; the more, the better. ',
  "I also love gaming, a hobby I've had since",
  'I was a kid. Oh, and coffee;',
  " I'm passionate about coffee!",
];

const TYPE_SPEED  = 100;   // ms between characters
const SCROLL_AT   = 20;    // start scrolling at this many lines

let typeIndex   = 0;
let typeTextPos = 0;
let typeContents = '';
let typeArrLength = typeLines[0].length;

function typewriter() {
  const destination = document.getElementById('typedtext');
  let row = Math.max(0, typeIndex - SCROLL_AT);

  typeContents = ' ';
  while (row < typeIndex) {
    typeContents += typeLines[row++] + '<br>';
  }

  destination.innerHTML = typeContents + typeLines[typeIndex].substring(0, typeTextPos) + '_';

  if (typeTextPos++ === typeArrLength) {
    typeTextPos   = 0;
    typeIndex++;
    if (typeIndex !== typeLines.length) {
      typeArrLength = typeLines[typeIndex].length;
      setTimeout(typewriter, 500);
    }
  } else {
    setTimeout(typewriter, TYPE_SPEED);
  }
}

typewriter();

/* ─── Custom cursor trail (canvas) ──────────────────────── */
const canvas = document.getElementById('cursor-canvas');
const ctx    = canvas.getContext('2d');

let mouseMoved = false;

const pointer = {
  x: 0.5 * window.innerWidth,
  y: 0.5 * window.innerHeight,
};

const trailParams = {
  pointsNumber:   40,
  widthFactor:    0.3,
  spring:         0.4,
  friction:       0.5,
};

const trail = Array.from({ length: trailParams.pointsNumber }, () => ({
  x: pointer.x,
  y: pointer.y,
  dx: 0,
  dy: 0,
}));

function updatePointer(x, y) {
  pointer.x = x;
  pointer.y = y;
}

window.addEventListener('click',     e => updatePointer(e.pageX, e.pageY));
window.addEventListener('mousemove', e => { mouseMoved = true; updatePointer(e.pageX, e.pageY); });
window.addEventListener('touchmove', e => { mouseMoved = true; updatePointer(e.targetTouches[0].pageX, e.targetTouches[0].pageY); });

function setupCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}

function animateTrail(t) {
  if (!mouseMoved) {
    pointer.x = (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) * window.innerWidth;
    pointer.y = (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) * window.innerHeight;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  trail.forEach((p, i) => {
    const prev   = i === 0 ? pointer : trail[i - 1];
    const spring = i === 0 ? 0.4 * trailParams.spring : trailParams.spring;
    p.dx += (prev.x - p.x) * spring;
    p.dy += (prev.y - p.y) * spring;
    p.dx *= trailParams.friction;
    p.dy *= trailParams.friction;
    p.x  += p.dx;
    p.y  += p.dy;
  });

  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(trail[0].x, trail[0].y);

  for (let i = 1; i < trail.length - 1; i++) {
    const xc = 0.5 * (trail[i].x + trail[i + 1].x);
    const yc = 0.5 * (trail[i].y + trail[i + 1].y);
    ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
    ctx.lineWidth = trailParams.widthFactor * (trailParams.pointsNumber - i);
    ctx.stroke();
  }

  ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
  ctx.stroke();

  requestAnimationFrame(animateTrail);
}

setupCanvas();
animateTrail(0);
window.addEventListener('resize', setupCanvas);

/* ─── Particles.js ───────────────────────────────────────── */
particlesJS('particles-js', {
  particles: {
    number: { value: 100 },
    size:   { value: 3 },
    color:  { value: '#ffffff' },
    move: {
      speed:   6,
      attract: { enable: true },
    },
    line_linked: {
      enable:   true,
      distance: 150,
      color:    '#ffffff',
      opacity:  0.5,
      width:    1,
    },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
    },
    modes: {
      repulse: { distance: 100 },
      push:    { particles_nb: 4 },
    },
  },
});

/* ─── Pomodoro Timer ─────────────────────────────────────── */
const buttonPlay       = document.getElementById('buttonPlay');
const playIcon         = document.getElementById('playIcon');
const buttonReset      = document.getElementById('buttonReset');
const timeLeftDOM      = document.getElementById('timeLeft');
const labelSessionBreak = document.getElementById('labelSessionBreak');
const sessionLengthDOM = document.getElementById('sessionLength');
const breakLengthDOM   = document.getElementById('breakLength');
const sessionDecrement = document.getElementById('sessionDecrement');
const sessionIncrement = document.getElementById('sessionIncrement');
const breakDecrement   = document.getElementById('breakDecrement');
const breakIncrement   = document.getElementById('breakIncrement');

let timeLeft      = 25 * 60;
let isPlaying     = false;
let isSession     = false;
let breakLength   = 5  * 60;
let sessionLength = 25 * 60;
let pomodoroInterval;

function toMMSS(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function showNotificationBanner() {
  const banner = document.getElementById('notificationBanner');
  banner.hidden  = false;
  banner.style.opacity = '1';
  setTimeout(() => {
    banner.style.opacity = '0';
    setTimeout(() => { banner.hidden = true; }, 500);
  }, 5000);
}

function handleTick() {
  if (timeLeft <= 0) {
    showNotificationBanner();
    if (isSession) {
      labelSessionBreak.textContent = 'Session';
      timeLeft = sessionLength;
    } else {
      labelSessionBreak.textContent = 'Break';
      timeLeft = breakLength;
      const beep = document.getElementById('beep');
      beep.currentTime = 0;
      beep.play();
    }
    isSession = !isSession;
  } else {
    timeLeft--;
    timeLeftDOM.textContent = toMMSS(timeLeft);
  }
}

buttonPlay.addEventListener('click', () => {
  isPlaying = !isPlaying;
  if (isPlaying) {
    clearInterval(pomodoroInterval);
    pomodoroInterval = setInterval(handleTick, 1000);
    playIcon.classList.replace('fa-play', 'fa-pause');
  } else {
    clearInterval(pomodoroInterval);
    playIcon.classList.replace('fa-pause', 'fa-play');
  }
});

buttonReset.addEventListener('click', () => {
  clearInterval(pomodoroInterval);
  isPlaying     = false;
  breakLength   = 5  * 60;
  sessionLength = 25 * 60;
  timeLeft      = sessionLength;
  breakLengthDOM.textContent   = '5';
  sessionLengthDOM.textContent = '25';
  timeLeftDOM.textContent      = '25:00';
  playIcon.classList.replace('fa-pause', 'fa-play');
});

function adjustLength(displayEl, isBreak, increment) {
  let value  = parseInt(displayEl.textContent);
  value      = increment ? value + 1 : Math.max(1, value - 1);
  displayEl.textContent = value;

  const seconds = value * 60;
  if (isBreak) {
    breakLength = seconds;
    if (!isSession) {
      timeLeft = seconds;
      timeLeftDOM.textContent = toMMSS(seconds);
    }
  } else {
    sessionLength = seconds;
    if (isSession) {
      timeLeft = seconds;
      timeLeftDOM.textContent = toMMSS(seconds);
    }
  }
}

sessionDecrement.addEventListener('click', () => adjustLength(sessionLengthDOM, false, false));
sessionIncrement.addEventListener('click', () => adjustLength(sessionLengthDOM, false, true));
breakDecrement.addEventListener('click',   () => adjustLength(breakLengthDOM,   true,  false));
breakIncrement.addEventListener('click',   () => adjustLength(breakLengthDOM,   true,  true));

/* ─── EmailJS (single init) ──────────────────────────────── */
emailjs.init('3moVSUz7NDcZAn6QB');

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  emailjs.sendForm('service_lixjepc', 'template_4wrbzhu', this)
    .then(() => alert('Mensaje enviado correctamente 👍'))
    .catch(err => alert('Error al enviar: ' + JSON.stringify(err)));
});
