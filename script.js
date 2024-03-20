const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const exerciseDescription = document.getElementById('exercise-description');

let timer;
let isRunning = false;

const stretchExercises = [
    "Levante-se e estique os braços acima da cabeça por 10 segundos.",
    "Incline o tronco para os lados, mantendo o alongamento por 15 segundos em cada lado.",
    "Gire os ombros para trás em movimentos circulares por 20 segundos.",
    "Faça uma rotação no pescoço, movendo-o suavemente para a esquerda e para a direita por 10 segundos.",
    "Estique as pernas e toque os dedos dos pés, mantendo a posição por 15 segundos.",
    "Sente-se e estique os braços para frente, mantendo a posição por 20 segundos."
];

function startTimer() {
    if (!isRunning) {
        let totalTime = 25 * 60; // 25 minutos
        let remainingTime = totalTime;
        timer = setInterval(() => {
            remainingTime--;
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            minutesDisplay.textContent = minutes < 10 ? `0${minutes}` : minutes;
            secondsDisplay.textContent = seconds < 10 ? `0${seconds}` : seconds;
            if (remainingTime === 0) {
                clearInterval(timer);
                showExercise();
            }
        }, 1000);
        isRunning = true;
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function showExercise() {
    let index = 0;
    exerciseDescription.textContent = `Exercício de Alongamento: ${stretchExercises[index]}`;
    let interval = setInterval(() => {
        index = (index + 1) % stretchExercises.length;
        exerciseDescription.textContent = `Exercício de Alongamento: ${stretchExercises[index]}`;
    }, 5000);
    setTimeout(() => {
        clearInterval(interval);
        exerciseDescription.textContent = "";
    }, 300000); // 5 minutos
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
