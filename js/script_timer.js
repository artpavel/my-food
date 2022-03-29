// Timer, when date will be finish
const deadline = '2022-03-31';

// This function start timer
const getTimeRemaining = endtime => {
  // get miliseconds
  const t = Date.parse(endtime) - Date.parse(new Date());

  // get date
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  const hours = Math.floor((t / (1000 * 60 * 60) % 24));
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const seconds = Math.floor((t / 1000) % 60);

  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
};

// for set zero before number
function getZero(num) {
  if (num > 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

// show timer on the page
function setColck(selector, endtime) {

  const timer = document.querySelector(selector),
    days = timer.querySelector('#days'),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds'),
    timeInterval = setInterval(updateClock, 1000);

  // щоб було зразу видно таймер
  updateClock();

  function updateClock() {

    const myDate = getTimeRemaining(endtime);

    days.textContent = getZero(myDate.days);
    hours.textContent = getZero(myDate.hours);
    minutes.textContent = getZero(myDate.minutes);
    seconds.textContent = getZero(myDate.seconds);


    // when need stop timer
    if (myDate.total <= 0) {
      clearInterval(timeInterval);
      days.textContent = '00';
      hours.textContent = '00';
      minutes.textContent = '00';
      seconds.textContent = '00';
    }
  }
}

// Start our timer
setColck('.timer', deadline);

console.log('It is my test');













