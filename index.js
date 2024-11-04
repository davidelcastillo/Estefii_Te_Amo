// Contador
const countdownContainer = document.getElementById("countdown");
const startDate = new Date("2024-08-20");

function updateCountdown() {
    const now = new Date();
    const diffTime = Math.abs(now - startDate);
    
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    countdownContainer.textContent = `${diffDays} días, ${diffHours} horas, ${diffMinutes} minutos y ${diffSeconds} segundos desde que nos conocemos.`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Control de música
const music = document.getElementById("background-music");
const musicBtn = document.getElementById("music-btn");

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "🎶 Pausar Música";
    } else {
        music.pause();
        musicBtn.textContent = "🎶 Reproducir Música";
    }
});

// Mensajes flotantes
const floatingMessages = [
    "Sos mi persona favorita 💖",
    "¡Te amo cada día más! 🌹",
    "No puedo dejar de pensar en ti 💭",
    "Sos mi mundo 🌎",
    "Haces que todo valga la pena 💫",
    "¡Siempre estaré aquí para ti! 💪",
    "Sos mi inspiración ❤️",
    "Mi amor por vos rompe todas las reglas 🌹",
    "Sos única y especial 💕",
    "Haces que haya algo más en todo 💕",
    "Cada mensaje tuyo alegra mis dias 🌹"

];

function generateFloatingMessage() {
    const messageText = floatingMessages[Math.floor(Math.random() * floatingMessages.length)];
    const message = document.createElement("div");
    message.className = "floating-message";
    message.textContent = messageText;

    // Posición aleatoria
    message.style.left = Math.random() * 80 + 10 + "%";
    message.style.top = Math.random() * 80 + 10 + "%";

    document.getElementById("floating-messages").appendChild(message);

    // Remover mensaje después de la animación
    setTimeout(() => {
        message.remove();
    }, 5000);
}

// Genera un mensaje flotante cada cierto tiempo
setInterval(generateFloatingMessage, 2500);

// Confeti al aceptar
function lanzarConfeti() {
    for (let i = 0; i < 100; i++) {
        const confeti = document.createElement("div");
        confeti.className = "confetti";
        confeti.style.left = `${Math.random() * 100}vw`;
        confeti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confeti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confeti);
        setTimeout(() => confeti.remove(), 5000);
    }
}
document.getElementById("question-btn").addEventListener("click", () => {
    document.getElementById("answer").classList.remove("hidden");
    lanzarConfeti();
});
