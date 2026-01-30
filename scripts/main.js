const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('start-timer');
let time = 5;

startBtn.addEventListener('click', () => {
  intervalID = setInterval(tick, 1000);

  time = 5;
  timerEl.textContent = time;
  
  if (time == 5 || time === 0) {
    setTimeout(() => {
    clearInterval(intervalID);
    }, 5000);
  }
});

function tick() {
  time -= 1;
  timerEl.textContent = time;
}
//setInterval
//clearInterval
