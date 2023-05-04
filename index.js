const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

function getTimeRemaining(delay) {
  const hours = Math.floor(delay / (60 * 60));
  const minutes = Math.floor((delay % (60 * 60)) / 60);
  const seconds = Math.ceil(delay % 60);
  return `${getZero(hours)}:${getZero(minutes)}:${getZero(seconds)}`;
}
function getZero(num) {
  if (num >= 0 && num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

const createTimerAnimator = () => {
  let intervalId = 0;

  return (delay) => {
    clearInterval(intervalId);
    let currentTime = delay;

    intervalId = setInterval(() => {
      timerEl.innerHTML = getTimeRemaining(currentTime);
      currentTime = currentTime > 0 ? currentTime - 1 : 0;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/\D+/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = "";
});
