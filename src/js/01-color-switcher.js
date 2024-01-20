const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const page = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

stopBtn.disabled = true;

const handlerStart = event => {
  const interval = setInterval(() => {
    page.style.backgroundColor = getRandomHexColor();

    stopBtn.disabled = false;
    startBtn.disabled = true;

    const handlerStop = event => {
      clearInterval(interval);
      stopBtn.disabled = true;
      startBtn.disabled = false;
    };
    stopBtn.addEventListener('click', handlerStop);
  }, 1000);
};

startBtn.addEventListener('click', handlerStart);
