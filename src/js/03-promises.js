import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const userData = {};
const form = document.querySelector('.form');

form.addEventListener('input', handlerInput);
form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  for (let i = 0; i < userData.amount; i += 1) {
    const stepDelay = userData.delay + userData.step * i;
    createPromise(i + 1, stepDelay)
      .then(({ position, delay }) => {
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        iziToast.success({
          message: `✅ Fulfilled promise ${position} in ${delay}ms`,
        });
      })
      .catch(({ position, delay }) => {
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        iziToast.error({
          message: `❌ Rejected promise ${position} in ${delay}ms`,
        });
      });
  }
}

function createPromise(positionData, delayData) {
  return new Promise((resolve, reject) => {
    setTimeout(delay => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position: positionData, delay: delayData });
      } else {
        reject({ position: positionData, delay: delayData });
      }
    }, delayData);
  });
}

function handlerInput({ target }) {
  if (target.name === 'delay') {
    userData.delay = +target.value;
  }
  if (target.name === 'step') {
    userData.step = +target.value;
  }
  if (target.name === 'amount') {
    userData.amount = +target.value;
  }
}
