const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const resetBtn = document.querySelector('.btn-reset');
let constTime = 0;
let start;
let time = 0;
let score = 0;

function randomCollor() {
  const arr = '0123456789ABCDEF';
  let color = '';
  for(let i = 0; i<6; i++){
    color +=  arr[Math.floor(Math.random() * arr.length)];
  };
  return '#' + color;
}

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('time-btn')) {
    time = parseInt(target.getAttribute('data-time'));
    constTime = time;
    screens[1].classList.add('up');
    startGame();
  }
});

resetBtn.addEventListener('click', () => {
  score = 0;
  time = constTime;
  board.innerHTML = '';
  timeEl.parentNode.classList.remove('hide');
  startGame();
});

board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  resetBtn.disabled = true;
  start = setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}

function decreaseTime() {
  console.log(time);
  if (time === 0 ) {
    finishGame();
  } else {
    let current = --time;
    console.log(current);
    if (current < 10) {
      current = '0' + current;
    }
    setTime(current);
  }
};

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
  clearInterval(start);
  timeEl.parentNode.classList.add('hide');
  resetBtn.disabled = false;
  board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`;
};

function createRandomCircle() {
  const circle = document.createElement('div');
  const size = getrandomNumber(10,60);
  const {width, height} = board.getBoundingClientRect();
  const x = getrandomNumber(0, width - size);
  const y = getrandomNumber(0, height - size);

  circle.style.background = randomCollor();
  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;



  board.append(circle);
};

function getrandomNumber(min, max) {
  return Math.round(Math.random()*(max-min)+min);
}
