const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.querySelector('body');
const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// console.log(randomIntegerFromInterval(0, colors.length - 1));
// body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];

function changeColor() { 
body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
}

// const timerId = setInterval(changeColor, 2000);
let timerId;
startBtnRef.addEventListener('click', (event) => { 
    timerId = setInterval(changeColor, 2000);
    event.target.setAttribute('disabled', 'disabled');
   
})

stopBtnRef.addEventListener('click', () => { 
    clearInterval(timerId);
    startBtnRef.removeAttribute('disabled', 'disabled');
})