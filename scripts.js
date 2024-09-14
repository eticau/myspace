// Modo oscuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '🌕' : '🌑';
});

// Saludo personalizado
const greeting = document.getElementById('greeting');
const hours = new Date().getHours();
let greetMessage = "Hi, I'm Eti";

if (hours < 12) {
    greetMessage = "Good morning, I'm Eti";
} else if (hours < 18) {
    greetMessage = "Good afternoon, I'm Eti";
} else {
    greetMessage = "Good evening, I'm Eti";
}

greeting.innerHTML = `${greetMessage} <span class="waving-emoji">🤚🏻</span>`;

// Chatbot básico
const chatBot = document.getElementById('chatbot');
const sendBtn = document.getElementById('send-btn');
const chatInput = document.getElementById('chat-input');
const chatOutput = document.getElementById('chat-output');

sendBtn.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        const botResponse = `You said: ${userMessage}`;
        const p = document.createElement('p');
        p.textContent = botResponse;
        chatOutput.appendChild(p);
        chatInput.value = '';
    }
});

// Efectos de desplazamiento
const sections = document.querySelectorAll('.section');

const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealSection);
