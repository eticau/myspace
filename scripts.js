// Botón para cambiar entre modo oscuro y claro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Cambiar el ícono del botón
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '🌕';  // Cambia a un ícono de sol para el modo claro
    } else {
        themeToggle.textContent = '🌑';  // Cambia a un ícono de luna para el modo oscuro
    }
});

// Funcionalidad del chatbot
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatOutput = document.getElementById('chat-output');

// Respuestas predefinidas del chatbot
const responses = {
    "hola": "¡Hola! ¿Cómo puedo ayudarte hoy?",
    "cómo estás": "Estoy bien, gracias por preguntar. ¿Y tú?",
    "adiós": "¡Hasta luego! Que tengas un buen día."
};

// Enviar mensaje del usuario
sendBtn.addEventListener('click', () => {
    const userMessage = chatInput.value.toLowerCase().trim();
    if (userMessage) {
        addMessage(userMessage, 'user');
        chatInput.value = '';
        const botResponse = responses[userMessage] || "Lo siento, no entiendo tu mensaje.";
        addMessage(botResponse, 'bot');
    }
});

// Agregar mensaje al chat
function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatOutput.appendChild(messageDiv);
    chatOutput.scrollTop = chatOutput.scrollHeight;  // Desplazar hacia abajo
}

// También enviar mensaje al presionar Enter
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});

