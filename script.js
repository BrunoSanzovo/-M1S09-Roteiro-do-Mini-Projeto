const exerciseDescription = document.getElementById('exercise-description');

const stretchExercises = [
    "Levante-se e estique os braços acima da cabeça por 10 segundos.",
    "Incline o tronco para os lados, mantendo o alongamento por 15 segundos em cada lado.",
    "Gire os ombros para trás em movimentos circulares por 20 segundos.",
    "Faça uma rotação no pescoço, movendo-o suavemente para a esquerda e para a direita por 10 segundos.",
    "Estique as pernas e toque os dedos dos pés, mantendo a posição por 15 segundos.",
    "Sente-se e estique os braços para frente, mantendo a posição por 20 segundos."
];

function showExercise() {
    let index = 0;
    const interval = setInterval(() => {
        exerciseDescription.textContent = `Exercício de Alongamento: ${stretchExercises[index]}`;
        index = (index + 1) % stretchExercises.length;
    }, 5000); // 5 segundos

    setTimeout(() => {
        clearInterval(interval);
        exerciseDescription.textContent = "";
    }, 5 * 60 * 1000); // 5 minutos
}

showExercise();

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
    }, 5 * 60 * 1000); // 5 minutos
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
