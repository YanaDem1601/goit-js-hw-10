import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let selectedDate = null; 
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  locale: {
    firstDayOfWeek: 1, 
    weekdays: {
      shorthand: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      longhand: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    },
  },
  onClose(selectedDates) {
    selectedDate = selectedDates[0];

    if (selectedDate <= Date.now()) {
        iziToast.error({
            title: 'Error',
            message: 'Please choose a date in the future',
        position: 'topRight',
    });
    startBtn.disabled = true;
} else {
    startBtn.disabled = false;
}
},
};

flatpickr(input, options);

    startBtn.addEventListener('click', () => {
        startBtn.disabled = true;
        input.disabled = true;

        timerId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = selectedDate - currentTime;
            if (deltaTime <= 0) {
                clearInterval(timerId);
                updateTimerDisplay(0, 0, 0, 0);
                input.disabled = false;
                return;
            }
            const time = convertMs(deltaTime);
            updateTimerDisplay(time.days, time.hours, time.minutes, time.seconds);
        }, 1000);
    });
    function addLeadingZero(value) {
        return String(value).padStart(2, '0');
    }
    function updateTimerDisplay(days, hours, minutes, seconds) {
        daysEl.textContent = addLeadingZero(days);
        hoursEl.textContent = addLeadingZero(hours);
        minutesEl.textContent = addLeadingZero(minutes);
        secondsEl.textContent = addLeadingZero(seconds);
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

