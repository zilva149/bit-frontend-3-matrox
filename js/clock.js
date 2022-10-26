// **********   VARIABLES **********

const daysBox = document.getElementById("days");
const hoursBox = document.getElementById("hours");
const minsBox = document.getElementById("mins");
const secsBox = document.getElementById("secs");

const futureDate = new Date();
futureDate.setFullYear(futureDate.getFullYear() + 1);
const futureTime = futureDate.getTime();

// ********* FUNCTIONS **********

function timeRemaining() {
  const timeRemaining = futureTime - new Date().getTime();
  // each in milsecs
  const sec = 1000;
  const min = 60 * sec;
  const hour = 60 * min;
  const day = 24 * hour;
  // time remaining
  const days = Math.floor(timeRemaining / day);
  const hours = Math.floor((timeRemaining % day) / hour);
  const mins = Math.floor((timeRemaining % hour) / min);
  const secs = Math.floor((timeRemaining % min) / sec);
  //   update values
  daysBox.innerHTML = formatValue(days);
  hoursBox.innerHTML = formatValue(hours);
  minsBox.innerHTML = formatValue(mins);
  secsBox.innerHTML = formatValue(secs);
  // clear interval
  if (timeRemaining < 1000) {
    clearInterval(interval);
  }
}

function formatValue(value) {
  return value < 10 ? `0${value}` : value;
}

const interval = setInterval(timeRemaining, 1000);
timeRemaining();
