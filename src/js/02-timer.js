import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMin = document.querySelector('[data-minutes]');
const timerSec = document.querySelector('[data-seconds]');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
    } else {
      startBtn.disabled = false;
    }
  },
};

startBtn.addEventListener('click', handlerStart);

function handlerStart() {
  startBtn.disabled = true;
  inputDate.disabled = true;

  const interval = setInterval(() => {
    const currentDate = Date.now();
    const selectedDate = new Date(inputDate.value);
    const difference = selectedDate - currentDate;

    if (difference < 1000) {
      clearInterval(interval);
    }

    function convertMs(ms) {
      // Number of milliseconds per unit of time
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      // Remaining days
      const days = Math.floor(ms / day);
      // Remaining hours
      const hours = Math.floor((ms % day) / hour);
      // Remaining minutes
      const minutes = Math.floor(((ms % day) % hour) / minute);
      // Remaining seconds
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);

      return { days, hours, minutes, seconds };
    }
    const timer = convertMs(difference);

    timerDays.textContent = timer.days.toString().padStart(2, 0);
    timerHours.textContent = timer.hours.toString().padStart(2, 0);
    timerMin.textContent = timer.minutes.toString().padStart(2, 0);
    timerSec.textContent = timer.seconds.toString().padStart(2, 0);
  }, 1000);
}

flatpickr(inputDate, options);
